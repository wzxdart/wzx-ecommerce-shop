"use server";

import { AuthError } from "next-auth";
import { z } from "zod";

import { signIn as nextAuthSignIn } from "@/auth";
import { prisma } from "@/helpers/prisma";
import {
  sendTwoFATokenEmail,
  sendVerificationTokenEmail,
} from "@/helpers/resend/send";
import { getTwoFAConfirmByUserId } from "@/helpers/two-fa-confirm";
import { createTwoFAToken, getTwoFATokenByEmail } from "@/helpers/two-fa-token";
import { getUserByEmail } from "@/helpers/user";
import { createVerificationToken } from "@/helpers/verification-token";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";
import { signInSchema } from "@/schemas/sign-in-schema";

export const signIn = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) return { error: "invalid fields" };

  const { email, password, twoFACode } = validatedFields.data;

  const isExistUser = await getUserByEmail(email);

  if (!isExistUser || !isExistUser.email || !isExistUser.passwordHash)
    return { error: "email doesn't exist" };

  if (!isExistUser.emailVerified) {
    const verificationToken = await createVerificationToken(isExistUser.email);

    await sendVerificationTokenEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: "confirm sent on email" };
  }

  if (isExistUser.isTwoFA && isExistUser.email) {
    if (twoFACode) {
      const twoFAToken = await getTwoFATokenByEmail(isExistUser.email);

      if (!twoFAToken) return { error: "token doesn't exist" };

      console.log(`token: ${twoFAToken.token}; code: ${twoFACode}`);

      if (twoFAToken.token !== twoFACode) return { error: "invalid 2fa code" };

      const isExpiresAt = new Date(twoFAToken.expiresAt) < new Date();

      if (isExpiresAt) return { error: "code expired" };

      await prisma?.twoFAToken.delete({
        where: { id: twoFAToken.id },
      });

      const isExistConfirm = await getTwoFAConfirmByUserId(isExistUser.id);

      if (isExistConfirm)
        await prisma.twoFAConfirm.delete({
          where: { id: isExistConfirm.id },
        });

      await prisma.twoFAConfirm.create({
        data: {
          userId: isExistUser.id,
        },
      });
    } else {
      const twoFAToken = await createTwoFAToken(isExistUser.email);

      await sendTwoFATokenEmail(twoFAToken.email, twoFAToken.token);

      return { twoFA: true };
    }
  }

  try {
    await nextAuthSignIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_SIGNIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin")
        return { error: "invalid fields" };

      return { error: "email not confirmed" };
    }

    throw error;
  }

  return { success: "success sign in" };
};

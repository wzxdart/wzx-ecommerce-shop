"use server";

import { AuthError } from "next-auth";
import { z } from "zod";

import { signIn as nextAuthSignIn } from "@/auth";
import { sendVerificationEmail } from "@/helpers/resend/send";
import { getUserByEmail } from "@/helpers/user";
import { createVerificationToken } from "@/helpers/verification-token";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";
import { signInSchema } from "@/schemas/sign-in-schema";

export const signIn = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) return { error: "invalid fields" };

  const { email, password } = validatedFields.data;
  const isExistUser = await getUserByEmail(email);

  if (!isExistUser || !isExistUser.email || !isExistUser.passwordHash)
    return { error: "email doesn't exist" };

  if (!isExistUser.emailVerified) {
    const verificationToken = await createVerificationToken(isExistUser.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: "confirm sent on email" };
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

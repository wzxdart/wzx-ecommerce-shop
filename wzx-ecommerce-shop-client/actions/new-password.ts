"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";

import { prisma } from "@/helpers/prisma";
import { getResetTokenByToken } from "@/helpers/reset-token";
import { getUserByEmail } from "@/helpers/user";
import { HASH_SALT_ROUNDS } from "@/lib/const";
import { newPasswordSchema } from "@/schemas/new-password-schema";

export const newPassword = async (
  values: z.infer<typeof newPasswordSchema>,
  token?: string | null,
) => {
  if (!token) return { error: "token doesn't exist" };

  const validatedFields = newPasswordSchema.safeParse(values);

  if (!validatedFields.success) return { error: "invalid field" };

  const { password } = validatedFields.data;

  const isExistToken = await getResetTokenByToken(token);

  if (!isExistToken) return { error: "token doesn't exist" };

  const isExpiresAt = new Date(isExistToken.expiresAt) < new Date();

  if (isExpiresAt) return { error: "token expired" };

  const isExistUser = await getUserByEmail(isExistToken.email);

  if (!isExistUser) return { error: "email doesn't not exist" };

  const isPasswordsCompare = await bcrypt.compare(
    password,
    isExistUser.passwordHash as string,
  );

  if (isPasswordsCompare)
    return { error: "new password is the same as the old one" };

  const passwordHash = await bcrypt.hash(password, HASH_SALT_ROUNDS);

  await prisma.user.update({
    where: { id: isExistUser.id },
    data: {
      passwordHash: passwordHash,
    },
  });

  await prisma.resetToken.delete({
    where: { id: isExistToken.id },
  });

  return { success: "password updated" };
};

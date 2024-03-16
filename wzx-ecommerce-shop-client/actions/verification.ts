"use server";

import { prisma } from "@/helpers/prisma";
import { getUserByEmail } from "@/helpers/user";
import { getVerificationTokenByToken } from "@/helpers/verification-token";

export const verification = async (token: string) => {
  const isExistToken = await getVerificationTokenByToken(token);

  if (!isExistToken) return { error: "token doesn't exist" };

  const isExpiresAt = new Date(isExistToken.expiresAt) < new Date();

  if (isExpiresAt) return { error: "token has expires" };

  const isExistUser = await getUserByEmail(isExistToken.email);

  if (!isExistUser) return { error: "email doesn't not exist" };

  await prisma.user.update({
    where: { id: isExistUser.id },
    data: {
      email: isExistToken.email,
      emailVerified: new Date(),
    },
  });

  await prisma.verificationToken.delete({
    where: { id: isExistToken.id },
  });

  return { success: "email verify" };
};

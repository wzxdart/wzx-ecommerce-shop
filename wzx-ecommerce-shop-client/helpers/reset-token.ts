import { v4 as uuid } from "uuid";

import { prisma } from "@/helpers/prisma";
import { RESET_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS } from "@/lib/const";

export const getResetTokenByEmail = async (email: string) => {
  try {
    const resetToken = await prisma?.resetToken.findFirst({
      where: { email: email },
    });

    return resetToken;
  } catch {
    return null;
  }
};

export const getResetTokenByToken = async (token: string) => {
  try {
    const resetToken = await prisma?.resetToken.findUnique({
      where: { token: token },
    });

    return resetToken;
  } catch {
    return null;
  }
};

export const createResetToken = async (email: string) => {
  const token = uuid();
  const isExistToken = await getResetTokenByEmail(email);

  if (isExistToken)
    await prisma?.resetToken.delete({
      where: { id: isExistToken.id },
    });

  const expiresAt = new Date(
    new Date().getTime() + RESET_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS,
  );

  const resetToken = await prisma?.resetToken.create({
    data: {
      email: email,
      token: token,
      expiresAt: expiresAt,
    },
  });

  return resetToken;
};

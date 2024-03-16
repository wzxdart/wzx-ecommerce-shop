import { v4 as uuid } from "uuid";

import { prisma } from "@/helpers/prisma";
import { VERIFICATION_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS } from "@/lib/const";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expiresAt = new Date(
    new Date().getTime() + VERIFICATION_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS,
  );
  const isExistToken = await getVerificationTokenByEmail(email);

  if (isExistToken)
    await prisma.verificationToken.delete({
      where: { id: isExistToken.id },
    });

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email: email,
      token: token,
      expiresAt: expiresAt,
    },
  });

  return verificationToken;
};

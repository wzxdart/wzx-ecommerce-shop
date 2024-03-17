import crypto from "crypto";

import { prisma } from "@/helpers/prisma";
import {
  MAX_RANDOM_TWO_FA_TOKEN,
  MIN_RANDOM_TWO_FA_TOKEN,
  TWO_FA_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS,
} from "@/lib/const";

export const getTwoFATokenByEmail = async (email: string) => {
  try {
    const twoFAToken = await prisma?.twoFAToken.findFirst({
      where: { email: email },
    });

    return twoFAToken;
  } catch {
    return null;
  }
};

export const getTwoFATokenByToken = async (token: string) => {
  try {
    const twoFAToken = await prisma?.twoFAToken.findUnique({
      where: { token: token },
    });

    return twoFAToken;
  } catch {
    return null;
  }
};

export const createTwoFAToken = async (email: string) => {
  const token = crypto
    .randomInt(MIN_RANDOM_TWO_FA_TOKEN, MAX_RANDOM_TWO_FA_TOKEN)
    .toString();
  const isExistToken = await getTwoFATokenByEmail(email);

  if (isExistToken)
    await prisma?.twoFAToken.delete({
      where: { id: isExistToken.id },
    });

  const expiresAt = new Date(
    new Date().getTime() + TWO_FA_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS,
  );

  const twoFAToken = await prisma?.twoFAToken.create({
    data: {
      email: email,
      token: token,
      expiresAt: expiresAt,
    },
  });

  return twoFAToken;
};

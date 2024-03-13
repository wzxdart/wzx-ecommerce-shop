import { v4 as uuid } from "uuid";

import { getVerificationTokenByEmail } from "@/helpers/data/verificationToken";
import { prisma } from "@/helpers/prisma";
import { VERIFICATION_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS } from "@/lib/const";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const isExistToken = await getVerificationTokenByEmail(email);
  const expiresAt = new Date(
    new Date().getTime() + VERIFICATION_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS,
  );

  if (isExistToken)
    await prisma.verificationToken.delete({
      where: { id: isExistToken.id },
    });

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      expiresAt,
      token,
    },
  });

  return verificationToken;
};

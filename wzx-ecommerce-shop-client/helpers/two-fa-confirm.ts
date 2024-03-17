import { prisma } from "@/helpers/prisma";

export const getTwoFAConfirmByUserId = async (userId: string) => {
  try {
    const twoFAConfirm = await prisma.twoFAConfirm.findUnique({
      where: { userId: userId },
    });

    return twoFAConfirm;
  } catch {
    return null;
  }
};

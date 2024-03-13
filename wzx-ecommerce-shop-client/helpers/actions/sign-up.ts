"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";

import { generateVerificationToken } from "@/helpers/data/tokens";
import { getUserByEmail } from "@/helpers/data/user";
import { prisma } from "@/helpers/prisma";
import { verificationEmail } from "@/helpers/resend/send";
import { HASH_SALT_ROUNDS } from "@/lib/const";
import { signUpSchema } from "@/schemas/sign-up-schema";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) return { success: "invalid input fields" };

  const { name, email, password } = validatedFields.data;
  const passwordHash = await bcrypt.hash(password, HASH_SALT_ROUNDS);
  const isExistUser = await getUserByEmail(email);

  if (isExistUser) return { error: "email is already in use" };

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await verificationEmail(verificationToken.email, verificationToken.token);

  return { success: "confirmation email sent" };
};

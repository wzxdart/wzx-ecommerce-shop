"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";

import { getUserByEmail } from "@/helpers/data/user";
import { prisma } from "@/helpers/prisma";
import {
  EXIST_USER_ERROR_MESSAGE,
  HASH_SALT_ROUNDS,
  REGISTER_USER_SUCCESS_MESSAGE,
  REGISTERSCHEMA_ERROR,
} from "@/lib/const";
import signUpShema from "@/schemas/sign-up-schema";

export const SignUp = async (values: z.infer<typeof signUpShema>) => {
  const validatedFields = signUpShema.safeParse(values);

  if (!validatedFields.success) return { success: REGISTERSCHEMA_ERROR };

  const { firstName, lastName, email, password } = validatedFields.data;
  const passwordHash = await bcrypt.hash(password, HASH_SALT_ROUNDS);
  const isExistUser = await getUserByEmail(email);

  if (isExistUser !== null) return { success: EXIST_USER_ERROR_MESSAGE };

  await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      passwordHash: passwordHash,
    },
  });

  return { error: REGISTER_USER_SUCCESS_MESSAGE };
};

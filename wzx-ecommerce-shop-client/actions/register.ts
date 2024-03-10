"use server";

import bcrypt from "bcrypt";
import { z } from "zod";

import {
  EXIST_USER_ERROR_MESSAGE,
  HASH_SALT_ROUNDS,
  REGISTER_USER_SUCCESS_MESSAGE,
  REGISTERSCHEMA_ERROR,
} from "@/lib/const";
import { getUserByEmail } from "@/lib/data/user";
import { prisma } from "@/lib/prisma";
import registerShema from "@/schemas/register-schema";

export const register = async (values: z.infer<typeof registerShema>) => {
  const validate = registerShema.safeParse(values);

  if (!validate.success) return { success: REGISTERSCHEMA_ERROR };

  const { firstName, lastName, email, password } = validate.data;
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

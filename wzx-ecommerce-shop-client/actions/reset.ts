"use server";

import { z } from "zod";

import { sendResetTokenEmail } from "@/helpers/resend/send";
import { createResetToken } from "@/helpers/reset-token";
import { getUserByEmail } from "@/helpers/user";
import { resetSchema } from "@/schemas/reset-schema";

export const reset = async (values: z.infer<typeof resetSchema>) => {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) return { error: "invalid field" };

  const { email } = validatedFields.data;
  const isExistUser = await getUserByEmail(email);

  if (!isExistUser) return { error: "email doesn't exist" };

  const resetToken = await createResetToken(email);

  await sendResetTokenEmail(resetToken.email, resetToken.token);

  return { success: "reset sent on email" };
};

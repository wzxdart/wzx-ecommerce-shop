"use server";

import { z } from "zod";

import { LOGINSCHEMA_ERROR, LOGINSCHEMA_SUCCESS } from "@/lib/const";
import loginSchema from "@/schemas/login-schema";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validate = loginSchema.safeParse(values);

  if (validate.success) return { success: LOGINSCHEMA_SUCCESS };
  return { error: LOGINSCHEMA_ERROR };
};

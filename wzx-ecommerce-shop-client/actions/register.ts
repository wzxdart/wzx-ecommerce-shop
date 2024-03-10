"use server";

import { z } from "zod";

import { REGISTERSCHEMA_ERROR, REGISTERSCHEMA_SUCCESS } from "@/lib/const";
import registerShema from "@/schemas/register-schema";

export const register = async (values: z.infer<typeof registerShema>) => {
  const validate = registerShema.safeParse(values);

  if (validate.success) return { success: REGISTERSCHEMA_SUCCESS };
  return { error: REGISTERSCHEMA_ERROR };
};

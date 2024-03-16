import { z } from "zod";

import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MAX_LENGTH_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MESSAGE,
  PASSWORD_REQUIRED_MESSAGE,
} from "@/lib/const";

export const newPasswordSchema = z.object({
  password: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: PASSWORD_REQUIRED_MESSAGE,
    })
    .refine((field) => field.trim().length >= PASSWORD_MIN_LENGTH, {
      message: PASSWORD_MIN_LENGTH_MESSAGE,
    })
    .refine((field) => field.trim().length <= PASSWORD_MAX_LENGTH, {
      message: PASSWORD_MAX_LENGTH_MESSAGE,
    }),
});

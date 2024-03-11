import { z } from "zod";

import {
  EMAIL_INVALID_MESSAGE,
  EMAIL_MAX_LENGTH,
  EMAIL_MAX_LENGTH_MESSAGE,
  EMAIL_MIN_LENGTH,
  EMAIL_MIN_LENGTH_MESSAGE,
  EMAIL_REGEX,
  EMAIL_REQUIRED_MESSAGE,
  FIRSTNAME_MAX_LENGTH,
  PASSORD_REQUIRED_MESSAGE,
  PASSWORD_MAX_LENGTH_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MESSAGE,
} from "@/lib/const";

const signInSchema = z.object({
  email: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: EMAIL_REQUIRED_MESSAGE,
    })
    .refine((field) => field.trim().length >= EMAIL_MIN_LENGTH, {
      message: EMAIL_MIN_LENGTH_MESSAGE,
    })
    .refine((field) => field.trim().length <= EMAIL_MAX_LENGTH, {
      message: EMAIL_MAX_LENGTH_MESSAGE,
    })
    .refine((field) => EMAIL_REGEX.test(field.trim()), {
      message: EMAIL_INVALID_MESSAGE,
    }),
  password: z
    .string()
    .refine((field) => field.trim().length > 0, {
      message: PASSORD_REQUIRED_MESSAGE,
    })
    .refine((field) => field.trim().length >= PASSWORD_MIN_LENGTH, {
      message: PASSWORD_MIN_LENGTH_MESSAGE,
    })
    .refine((field) => field.trim().length <= FIRSTNAME_MAX_LENGTH, {
      message: PASSWORD_MAX_LENGTH_MESSAGE,
    }),
  remember: z.boolean().optional(),
});

export default signInSchema;

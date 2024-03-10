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
  FIRSTNAME_MAX_LENGTH_MESSAGE,
  FIRSTNAME_MIN_LENGTH,
  FIRSTNAME_MIN_LENGTH_MESSAGE,
  FIRSTNAME_REQUIRED_MESSAGE,
  LASTNAME_MAX_LENGTH,
  LASTNAME_MAX_LENGTH_MESSAGE,
  LASTNAME_MIN_LENGTH,
  LASTNAME_MIN_LENGTH_MESSAGE,
  LASTNAME_REQUIRED_MESSAGE,
  PASSORD_REQUIRED_MESSAGE,
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_MAX_LENGTH_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MESSAGE,
} from "@/lib/const";

const registerShema = z
  .object({
    firstName: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: FIRSTNAME_REQUIRED_MESSAGE,
      })
      .refine((field) => field.trim().length >= FIRSTNAME_MIN_LENGTH, {
        message: FIRSTNAME_MIN_LENGTH_MESSAGE,
      })
      .refine((field) => field.trim().length <= FIRSTNAME_MAX_LENGTH, {
        message: FIRSTNAME_MAX_LENGTH_MESSAGE,
      }),
    lastName: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: LASTNAME_REQUIRED_MESSAGE,
      })
      .refine((field) => field.trim().length >= LASTNAME_MIN_LENGTH, {
        message: LASTNAME_MIN_LENGTH_MESSAGE,
      })
      .refine((field) => field.trim().length <= LASTNAME_MAX_LENGTH, {
        message: LASTNAME_MAX_LENGTH_MESSAGE,
      }),
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
    confirmPassword: z
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
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: PASSWORD_CONFIRM_ERROR_MESSAGE,
    path: ["confirmPassword"],
  });

export default registerShema;

import { z } from "zod";

import {
  CONFIRM_PASSWORD_REQUIRED_MESSAGE,
  EMAIL_INVALID_MESSAGE,
  EMAIL_MAX_LENGTH,
  EMAIL_MAX_LENGTH_MESSAGE,
  EMAIL_MIN_LENGTH,
  EMAIL_MIN_LENGTH_MESSAGE,
  EMAIL_REGEX,
  EMAIL_REQUIRED_MESSAGE,
  NAME_MAX_LENGTH,
  NAME_MAX_LENGTH_MESSAGE,
  NAME_MIN_LENGTH,
  NAME_MIN_LENGTH_MESSAGE,
  NAME_REQUIRED_MESSAGE,
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MAX_LENGTH_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MESSAGE,
  PASSWORD_REQUIRED_MESSAGE,
} from "@/lib/const";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: NAME_REQUIRED_MESSAGE,
      })
      .refine((field) => field.trim().length >= NAME_MIN_LENGTH, {
        message: NAME_MIN_LENGTH_MESSAGE,
      })
      .refine((field) => field.trim().length <= NAME_MAX_LENGTH, {
        message: NAME_MAX_LENGTH_MESSAGE,
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
        message: PASSWORD_REQUIRED_MESSAGE,
      })
      .refine((field) => field.trim().length >= PASSWORD_MIN_LENGTH, {
        message: PASSWORD_MIN_LENGTH_MESSAGE,
      })
      .refine((field) => field.trim().length <= PASSWORD_MAX_LENGTH, {
        message: PASSWORD_MAX_LENGTH_MESSAGE,
      }),
    confirmPassword: z
      .string()
      .refine((field) => field.trim().length > 0, {
        message: CONFIRM_PASSWORD_REQUIRED_MESSAGE,
      })
      .refine((field) => field.trim().length >= PASSWORD_MIN_LENGTH, {
        message: PASSWORD_MIN_LENGTH_MESSAGE,
      })
      .refine((field) => field.trim().length <= PASSWORD_MAX_LENGTH, {
        message: PASSWORD_MAX_LENGTH_MESSAGE,
      }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: PASSWORD_CONFIRM_ERROR_MESSAGE,
    path: ["confirmPassword"],
  });

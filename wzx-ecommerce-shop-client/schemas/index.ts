import { z } from "zod";

import {
  LOGIN_EMAIL_ERROR_MESSAGE,
  LOGIN_PASSWORD_ERROR_MESSAGE,
} from "@/lib/const";

export const LoginSchema = z.object({
  email: z.string().email({
    message: LOGIN_EMAIL_ERROR_MESSAGE,
  }),
  password: z.string().min(1, {
    message: LOGIN_PASSWORD_ERROR_MESSAGE,
  }),
  remember: z.boolean().optional(),
});

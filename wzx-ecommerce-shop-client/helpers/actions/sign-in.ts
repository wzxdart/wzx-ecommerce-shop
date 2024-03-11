"use server";

import { AuthError } from "next-auth";
import { z } from "zod";

import { signIn } from "@/auth";
import {
  INVALID_LOGIN_DATA_MESSAGE,
  LOGINSCHEMA_ERROR,
  LOGINSCHEMA_SUCCESS,
  UNDEFINED_LOGIN_ERROR_MESSAGE,
} from "@/lib/const";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import signInSchema from "@/schemas/sign-in-schema";

export const SignIn = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) return { error: LOGINSCHEMA_ERROR };

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin")
        return { error: INVALID_LOGIN_DATA_MESSAGE };

      return { error: UNDEFINED_LOGIN_ERROR_MESSAGE };
    }

    //@todo handle error
    throw error;
  }

  return { success: LOGINSCHEMA_SUCCESS };
};

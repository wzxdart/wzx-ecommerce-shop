"use server";

import { BuiltInProviderType } from "next-auth/providers";

import { signIn as NextAuthSignIn } from "@/auth";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";

export const signInProvider = async (provider: BuiltInProviderType) => {
  try {
    await NextAuthSignIn(provider, {
      callbackUrl: DEFAULT_SIGNIN_REDIRECT,
    });
  } catch {
    return { error: "something went wrong" };
  }

  return { success: "success sign in" };
};

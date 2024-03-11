"use server";

import { BuiltInProviderType } from "next-auth/providers";

import { signIn as NextAuthSignIn } from "@/auth";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";
//@todo add error handling
export const signInProvider = async (provider: BuiltInProviderType) => {
  await NextAuthSignIn(provider, {
    callbackUrl: DEFAULT_SIGNIN_REDIRECT,
  });
};

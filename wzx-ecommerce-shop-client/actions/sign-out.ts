"use server";

import { signOut as nextAuthSignOut } from "@/auth";

export const signOut = async () => {
  await nextAuthSignOut();
};

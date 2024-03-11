import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

import signInSchema from "@/schemas/sign-in-schema";

import { getUserByEmail } from "./helpers/data/user";

// @todo
// import facebook from "next-auth/providers/facebook";
// import google from "next-auth/providers/google";
// import apple from "next-auth/providers/apple";

export default {
  providers: [
    //@todo add more providers
    // apple, facebook, google
    credentials({
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.passwordHash) return null;

          const passordMatch = await bcrypt.compare(
            password,
            user.passwordHash,
          );

          return passordMatch ? user : null;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";

import { getUserByEmail } from "@/helpers/user";
import { signInSchema } from "@/schemas/sign-in-schema";

export default {
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
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

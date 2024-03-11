import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { prisma } from "@/helpers/prisma";

import { getUserById } from "./helpers/data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    jwt: async ({ token }) => {
      if (!token.sub) return token;

      const isExistUser = await getUserById(token.sub);

      if (!isExistUser) return token;

      token.role = isExistUser.role;

      return token;
    },
    session: async ({ token, session }) => {
      if (token.sub && session.user) session.user.id = token.sub;

      if (token.role && session.user) session.user.role = token.role;

      return session;
    },
    // signIn: async ({ user }) => {
    //   //@todo fix
    //   const isExistUser = await getUserById(user.id as string);

    //   if (!isExistUser || !isExistUser.emailVerified) return false;

    //   return true;
    // },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});

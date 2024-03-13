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
    signIn: async ({ user, account }) => {
      if (account?.provider !== "credentials") return true;

      const isExistUser = await getUserById(user.id as string);

      if (!isExistUser?.emailVerified) return false;

      return true;
    },
  },
  events: {
    linkAccount: async ({ user }) => {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});

import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  API_AUTH_ROUTE,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_ROUTE);
  const isSignIned = Boolean(req.auth);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isSignIned)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    else return;
  }

  if (!isSignIned && !isPublicRoute)
    return Response.redirect(new URL("/auth/sign-in", nextUrl));
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

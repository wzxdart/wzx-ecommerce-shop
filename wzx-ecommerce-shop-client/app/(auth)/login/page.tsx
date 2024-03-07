import Link from "next/link";

import LoginForm from "@/components/auth/login-form";
import SocialLinks from "@/components/auth/social-links";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/cn";

const LoginPage = () => {
  return (
    <Card className={cn("")}>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>
          We&nbsp;are excited to&nbsp;have your back. Log in&nbsp;now and access
          your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />

        <div className="relative py-5 text-center">
          <div className="absolute bottom-0 left-0 top-1/2 h-[1px] w-[45%] bg-zinc-300 dark:bg-zinc-500" />
          <span>or</span>
          <div className="absolute bottom-0 right-0 top-1/2 h-[1px] w-[45%] bg-zinc-300 dark:bg-zinc-500" />
        </div>

        <SocialLinks />
      </CardContent>
      <CardFooter>
        <Button variant={"link"}>
          <Link href="/auth/register">
            Dont have an&nbsp;account yet? Register
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;

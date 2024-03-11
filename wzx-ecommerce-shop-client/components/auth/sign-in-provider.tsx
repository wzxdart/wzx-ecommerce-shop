"use client";

import { FaGoogle } from "react-icons/fa";

import { Button, buttonVariants } from "@/components/ui/button";
import { signInProvider } from "@/helpers/actions/sign-in-provider";
import { cn } from "@/lib/cn";

const SignInProvider = () => {
  //@todo add try/catch
  const onSubmit = async () => {
    await signInProvider("google");
  };

  return (
    <form action={onSubmit}>
      <Button type="submit" variant={"outline"} className="h-11 w-full">
        <FaGoogle
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        />
      </Button>
    </form>
  );
};

export default SignInProvider;

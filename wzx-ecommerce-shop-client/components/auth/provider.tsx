"use client";

import { FaGoogle } from "react-icons/fa";

import { signInProvider } from "@/actions/sign-in-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const Provider = () => {
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

export default Provider;

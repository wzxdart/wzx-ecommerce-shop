"use client";

import { signOut } from "@/actions/sign-out";
import { Button } from "@/components/ui/button";

const SignOut = () => {
  return (
    <form action={signOut}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
};

export default SignOut;

"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/helpers/actions/sign-out";

const SignOut = () => {
  return (
    <form action={signOut}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
};

export default SignOut;

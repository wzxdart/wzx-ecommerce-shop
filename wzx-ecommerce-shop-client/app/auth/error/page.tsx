import Link from "next/link";

import CardWrapper from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <CardWrapper title="auth Error" description="something went wrong">
      <div className="flex flex-col items-center justify-between">
        <Button variant={"link"}>
          <Link href="/auth/sign-in">sign in</Link>
        </Button>
        <Button variant={"link"} className="text-center">
          <Link href="sign up">sign up</Link>
        </Button>
      </div>
    </CardWrapper>
  );
};

export default ErrorPage;

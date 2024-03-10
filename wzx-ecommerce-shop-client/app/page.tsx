import Link from "next/link";

import Container from "@/components/container";
import ThemeToggle from "@/components/theme-toggle";

const RootPage = () => {
  return (
    <>
      <Container>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6">
          <h1 className="text-xl">Root Page</h1>
          <ThemeToggle />
          <div className="flex items-center gap-6">
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RootPage;

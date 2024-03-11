import Link from "next/link";

import ThemeToggle from "@/components/theme-toggle";

const RootPage = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6">
      <h1 className="text-xl">Root Page</h1>
      <div className="flex items-center gap-6">
        <Link href="/auth/sign-in">Sign In</Link>
        <ThemeToggle />
        <Link href="/auth/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default RootPage;

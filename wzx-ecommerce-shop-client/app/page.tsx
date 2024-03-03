import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

const RootPage = () => {
  return (
    <main className={cn("mx-auto max-w-[116rem] px-4 md:px-6 xl:px-8")}>
      <h1 className="text-xl">Root Page</h1>
      <ThemeToggle />
    </main>
  );
};

export default RootPage;

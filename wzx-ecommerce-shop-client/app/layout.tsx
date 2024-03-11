import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ThemeProvider from "@/app/_providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/cn";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "wzx",
  description: "by https://github.com/wzxdart",
};

interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "box-border h-screen w-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",
          poppins.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto max-w-[116rem] px-4 md:px-6 xl:px-8">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

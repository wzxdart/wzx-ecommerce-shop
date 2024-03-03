import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/cn";

import ThemeProvider from "./_providers/theme-provider";

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50",
          poppins.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

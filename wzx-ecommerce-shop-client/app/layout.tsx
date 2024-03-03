import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
    <html lang="en">
      <body className={cn("", poppins.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;

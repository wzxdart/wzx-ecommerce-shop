"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "light" ? (
    <PiSun
      onClick={() => setTheme("dark")}
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    />
  ) : (
    <PiMoon
      onClick={() => setTheme("light")}
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    />
  );
};

export default ThemeToggle;

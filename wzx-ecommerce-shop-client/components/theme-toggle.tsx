"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

import { cn } from "@/lib/cn";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light")
    return <PiSun onClick={() => setTheme("dark")} className={cn("h-8 w-8")} />;

  if (theme === "dark")
    return (
      <PiMoon onClick={() => setTheme("light")} className={cn("h-8 w-8")} />
    );
};

export default ThemeToggle;

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light")
    return <Sun onClick={() => setTheme("dark")} className={cn("h-7")} />;

  if (theme === "dark")
    return <Moon onClick={() => setTheme("light")} className={cn("h-7")} />;
};

export default ThemeToggle;

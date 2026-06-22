"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={className} aria-label={t.theme.toggle}>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const nextMode = theme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => setTheme(nextMode)}
      aria-label={t.theme.switchTo(nextMode)}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
      )}
    </Button>
  );
}
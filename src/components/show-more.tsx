"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShowMoreProps {
  label: string;
  labelLess: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: "default" | "on-dark";
}

export function ShowMore({
  label,
  labelLess,
  children,
  className,
  contentClassName,
  variant = "default",
}: ShowMoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      {open && <div className={contentClassName}>{children}</div>}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={cn(
          "mx-auto mt-6 flex min-h-11 w-full max-w-xs items-center justify-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors sm:max-w-none sm:w-auto",
          variant === "on-dark"
            ? "border-white/20 text-white/70 hover:border-white/40 hover:text-white active:bg-white/10"
            : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground active:bg-muted/50"
        )}
      >
        {open ? labelLess : label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
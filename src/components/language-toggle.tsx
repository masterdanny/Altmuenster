"use client";

import { useLocale } from "@/context/locale-context";
import { LOCALES, type Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  scrolled?: boolean;
}

export function LanguageToggle({ className, scrolled = false }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border p-0.5 text-xs font-semibold uppercase tracking-wider",
        scrolled
          ? "border-border/60 bg-background/80"
          : "border-white/25 bg-white/10 backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label={t.common.chooseLanguage}
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code as Locale)}
            className={cn(
              "touch-target rounded-full px-3 py-1.5 transition-colors sm:px-2.5 sm:py-1",
              active
                ? scrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-primary"
                : scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/75 hover:text-white"
            )}
            aria-pressed={active}
            aria-label={code === "de" ? "Deutsch" : "English"}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
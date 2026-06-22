"use client";

import { useLocale } from "@/context/locale-context";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#welcome"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      {t.common.skipToContent}
    </a>
  );
}
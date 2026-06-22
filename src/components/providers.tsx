"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { LocaleProvider } from "@/context/locale-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "rounded-xl border border-border/60 bg-background text-foreground shadow-lg font-sans",
            title: "font-medium",
            description: "text-muted-foreground",
          },
        }}
        richColors
        closeButton
      />
    </ThemeProvider>
    </LocaleProvider>
  );
}
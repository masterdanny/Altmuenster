export type Locale = "de" | "en";

export const DEFAULT_LOCALE: Locale = "de";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];
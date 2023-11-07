export const i18n = {
  defaultLocale: "en",
  locales: ["en", "sr", "fr", "de", "it"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

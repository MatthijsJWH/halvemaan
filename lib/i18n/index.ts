import { en } from "./en"
import { nl } from "./nl"

export type Language = "en" | "nl"

export const languages: Record<Language, Record<string, any>> = {
  en,
  nl,
}

export const languageNames: Record<Language, string> = {
  en: "English",
  nl: "Nederlands",
}


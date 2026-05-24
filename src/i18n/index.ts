import { ja } from "./ja";
import { en } from "./en";
import type { Content, Locale } from "./types";

export const content: Record<Locale, Content> = { ja, en };

export function getContent(lang: Locale): Content {
  return content[lang];
}

export type { Content, Locale };

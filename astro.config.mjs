import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nuts-kun.github.io",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
  },
});

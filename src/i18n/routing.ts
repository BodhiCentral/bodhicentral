import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "th", "zh", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
});

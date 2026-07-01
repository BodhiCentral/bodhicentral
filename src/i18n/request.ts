import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await {
            en: () => import("../../messages/en.json"),
            th: () => import("../../messages/th.json"),
            zh: () => import("../../messages/zh.json"),
            es: () => import("../../messages/es.json"),
        }[locale as "en" | "th" | "zh" | "es"]?.() ?? import("../../messages/en.json")).default,
    };
});

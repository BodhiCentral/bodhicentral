import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "th", "zh", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
});

export const config = {
    matcher: [
        "/",
        "/((?!api|_next|_vercel|.*\\..*).*)",
    ],
};

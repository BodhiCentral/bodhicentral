import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "th", "zh", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
});

export const config = {
    matcher: [
        // Match all pathnames except files with extensions, API routes, and Next.js internals
        "/((?!api|_next|_vercel|.*\\..*).*)",
    ],
};

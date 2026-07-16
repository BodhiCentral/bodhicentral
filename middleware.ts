import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
    locales: ["en", "th", "zh", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
});

export default function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/ingest")) {
        return NextResponse.next();
    }
    return intlMiddleware(request);
}

export const config = {
    matcher: [
        "/",
        "/((?!api|_next|_vercel|ingest|.*\\..*).*)",
    ],
};

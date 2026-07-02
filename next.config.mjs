import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        // next-intl middleware is supposed to rewrite /about → /en/about etc.
        // but it fails on Vercel's edge for some paths. These beforeFiles rewrites
        // are a reliable framework-level fallback: they only fire when middleware
        // passes through without rewriting (NextResponse.next()), and they leave
        // /dashboard, /settings, /my-desk-preferences, /reader/* untouched because
        // those paths have explicit page files that take priority or aren't listed.
        const localePrefix = "/en";
        const marketing = [
            "/about/:path*",
            "/plans",
            "/scripture/:path*",
            "/learning-paths/:path*",
            "/resources/:path*",
            "/support",
            "/my-desk",
            "/sign-in",
            "/sign-up",
            "/blog/:path*",
            "/canon-overviews/:path*",
            "/affiliations-and-attributions",
        ];
        return {
            beforeFiles: marketing.map((path) => ({
                source: path,
                destination: `${localePrefix}${path}`,
            })),
        };
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.untitledui.com",
            },
            {
                protocol: "https",
                hostname: "www.gravatar.com",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
            },
            {
                protocol: "https",
                hostname: "hjsvosigtmtftronpkvv.supabase.co",
            },
        ],
    },
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

export default withNextIntl(withMDX(nextConfig));

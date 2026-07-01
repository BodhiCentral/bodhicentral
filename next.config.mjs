import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
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

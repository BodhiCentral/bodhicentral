import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Nunito, Roboto_Serif, Noto_Serif_Tibetan } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
});

const robotoSerif = Roboto_Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-serif",
    axes: ["wdth", "opsz", "GRAD"],
});

const crimsonPro = Crimson_Pro({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-crimson-pro",
});

const tibetan = Noto_Serif_Tibetan({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-serif-tibetan",
});

export const metadata: Metadata = {
    title: "Bodhi Central — Buddhist Paths",
    description: "Gateways to Buddhist study and practice.",
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={cx(nunito.variable, robotoSerif.variable, crimsonPro.variable, tibetan.variable)}>
            <body className="bg-primary antialiased">
                <RouteProvider>
                    <Analytics />
                    <SpeedInsights />
                    <Theme>
                        {children}
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}

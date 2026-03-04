import type { Metadata, Viewport } from "next";
import { Nunito, Roboto_Serif, Noto_Serif_Tibetan, Fraunces } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge10 } from "@/components/marketing/footers/footer-large-10";

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

const fraunces = Fraunces({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-fraunces",
    axes: ["opsz", "SOFT", "WONK"],
});

const tibetan = Noto_Serif_Tibetan({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-serif-tibetan",
});

export const metadata: Metadata = {
    title: "Bodhi Central — Buddhist Scriptures",
    description: "Gateways to accessible Buddhist wisdom and knowledge.",
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

import { createClient } from "@/utils/supabase/server";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <html lang="en" suppressHydrationWarning className={cx(nunito.variable, robotoSerif.variable, fraunces.variable, tibetan.variable)}>
            <body className="bg-primary antialiased">
                <RouteProvider>
                    <Theme>
                        <Header user={user} />
                        {children}
                        <FooterLarge10 />
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}

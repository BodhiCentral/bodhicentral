import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Nunito, Noto_Serif_Tibetan } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";
import { Header } from "@/components/marketing/header-navigation/header";
import { createClient } from "@/utils/supabase/server";
import { CanonNavigationModal } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";
import { KangyurNavigatorModal } from "@/components-custom/navigation/canon-navigation/kangyur-navigation-modal-wrapper";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
});

const crimsonPro = Crimson_Pro({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-crimson-pro",
    style: ["normal", "italic"],
});

const tibetan = Noto_Serif_Tibetan({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-serif-tibetan",
});

export const metadata: Metadata = {
    title: "Bodhi Central — Buddhist Paths",
    description: "Gateways to the Awakening.",
};

export const viewport: Viewport = {
    themeColor: "--color-brand-primary",
    colorScheme: "light dark",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth" className={cx(nunito.variable, crimsonPro.variable, tibetan.variable)}>
            <body className="relative bg-primary antialiased">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <RouteProvider>
                        <Theme>
                            <Header user={user} />
                            <CanonNavigationModal />
                            <KangyurNavigatorModal />
                            {children}
                        </Theme>
                    </RouteProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

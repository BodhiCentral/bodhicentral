"use client";

import { useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

type Messages = Record<string, unknown>;

function getLocaleFromPath(pathname: string): string {
    for (const locale of routing.locales) {
        if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
            return locale;
        }
    }
    return routing.defaultLocale;
}

export const LocaleProvider = ({
    messages,
    children,
}: {
    messages: Record<string, Messages>;
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            {children}
        </NextIntlClientProvider>
    );
};

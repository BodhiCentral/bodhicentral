"use client";

import type { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { RouterProvider, I18nProvider } from "react-aria-components";
import { useLocale } from "next-intl";

declare module "react-aria-components" {
    interface RouterConfig {
        routerOptions: {
            scroll?: boolean;
        };
    }
}

const localeMap: Record<string, string> = {
    en: "en-US",
    th: "th-TH",
    zh: "zh-CN",
    es: "es-ES",
};

export const RouteProvider = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const locale = useLocale();

    return (
        <RouterProvider navigate={router.push}>
            <I18nProvider locale={localeMap[locale] ?? "en-US"}>{children}</I18nProvider>
        </RouterProvider>
    );
};

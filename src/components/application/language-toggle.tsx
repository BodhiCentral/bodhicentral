"use client";

import { useTransition } from "react";
import { usePathname as useNextPathname, useRouter as useNextRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Translate02 } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import type { Key } from "react-aria-components";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { FlagUSA } from "@/components/shared-assets/flag-icons/flag-usa";
import { FlagThailand } from "@/components/shared-assets/flag-icons/flag-thailand";
import { FlagChina } from "@/components/shared-assets/flag-icons/flag-china";
import { FlagSpain } from "@/components/shared-assets/flag-icons/flag-spain";
import { cx } from "@/utils/cx";

const locales = [
    { id: "en", icon: FlagUSA },
    { id: "th", icon: FlagThailand },
    { id: "zh", icon: FlagChina },
    { id: "es", icon: FlagSpain },
] as const;

function getLocaleFromPath(pathname: string): string {
    for (const locale of routing.locales) {
        if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
            return locale;
        }
    }
    return routing.defaultLocale;
}

function stripLocalePrefix(pathname: string, locale: string): string {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(`/${locale}`.length);
    return pathname;
}

export const LanguageToggle = ({ className }: { className?: string }) => {
    const nextPathname = useNextPathname();
    const router = useRouter();
    const nextRouter = useNextRouter();
    const t = useTranslations("header.language");
    const [isPending, startTransition] = useTransition();

    const currentLocale = getLocaleFromPath(nextPathname);
    const pathnameWithoutLocale = stripLocalePrefix(nextPathname, currentLocale);

    const handleLocaleChange = (key: Key) => {
        startTransition(() => {
            if (key === routing.defaultLocale) {
                // next-intl's router.replace with an explicit locale option sets
                // forcePrefix=true internally, which generates /en/ even with
                // as-needed config. Use the native router instead so the URL stays
                // clean (/) and the middleware sets the locale server-side.
                nextRouter.replace(pathnameWithoutLocale);
            } else {
                router.replace(pathnameWithoutLocale, { locale: key as string });
            }
        });
    };

    return (
        <Dropdown.Root>
            <AriaButton
                aria-label={t("toggle")}
                isDisabled={isPending}
                className={({ isHovered, isFocusVisible, isPressed }) =>
                    cx(
                        "group flex h-10 cursor-pointer items-center justify-center gap-1 rounded-lg px-2 text-fg-quaternary transition duration-100 ease-linear focus:outline-hidden",
                        isHovered && !isPending && "bg-primary_hover text-fg-quaternary_hover",
                        isPressed && !isPending && "bg-primary_hover text-fg-quaternary_hover",
                        isFocusVisible && "outline-2 outline-offset-2 outline-brand",
                        isPending && "opacity-60",
                        className,
                    )
                }
            >
                <Translate02 className="size-4 shrink-0" />
                <span className="text-xs font-semibold uppercase">{currentLocale}</span>
            </AriaButton>
            <Dropdown.Popover placement="bottom right" offset={8} className="w-36">
                <Dropdown.Menu
                    selectionMode="none"
                    onAction={handleLocaleChange}
                >
                    {locales.map(({ id, icon }) => (
                        <Dropdown.Item key={id} id={id} label={t(id)} icon={icon} />
                    ))}
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

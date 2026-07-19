"use client";

import type { ReactNode } from "react";
import React, { useRef, useState, isValidElement } from "react";
import { ChevronDown } from "@untitledui/icons";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { useTranslations } from "next-intl";
import { Button } from "@/components/base/buttons/button";
import { Link } from "@/i18n/navigation";
import { DropdownMenuResources } from "@/components-custom/navigation/navigation-menu/dropdown-menu-resources";
import { DropdownMenuLearningPaths } from "@/components-custom/navigation/navigation-menu/dropdown-menu-learning-paths";
import { DropdownMenuScripture } from "@/components-custom/navigation/navigation-menu/dropdown-menu-scripture";
import { DropdownMenuReader } from "@/components-custom/navigation/navigation-menu/dropdown-menu-reader";
import { ThemeToggle } from "@/components/application/theme-toggle";
import { LanguageToggle } from "@/components/application/language-toggle";
import { cx } from "@/utils/cx";
import { User } from "@supabase/supabase-js";
import { DropdownAvatar } from "@/components/base/avatar/dropdown-avatar";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

type FooterNavItem = {
    label: string;
    href: string;
};

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <Link href={props.href} className="flex items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover">
                    {props.label}
                </Link>
            </li>
        );
    }

    return (
        <li className="flex flex-col gap-0.5">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover"
            >
                {props.label}{" "}
                <ChevronDown
                    className={cx("size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear", isOpen ? "-rotate-180" : "rotate-0")}
                />
            </button>
            {isOpen && <div onClick={() => setIsOpen(false)}>{props.children}</div>}
        </li>
    );
};

const MobileFooter = ({ user, footerNavItems }: { user?: User | null; footerNavItems: FooterNavItem[] }) => {
    const t = useTranslations("header.auth");
    return (
        <div className="flex flex-col gap-8 border-t border-secondary px-4 py-6">
            <div>
                <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-6 gap-y-3">
                    {footerNavItems.map((navItem) => (
                        <li key={navItem.label}>
                            <Button color="link-gray" size="lg" href={navItem.href}>
                                {navItem.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                {user ? (
                    <div className="px-1">
                        <DropdownAvatar user={user} />
                    </div>
                ) : (
                    <>
                        <Button size="lg" href="/sign-up">
                            {t("signup")}
                        </Button>
                        <Button color="secondary" size="lg" href="/sign-in">
                            {t("login")}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
    user?: User | null;
}

export const Header = ({ isFullWidth, isFloating, className, user }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const t = useTranslations("header");
    const tNav = useTranslations("header.nav");
    const tAuth = useTranslations("header.auth");

    const headerNavItems: HeaderNavItem[] = [
        { label: tNav("sources"), href: "/scripture", menu: <DropdownMenuScripture /> },
        { label: tNav("paths"), href: "/learning-paths", menu: <DropdownMenuLearningPaths /> },
        { label: tNav("community"), href: "/resources", menu: <DropdownMenuResources /> },
        { label: tNav("desk"), href: "/reader", menu: <DropdownMenuReader /> },
        { label: tNav("plans"), href: "/plans" },
    ];

    const footerNavItems: FooterNavItem[] = [
        { label: "About us", href: "/about" },
        { label: "Help and FAQ", href: "/support" },
    ];

    const items = headerNavItems;

    return (
        <header
            ref={headerRef}
            className={cx(
                "fixed top-0 z-500 flex h-16 w-full items-center justify-center transform-gpu will-change-transform bg-[linear-gradient(266deg,rgba(255,255,255,1)10%,rgba(255,255,255,0.95)35%,rgba(255,255,255,0.95)65%,rgba(255,255,255,1)90%)] dark:bg-[linear-gradient(266deg,rgba(0,0,0,0.9)10%,rgba(0,0,0,0.8)35%,rgba(0,0,0,0.8)65%,rgba(0,0,0,0.9)90%)] backdrop-blur-lg border-b border-b-utility-brand-400/20 drop-shadow-sm",
                isFloating && "h-14 md:h-14 md:pt-2",
                isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="flex size-full w-full flex-1 items-center pr-3 pl-3 md:px-6">
                <div
                    className={cx(
                        "flex w-full justify-between gap-4",
                        isFloating && "ring-secondary_alt md:rounded-3xl md:bg-primary md:py-3 md:pr-3 md:pl-4 md:shadow-xs md:ring-1",
                    )}
                >
                    <div className="flex items-center gap-8">
                        {/* LOGO */}
                        <Link href="/" aria-label="Bodhicentral Home page" className="flex items-center outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 gap-2">
                            <span className="text-3xl font-serif font-light uppercase tracking-tight text-fg-primary dark:text-fg-primary">Bodhi</span>
                            <span className="text-3xl font-serif font-light uppercase tracking-tight text-brand-600">Central</span>
                        </Link>
                    </div>

                    {/* Desktop NAV MENU */}
                    <nav className="flex items-center max-md:hidden px-6">
                        <ul className="flex items-center gap-2">
                            {items.map((navItem) => (
                                <li key={navItem.label}>
                                    {navItem.menu ? (
                                        <AriaDialogTrigger>
                                            <AriaButton className="relative flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-2 text-md font-regular uppercase text-fg-primary outline-focus-ring transition duration-100 ease-linear hover:text-fg-brand-secondary_hover aria-expanded:text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-brand-500 after:scale-x-0 after:transition-transform after:duration-200 aria-expanded:after:scale-x-100">
                                                <span className="px-0.5">{navItem.label}</span>
                                                <ChevronDown className="size-4 rotate-0 stroke-[2.625px] text-fg-primary/50 hover:text-fg-brand-secondary transition duration-100 ease-linear in-aria-expanded:-rotate-180 in-aria-expanded:text-fg-quaternary" />
                                            </AriaButton>

                                            <AriaPopover
                                                className={({ isEntering, isExiting }) =>
                                                    cx(
                                                        "hidden origin-top will-change-transform md:block",
                                                        isFullWidth && "w-full",
                                                        isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1",
                                                        isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1",
                                                    )
                                                }
                                                offset={isFloating || isFullWidth ? 0 : 8}
                                                containerPadding={0}
                                                triggerRef={(isFloating && isFullWidth) || isFullWidth ? headerRef : undefined}
                                            >
                                                {({ isEntering, isExiting }) => (
                                                    <AriaDialog
                                                        className={cx(
                                                            "mx-auto origin-top outline-hidden",
                                                            isFloating && "max-w-7xl px-8 pt-3",
                                                            isEntering && !isFullWidth && "duration-200 ease-out animate-in zoom-in-95",
                                                            isExiting && !isFullWidth && "duration-150 ease-in animate-out zoom-out-95",
                                                        )}
                                                    >
                                                        {({ close }) =>
                                                            isValidElement(navItem.menu)
                                                                ? React.cloneElement(navItem.menu as React.ReactElement<any>, { onClose: close })
                                                                : navItem.menu
                                                        }
                                                    </AriaDialog>
                                                )}
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : (
                                        <Link
                                            href={navItem.href!}
                                            className="flex cursor-pointer items-center gap-0.5 px-1.5 py-1 text-sm font-regular uppercase outline-focus-ring transition duration-100 ease-linear hover:text-fg-brand-secondary_hover focus:outline-offset-2 focus-visible:outline-2"
                                        >
                                            <span className="px-0.5">{navItem.label}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* DESKTOP — Language, Theme toggles + auth */}
                    <div className="hidden items-center gap-3 md:flex">
                        <LanguageToggle />
                        <ThemeToggle />
                        {user ? (
                            <DropdownAvatar user={user} />
                        ) : (
                            <>
                                <Button color="secondary" size={isFloating ? "sm" : "sm"} href="/sign-in">
                                    {tAuth("login")}
                                </Button>
                                <Button color="primary" size={isFloating ? "sm" : "sm"} href="/sign-up">
                                    {tAuth("signup")}
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile menu trigger */}
                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label={t("mobile.toggle")}
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group ml-auto cursor-pointer rounded-lg p-2 md:hidden",
                                    isHovered && "bg-primary_hover",
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    className="hidden text-secondary group-aria-expanded:block"
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="text-secondary group-aria-expanded:hidden"
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </AriaButton>
                        <AriaPopover
                            triggerRef={headerRef}
                            className="h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden"
                            offset={0}
                            crossOffset={20}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="outline-hidden">
                                <nav className="w-full bg-primary shadow-lg">
                                    <ul className="flex flex-col gap-0.5 py-5">
                                        {items.map((navItem) =>
                                            navItem.menu ? (
                                                <MobileNavItem key={navItem.label} label={navItem.label}>
                                                    {navItem.menu}
                                                </MobileNavItem>
                                            ) : (
                                                <MobileNavItem key={navItem.label} label={navItem.label} href={navItem.href} />
                                            ),
                                        )}
                                    </ul>
                                    <MobileFooter user={user} footerNavItems={footerNavItems} />
                                </nav>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};

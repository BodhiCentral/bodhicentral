"use client";

import type { FC } from "react";
import { useState } from "react";
import { cx } from "@/utils/cx";
import { NavItemButton } from "../base-components/nav-button";
import type { NavItemType } from "../config";

interface SidebarNavigationSlimProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: (NavItemType & { icon: FC<{ className?: string }> })[];
    /** List of footer items to display. */
    footerItems?: (NavItemType & { icon: FC<{ className?: string }> })[];
}

export const SidebarNavigationSlimRight = ({ activeUrl, items, footerItems = [] }: SidebarNavigationSlimProps) => {
    const activeItem = [...items, ...footerItems].find((item) => item.href === activeUrl || item.items?.some((subItem) => subItem.href === activeUrl));
    const [currentItem, setCurrentItem] = useState(activeItem || items[1]);
    const [isHovering, setIsHovering] = useState(false);

    const MAIN_SIDEBAR_WIDTH = 56;

    const mainSidebar = (
        <aside
            style={{
                width: MAIN_SIDEBAR_WIDTH,
            }}
            className={cx(
                "group flex h-full max-h-full max-w-full overflow-y-auto pt-8 pb-2 transition duration-100 ease-linear",
            )}
        >
            <div
                className={cx(
                    "flex w-auto flex-col justify-between transition duration-300",
                )}
            >

                <ul className="mt-2 flex flex-col gap-2.5 px-1.5">
                    {items.map((item) => (
                        <li key={item.label}>
                            <NavItemButton
                                size="md"
                                current={currentItem.href === item.href}
                                href={item.href}
                                label={item.label || ""}
                                icon={item.icon}
                                onClick={() => setCurrentItem(item)}
                                className="bg-olive-200 dark:bg-gray-950"
                            />
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex flex-col gap-4 px-1.5 py-5">
                    {footerItems.length > 0 && (
                        <ul className="flex flex-col gap-2.5">
                            {footerItems.map((item) => (
                                <li key={item.label}>
                                    <NavItemButton
                                        size="md"
                                        current={currentItem.href === item.href}
                                        label={item.label || ""}
                                        href={item.href}
                                        icon={item.icon}
                                        onClick={() => setCurrentItem(item)}
                                        className="bg-olive-200 dark:bg-gray-950"
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop sidebar navigation */}
            <div
                className="z-50 fixed inset-y-0 top-8 bottom-0 right-0 flex"
                onPointerEnter={() => setIsHovering(true)}
            >
                {mainSidebar}
            </div>

            {/* Placeholder to take up physical space because the real sidebar has `fixed` position. */}
            <div
                style={{
                    paddingRight: MAIN_SIDEBAR_WIDTH,
                }}
                className="sticky lg:top-16 lg:bottom-0 lg:right-0 lg:flex"
            />


        </>
    );
};

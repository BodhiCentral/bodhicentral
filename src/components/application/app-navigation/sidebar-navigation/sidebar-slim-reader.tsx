"use client";

import type { FC } from "react";
import { useState } from "react";
import { cx } from "@/utils/cx";
import { NavItemButton } from "../base-components/nav-item-button";
import type { NavItemType } from "../config";

interface SidebarNavigationSlimProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: (NavItemType & { icon: FC<{ className?: string }> })[];
    /** List of footer items to display. */
    footerItems?: (NavItemType & { icon: FC<{ className?: string }> })[];
}

export const SidebarNavigationSlim = ({ activeUrl, items, footerItems = [] }: SidebarNavigationSlimProps) => {
    const activeItem = [...items, ...footerItems].find((item) => item.href === activeUrl || item.items?.some((subItem) => subItem.href === activeUrl));
    const [currentItem, setCurrentItem] = useState(activeItem || items[1]);
    const [isHovering, setIsHovering] = useState(false);

    const MAIN_SIDEBAR_WIDTH = 68;

    const mainSidebar = (
        <aside
            style={{
                width: MAIN_SIDEBAR_WIDTH,
            }}
            className={cx(
                "group flex h-full max-h-full max-w-full overflow-y-auto pt-26 pb-4 transition duration-100 ease-linear",
            )}
        >
            <div
                className={cx(
                    "flex w-auto flex-col justify-between transition duration-300",
                )}
            >

                <ul className="mt-2 flex flex-col gap-3 px-3">
                    {items.map((item) => (
                        <li key={item.label}>
                            <NavItemButton
                                size="md"
                                current={currentItem.href === item.href}
                                href={item.href}
                                label={item.label || ""}
                                icon={item.icon}
                                onClick={() => setCurrentItem(item)}
                            />
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex flex-col gap-4 px-3 py-5">
                    {footerItems.length > 0 && (
                        <ul className="flex flex-col gap-3">
                            {footerItems.map((item) => (
                                <li key={item.label}>
                                    <NavItemButton
                                        size="md"
                                        current={currentItem.href === item.href}
                                        label={item.label || ""}
                                        href={item.href}
                                        icon={item.icon}
                                        onClick={() => setCurrentItem(item)}
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
                className="z-50 lg:fixed lg:inset-y-0 lg:top-8 lg:bottom-0 lg:left-0 lg:flex"
                onPointerEnter={() => setIsHovering(true)}
            >
                {mainSidebar}
            </div>

            {/* Placeholder to take up physical space because the real sidebar has `fixed` position. */}
            <div
                style={{
                    paddingLeft: MAIN_SIDEBAR_WIDTH,
                }}
                className="sticky lg:top-16 lg:bottom-0 lg:left-0 lg:flex"
            />


        </>
    );
};

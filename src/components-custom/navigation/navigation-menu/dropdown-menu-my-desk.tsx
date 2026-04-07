"use client";

import type { FC, ReactNode } from "react";
import { BookOpen01, Link03, Hurricane01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "@/components/marketing/header-navigation/base-components/nav-menu-item";

type MenuItem = {
    title: string;
    subtitle?: string;
    href: string;
    Icon: FC<{ className?: string }>;
    badge?: ReactNode;
};

type MenuColumn = {
    title: string;
    items: MenuItem[];
};

const columns: MenuColumn[] = [
    {
        title: "Text Library",
        items: [
            {
                title: "Last Reading",
                subtitle: "Continue reading where you left off.",
                href: "#",
                Icon: BookOpen01,
            },
            {
                title: "Stored Texts",
                subtitle: "Texts you have stored in your library for later reading.",
                href: "#",
                Icon: BookOpen01,
            },
        ],
    },
    {
        title: "Learning Library",
        items: [
            {
                title: "Last Learning",
                subtitle: "Continue learning where you left off.",
                href: "#",
                Icon: Hurricane01,
            },
            {
                title: "Stored Paths",
                subtitle: "Learnings you have stored in your library.",
                href: "#",
                Icon: Link03,
            },
        ],
    },
];

export const DropdownMenuMyDesk = ({ onClose }: { onClose?: () => void }) => {
    return (
        <div className="px-3 pb-2 md:max-w-180 md:p-0 ">
            <nav className="overflow-hidden md:overflow-visible rounded-xl  bg-brand-100 dark:bg-brand-800  drop-shadow-lg ring-1 ring-secondary_alt md:rounded-2xl md:drop-shadow-2xl dark:md:drop-shadow-gray-900">
                <div className="flex flex-col gap-4 rounded-xl bg-brand-25 dark:bg-brand-900  pt-4 ring-1 ring-secondary md:gap-10 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col items-center gap-1 px-4 md:p-0">
                        <h4 className="pt-3 text-display-md font-extralight tracking-wide uppercase text-brand-700 dark:text-brand-300">MY DESK SPACES</h4>
                        <p className="text-sm text-tertiary">Focused sanctuary for your reading and learning.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-md font-semibold text-brand-600 dark:text-brand-400">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {[

                                    { title: "Spaces Config", href: "/scripture/collections" },
                                    { title: "My Searches", href: "/dashboard" },
                                    { title: "Reader Preferences", href: "/scripture/collections" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} color="link-gray" size="md" onPress={onClose}>
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2">
                            {columns.map((column) => (
                                <div key={column.title}>
                                    <h3 className="mb-2 px-4 text-md font-semibold text-brand-600 dark:text-brand-400 md:px-0">{column.title}</h3>
                                    <ul className="flex flex-col gap-0.5">
                                        {column.items.map(({ title, subtitle, href, Icon }) => (
                                            <li key={title}>
                                                <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex max-w-container flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
                    <Button href="https://bodhicentral-docs.vercel.app/documentation/introduction" color="secondary" size="md" iconLeading={BookOpen01} className="hidden md:flex" onPress={onClose}>
                        Documentation
                    </Button>
                    <Button href="/settings" color="primary" size="md" className="hidden md:flex" onPress={onClose}>
                        My Plan
                    </Button>
                    <Button href="/settings" color="primary" size="sm" className="md:hidden" onPress={onClose}>
                        My Plan
                    </Button>
                </div>
            </nav>
        </div>
    );
};

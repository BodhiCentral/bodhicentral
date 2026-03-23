"use client";

import type { FC, ReactNode } from "react";
import { BookOpen01, Link03, Hurricane01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

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
        title: "My Texts",
        items: [
            {
                title: "Last Reading",
                subtitle: "Continue where you left off.",
                href: "/scripture/theravada-tradition",
                Icon: BookOpen01,
            },
            {
                title: "Saved Texts",
                subtitle: "Texts you have saved for later reading.",
                href: "/scripture/tibetan-schools",
                Icon: BookOpen01,
            },
            {
                title: "Saved Searches",
                subtitle: "Your saved search queries.",
                href: "/scripture/tibetan-canons",
                Icon: BookOpen01,
            },
        ],
    },
    {
        title: "My Paths",
        items: [
            {
                title: "Last Learning Path",
                subtitle: "Continue where you left off.",
                href: "/scripture/traditions",
                Icon: Hurricane01,
            },
            {
                title: "Saved Paths",
                subtitle: "Your saved learning paths.",
                href: "/scripture/connections",
                Icon: Link03,
            },
        ],
    },
];

export const DropdownMenuMyDesk = ({ onClose }: { onClose?: () => void }) => {
    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden md:overflow-visible rounded-xl bg-brand-100 dark:bg-brand-900 drop-shadow-lg ring-1 ring-secondary_alt md:rounded-3xl md:drop-shadow-2xl dark:md:drop-shadow-gray-900">
                <div className="flex flex-col gap-4 rounded-xl bg-brand-25 dark:bg-brand-950 pt-4 ring-1 ring-secondary md:gap-8 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col items-center gap-1 px-4 md:p-0">
                        <h4 className="pt-4 text-4xl font-light uppercase">My Desk</h4>
                        <p className="text-sm text-tertiary">Your personal space for Buddhist study and practice.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-sm font-semibold text-brand-700 dark:text-brand-300">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {[

                                    { title: "Manage Spaces", href: "/scripture/collections" },
                                    { title: "Manage Paths", href: "/scripture/genres" },
                                    { title: "Manage Resources", href: "/scripture/authors" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} color="link-gray" size="lg" onPress={onClose}>
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2">
                            {columns.map((column) => (
                                <div key={column.title}>
                                    <h3 className="mb-2 px-4 text-sm font-semibold text-brand-700 dark:text-brand-300 md:px-0">{column.title}</h3>
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
                    <Button href="/reader" color="secondary" size="md" iconLeading={BookOpen01} className="hidden md:flex" onPress={onClose}>
                        Guides
                    </Button>
                    <Button href="/my-desk" color="primary" size="md" className="hidden md:flex" onPress={onClose}>
                        Documentation
                    </Button>
                    <Button href="/my-desk" color="primary" size="sm" className="md:hidden" onPress={onClose}>
                        Documentation
                    </Button>
                </div>
            </nav>
        </div>
    );
};

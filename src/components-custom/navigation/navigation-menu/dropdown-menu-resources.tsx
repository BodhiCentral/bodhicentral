"use client";

import type { FC, ReactNode } from "react";
import { BookOpen01, LifeBuoy01, PlayCircle, FileQuestion01, UsersPlus, Building08, Certificate02 } from "@untitledui/icons";
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
        title: "Resources",
        items: [
            {
                title: "The Blog",
                subtitle: "Read educational articles distilling wisdom and kindness",
                href: "/resources/blog",
                Icon: Certificate02,
            },
            {
                title: "Join our Forum",
                subtitle: "Engage in conversations and share knowledge with others.",
                href: "https://bodhicentral.discourse.group",
                Icon: UsersPlus,
            },
            {
                title: "Documentation",
                subtitle: "In-depth articles about our platfrom, technologies, and research.",
                href: "https://bodhicentral-docs.vercel.app/",
                Icon: FileQuestion01,
            },
        ],
    },
    {
        title: "Community and Support",
        items: [
            {
                title: "Digital Portals",
                subtitle: "Portals of Buddhist scriptures accessible to all.",
                href: "/resources/digital-portals",
                Icon: BookOpen01,
            },
            {
                title: "Groups Around You",
                subtitle: "A global directory of Buddhist groups and communities.",
                href: "/resources/community",
                Icon: Building08,
            },
            {
                title: "Help and support",
                subtitle: "Need help with something? Our team is here to help.",
                href: "/support",
                Icon: LifeBuoy01,
            },
        ],
    },
];

export const DropdownMenuResources = ({ onClose }: { onClose?: () => void }) => {
    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden md:overflow-visible rounded-xl bg-warm-off-300 dark:bg-brand-800 drop-shadow-lg ring-1 ring-secondary_alt md:rounded-2xl md:drop-shadow-2xl dark:md:drop-shadow-gray-900">
                <div className="flex flex-col gap-2 rounded-xl bg-white dark:bg-brand-900 pt-4 pb-5 ring-1 ring-secondary md:gap-8 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col gap-1 px-4 md:p-0 border-b border-b-brand-100 dark:border-b-brand-800/60">
                        <h4 className="py-2 text-display-md font-extralight tracking-wide uppercase text-brand-700 dark:text-brand-300">RESOURCES</h4>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-10 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-md font-semibold text-brand-600 dark:text-brand-400">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Using your Desk", href: "#" },
                                    { title: "Manage galleries", href: "#" },
                                    { title: "Managa storage", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} color="link-gray" size="md" onPress={onClose}>
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5">
                            {columns.map((column) => (
                                <div key={column.title}>
                                    <h3 className="mb-2 px-4 text-md font-semibold text-brand-600 dark:text-brand-400">{column.title}</h3>
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
                    <Button href="/dashboard" color="secondary" size="md" iconLeading={BookOpen01} className="hidden md:flex" onPress={onClose}>
                        Docs | Dashboard
                    </Button>
                    <Button href="/plans" color="primary" size="md" className="hidden md:flex" onPress={onClose}>
                        Plans | My Desk
                    </Button>
                    <Button href="/plans" color="primary" size="sm" className="md:hidden" onPress={onClose}>
                        Plans | My Desk
                    </Button>
                </div>
            </nav>
        </div>
    );
};

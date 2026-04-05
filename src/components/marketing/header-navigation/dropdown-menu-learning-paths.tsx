"use client";

import type { FC, ReactNode } from "react";
import { BookOpen01, Stars02, GraduationHat01, Telescope, Target04, MagicWand02 } from "@untitledui/icons";
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
        title: "Pathways for everyone",
        items: [
            {
                title: "Foundational Studies",
                subtitle: "Immerse yourself in the fundamental concepts and principles of the journey.",
                href: "/learning-paths/foundational-paths",
                Icon: MagicWand02,
            },
            {
                title: "Academic Studies",
                subtitle: "Go deeper with systematic studies of the awakening of the Buddha.",
                href: "/learning-paths/academic-paths",
                Icon: Telescope,
            },
            {
                title: "Practice Paths",
                subtitle: "Practices and methods to transform your reality and the world.",
                href: "/",
                Icon: Target04,
            },
        ],
    },
    {
        title: "Curricula and Directories",
        items: [
            {
                title: "Buddhist Curricula Overview",
                subtitle: "A visual exploration of modern and traditional Buddhist curricula.",
                href: "/learning-paths/buddhist-curricula",
                Icon: GraduationHat01,
            },
            {
                title: "Where to Study",
                subtitle: "Find a study center or an online course around the world.",
                href: "/resources/study-centers",
                Icon: GraduationHat01,
            },
        ],
    },
];

export const DropdownMenuLearningPaths = ({ onClose }: { onClose?: () => void }) => {
    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden md:overflow-visible rounded-xl bg-brand-100 dark:bg-brand-900 drop-shadow-lg ring-1 ring-secondary_alt md:rounded-3xl md:drop-shadow-2xl dark:md:drop-shadow-gray-900">
                <div className="flex flex-col gap-5 rounded-xl bg-brand-25 dark:bg-brand-950 pt-4 ring-1 ring-secondary md:gap-10 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col items-center gap-1 px-4 md:p-0">
                        <h4 className="pt-4 text-display-md font-extralight tracking-wide uppercase text-brand-700 dark:text-brand-300">STUDY & PRACTICE</h4>
                        <p className="text-sm text-tertiary">Learning paths of Buddhist study and practice to transform our modern societies.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-md font-semibold text-brand-600 dark:text-brand-400">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "New Additions", href: "#" },
                                    { title: "All Pathways", href: "#" },
                                    { title: "Desk Preferences", href: "/my-desk-preferences" },
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
                    <Button href="#" color="secondary" size="md" iconLeading={GraduationHat01} className="hidden md:flex" onPress={onClose}>
                        Last Learning Path
                    </Button>
                    <Button href="/my-desk" color="primary" size="md" className="hidden md:flex" onPress={onClose}>
                        My Desk
                    </Button>
                    <Button href="/my-desk" color="primary" size="sm" className="md:hidden" onPress={onClose}>
                        My Desk
                    </Button>
                </div>
            </nav>
        </div>
    );
};

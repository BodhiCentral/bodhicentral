"use client";

import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { BodhicentralLogo } from "@/components/foundations/logo/bodhicentral-logo";
import Link from "next/link";
import { Dribbble, Facebook, GitHub, Layers, X } from "@/components/foundations/social-icons";
import Image from "next/image";

const footerNavList = [
    {
        label: "Scriptures",
        items: [
            {
                label: "Overview",
                href: "/scripture/collections",
            },
            {
                label: "Theravada Canons",
                href: "/scripture/theravada-tradition",
            },
            {
                label: "Tibetan Studies",
                href: "/scripture/tibetan-schools",
            },
            {
                label: "Tibetan Canons",
                href: "/scripture/tibetan-canons",
            },
            {
                label: "Authors",
                href: "/scripture/authors",
            },
            {
                label: "Genres",
                href: "/scripture/genres",
            },
            {
                label: "Traditions",
                href: "/scripture/traditions",
            },
            {
                label: "Connections",
                href: "/scripture/connections",
            },
        ],
    },
    {
        label: "Paths",
        items: [
            {
                label: "Introduction",
                href: "/learning-paths",
            },
            {
                label: "Foundational Paths",
                href: "/learning-paths/foundational-paths",
            },
            {
                label: "Academic Paths",
                href: "/learning-paths/academic-paths",
            },
            {
                label: "Practice Paths",
                href: "/learning-paths/practice-paths",
            },
            {
                label: "Buddhist Curricula",
                href: "/learning-paths/buddhist-curricula",
            },
            {
                label: "Where to Study",
                href: "/resources/study-centers",
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                label: "The Blog",
                href: "/resources/blog",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        In dev
                    </Badge>
                ),
            },

            {
                label: "Digital Portals",
                href: "/resources/digital-portals",
            },
            {
                label: "Groups Around",
                href: "/resources/community",
            },
            {
                label: "Visit the Forum",
                href: "https://bodhicentral.discourse.group/",
            },
            {
                label: "Documentation",
                href: "https://bodhi-central-docs.vercel.app/research/pali-canon/sutta-numbering-system",
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                label: "About the Project",
                href: "/about/project-information",
            },
            {
                label: "Get Involved",
                href: "#",
            },
            {
                label: "Help and FAQ",
                href: "/support",
            },
            {
                label: "Plans",
                href: "/plans",
            },
        ],
    },
    {
        label: "Legal",
        items: [
            {
                label: "Terms",
                href: "#",
            },
            {
                label: "Privacy",
                href: "#",
            },
            {
                label: "Cookies",
                href: "#",
            },
        ],
    },
];
const footerSocials = [
    {
        label: "X (formerly Twitter)",
        icon: X,
        href: "https://x.com/",
    },
    {
        label: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/",
    },
    {
        label: "GitHub",
        icon: GitHub,
        href: "https://github.com/",
    },
    {
        label: "Dribbble",
        icon: Dribbble,
        href: "https://dribbble.com/",
    },
    {
        label: "Layers",
        icon: Layers,
        href: "https://layers.com/",
    },
];

export const FooterLarge10 = () => {
    return (
        <footer className="relative bg-bg-secondary py-12 md:pt-16">
            <Image className="absolute bottom-24 right-0 opacity-7 mask-l-from-15%" src="/ornaments/tibetan-artline-clouds-and-hills.png" alt="Tibetan artline clouds and hills" width={750} height={750} />
            <div className="mx-auto max-w-container px-4 md:px-8">


                {/* CTA Section */}
                <div className="flex flex-col justify-between border-b border-secondary pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-sm font-light text-primary md:text-display-md">Gateways to Buddhist study and practice</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">Explore paths of kindful wisdom and connect with teachers and practitioners to make your journey count for yourself and others.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
                        <Button color="secondary" size="md" href="/about/project-information">
                            About the Project
                        </Button>
                        <Button size="md" href="/plans">Plans</Button>
                    </div>
                </div>

                {/* Footer Nav */}
                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-3 md:w-64 md:gap-4">
                        <Link href="/" aria-label="Bodhicentral Home page" className="flex w-min items-center outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 gap-2">
                            <span className="text-3xl font-serif font-extralight uppercase tracking-wide  text-primary">Bodhi</span>
                            <span className="text-3xl font-serif font-extralight uppercase tracking-wide text-brand-600">Central</span>
                            <BodhicentralLogo className="hidden h-14 w-min shrink-0" />
                        </Link>
                        <p className="text-md text-tertiary">A modern platform of universally revered Buddhist texts and accessible paths of study and practice.</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                            {footerNavList.slice(0, 5).map((category) => (
                                <li key={category.label}>
                                    <h3 className="text-xl text-fg-brand-primary">{category.label}</h3>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-secondary">© 2026 Bodhi Central. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

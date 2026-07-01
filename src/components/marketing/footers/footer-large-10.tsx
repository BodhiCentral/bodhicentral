"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/base/buttons/button";
import { Link } from "@/i18n/navigation";
import { BodhicentralLogo } from "@/components/foundations/logo/bodhicentral-logo";
import { Dribbble, Facebook, GitHub, Layers, X } from "@/components/foundations/social-icons";

const footerSocials = [
    {
        label: "X (formerly Twitter)",
        icon: X,
        href: "https://x.com/",
        target: "_blank",
    },
    {
        label: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/",
        target: "_blank",
    },
    {
        label: "GitHub",
        icon: GitHub,
        href: "https://github.com/",
        target: "_blank",
    },
    {
        label: "Dribbble",
        icon: Dribbble,
        href: "https://dribbble.com/",
        target: "_blank",
    },
    {
        label: "Layers",
        icon: Layers,
        href: "https://layers.com/",
        target: "_blank",
    },
];

export const FooterLarge10 = () => {
    const t = useTranslations("footer");

    const footerNavList = [
        {
            key: "sources",
            label: t("categories.sources"),
            items: [
                { label: t("links.sources.collections"), href: "/scripture/collections" },
                { label: t("links.sources.theravada"), href: "/scripture/theravada-tradition" },
                { label: t("links.sources.tibetanStudies"), href: "/scripture/tibetan-schools" },
                { label: t("links.sources.tibetanCanons"), href: "/scripture/tibetan-canons" },
                { label: t("links.sources.genres"), href: "/scripture/genres" },
                { label: t("links.sources.authors"), href: "/scripture/authors" },
            ],
        },
        {
            key: "paths",
            label: t("categories.paths"),
            items: [
                { label: t("links.paths.introduction"), href: "/learning-paths" },
                { label: t("links.paths.foundational"), href: "/learning-paths/foundational-paths" },
                { label: t("links.paths.academic"), href: "/learning-paths/academic-paths" },
                { label: t("links.paths.practice"), href: "/learning-paths/practice-paths" },
                { label: t("links.paths.curricula"), href: "/learning-paths/buddhist-curricula" },
                { label: t("links.paths.studyCenters"), href: "/resources/study-centers" },
            ],
        },
        {
            key: "community",
            label: t("categories.community"),
            items: [
                { label: t("links.community.blog"), href: "/resources/blog" },
                { label: t("links.community.archives"), href: "/resources/digital-portals" },
                { label: t("links.community.groups"), href: "/resources/community" },
                { label: t("links.community.forum"), href: "https://bodhicentral.discourse.group/", target: "_blank" },
                { label: t("links.community.docs"), href: "https://bodhicentral-docs.vercel.app/research/pali-canon/sutta-numbering-system", target: "_blank" },
            ],
        },
        {
            key: "about",
            label: t("categories.about"),
            items: [
                { label: t("links.about.about"), href: "/about" },
                { label: t("links.about.help"), href: "/support" },
                { label: t("links.about.acknowledgements"), href: "/about" },
                { label: t("links.about.plans"), href: "/plans" },
            ],
        },
        {
            key: "legal",
            label: t("categories.legal"),
            items: [
                { label: t("links.legal.terms"), href: "#" },
                { label: t("links.legal.privacy"), href: "#" },
                { label: t("links.legal.cookies"), href: "#" },
                { label: t("links.legal.affiliations"), href: "/affiliations-and-attributions" },
            ],
        },
    ];

    return (
        <footer className="relative bg-bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                {/* CTA Section */}
                <div className="flex flex-col justify-between border-b border-secondary pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-sm font-light text-primary md:text-display-md">{t("tagline")}</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">{t("cta.body")}</p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
                        <Button size="md" href="/plans">{t("cta.action")}</Button>
                    </div>
                </div>

                {/* Footer Nav */}
                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-3 md:w-64 md:gap-4">
                        <Link href="/" aria-label="Bodhicentral Home page" className="flex w-min items-center outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 gap-2">
                            <span className="text-3xl font-serif font-extralight uppercase tracking-wide text-primary">Bodhi</span>
                            <span className="text-3xl font-serif font-extralight uppercase tracking-wide text-brand-600">Central</span>
                            <BodhicentralLogo className="hidden h-14 w-min shrink-0" />
                        </Link>
                        <p className="text-md text-tertiary">{t("description")}</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                            {footerNavList.map((category) => (
                                <li key={category.key}>
                                    <h3 className="text-xl text-fg-brand-primary">{category.label}</h3>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-gray" size="lg" href={item.href} target={"target" in item ? item.target : undefined} className="gap-1">
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
                    <p className="text-md text-secondary">{t("copyright")}</p>
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

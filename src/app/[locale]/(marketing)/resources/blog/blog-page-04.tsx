"use client";

import { type ComponentProps, useState } from "react";
import { ArrowUpRight, SearchLg } from "@untitledui/icons";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import type { BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";
import Image from "next/image";

const categories = [
    { id: "all", name: "View all", href: "#" },
    { id: "design", name: "Design", href: "#" },
    { id: "product", name: "Product", href: "#" },
    { id: "software-engineering", name: "Software Engineering", href: "#" },
    { id: "customer-success", name: "Customer Success", href: "#" },
];

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    author: {
        href: string;
        name: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

const articles: Article[] = [
    {
        id: "article-1",
        title: "Understanding the Kangyur: The Canonical Heart of the Tibetan Tradition",
        summary: "The Kangyur is the principal collection of the Buddhist scriptures in Tibetan, all translations into Tibetan of the Indian texts considered to record the Buddha’s own words.",
        href: "/canon-overviews/kangyur-overview",
        category: { name: "Tibetan Canon", href: "#" },
        thumbnailUrl: "/tibetan-buddhist-library-01.jpg",
        publishedAt: "20 Jan 2026",
        readingTime: "15 min read",
        author: { name: "Bodhi Central Team", href: "#", avatarUrl: "/placeholder-image-landscape.svg" },
        tags: [
            { name: "Buddhism", color: "brand", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Discourses: conversations with the Buddha",
        summary: "The Sutta Piṭaka, the “basket of discourses,” is the most important body of sacred scripture in Buddhism.",
        href: "/canon-overviews/sutta-overview",
        category: { name: "Pali Canon", href: "#" },
        thumbnailUrl: "/golden-buddha-faces.jpg",

        publishedAt: "19 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Bhikkhu Sujato", href: "#", avatarUrl: "/people/bhikku-sujato-close-up.jpg" },
        tags: [
            { name: "Pali Canon", color: "sky", href: "#" },
            { name: "Buddhism", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3",
        title: "Abhidhamma: a systematic analysis of the doctrine",
        summary: "The Abhidhamma Piṭaka, the “basket of systematic treatises,” are summaries and analyses of the teachings drawn from the earlier discourses.",
        href: "/canon-overviews/abhidhamma-overview",
        category: { name: "Pali Canon", href: "/resources/blog?tag=pali-canon" },
        thumbnailUrl: "/ancient-nalanda-university-idealization.jpg",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Bhikkhu Sujato", href: "#", avatarUrl: "/people/bhikku-sujato-close-up.jpg" },
        tags: [
            { name: "Pali Canon", color: "sky", href: "#" },
            { name: "Buddhism", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3.5",
        title: "The Monastic Law: how monastic communities should live",
        summary: "The Vinaya Piṭaka, “the Basket of Monastic Law”, contains the rules that are binding on monastics and how to put them into practice.",
        href: "/canon-overviews/vinaya-overview",
        category: { name: "Pali Canon", href: "#" },
        thumbnailUrl: "/monk-seated-in-meditation-under-forest-tree-1920.webp",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Bhikkhu Sujato", href: "#", avatarUrl: "/people/bhikku-sujato-close-up.jpg" },
        tags: [
            { name: "Pali Canon", color: "sky", href: "#" },
            { name: "Buddhism", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-4",
        title: "Ontological and Epistemological Dimensions in Buddhist Philosophy",
        summary: "An overview of core concepts of ontology and epistemology in Tibetan Buddhist studies.",
        href: "#",
        category: { name: "Tibetan Studies", href: "#" },
        thumbnailUrl: "/blog-ontology-and-epistemology.webp",
        publishedAt: "16 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Bodhi Central Team", href: "#", avatarUrl: "/placeholder-image-landscape.svg" },
        tags: [
            { name: "Tibetan Studies", color: "sky", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-5",
        title: "Artificial Intelligence and Consciousness",
        summary: "Exploring the intersection of AI with mind, and the role of Buddhist teachings in human evolution.",
        href: "#",
        category: { name: "Mind & Body", href: "#" },
        thumbnailUrl: "/blog-ai-mind-buddhist-teachings.webp",
        publishedAt: "15 Jan 2026",
        readingTime: "11 min read",
        author: { name: "Bodhi Central Team", href: "#", avatarUrl: "/placeholder-image-landscape.svg" },
        tags: [
            { name: "Consciousness", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-6",
        title: "Are you a good Buddhist leader?",
        summary: "A practical guide to the qualities of a good Buddhist leader and how to cultivate them.",
        href: "#",
        category: { name: "Ethics", href: "#" },
        thumbnailUrl: "/blog-thumbnail-good-leadership.webp",
        publishedAt: "14 Jan 2026",
        readingTime: "9 min read",
        author: { name: "Bodhi Central Team", href: "#", avatarUrl: "/placeholder-image-landscape.svg" },
        tags: [
            { name: "Secular Ethics", color: "sky", href: "#" },
            { name: "Leadership", color: "orange", href: "#" },
        ],
    },
];

const Simple02Vertical = ({
    article,
    badgeTheme = "light",
    imageClassName,
}: {
    article: Article;
    badgeTheme?: ComponentProps<typeof BadgeGroup>["theme"];
    imageClassName?: string;
}) => (
    <div className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden rounded-lg" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover transition duration-100 ease-linear hover:scale-105", imageClassName)} />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-3">
                <BadgeGroup addonText={article.category.name} size="md" theme={badgeTheme} color="brand" className="pr-3" iconTrailing={null}>
                    {article.readingTime}
                </BadgeGroup>
                <div className="flex flex-col gap-1">
                    <a
                        href={article.href}
                        className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
                        <ArrowUpRight className="mt-0.5 size-6 shrink-0 text-fg-quaternary" aria-hidden="true" />
                    </a>
                    <p className="line-clamp-2 text-md text-tertiary md:line-clamp-none">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <a href={article.author.href} tabIndex={-1} className="flex">
                    <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                </a>

                <div>
                    <a
                        href={article.author.href}
                        className="block rounded-xs text-sm font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.author.name}
                    </a>
                    <p className="text-sm text-tertiary">{article.publishedAt}</p>
                </div>
            </div>
        </div>
    </div>
);

const tabs = [
    { id: "all", label: "View all", href: "#" },
    { id: "tibetan-canon", label: "Tibetan Canon", href: "#" },
    { id: "product", label: "Pali Canon", href: "#" },
    { id: "study-programs", label: "Study Programs", href: "#" },
    { id: "tibetan-studies", label: "Tibetan Studies", href: "#" },
    { id: "practice", label: "Practice", href: "#" },
    { id: "mind-body", label: "Mind & Body", href: "#" },
];

const BlogHeaderSidebar02 = () => {
    const isDesktop = useBreakpoint("lg");
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);

    return (
        <div className="relative bg-primary pt-12">

            <section className="bg-primary pt-16 pb-10 md:pt-24 md:pb-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex w-full max-w-3xl flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our blog</span>
                        <h1 className="mt-1 text-display-xl font-extralight text-brand-800 dark:text-brand-400 md:text-display-2xl">Articles and insights</h1>
                        <p className="mt-4 text-md text-tertiary md:mt-4 md:text-lg">Expert articles from within the traditions, reviews of public resources, and insights into Buddhist studies and practices.</p>
                    </div>
                </div>
            </section>

            <main className="relative mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
                <div className="flex flex-col gap-12 md:flex-row md:gap-16">
                    <div className="flex w-full flex-col items-stretch md:max-w-70 md:gap-8">
                        <Input aria-label="Search" placeholder="Search" size="md" icon={SearchLg} wrapperClassName="hidden md:flex" />
                        <div className="flex flex-col gap-5">
                            <p className="hidden text-sm font-semibold text-brand-secondary md:block">Blog categories</p>
                            <NativeSelect
                                aria-label="Page tabs"
                                className="md:hidden"
                                value={categories[selectedTabIndex - 1].name}
                                onChange={(event) => setSelectedTabIndex(categories.findIndex((tab) => tab.name === event.target.value))}
                                options={categories.map((tab) => ({ label: tab.name, value: tab.name }))}
                            />
                            <div className="hidden w-full flex-1 self-start overflow-auto md:flex md:self-auto">
                                <Tabs orientation="vertical" className="flex w-full">
                                    <TabList type="button-gray" size="md" items={tabs} className="w-full py-0" />
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
                        {articles.slice(0, 9).map((article) => (
                            <li
                                key={article.id}
                                className={cx(
                                    article.isFeatured && "lg:col-span-2 lg:flex-row",
                                    "flex flex-col gap-6 md:gap-8",
                                    !isDesktop && "nth-[n+7]:hidden",
                                )}
                            >
                                {article.isFeatured ? (
                                    <div className="z-10 flex flex-col gap-5 lg:flex-row lg:items-start xl:gap-8">
                                        <a href={article.href} className="shrink-0 overflow-hidden rounded-2xl" tabIndex={-1}>
                                            <img
                                                src={article.thumbnailUrl}
                                                className="aspect-[1.5] w-full object-cover lg:w-105 xl:w-140 transition duration-100 ease-linear hover:scale-105"
                                                alt={article.title}
                                            />
                                        </a>

                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-4">
                                                <BadgeGroup addonText={article.category.name} size="md" theme="light" color="brand" iconTrailing>
                                                    {article.readingTime}
                                                </BadgeGroup>
                                                <div className="flex flex-col gap-2 xl:gap-3">
                                                    <a
                                                        href={article.href}
                                                        className="flex justify-between gap-x-4 rounded-md text-xl font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 md:text-display-sm"
                                                    >
                                                        {article.title}
                                                    </a>

                                                    <p className="line-clamp-2 text-md text-tertiary xl:line-clamp-4">{article.summary}</p>
                                                </div>
                                            </div>

                                            <div className="flex max-h-10 gap-2">
                                                <a href={article.author.href} tabIndex={-1}>
                                                    <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                                                </a>

                                                <div>
                                                    <p className="text-sm font-semibold">
                                                        <Button href={article.author.href} color="link-gray" className="text-primary">
                                                            {article.author.name}
                                                        </Button>
                                                    </p>
                                                    <p className="text-sm text-tertiary">{article.publishedAt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Simple02Vertical article={article} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <PaginationPageMinimalCenter />
            </main>
        </div>
    );
};

const BlogPage04 = () => {
    return (
        <div className=" relative bg-primary">
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Ornament Endless knot golden." className="hidden z-10 lg:block absolute top-20 right-4 opacity-16 dark:opacity-25" />


            <BlogHeaderSidebar02 />
            {/* Bottom decorative band */}
            <div className="hidden absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.webp)] bg-contain bg-repeat opacity-16 dark:opacity-12">
            </div>
        </div>
    );
};

export default BlogPage04;

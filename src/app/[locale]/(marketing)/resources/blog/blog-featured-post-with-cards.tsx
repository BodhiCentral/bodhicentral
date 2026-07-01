"use client";

import { useState } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Select } from "@/components/base/select/select";
import { type Article, Simple01Vertical } from "@/components/marketing/blog/base-components/blog-cards";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";
import Image from "next/image";

const articles: Article[] = [
    {
        id: "article-1",
        title: "Historical Evolution of Buddhist Canons",
        summary: "A brief history of Buddhist canons over 2,500 years and their evolution across traditions and languages.",
        href: "#",
        category: {
            name: "Research",
            href: "#",
        },
        thumbnailUrl: "/blog-thumbnail-buddhist-scriptures-002.webp",
        publishedAt: "20 Jan 2026",
        readingTime: "8 min read",
        author: {
            name: "Rafael Ortegón",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        tags: [
            {
                name: "Studies",
                color: "brand",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
            {
                name: "Presentation",
                color: "pink",
                href: "#",
            },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Meditation for time travellers",
        summary: "A guide to meditation for time travellers and how it can help you handle reality and illusions.",
        href: "#",
        category: {
            name: "Practice",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: {
            name: "Ernesto Bernal",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        tags: [
            {
                name: "Product",
                color: "blue",
                href: "#",
            },
            {
                name: "Tools",
                color: "pink",
                href: "#",
            },
            {
                name: "SaaS",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3",
        title: "Artificial Intelligence and Consciousness",
        summary: "Exploring the intersection of AI with mind, and the role of Buddhist teachings in human evolution.",
        href: "#",
        category: {
            name: "Mind",
            href: "#",
        },
        thumbnailUrl: "/blog-ai-mind-buddhist-teachings.webp",
        publishedAt: "18 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Sonia Dominguez",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        tags: [
            {
                name: "AI",
                color: "success",
                href: "#",
            },
            {
                name: "Consciousness",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3.5",
        title: "Ontological and Epistemological Dimensions in Buddhist Philosophy",
        summary: "An overview of core concepts of ontology and epistemology in Tibetan Buddhist studies.",
        href: "#",
        category: {
            name: "Studies",
            href: "#",
        },
        thumbnailUrl: "/blog-ontology-and-epistemology.webp",
        publishedAt: "17 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Alec Whitten",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80",
        },
        tags: [
            {
                name: "Leadership",
                color: "brand",
                href: "#",
            },
            {
                name: "Management",
                color: "gray",
                href: "#",
            },
        ],
    },
    {
        id: "article-4",
        title: "Are you a good Buddhist leader?",
        summary: "For monastics and laypersons, mental models are expressions of complex interactions and work ethics.",
        href: "#",
        category: {
            name: "Community",
            href: "#",
        },
        thumbnailUrl: "/blog-thumbnail-good-leadership.webp",
        publishedAt: "10 Jan 2026",
        readingTime: "8 min read",
        author: {
            name: "Romina Powers",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        tags: [
            {
                name: "Product",
                color: "blue",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
            {
                name: "Frameworks",
                color: "orange",
                href: "#",
            },
        ],
    },
    {
        id: "article-5",
        title: "What is wireframing?",
        summary: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        href: "#",
        category: {
            name: "Design",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/wireframing-layout.webp",
        publishedAt: "15 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Candice Wu",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
        tags: [
            {
                name: "Design",
                color: "brand",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
        ],
    },
    {
        id: "article-6",
        title: "How collaboration makes us better designers",
        summary: "Collaboration can make our teams stronger, and our individual designs better.",
        href: "#",
        category: {
            name: "Design",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/two-people.webp",
        publishedAt: "14 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Natali Craig",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
        },
        tags: [
            {
                name: "Design",
                color: "brand",
                href: "#",
            },
            {
                name: "Research",
                color: "indigo",
                href: "#",
            },
        ],
    },
    {
        id: "article-7",
        title: "Our top 10 Javascript frameworks to use",
        summary: "JavaScript frameworks make development easy with extensive features and functionalities.",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-5.webp",
        publishedAt: "13 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Drew Cano",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80",
        },
        tags: [
            {
                name: "Software Development",
                color: "success",
                href: "#",
            },
            {
                name: "Tools",
                color: "pink",
                href: "#",
            },
            {
                name: "SaaS",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-8",
        title: "Podcast: Creating a better CX Community",
        summary: "Starting a community doesn't need to be complicated, but how do you get started?",
        href: "#",
        category: {
            name: "Customer Success",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/sythesize.webp",
        publishedAt: "12 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Orlando Diggs",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80",
        },
        tags: [
            {
                name: "Podcasts",
                color: "brand",
                href: "#",
            },
            {
                name: "Customer Success",
                color: "gray",
                href: "#",
            },
        ],
    },
];
const tabs = [
    {
        id: "all",
        label: "View all",
    },
    {
        id: "publications",
        label: "Books",
    },
    {
        id: "studies",
        label: "Studies",
    },
    {
        id: "practice",
        label: "Practice",
    },
    {
        id: "research",
        label: "Research",
    },
    {
        id: "community",
        label: "Community",
    },
    {
        id: "mind",
        label: "Mind",
    },
    {
        id: "body",
        label: "Body",
    },
];
const sortByOptions = [
    {
        id: "recent",
        label: "Most recent",
    },
    {
        id: "popular",
        label: "Most popular",
    },
    {
        id: "viewed",
        label: "Most viewed",
    },
];

const featuredArticle: Article = {
    id: "article-001",
    category: {
        name: "Practice",
        href: "#",
    },
    thumbnailUrl: "/blog-featured-img-001.webp",
    title: 'An Introduction to Shamatha Stages of Meditation',
    summary: 'The progressive stages of meditation explained in a simple way for beginners and seasoned practitioners.',
    href: "#",
    publishedAt: "10 January 2026",
    readingTime: "8 min read",
    author: {
        name: "Maite Palacios",
        href: "#",
        avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
    },
    tags: [
        {
            name: "Practice",
            color: "gray",
            href: "#",
        },
        {
            name: "Mind",
            color: "gray",
            href: "#",
        },
        {
            name: "Body",
            color: "gray",
            href: "#",
        },
    ],
};

export const BlogFeaturedPostWithCards = () => {
    const isDesktop = useBreakpoint("lg");
    const [sortBy, setSortBy] = useState(sortByOptions[0].id);

    return (
        <div className="bg-primary">
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex w-full max-w-3xl flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our blog</span>
                        <h1 className="mt-2 text-display-md font-semibold text-primary md:text-display-lg">Articles and Insights</h1>
                        <p className="mt-2 text-lg text-tertiary md:mt-3 md:text-xl">The latest news from our global communities, articles on Buddhist studies, practices, and reviews of public resources.</p>
                    </div>
                </div>
            </section>

            <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
                <a
                    href={featuredArticle.href}
                    className="relative hidden w-full overflow-hidden rounded-2xl outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-4 md:block md:h-140 lg:h-150"
                >
                    <Image src={featuredArticle.thumbnailUrl} alt={featuredArticle.title} fill unoptimized className="absolute inset-0 size-full object-cover" />

                    <div className="absolute inset-x-0 bottom-0 w-full bg-linear-to-t from-black/40 to-transparent pt-12">
                        <div className="flex w-full flex-col gap-6 p-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-4">
                                    <p className="flex-1 text-display-xs font-semibold text-white">{featuredArticle.title}</p>
                                    <ArrowUpRight className="size-6 shrink-0 text-fg-white" />
                                </div>
                                <p className="line-clamp-2 text-md text-white">{featuredArticle.summary}</p>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex flex-1 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold text-white">Written by</p>
                                        <div className="flex items-center gap-2">
                                            <Avatar focusable size="md" src={featuredArticle.author.avatarUrl} alt="Image provided by Unsplash.com" />
                                            <p className="text-sm font-semibold text-white">{featuredArticle.author.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold text-white">Published on</p>
                                        <div className="flex h-10 items-center">
                                            <p className="text-md font-semibold text-white">{featuredArticle.publishedAt}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold text-white">Article under</p>
                                    <ul className="flex h-10 items-center gap-2">
                                        {featuredArticle.tags.map((tag) => (
                                            <li
                                                key={tag.name}
                                                className="rounded-full bg-transparent px-2 py-0.5 text-xs font-medium text-fg-white ring-1 ring-fg-white ring-inset"
                                            >
                                                {tag.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="md:hidden">
                    <Simple01Vertical article={featuredArticle} />
                </div>

                <div className="flex flex-col items-end gap-8 md:flex-row">
                    <Tabs className="w-full">
                        <TabList type="underline" size="md" items={tabs} className="overflow-auto" />
                    </Tabs>

                    <div className="relative w-full md:max-w-44">
                        <Select
                            aria-label="Sort by"
                            size="md"
                            selectedKey={sortBy}
                            onSelectionChange={(value) => setSortBy(value as string)}
                            items={sortByOptions}
                        >
                            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <li key={index} className={cx(!isDesktop && "nth-[n+7]:hidden")}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <PaginationPageDefault rounded />
            </main>
        </div>
    );
};

import { Button } from "@/components/base/buttons/button";
import { type Article, Simple01Vertical } from "@/components/marketing/blog/base-components/blog-cards";

const articles: Article[] = [
    {
        id: "article-1",
        title: "The Monastic Law: how monastic communities should live",
        summary: "The Vinaya Piṭaka, “the Basket of Monastic Law”, contains the rules that are binding on monastics and the regulations that apply to monastic communities.",
        href: "/canon-overviews/vinaya-overview",
        category: {
            name: "Vinaya Piṭaka",
            href: "#",
        },
        thumbnailUrl: "/blog-thumbnail-good-leadership.webp",
        publishedAt: "20 Feb 2026",
        readingTime: "8 min read",
        author: {
            name: "Bhikkhu Sujato",
            href: "#",
            avatarUrl: "/people/bhikku-sujato-close-up.jpg",
        },
        tags: [
            {
                name: "Theravada",
                color: "brand",
                href: "#",
            },
            {
                name: "Vinaya",
                color: "indigo",
                href: "#",
            },
            {
                name: "Monasticism",
                color: "pink",
                href: "#",
            },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Discourses: conversations with the Buddha",
        summary: "The Sutta Piṭaka, the “basket of discourses,” is the most important body of sacred scripture in Buddhism. This collection contains the teachings of the Buddha and his disciples, as collected and transmitted by the schools of early Buddhism.",
        href: "#",
        category: {
            name: "Sutta Piṭaka",
            href: "#",
        },
        thumbnailUrl: "/golden-buddha-faces.jpg",
        publishedAt: "19 Feb 2026",
        readingTime: "8 min read",
        author: {
            name: "Bhikkhu Sujato",
            href: "#",
            avatarUrl: "/people/bhikku-sujato-close-up.jpg",
        },
        tags: [
            {
                name: "Product",
                color: "blue-light",
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
        title: "Abhidhamma: a systematic analysis of the doctrine",
        summary: "The Abhidhamma Piṭaka, the “basket of systematic treatises,” are summaries and analyses of the teachings drawn from the earlier discourses.",
        href: "/canon-overviews/abhidhamma-overview",
        category: {
            name: "Abhidhamma Piṭaka",
            href: "#",
        },
        thumbnailUrl: "/jetavanaramaya-scene-01.jpg",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: {
            name: "Bhikkhu Sujato",
            href: "#",
            avatarUrl: "/people/bhikku-sujato-close-up.jpg",
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
        ],
    },
];

export const BlogSectionTipitakaOverviewsLeftAligned = () => {
    return (
        <section className="bg-primary py-12 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Pali Canon</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Tipiṭaka Overviews</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"> Learn about the three baskets of the Pali Canon: Vinaya Piṭaka, Sutta Piṭaka, and Abhidhamma Piṭaka.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="xl">View all overviews</Button>
                    </div>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl">View all overviews</Button>
                </div>
            </div>
        </section>
    );
};

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
        thumbnailUrl: "/monk-seated-in-meditation-under-forest-tree-1920.webp",
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
        href: "/canon-overviews/sutta-overview",
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
        title: "Abhidhamma: a systematic analysis of the doctrine",
        summary: "The Abhidhamma Piṭaka, the “basket of systematic treatises,” are summaries and analyses of the teachings drawn from the earlier discourses.",
        href: "/canon-overviews/abhidhamma-overview",
        category: {
            name: "Abhidhamma Piṭaka",
            href: "#",
        },
        thumbnailUrl: "/tibetan-buddhist-library-01.jpg",
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
        <section className="bg-linear-to-b from-brand-100 via-brand-50 via-15% to-brand-100 to-80% dark:bg-linear-to-b dark:from-brand-900/90 dark:via-brand-800/50 dark:via-50% dark:to-brand-900/90 py-12 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <span className="text-sm font-light text-brand-600 dark:text-brand-700 md:text-md">Pali Canon</span>
                        <h2 className="mt-2 text-display-sm font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg">The Tipiṭaka Overviews</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-4 md:text-xl">Expert introductions to the divisions of the Pali Canon in the Theravāda tradition.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="sm">View more</Button>
                    </div>
                </div>

                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="md">View more</Button>
                </div>
            </div>
        </section>
    );
};

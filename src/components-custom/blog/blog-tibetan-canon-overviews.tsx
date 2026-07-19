import { Button } from "@/components/base/buttons/button";
import { type Article, Simple01Vertical } from "@/components/marketing/blog/base-components/blog-cards";

const articles: Article[] = [
    {
        id: "article-1",
        title: "Understanding the Kangyur: The Canonical Heart of the Tibetan Tratidion",
        summary: "The Kangyur stands as the primary scriptural authority within the Tibetan Buddhist tradition, serving as the foundational repository of the 'Word of the Buddha.'",
        href: "/canon-overviews/kangyur-overview",
        category: {
            name: "Kangyur",
            href: "/canon-overviews/kangyur-overview",
        },
        thumbnailUrl: "/tibetan-buddhist-library-01.jpg",
        publishedAt: "21 May 2026",
        readingTime: "18 min read",
        author: {
            name: "Bodhi Central Team",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Tibetan Canon",
                color: "brand",
                href: "#",
            },
            {
                name: "Kangyur",
                color: "indigo",
                href: "#",
            },
            {
                name: "Buddha's Words",
                color: "pink",
                href: "#",
            },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "The Tengyur: the treatises",
        summary: "The Tengyur, the “translated treatises,” is the collection of commentaries and treatises that expound upon the Buddha’s teachings.",
        href: "#",
        category: {
            name: "Tengyur",
            href: "#",
        },
        thumbnailUrl: "/placeholder-image-landscape.svg",
        publishedAt: "19 Feb 2026",
        readingTime: "8 min read",
        author: {
            name: "John Doe",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Tibetan Canon",
                color: "blue",
                href: "#",
            },
            {
                name: "Tengyur",
                color: "pink",
                href: "#",
            },
            {
                name: "Treatises",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3",
        title: "Historical Origins of the Kangyur and Tengyur",
        summary: "How did the Tibetan canon come to be?",
        href: "#",
        category: {
            name: "Tibetan History",
            href: "#",
        },
        thumbnailUrl: "/placeholder-image-landscape.svg",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: {
            name: "John Doe",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Tibetan Canon",
                color: "success",
                href: "#",
            },
            {
                name: "Historical Context",
                color: "pink",
                href: "#",
            },
        ],
    },
];

export const BlogSectionTibetanCanonOverviews = () => {
    return (
        <section className="bg-linear-to-b from-brand-100 via-brand-50 via-15% to-brand-100 to-80% dark:bg-linear-to-b dark:from-brand-900/90 dark:via-brand-800/50 dark:via-50% dark:to-brand-900/90 py-12 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <span className="text-sm font-light text-brand-600 dark:text-brand-700 md:text-md">Tibetan Canon</span>
                        <h2 className="mt-2 text-display-md font-extralight text-brand-800 dark:text-brand-300 md:text-display-xl">Tibetan Canon Overviews</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-2 md:text-xl">Expert introductions to the main divisions of the Kangyur's scriptures and the Tengyur's treatises.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button href="/resources/blog" size="sm">View more</Button>
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
                    <Button href="/resources/blog" size="md">View more</Button>
                </div>
            </div>
        </section>
    );
};

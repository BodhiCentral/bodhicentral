import { Button } from "@/components/base/buttons/button";
import { type Article, Simple01Vertical } from "@/components/marketing/blog/base-components/blog-cards";

const articles: Article[] = [
    {
        id: "article-1",
        title: "The Thirteen Major Treatises",
        summary: "The Thirteen Major Indian Treatises (gzhung chen po bcu gsum) formed the core of the curriculum in many scriptural colleges or commentarial schools (bshad grwa) of eastern Tibet, especially Śrī Siṃha college at Dzogchen Monastery.",
        href: "/canon-overviews/kangyur-overview",
        category: {
            name: "Nyingma Studies",
            href: "#",
        },
        thumbnailUrl: "/collections-nyingma-circle-510px.jpg",
        publishedAt: "20 Feb 2026",
        readingTime: "8 min read",
        author: {
            name: "John Doe",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Theravada",
                color: "brand",
                href: "#",
            },
            {
                name: "Theravada",
                color: "indigo",
                href: "#",
            },
            {
                name: "Theravada",
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
        title: "The Eighteen Great Treatises",
        summary: "The Mahayana tradition is a major branch of Buddhism that emphasizes the importance of the bodhisattva path and the goal of achieving enlightenment for the benefit of all sentient beings.",
        href: "/canon-overviews/sutta-overview",
        category: {
            name: "Sakya Studies",
            href: "#",
        },
        thumbnailUrl: "/collections-lamdrel-circle-510px.jpg",
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
        title: "The Standardization of Tibetan Studies",
        summary: "The Gelug school palyed an important role in the standardization of the Tibetan academic curricula.",
        href: "/canon-overviews/abhidhamma-overview",
        category: {
            name: "Gelug Studies",
            href: "#",
        },
        thumbnailUrl: "/collections-kadam-circle-510px.jpg",
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
    {
        id: "article-4",
        title: "The Eight Great Treatises",
        summary: "The Eight Kagyu commentaries were recommended by Rangjung Rigpe Dorje, the 16th Karmapa, as the core curriculum for a complete understanding of Sutra and Tantra from the Kagyu school perspective.",
        href: "/canon-overviews/abhidhamma-overview",
        category: {
            name: "Kagyu Studies",
            href: "#",
        },
        thumbnailUrl: "/collections-kagyu-circle-510px.jpg",
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

export const BlogSectionTibetanStudiesOverviews = () => {
    return (
        <section className="bg-linear-to-b from-brand-100 via-brand-50 via-15% to-brand-100 to-80% dark:bg-linear-to-b dark:from-brand-950 dark:via-brand-900/50 dark:via-50% dark:to-brand-900/90 py-12 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <span className="text-sm font-light text-brand-600 dark:text-brand-700 md:text-md">Tibetan Studies</span>
                        <h2 className="mt-2 text-display-sm font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg">Tibetan Systematic Studies</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-2 md:text-xl">Expert introductions to the curricula of the major schools of Tibetan buddhism.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="sm">View more</Button>
                    </div>
                </div>

                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2 md:gap-y-14 lg:grid-cols-4">
                    {articles.slice(0, 4).map((article) => (
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

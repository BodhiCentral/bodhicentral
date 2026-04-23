"use client";

import { BadgeGroup } from "@/components/base/badges/badge-groups";
import Image from 'next/image';

const ArticleHeader = {
    badge_addon_text: "Vinaya Piṭaka",
    badge_text: "30 min read",
    article_headline: "The Monastic Law:",
    article_headline_span: "How Monastic Communities Should Live",
    article_subheadline: "The Vinaya Piṭaka, the “Basket of Monastic Law”, contains the rules that are binding on monastics and the regulations that apply to monastic communities.",
    author_name: "Bhikkhu Sujato",
    author_caption: "Article courtesy of SuttaCentral",
    author_image: "/people/bhikku-sujato-close-up.jpg",
    author_image_alt: "Bhikkhu Sujato",
    article_image: "/monk-seated-in-meditation-under-forest-tree-1920.webp",
    article_image_alt: "Monk meditating under a tree",
    article_ornament_image: "/ornaments/golden-wheel.png",
    article_ornament_image_alt: "Article Ornament"
};

interface ArticleHeaderProps {
    badge_addon_text?: string;
    badge_text?: string;
    article_headline?: string;
    article_headline_span?: string;
    article_subheadline?: string;
    author_name?: string;
    author_caption?: string;
    author_image?: string;
    author_image_alt?: string;
    article_image?: string;
    article_image_alt?: string;
    article_ornament_image?: string;
    article_ornament_image_alt?: string;
}

export const ArticleHeaderSection = (props: ArticleHeaderProps) => {
    const {
        badge_addon_text = "",
        badge_text = "",
        article_headline = "",
        article_headline_span = "",
        article_subheadline = "",
        author_name = "",
        author_caption = "",
        author_image = "",
        author_image_alt = "",
        article_image = "",
        article_image_alt = "",
        article_ornament_image = "",
        article_ornament_image_alt = "",
        ...otherProps } = props;

    return (
        <section className="relative z-10 mx-auto flex max-w-container flex-col gap-16 items-center px-4 py-16 md:flex-row md:px-8 md:pt-16 md:pb-24">
            <div className="flex flex-col items-start gap-2">
                <BadgeGroup size="md" addonText={badge_addon_text} color="brand" theme="light" className="pr-3" iconTrailing={null}>
                    {badge_text}
                </BadgeGroup>
                <h1 id="overview-title" className="mt-4 text-display-md font-extralight text-fg-primary md:text-display-lg text-balance">{article_headline}<br /><span className="text-fg-brand-primary text-balance">{article_headline_span}</span></h1>
                <p className="mt-4 max-w-140 text-lg font-light text-tertiary md:mt-6 md:text-xl">
                    {article_subheadline}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3 md:mt-12">
                    <Image
                        src={author_image}
                        className="size-12 rounded-full object-cover"
                        alt={author_image_alt}
                        width={800} height={800} />
                    <div>
                        <p className="text-md font-semibold text-primary">{author_name}</p>
                        <p className="text-md text-tertiary">{author_caption}</p>
                    </div>
                </div>
            </div>

            {/* Article Image */}
            <Image
                className="relative z-10 mt-10 h-80 w-full object-cover object-center rounded-2xl md:mt-0 md:ml-auto md:h-160 md:w-130 md:max-w-[45vw] drop-shadow-2xl"
                src={article_image}
                alt={article_image_alt}
                width={800} height={800} />
            {/* Article Ornament Image */}
            <Image
                alt={article_ornament_image_alt}
                aria-hidden="true"
                src={article_ornament_image}
                className="absolute z-0 -right-1/3 bottom-1/2 max-w-160 opacity-10 dark:opacity-12 mix-blend-multiple md:right-1/4 md:-bottom-1/5 md:max-w-7xl mask-b-from-90% mask-b-to-100%"
                width={700} height={700} />
        </section>
    );
};
"use client";

import Image from 'next/image';
import { Button } from "@/components/base/buttons/button";
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";
import { CollectionGalleryAbhidhammaPitaka } from "@/components/marketing/collection-sections/collection-gallery-abhidhamma-pitaka";
import { ArrowDown } from "@untitledui/icons";
import { ThreePitakasDiagram } from "@/components/marketing/sections/three-pitakas-diagram";
import { BlogSectionTipitakaOverviewsLeftAligned } from "@/components/marketing/blog/base-components/blog-tipitaka-overviews-left-aligned";

export default function TheravadaTraditionPage() {

    return (
        <div>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100dvh-3.75rem)] bg-[url(/jetavanaramaya-scene-01.jpg)] bg-cover bg-center bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/50 via-30% to-black/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10 z-0" aria-hidden="true" />

                {/* Hero Inner Content */}
                <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                    {/* Hero Title & Subtitle */}
                    <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                        <h1 className="text-display-sm font-extralight text-center text-brand-200 dark:text-brand-200 md:text-display-lg lg:text-display-3xl text-shadow-brand-950 text-shadow-sm">Theravāda Tradition</h1>
                        <p className="hero-subtitle text-center text-lg font-light text-white">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </div>
                    {/* Pitaka Cards */}
                    <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start animate-[fadeUp_1s_ease_both] delay-450">
                        <div className="flex flex-col h-full items-center justify-start bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/85 dark:via-55% dark:to-black/15 p-8 rounded-full">
                            <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                            <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Vinaya Piṭaka</h2>
                            <p className="text-md text-tertiary font-semibold text-center pb-6">The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.</p>
                            <Button href="#vinaya-pitaka-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Vinaya gallery" />
                        </div>
                        <div className="flex flex-col h-full items-center justify-start bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/85 dark:via-55% dark:to-black/15 p-8 rounded-full">
                            <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                            <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Sutta Piṭaka</h2>
                            <p className="pb-6 text-md text-tertiary font-semibold text-center">The second basket of the Pali Canon, containing the discourses of the Buddha.</p>
                            <Button href="#sutta-pitaka-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Sutta gallery" />
                        </div><div className="flex flex-col h-full items-center justify-start bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/85 dark:via-55% dark:to-black/15 p-8 rounded-full">
                            <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                            <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Abhidhamma Piṭaka</h2>
                            <p className="pb-6 text-md text-tertiary font-semibold text-center">The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.</p>
                            <Button href="#abhidhamma-pitaka-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Abhidhamma gallery" />
                        </div>
                    </div>
                </div>
                <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat drop-shadow-xs drop-shadow-black/80 dark:drop-shadow-black/50 opacity-50 dark:opacity-40">
                </div>

            </section>
            {/* Gallery Section */}
            <section>
                <div id="sutta-pitaka-gallery" className=""><CollectionGallerySuttaPitaka /></div>
                <div id="vinaya-pitaka-gallery" className=""><CollectionGalleryVinayaPitaka /></div>
                <div id="abhidhamma-pitaka-gallery" className=""><CollectionGalleryAbhidhammaPitaka /></div>
            </section>
            <ThreePitakasDiagram />
            <BlogSectionTipitakaOverviewsLeftAligned />
        </div>
    );
}

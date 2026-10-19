"use client";

import { ArrowDown } from "@untitledui/icons";
import Image from "next/image";
import { GalleryAbhidhammaPitakaDivisions } from "@/components-custom/galleries/gallery-abhidhamma-pitaka-divisions";
import { GallerySuttaPitakaDivisions } from "@/components-custom/galleries/gallery-sutta-pitaka-divisions";
import { GalleryVinayaPitakaDivisions } from "@/components-custom/galleries/gallery-vinaya-pitaka-divisions";
import { ThreePitakasDiagram } from "@/components-custom/sections/three-pitakas-diagram";
import { Button } from "@/components/base/buttons/button";
import { BlogSectionTipitakaOverviewsLeftAligned } from "@/components/marketing/blog/base-components/blog-tipitaka-overviews-left-aligned";

export default function TheravadaTraditionPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative mx-auto flex h-[calc(100vh)] flex-col items-center justify-center gap-4 bg-[url(/jetavanaramaya-scene-01.jpg)] bg-cover bg-center bg-no-repeat pt-16">
                {/* Overlay layer for easy customization of color/transparency */}
                <div
                    className="absolute inset-0 z-0 bg-linear-to-b from-black/15 via-black/50 via-30% to-black/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10"
                    aria-hidden="true"
                />

                {/* Hero Inner Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-12">
                    {/* Hero Title & Subtitle */}
                    <div className="animate-[fadeUp_1s_ease_both] flex-col items-center justify-center gap-1 px-4 delay-300 md:flex md:px-6">
                        <h1 className="text-center text-display-lg font-extralight text-brand-300 text-shadow-brand-950 text-shadow-sm md:text-display-2xl lg:text-display-4xl dark:text-brand-300">
                            Theravāda Tradition
                        </h1>
                        <p className="hero-subtitle text-center text-xl font-light text-white">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </div>
                    {/* Pitaka Cards */}
                    <div className="mx-auto grid h-full max-w-container animate-[fadeUp_1s_ease_both] grid-cols-1 items-start gap-6 px-4 pb-20 delay-450 md:grid-cols-3 md:gap-8 md:px-6 lg:gap-10">
                        {/* Vinaya Card */}
                        <a
                            href="#vinaya-pitaka-gallery"
                            className="h-full cursor-pointer transition-transform duration-400 hover:scale-[1.06]"
                            aria-label="Go to Vinaya Studies gallery"
                        >
                            <div className="flex h-full flex-col items-center justify-start rounded-full bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 p-4 md:p-6 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15">
                                <Image
                                    src="/thai-ornament-top-linear-logo.png"
                                    alt="thai ornament"
                                    width={100}
                                    height={100}
                                    style={{ width: "auto", height: "auto" }}
                                    className="hidden opacity-60 drop-shadow-xs drop-shadow-black/90 md:block dark:drop-shadow-black/50"
                                />
                                <h2 className="py-2 text-center text-display-md text-brand-800 dark:text-brand-200">Vinaya Piṭaka</h2>
                                <p className="pb-4 text-center text-md font-semibold text-tertiary">
                                    The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.
                                </p>
                            </div>
                        </a>

                        {/* Sutta Card */}
                        <a
                            href="#sutta-pitaka-gallery"
                            className="h-full cursor-pointer transition-transform duration-400 hover:scale-[1.06]"
                            aria-label="Go to Sutta Studies gallery"
                        >
                            <div className="flex h-full flex-col items-center justify-start rounded-full bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 p-4 md:p-6 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15">
                                <Image
                                    src="/thai-ornament-top-linear-logo.png"
                                    alt="thai ornament"
                                    width={100}
                                    height={100}
                                    style={{ width: "auto", height: "auto" }}
                                    className="hidden opacity-60 drop-shadow-xs drop-shadow-black/90 md:block dark:drop-shadow-black/50"
                                />
                                <h2 className="py-2 text-center text-display-md text-brand-800 dark:text-brand-200">Sutta Piṭaka</h2>
                                <p className="pb-4 text-center text-md font-semibold text-tertiary">
                                    The second basket of the Pali Canon, containing the discourses of the Buddha.
                                </p>
                            </div>
                        </a>

                        {/* Abhidhamma Card */}
                        <a
                            href="#abhidhamma-pitaka-gallery"
                            className="h-full cursor-pointer transition-transform duration-400 hover:scale-[1.06]"
                            aria-label="Go to Abhidhamma Studies gallery"
                        >
                            <div className="flex h-full flex-col items-center justify-start rounded-full bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 p-4 md:p-6 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15">
                                <Image
                                    src="/thai-ornament-top-linear-logo.png"
                                    alt="thai ornament"
                                    width={100}
                                    height={100}
                                    style={{ width: "auto", height: "auto" }}
                                    className="hidden opacity-60 drop-shadow-xs drop-shadow-black/90 md:block dark:drop-shadow-black/50"
                                />
                                <h2 className="py-2 text-center text-display-md text-brand-800 dark:text-brand-200">Abhidhamma Piṭaka</h2>
                                <p className="pb-4 text-center text-md font-semibold text-tertiary">
                                    The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 left-0 mx-auto h-6 bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat opacity-40 drop-shadow-xs drop-shadow-black/80 dark:opacity-30 dark:drop-shadow-black/50"></div>

                {/* Scroll cue */}
                <div className="scroll-cue">
                    <span className="scroll-cue-text">Explore</span>
                    <div className="scroll-cue-line"></div>
                </div>
            </section>
            {/* Gallery Section */}
            <section>
                <div id="sutta-pitaka-gallery" className="">
                    <GallerySuttaPitakaDivisions />
                </div>
                <div id="vinaya-pitaka-gallery" className="">
                    <GalleryVinayaPitakaDivisions />
                </div>
                <div id="abhidhamma-pitaka-gallery" className="">
                    <GalleryAbhidhammaPitakaDivisions />
                </div>
            </section>
            <ThreePitakasDiagram />
            <BlogSectionTipitakaOverviewsLeftAligned />
        </div>
    );
}

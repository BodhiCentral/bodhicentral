"use client";

import type { FC, HTMLAttributes } from "react";
import { BookOpen01, ChartBreakoutSquare, TrendUp01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";
import Image from "next/image";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-neutral-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-neutral-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export const FeaturesThreePillars = () => {
    return (
        <section className="relative flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            {/* Top decorative band */}
            <div className="absolute h-6 top-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.webp)] bg-contain bg-repeat opacity-50 dark:opacity-40">
            </div>
            {/* Header Title and Subtitle */}
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                    <h2 className="mt-3 text-display-md font-extralight tracking-tight text-brand-600 dark:text-brand-400 lg:text-display-lg">Not a library. Not an app.</h2>
                    <h2 className="text-display-lg font-extralight tracking-tight text-brand-600 dark:text-brand-400 lg:text-display-xl">A living doorway into the <span className="text-brand-600 lg:text-display-2xl dark:text-white font-extralight italic tracking-wide">dharma</span></h2>
                </div>
            </div>
            {/* Features Group: Scriptures, Paths, and Resources */}
            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-28">
                {/* Feature 1: Scriptures */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={BookOpen01} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-brand-800 dark:text-brand-400 md:text-display-lg">Sources of Wisdom</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Buddhist sources were scattered and fragmented for too long. We've made it simple, organized, and beautiful:
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                
                                "Clear presentation of original authentic Buddhist sources in Pali, Tibetan, and publicly available translations—a treasure trove of texts that are currently transmitted and practiced in modern mainstream Buddhist traditions",
                                "A pragmatic approach to collections, genres, and other categories of texts, organized with clarity and authority for students and practitioners, regardless of your affiliation and tradition.",
                                "State-of-the-art readers and personal workspaces to make your experience smooth and memorable",

                            ].map((feat) => (
                                <CheckItemText key={feat} size="sm" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                        <Button href="/scripture/collections" color="secondary" size="md" className="relative z-100 mt-8 cursor-pointer">
                            Explore collections
                        </Button>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <img
                            alt="Light Accent"
                            aria-hidden="true"
                            src="/patterns/light-accent.webp"
                            className="absolute z-0 right-0 -bottom-14 max-w-160 opacity-60 mix-blend-multiple md:right-10 md:-bottom-1/3 md:max-w-7xl mask-b-from-90% mask-b-to-100%"
                        />
                        <AlternateImageMockup className="lg:left-0">

                            {/* Light mode image (hidden in dark mode) */}
                            <Image
                                alt="Scripture mockup showing Collections interface"
                                src="/theravada-tradition-light-mode-912px.webp"
                                className="size-full object-cover lg:w-auto lg:max-w-none dark:hidden"
                                width={912}
                                height={501}
                                style={{ width: "auto", height: "100%" }}
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <Image
                                alt="Dashboard mockup showing application interface"
                                src="/theravada-tradition-light-mode-912px.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                                width={912}
                                height={501}
                                style={{ width: "auto", height: "100%" }}
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                {/* Feature 2: Paths of Study and Practice */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={TrendUp01} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-brand-800 dark:text-brand-400 md:text-display-lg">Paths of Study and Practice</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Finding digital Buddha's teachings has never been easier. Yet, navigating and making sense of the vast amount of literature and teachings available today can be overwhelming and complicated without good guidance:
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Study the foundational paths for a solid understanding of the Buddhist core concepts and principles",
                                "Go deeper with academic paths (systematic education), with trustworthy companions for in-depth study of the Dharma",
                                "Engage in contemplative paths and practices (samatha, vipassana, mind-training, paramitas, etc.) brought to you by genuine Buddhist transmissions to support your progress",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="sm" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                        <Button href="/learning-paths" color="secondary" size="md" className="mt-8 cursor-pointer">
                            Explore paths
                        </Button>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <img
                            alt="Light Accent"
                            aria-hidden="true"
                            src="/patterns/light-accent.webp"
                            className="absolute z-0 -left-4 -bottom-24 max-w-160 opacity-80 mix-blend-multiple md:left-80 md:-bottom-90 md:max-w-7xl mask-b-from-90% mask-b-to-100% mask-t-from-10% mask-t-to-100% scale-x-[-1.8]"
                        />

                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}

                            <Image
                                alt="Mockup showing Learning Paths interface"
                                src="/tibetan-schools-light-mode-912px.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                                width={912}
                                height={501}
                                style={{ width: "auto", height: "100%" }}
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <Image
                                alt="Mockup showing Learning Paths interface"
                                src="/tibetan-schools-light-mode-912px.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                                width={912}
                                height={501}
                                style={{ width: "auto", height: "100%" }}
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                {/* Feature 3: Resources for Individuals and Communities */}
                <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-3 lg:gap-22 lg:items-center lg:justify-center pb-30">
                    <div className="max-w-lg flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-brand-800 dark:text-brand-400 md:text-display-lg">Resources for Individuals and Communities</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Find teachers and study centers worldwide through our curated directory. Deepen your understanding with articles written from within the living Buddhist traditions. Create your own personal study and reading spaces suited to your needs and preferences. All documentation and guidelines are openly available for contributors and curious minds alike.
                        </p>
                        <Button href="/resources" color="secondary" size="md" className="relative z-100 mt-8 cursor-pointer">
                            Explore resources
                        </Button>
                    </div>

                    <div className="relative col-span-2 w-full flex-1 self-center lg:pt-2">

                        <div className="grid w-full grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 items-start md:w-full md:gap-4 drop-shadow-lg perspective-dramatic ">

                            {/* Feature 3.4: DIRECTORIES */}
                            <span
                                className="relative size-full text-text-tertiary text-md uppercase -rotate-y-2 rotate-x-1 rotate-z-15 translate-y-10 translate-x-4"
                                style={{
                                    gridArea: "2 / 1 / 6 / 6",
                                }}
                            >Worldwide Directories</span>
                            <Image
                                src="/buddhist-study-centers-planetary-upscaled-1600px-80.webp"

                                className="size-full max-h-full object-fill border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl -rotate-y-2 rotate-x-1 rotate-z-15"
                                alt="Monk seated in meditation under forest tree"
                                style={{
                                    gridArea: "3 / 1 / 7 / 6", width: "auto", height: "100%"
                                }}
                                width={800}
                                height={666}
                            />

                            {/* Feature 3.4: DOCUMENTATION */}
                            <span
                                className="relative size-full text-text-tertiary text-md uppercase -rotate-y-2 rotate-x-1 rotate-z-15 translate-y-18 translate-x-1 "
                                style={{
                                    gridArea: "1 / 6 / 7 / 12",
                                }}
                            >Research & Documentation</span>
                            <Image
                                src="/bc-documentation-dark-mode-373px.webp"
                                className="size-full max-h-full object-fill border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl -rotate-y-2 rotate-x-1 rotate-z-15 translate-y-25 -translate-x-3"
                                alt="BD Blog article with menu screenshot"
                                style={{
                                    gridArea: "1 / 6/ 7 / 12", width: "auto", height: "100%"
                                }}
                                width={373}
                                height={311}
                            />
                            {/* Feature 3.4: EXPERT ARTICLES */}
                            <span
                                className="relative size-full text-text-tertiary text-md uppercase -rotate-y-2 rotate-x-2 rotate-z-15 translate-y-10 -translate-x-14 "
                                style={{
                                    gridArea: "12 / 2 / 13 / 7",
                                }}
                            >Expert Articles</span>
                            <img
                                src="/blog-article-with-menu-dark-mode-373px.webp"
                                className="size-full object-fill border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl -rotate-y-2 rotate-x-2 rotate-z-15 translate-y-11"
                                alt="BD documentation and research screenshot"
                                style={{
                                    gridArea: "7 / 2 / 12 / 8",
                                }}
                            />
                            {/* Feature 3.4: FORUM */}
                            <span
                                className="relative size-full text-text-tertiary text-md uppercase -rotate-y-2 rotate-x-2 rotate-z-15 translate-y-22 -translate-x-6"
                                style={{
                                    gridArea: "12 / 8 / 12 / 12",
                                }}
                            >Personal Spaces</span>
                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl  -rotate-y-2 rotate-x-2 rotate-z-15 translate-y-39.5 translate-x-2.5"
                                alt="Personal Spaces screenshot"
                                style={{
                                    gridArea: "7 / 8 / 11 / 13",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

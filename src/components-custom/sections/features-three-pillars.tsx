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
            <div className="absolute h-6 top-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat opacity-50 dark:opacity-40">
            </div>
            {/* Header Title and Subtitle */}
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                    <h2 className="mt-3 text-display-lg font-extralight tracking-tight text-brand-600 dark:text-brand-400 lg:text-display-xl">Not a library. Not an app.<br /> A living doorway into the Dharma</h2>
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
                                "State-of-the-art readers and personal workspaces to make your experience smooth and memorable",
                                "Clear access to a treasure trove of texts that are currently transmitted and practiced in modern Buddhist transmissions",
                                "With a pragmatic approach, collections, genres, and other categories of texts are organized in a way that makes sense to students and practitioners, regardless of their school or tradition."

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
                                src="/theravada-tradition-light-mode-1600px.webp"
                                className="size-full object-cover lg:w-auto lg:max-w-none dark:hidden"
                                width={1600}
                                height={931}
                                style={{ width: "auto", height: "100%" }}
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <Image
                                alt="Dashboard mockup showing application interface"
                                src="/theravada-tradition-light-mode-1600px.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                                width={1600}
                                height={931}
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
                            className="absolute z-0 -left-4 -bottom-24 max-w-160 opacity-70 mix-blend-multiple md:left-80 md:-bottom-90 md:max-w-7xl mask-b-from-90% mask-b-to-100% mask-t-from-10% mask-t-to-100% scale-x-[-1.5]"
                        />

                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}

                            <Image
                                alt="Mockup showing Learning Paths interface"
                                src="/tibetan-schools-hero-header-light-mode-1600px.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                                width={1600}
                                height={931}
                                style={{ width: "auto", height: "100%" }}
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <Image
                                alt="Mockup showing Learning Paths interface"
                                src="/tibetan-schools-hero-header-light-mode-1600px.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                                width={1600}
                                height={931}
                                style={{ width: "auto", height: "100%" }}
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                {/* Feature 3: Resources for Individuals and Communities */}
                <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-3 lg:gap-16 lg:items-center lg:justify-center pb-12">
                    <div className="max-w-lg flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-brand-800 dark:text-brand-400 md:text-display-lg">Resources for Communities</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Find teachers and study centers worldwide through our curated directory. Deepen your understanding with articles written from within the living Buddhist traditions. Join practitioners in our forum and bring questions, reflections, and encouragement to a growing global sangha. All documentation and guidelines are openly available for contributors and curious minds alike.
                        </p>
                        <Button href="/resources" color="secondary" size="md" className="relative z-100 mt-8 cursor-pointer">
                            Explore resources
                        </Button>
                    </div>

                    <div className="relative col-span-2 w-full flex-1 self-center lg:pt-20">

                        <div className="grid w-full grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 md:w-auto md:gap-4 drop-shadow-lg perspective-dramatic ">

                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl rotate-x-4 rotate-z-12 -translate-y-7.5 translate-x-1"
                                alt="Monk seated in meditation under forest tree"
                                style={{
                                    gridArea: "3 / 1 / 7 / 6",
                                }}
                            />

                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl rotate-x-4 rotate-z-12 translate-x-0 translate-y-12 "
                                alt="BD Blog screenshot"
                                style={{
                                    gridArea: "1 / 6/ 7 / 12",
                                }}
                            />
                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl rotate-x-4 rotate-z-12"
                                alt="BD Documentation screenshot"
                                style={{
                                    gridArea: "7 / 3 / 12 / 8",
                                }}
                            />
                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl  rotate-x-4 rotate-z-12 translate-y-18"
                                alt="Himalayan scenery"
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

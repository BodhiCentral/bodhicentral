"use client";

import type { FC, HTMLAttributes } from "react";
import { BookOpen01, ChartBreakoutSquare, TrendUp01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export const FeaturesAlternatingLayout01 = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-600 dark:text-brand-700 md:text-md">The Three Pillars</span>
                    <h2 className="mt-3 text-display-sm text-primary md:text-display-md">Meaningful presentations of Buddha's teachings</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Gateways for spiritual seekers to connect with Buddhist traditions, teachings, and communities around the world.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={BookOpen01} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-primary dark:text-brand-200 md:text-display-md">Kindful Wisdom</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Whether you are already studying and practicing a Buddhist path, or exploring what Buddha's teachings mean to you, we have gathered teachings from genuine streams of Buddhism with a pragmatic approach:
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Inclusive access to collections of texts that are currently transmitted and practiced in modern Buddhist traditions",
                                "Contextualized texts within vehicles, doctrines, genres, and tracks of study, practice and research",
                                "State-of-the-art readers and personal workspaces to make your experience smooth and memorable",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                        <Button href="/scripture/collections" color="secondary" size="md" className="relative z-100 mt-8 cursor-pointer">
                            Explore all texts
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
                            <img
                                alt="Scripture mockup showing Collections interface"
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={TrendUp01} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-primary dark:text-brand-200 md:text-display-md">Pathways of Study and Practice</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Accessing Buddha's teachings has become easier than ever. Yet, navigating and making sense of the vast amount of literature and teachings available today can be overwhelming and complicated without the right guidance.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Study the foundational pathways providing a solid understanding of the Buddhist core concepts and principles",
                                "Go deeper into academic and scholarly paths (shedra-style learning), your truthworthy companions for in-depth study and research",
                                "Engage in contemplative practice paths (samatha, vipassana, mind-training, etc.) brought to you by the living Buddhist traditions to support your spiritual journey",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                        <Button href="/learning-paths" color="secondary" size="md" className="mt-8 cursor-pointer">
                            Explore all pathways
                        </Button>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">

                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}

                            <img
                                alt="Mockup showing Learning Paths interface"
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Mockup showing Learning Paths interface"
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-3 lg:gap-16 lg:items-center lg:justify-center">
                    <div className="max-w-lg flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-primary dark:text-brand-200 md:text-display-md">Resources for Individuals and Communities</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Discover tools to enhance your personal activities and contributions to the Buddhist community.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "DIRECTORY: Find institutions with study and practice programs",
                                "BLOG: Read articles on relevant topics, presented from a Buddhist perspective.",
                                "YOUR DESK: Build your personal library with favorite content",
                                "FORUM: Join groups and discussions related to our activities",
                                "DOCUMENTATION: Guidelines and information about the project",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                        <Button href="/resources" color="secondary" size="md" className="relative z-100 mt-8 cursor-pointer">
                            Explore all resources
                        </Button>
                    </div>

                    <div className="relative col-span-2 w-full flex-1 self-center lg:pt-20">
                        <img
                            alt="Light Accent"
                            aria-hidden="true"
                            src="/patterns/light-accent.webp"
                            className="absolute z-0 -right-4 -bottom-24 max-w-160 opacity-90 mix-blend-multiple md:-right-50 md:-bottom-56 md:max-w-7xl mask-b-from-90% mask-b-to-100% mask-t-from-10% mask-t-to-100% scale-x-[-1.5]"
                        />
                        <div className="grid w-full grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 md:w-auto md:gap-4 drop-shadow-lg ">

                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl"
                                alt="Monk seated in meditation under forest tree"
                                style={{
                                    gridArea: "3 / 2 / 7 / 7",
                                }}
                            />

                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl"
                                alt="BD Blog screenshot"
                                style={{
                                    gridArea: "1 / 7 / 7 / 12",
                                }}
                            />
                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl"
                                alt="BD Documentation screenshot"
                                style={{
                                    gridArea: "7 / 5 / 12 / 8",
                                }}
                            />
                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl"
                                alt="Himalayan scenery"
                                style={{
                                    gridArea: "7 / 8 / 11 / 13",
                                }}
                            />
                            <img
                                src="/placeholder-image-landscape.svg"
                                className="size-full object-cover border-double border-5 border-gray-300 dark:border-gray-700 rounded-xl"
                                alt="Monk seated in meditation under forest tree"
                                style={{
                                    gridArea: "7 / 1 / 10 / 5",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

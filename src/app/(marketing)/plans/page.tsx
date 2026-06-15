"use client";

import { type FC, type ReactNode, useState } from "react";
import {
    BookOpen01,
    GraduationHat02,
    ArrowRight,
    CheckCircle,
    File05,
} from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { VideoPlayer } from "@/components/base/video-player/video-player";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { CTACenteredPlansSignupFeaturedBgImage } from "@/components-custom/sections/cta-centered-plans-signup-featured-bg-image";
import PlanFeaturesTable from "@/components-custom/sections/plan-features-table";
import { FAQAccordion01 } from "@/components/marketing/faq/faq-accordion-01";
import Image from "next/image";

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

const PricingTierCardBanner = (props: {
    banner?: string;
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    className?: string;
    firstAction?: string;
    firstActionHref?: string;
    secondAction?: string;
    secondActionHref?: string;
    shadow?: string;
}) => {
    return (
        <div className={cx("flex flex-col overflow-hidden h-full rounded-2xl bg-white dark:bg-muted-900 ring-1 ring-secondary_alt", props.shadow, props.className)}>
            {props.banner && (
                <div className="w-full bg-brand-300 px-2 py-3 text-center">
                    <p className="text-sm font-semibold text-black">{props.banner}</p>
                </div>
            )}

            <div>
                <div className="flex flex-col items-center px-6 pt-6 text-center">
                    <h2 className="text-3xl font-light text-brand-secondary">{props.title}</h2>
                    <p className="text-display-md font-medium tracking-wide text-primary md:text-display-lg pt-2">{props.subtitle}</p>

                    <p className="mt-1 text-md text-tertiary">{props.description}</p>
                </div>
                <div className="flex flex-col gap-3 px-6 py-6 md:px-8">
                    <Button href={props.firstActionHref} size="xl">{props.firstAction}</Button>
                    {props.secondAction && (
                        <Button className="hidden" href={props.secondActionHref} color="secondary" size="xl">
                            {props.secondAction}
                        </Button>
                    )}
                </div>
                <p className="px-6 md:px-8">Includes:</p>
                <ul className="flex flex-col gap-4 px-6 py-4 md:px-8 md:pb-8">
                    {props.features.map((feat) => (
                        <CheckItemText key={feat} iconStyle="outlined" color="success" text={feat} />
                    ))}
                </ul>


            </div>
        </div>
    );
};

const PricingSimpleBanner = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            title: "COMMUNITY",
            subtitle: selectedPlan === "monthly" ? "Free" : "Free",
            description: "Account personalization and community features.",
            firstAction: "Get started",
            firstActionHref: "/sign-up",
            secondAction: "Have questions?",
            secondActionHref: "/sign-up",
            shadow: "",
            features: [
                "Canon preferences",
                "Reading & display settings",
                "Timelines & visualizations",
                "Canon navigation and collections",
                "Directories of communities and centers",
            ],
        },
        {
            title: "STANDARD",
            subtitle: selectedPlan === "monthly" ? "$2/month" : "$20/year",
            description: "Daily and advanced study tools for personal engagement.",
            firstAction: "Get started",
            firstActionHref: "/sign-up",
            secondAction: "Have questions?",
            secondActionHref: "/plans#faq",
            shadow: "shadow-2xl shadow-ink-100 dark:shadow-ink-500",
            features: [
                "All COMMUNITY-tier features",
                "Scripture & Media Synchronization",
                "Personal library and workspaces",
                "Advanced search with filtering",
                "Marginal notes",
                "Categorized bookmarks",
                "Multicolor highlights",
                "Footnotes",
                "Cross references",
                "Search personal notes, bookmarks, and highlights",
            ],
        },
        {
            title: "PATRON",
            subtitle: selectedPlan === "monthly" ? "$10/month" : "$100/year",
            description: "Support BodhiCentral's mission and help fund ongoing development.",
            firstAction: "Get started",
            firstActionHref: "/sign-up",
            secondAction: "Have questions?",
            secondActionHref: "/plans#faq",
            banner: "",
            shadow: "",
            features: [
                "All STANDARD-Tier features",
                "Early access to experimental and pre-release features",
                "Preview new tools before general availability",
                "Helps fund licensing, infrastructure, and development",
                "Patron-exclusive digital gifts (when available)",

            ],
        },
    ];

    return (
        <section className="relative bg-primary py-16 md:py-20">
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Plans background" className="hidden lg:block absolute top-4 right-4 opacity-16 dark:opacity-25" />
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Plans background" className="hidden lg:block absolute top-4 left-4 scale-x-[-1] opacity-16 dark:opacity-25" />
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-xl">Start free. Upgrade to unlock advanced study tools.</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central provides free access to Scripture worldwide. No account required. Optional subscriptions unlock advanced study tools.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList
                            type="button-border"
                            size="sm"
                            items={[
                                { id: "monthly", label: "Monthly billing" },
                                { id: "annually", label: "Annual billing" },
                            ]}
                            className="mt-6 w-full md:mt-10 md:w-auto **:[[role=tab]]:flex-1"
                        />
                    </Tabs>
                </div>

                <div className="mt-8 grid w-full grid-cols-1 items-start  gap-4 md:mt-10 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardBanner key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesCenterMockup01 = () => {
    return (
        <section id="features" className="bg-primary py-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                    <h2 className="mt-4 text-display-md font-extralight text-brand-800 dark:text-brand-500 md:text-display-lg">Connecting scriptures, education, and transmissions of the awakening.</h2>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-14 md:gap-20 lg:items-center">
                    <div className="flex h-full w-full items-center justify-center md:max-h-204 md:w-full">
                        <div
                            className={cx(
                                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-neutral-300 ring-inset md:rounded-4xl md:p-1 md:shadow-modern-mockup-outer-lg md:ring-2",
                            )}
                        >
                            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-neutral-200 md:rounded-3xl md:ring-2">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="/theravada-tradition-light-mode-1600px.webp"
                                        className="size-full object-cover dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="/theravada-tradition-dark-mode-1600.webp"
                                        className="size-full object-cover not-dark:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-1 flex-wrap justify-center gap-x-12 gap-y-10 lg:flex-nowrap">
                        {[
                            {
                                title: "Sources of Wisdom",
                                subtitle: "A comprehensive collection of illuminating sources, sutras and commentaries from genuine streams of Buddhist transmissions.",
                                icon: BookOpen01,
                                cta: "Explore now",
                                href: "/scriptures/collections",
                            },
                            {
                                title: "Paths of Learning",
                                subtitle: "Clear paths for every stage of your journey, from the fundamentals to advanced topics, accompanied by guided practices.",
                                icon: GraduationHat02,
                                cta: "Explore now",
                                href: "/learning-paths",
                            },
                            {
                                title: "Community & resources",
                                subtitle:
                                    "Tools and solutions to expand your learnings: directories, blogs, forums, and detailed documentation.",
                                icon: File05,
                                cta: "Explore now",
                                href: "/resources",
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href={item.href} iconTrailing={ArrowRight}>
                                            {item.cta}
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FeatureTextFeaturedIconLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-140 gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern-neue" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern-neue" className="inline-flex md:hidden" />

        <div className="flex flex-col items-start gap-4">
            <div>
                <h3 className="mt-1 text-xl font-medium text-primary md:mt-1">{title}</h3>
                <p className="mt-2 text-md text-tertiary">{subtitle}</p>
            </div>

            {footer}
        </div>
    </div>
);

const FeaturesIconsAndImage03 = () => {
    return (
        <section className="bg-primary">
            <div className="bg-warm-off-400 dark:bg-warm-off-950 pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2 lg:gap-24">
                    <div className="flex w-full flex-col">
                        <span className="text-sm font-light text-brand-600 dark:text-brand-700 md:text-md">Our Approach</span>

                        <h2 className="mt-3 text-display-md font-light text-brand-800 dark:text-brand-500 md:text-display-lg">The intersection of readership, education, and community</h2>
                        <p className="mt-4 text-lg font-light text-tertiary md:mt-5 md:text-xl">
                            Envisioning a platform that leverages modern and practical experiences with the best of readership and education, at the service of communities and the living transmissions of the awakening.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
                        {[
                            {
                                title: "The best of readership and education",
                                subtitle: "Enter a sanctuary of wisdom, with a treasure trove of texts, overviews, and practical expositions of the awakening.",
                                icon: BookOpen01,
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "Connecting communities and living transmissions",
                                subtitle: "Get truthfull and relevant guidance and support from genuine teachers and fellow practitioners.",
                                icon: GraduationHat02,
                                cta: "Learn more",
                                href: "#",
                            },
                        ].map((item, index) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconLeft key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mx-auto -mt-16 flex w-full max-w-container justify-center px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
                <VideoPlayer
                    size="lg"
                    showThumbnailOverlay
                    thumbnailUrl="/monk-seated-in-meditation-under-forest-tree-1920.webp"
                    src="https://www.untitledui.com/videos/untitled-ui-demo.mp4"
                    className="aspect-video w-full overflow-hidden rounded-lg shadow-3xl md:max-w-200"
                />
            </div>
        </section>
    );
};

const Plans = () => {
    return (
        <main className="bg-primary mt-16">
            <PricingSimpleBanner />
            <PlanFeaturesTable />
            <FeaturesCenterMockup01 />
            <FeaturesIconsAndImage03 />
            <FAQAccordion01 />
            <CTACenteredPlansSignupFeaturedBgImage />
        </main>
    );
};

export default Plans;

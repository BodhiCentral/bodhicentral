"use client";

import { type FC, type ReactNode, useState } from "react";
import {
    BookOpen01,
    GraduationHat02,
    ArrowRight,
    ChartBreakoutSquare,
    CheckCircle,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MessageChatCircle,
    SlashCircle01,
    SwitchHorizontal01,
    Zap,
} from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { VideoPlayer } from "@/components/base/video-player/video-player";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import { CTACenteredPlansSignup } from "@/components-custom/sections/cta-centered-plans-signup";
import Image from "next/image";

const faqs = [
    {
        question: "What is included in the Discovery plan?",
        answer: "The Discovery plan is our free plan, and it includes access to all of our features, including the scripture reader, learning paths, and resources. The free Discovery plan is a great way to get started with Bodhi Central and to explore all that it has to offer with basic storage.",
        icon: Heart,
    },
    {
        question: "Why you offer a paid subscription?",
        answer: "Bodhi Central is a non-profit organization, and your Full Access subscription helps us to continue our work. It also allows us to offer a free plan to those who cannot afford it.",
        icon: SlashCircle01,
    },
    {
        question: "Can I change my Full Access plan later?",
        answer: "Of course! Our affordable Full Access plan scales with your needs. You can cancel or downgrade your plan at any time from your account settings in the dashboard.",
        icon: SwitchHorizontal01,
    },

    {
        question: "Can other info be added to an invoice?",
        answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
        icon: File05,
    },
    {
        question: "How does billing work?",
        answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
        icon: CreditCardRefresh,
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can change the email address associated with your account by going to untitledui.com/account from a laptop or desktop.",
        icon: Mail01,
    },
];

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
        <div className={cx("flex flex-col overflow-hidden rounded-2xl bg-warm-off-50 dark:bg-muted-900 ring-1 ring-secondary_alt", props.shadow, props.className)}>
            {props.banner && (
                <div className="w-full bg-brand-300 px-2 py-3 text-center">
                    <p className="text-sm font-semibold text-black">{props.banner}</p>
                </div>
            )}

            <div>
                <div className="flex flex-col items-center px-6 pt-8 text-center md:px-8">
                    <p className="text-display-md font-medium tracking-wide text-primary md:text-display-lg">{props.subtitle}</p>
                    <h2 className="mt-4 text-3xl font-light text-brand-secondary">{props.title}</h2>
                    <p className="mt-1 text-md text-tertiary">{props.description}</p>
                </div>

                <ul className="flex flex-col gap-4 px-6 py-8 md:px-8 md:pb-10">
                    {props.features.map((feat) => (
                        <CheckItemText key={feat} iconStyle="outlined" color="success" text={feat} />
                    ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
                    <Button href={props.firstActionHref} size="xl">{props.firstAction}</Button>
                    {props.secondAction && (
                        <Button href={props.secondActionHref} color="secondary" size="xl">
                            {props.secondAction}
                        </Button>
                    )}
                </div>
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
            description: "No sign up required.",
            firstAction: "Continue browsing",
            firstActionHref: "/scripture/collections",
            secondAction: "Have questions?",
            secondActionHref: "/plans#faq",
            shadow: "",
            features: [
                "Access to all texts",
                "Available free learning paths",
                "Browsing collections and learnings",
                "Directories of communities and centers",
                "Basic support",
            ],
        },
        {
            title: "DISCOVERY",
            subtitle: selectedPlan === "monthly" ? "Free" : "Free",
            description: "Try Bodhi Central",
            firstAction: "Create your FREE account",
            firstActionHref: "/sign-up",
            secondAction: "Have questions?",
            secondActionHref: "/plans#faq",
            shadow: "",
            features: [
                "2 Workspaces storage",
                "Basic preferences",
                "Limited search history",
                "Limited bookmarks",
                "Priority chat and email support",
            ],
        },
        {
            title: "PRO",
            subtitle: selectedPlan === "monthly" ? "$2/month" : "$20/year",
            description: "Get the most out of Bodhi Central.",
            firstAction: "Get FULL access",
            firstActionHref: "/sign-up",
            secondAction: "Have questions?",
            secondActionHref: "/plans#faq",
            banner: "",
            shadow: "shadow-2xl shadow-ink-100 dark:shadow-ink-500",
            features: [
                "Unlimited workspaces",
                "Unlimited stored texts",
                "Unlimited saved searches",
                "Advanced preferences",
                "Advanced features",

            ],
        },
    ];

    return (
        <section className="relative bg-primary py-16 md:py-20">
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={260} alt="Plans background" className="hidden  lg:block absolute top-4 right-4 opacity-16 dark:opacity-25" />
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={260} alt="Plans background" className="hidden lg:block absolute top-4 left-4 scale-x-[-1] opacity-16 dark:opacity-25" />
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-extralight text-brand-700 dark:text-brand-400 md:text-display-xl"> Plans for everyone</h2>
                    <p className="mt-4 max-w-xl text-md text-tertiary md:mt-6 md:text-lg">
                        Enjoy the <strong>Community</strong> and <strong>Discovery</strong> free plans. Buddhist texts and teachings should be accessible to everyone. Your <strong>Pro</strong> subscription keeps the platform running and improving with new features.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList
                            type="button-border"
                            size="sm"
                            items={[
                                { id: "monthly", label: "Monthly billing" },
                                { id: "annually", label: "Annual billing" },
                            ]}
                            className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1"
                        />
                    </Tabs>
                </div>

                <div className="mt-8 grid w-full grid-cols-1 items-end gap-4 md:mt-10 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
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
        <section id="features" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="hidden md:flex">
                        <BadgeWithDot color="brand" type="modern" size="lg">
                            Features
                        </BadgeWithDot>
                    </span>
                    <span className="flex md:hidden">
                        <BadgeWithDot color="brand" type="modern" size="md">
                            Features
                        </BadgeWithDot>
                    </span>
                    <h2 className="mt-4 text-display-sm font-light text-brand-700 dark:text-brand-400 md:text-display-md">Cutting-edge features for a balanced approach to Buddhist study and practice</h2>
                    <p className="mt-4 text-md text-tertiary md:mt-5 md:text-lg">
                        Scripture, learning, and connecting with the living traditions of the awakening.
                    </p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-24 lg:items-center">
                    <div className="flex h-full w-full items-center justify-center md:max-h-204 md:w-full">
                        <div
                            className={cx(
                                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-neutral-300 ring-inset md:rounded-[32px] md:p-1 md:shadow-modern-mockup-outer-lg md:ring-[2px]",
                            )}
                        >
                            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-neutral-200 md:rounded-[24px] md:ring-[2px]">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="/theravada-tradition-dark-page-1920px.webp"
                                        className="size-full object-cover dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="theravada-tradition-light-page-1920px.webp"
                                        className="size-full object-cover not-dark:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-1 flex-wrap justify-center gap-x-12 gap-y-10 lg:flex-nowrap">
                        {[
                            {
                                title: "Kindful Scripture",
                                subtitle: "Gathering curated texts and teachings from genuine streams of Buddhist traditions.",
                                icon: MessageChatCircle,
                                cta: "Learn more",
                                href: "/scriptures/collections",
                            },
                            {
                                title: "Paths of Learning",
                                subtitle: "Clear learning paths for every stage of your journey, from the fundamentals to advanced topics, accompanied by guided practices.",
                                icon: Zap,
                                cta: "Learn more",
                                href: "/learning-paths",
                            },
                            {
                                title: "Resources that matter",
                                subtitle:
                                    "Tools and resources to support your practice and learning, including directories, blogs, forums, and detailed documentation.",
                                icon: ChartBreakoutSquare,
                                cta: "Learn more",
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
                                            Learn more
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
                <h3 className="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">{title}</h3>
                <p className="mt-1 text-md text-tertiary">{subtitle}</p>
            </div>

            {footer}
        </div>
    </div>
);

const FeaturesIconsAndImage03 = () => {
    return (
        <section className="bg-primary">
            <div className="bg-secondary pt-16 pb-[112px] md:pt-24 md:pb-40">
                <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2 lg:gap-24">
                    <div className="flex w-full flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our Approach</span>

                        <h2 className="mt-3 text-display-md font-light text-brand-700 dark:text-brand-400 md:text-display-lg">Introducing the intersection of study and practice</h2>
                        <p className="mt-4 text-lg font-light text-tertiary md:mt-5 md:text-xl">
                            Envisioning a platform that leverages kind design and wise technologies, combining the best of readership, learning, and practice.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
                        {[
                            {
                                title: "Readership of Buddhist gems of wisdom",
                                subtitle: "Immerse yourself in a curated library of texts, overviews, and practical expositions of buddhist views.",
                                icon: BookOpen01,
                                cta: "Learn more",
                                href: "#",
                            },
                            {
                                title: "Practical learning and contemplation",
                                subtitle: "Engage in hands-on studies and practices that help you apply what you learn to your daily life.",
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
                    thumbnailUrl="https://www.untitledui.com/marketing/smiling-girl-7.webp"
                    src="https://www.untitledui.com/videos/untitled-ui-demo.mp4"
                    className="aspect-video w-full overflow-hidden rounded-lg shadow-3xl md:max-w-200"
                />
            </div>
        </section>
    );
};

const FAQSimple01 = () => {
    return (
        <section id="faq" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-light text-brand-700 dark:text-brand-400 md:text-display-lg">Frequently asked questions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about Bodhi Central plans and services. </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col items-center text-center">
                                    <FeaturedIcon color="gray" theme="modern" className="md:hidden" size="md" icon={item.icon} />
                                    <FeaturedIcon color="gray" theme="modern" className="hidden md:flex" size="lg" icon={item.icon} />

                                    <dt className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">{item.question}</dt>
                                    <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-white px-6 py-8 text-center md:mt-16 md:gap-8 md:px-8 md:py-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="/placeholder-image-landscape.svg"
                            alt="placeholder"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="/placeholder-image-landscape.svg"
                            alt="placeholder"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="/placeholder-image-landscape.svg"
                            alt="placeholder"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="md">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const PricingPage08 = () => {
    return (
        <div className="bg-primary">
            <PricingSimpleBanner />

            <SectionDivider />

            <FeaturesCenterMockup01 />

            <FeaturesIconsAndImage03 />

            <SectionDivider />

            <FAQSimple01 />

            <CTACenteredPlansSignup />
        </div>
    );
};

export default PricingPage08;

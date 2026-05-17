"use client";

import { Fragment, useState } from "react";
import { CheckCircle, CreditCardRefresh, File05, Heart, HelpCircle, Mail01, Minus, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

type Tier = { name: string; canChatToSales?: boolean; highlighted?: boolean; badge?: string; href?: string; priceMonthly: number; description: string };

const tiers: Tier[] = [
    { name: "Community", href: "#", priceMonthly: 0, description: "Great for individual practitioners and students of the Dhamma." },
    {
        name: "Standard",
        highlighted: true,
        badge: "Most Popular",
        href: "#",
        priceMonthly: 2,
        description: "For serious practitioners and dedicated students of the Dhamma.",
    },
    {
        name: "Patron",
        href: "#",
        priceMonthly: 10,
        description: "For supporters and patrons of the Dhamma.",
    },
];

type Section = { name: string; features: { name: string; tooltip: { title: string; description: string }; tiers: Record<string, boolean | string> }[] };

const sections: Section[] = [
    {
        name: "Personalization and preferences",
        features: [
            {
                name: "Bodhi Central preferences",
                tooltip: {
                    title: "Bodhi Central preferences",
                    description: "Access to essential tools required to manage your workspace and start using the platform.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Reading & display settings",
                tooltip: {
                    title: "Reading & display settings",
                    description: "Manage your reading and display preferences, including font size, line spacing, and color options.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Canon navigation",
                tooltip: {
                    title: "User-level insights",
                    description: "View data and activity specific to individual users in your workspace.",
                },
                tiers: { Community: "Unlimited", Standard: "Unlimited", Patron: "Unlimited" },
            },
            {
                name: "Full access to all texts",
                tooltip: {
                    title: "Customer support access",
                    description: "Includes access to our help center, email support, and in-app assistance during business hours.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Automated workflows",
                tooltip: {
                    title: "Streamline recurring tasks",
                    description: "Set up workflows that automate repetitive actions to save time and reduce manual effort.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "200+ integrations",
                tooltip: {
                    title: "Connect your tools",
                    description: "Integrate with 200+ apps like Slack, Google Workspace, and Salesforce for a seamless workflow.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
        ],
    },
    {
        name: "Study tools for personal engagement.",
        features: [
            {
                name: "Marginal notes",
                tooltip: {
                    title: "Marginal notes",
                    description: "Add notes in the margin of the texts for quick reference.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Export reports",
                tooltip: {
                    title: "Downloadable reporting",
                    description: "Export reports as CSV or PDF files for offline analysis and sharing.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Scheduled reports",
                tooltip: {
                    title: "Automated report delivery",
                    description: "Set up reports to be generated and emailed at regular intervals.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "API Access",
                tooltip: {
                    title: "Build with our API",
                    description: "Use our REST API to programmatically interact with data, users, and workflows.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Advanced reports",
                tooltip: {
                    title: "Deeper analytics tools",
                    description: "Create custom visualizations, filters, and drilldowns for more complex reporting needs.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Saved reports",
                tooltip: {
                    title: "Quick access to key data",
                    description: "Save and reuse frequently used report configurations for fast insights.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Customer properties",
                tooltip: {
                    title: "Track customer attributes",
                    description: "Define and manage custom data points for each customer in your system.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "Custom fields",
                tooltip: {
                    title: "Flexible data structure",
                    description: "Add custom fields to users, reports, or properties to tailor the platform to your needs.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
        ],
    },
    {
        name: "Support Bodhi Central's mission and ongoing development.",
        features: [
            {
                name: "Early access to experimental features",
                tooltip: {
                    title: "Early access",
                    description: "Early access to experimental and pre-release features",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "Preview new tools before general availability",
                tooltip: {
                    title: "Preview new tools",
                    description: "Lorem ipsum",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "Supporter recognition in select YouTube content",
                tooltip: {
                    title: "Supporter recognition",
                    description: "Lorem ipsum",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "Helps fund licensing, infrasture, and development",
                tooltip: {
                    title: "Helps funding",
                    description: "",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
        ],
    },
];

const faqsExtended = [
    {
        question: "What is included in the Community free plan?",
        answer: "Anyone can read the Bodhi Central scriptures for free — no account os subscription required. Free access includes: Reading all available canon traditions, canon navigation, and reading display settings. Creating a Community free account  is optional and only required to save personal preferences.",
        icon: Heart,
    },
    {
        question: "What do I get by creating a free acccount?",
        answer: "A free account lets you personalize your experience across devices, including: Preferred canon traditions, font and font size, light / dark mode, reading layout, and theme preferences. Creating a free account does not change which canon texts you can access — it simply lets Bodhi Central remember how you orefer to study.",
        icon: SwitchHorizontal01,
    },
    {
        question: "Why does Bodhi Central charge for some features?",
        answer: "Bodhi Central provides free access to Scripture worldwide, but operating the platform is not free. Optional subscriptions unlock advanced study tools that support deeper, more effient study — while also sustaining the platform log-term. Paid plans focus on capabilities such as organization, analysis, and original-language tools, while the core canonical reading remains freely available to everyone.",
        icon: SlashCircle01,
    },
    {
        question: "Does Bodhi Central charge for access to the Scripture itself?",
        answer: "No. We don not charge for access to any Scripture. All available Canon traditions remain freely accessible, without paywalls or subscriptions. Subscriptions apply only to optional study tools, not Scripture.",
        icon: File05,
    },
    {
        question: "What is included in the Standard plan?",
        answer: "The Standard plan is designed for personal Buddhist study over time — helping you organize notes, highlights, and observations as you read and study regularly. It is also designed for deeper research — adding avanced research, cross-reference navigation, and original-language study tools. You can upgrade, downgrade, or cancel at any time.",
        icon: CreditCardRefresh,
    },
    {
        question: "Can I upgrade, downgrade, or cancel anytime?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, unlocking additional features. Downgrades or cancellations take effect at the end of your current billing period, maintaining your access to the features you already paid for.",
        icon: Mail01,
    },
    {
        question: "Do you offer yearly billing?",
        answer: "Yes. We offer both monthly and yearly billing for paid plans. Yearly billing is simply a convenient way to support the platform over a full year. The cost is equivalent to paying month-to-month, and you are not locked into a long-term contract. We intentionally keep pricing straightforward, so users can choose the billing option that fits their situation without pressure or penalties.",
        icon: Mail01,
    },
    {
        question: "What happens to my notes and highlights if I cancel?",
        answer: "Your study data is not deleted when you cancel, unless you specifically request that we delete your account data through our Contact Us page. If you downgrade or cancel a paid plan, your notes, highlights, and bookmarks remain saved, but access to certain advanced tools may be limited based on your plan. For more details, see our official Privacy Policy.",
        icon: Mail01,
    },
    {
        question: "Do you charge for Scriptural footnotes, cross-references, or other publisher-supplied metadata?",
        answer: "No. For any Scripture version that includes footnotes, cross-references, or other publisher-supplied study metadata, that information is made freely available to all users directly within the reader view. This applies to all anonymous users worldwide regardless of registration or subscription status. Optional subscriptions do not restrict or modify basic access to this material at the bottom of each chapter. Paid plans may unlock additional tools that make it easier to view, navigate, study, or reference this information alongside the Scriptural texts, but the underlying content itself remains freely accessible to everyone.",
        icon: Mail01,
    },
];

const PricingLargeTable01 = () => {
    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-12 md:px-8 md:py-16">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-xl">Compare our plans and find yours</h2>
                </div>
            </div>

            <div className="w-full pb-16 md:px-8 md:pb-24 lg:mx-auto lg:max-w-container">
                {/* xs to lg */}
                <div className="space-y-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section key={tier.name}>
                            <div className="mb-8 flex flex-col px-4">
                                <p key={tier.name} className="flex items-center gap-2 text-display-lg font-extralight text-primary">
                                    {tier.name}
                                    {tier.badge && (
                                        <Badge size="md" type="pill-color" color="brand">
                                            {tier.badge}
                                        </Badge>
                                    )}
                                </p>
                                <p className="mt-4">
                                    <span className="text-display-lg font-semibold text-primary">${tier.priceMonthly}</span>
                                    <span className="ml-1.5 pb-2 text-md font-medium text-tertiary">per month</span>
                                </p>
                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
                                <div className="mt-6 flex flex-col gap-3">
                                    <Button size="xl">Get started</Button>
                                </div>
                            </div>

                            {sections.map((section) => (
                                <table key={section.name} className="mb-8 w-full last:mb-0">
                                    <caption className="px-4 pb-4 text-left text-sm font-semibold text-brand-secondary">{section.name}</caption>
                                    <thead>
                                        <tr>
                                            <th className="sr-only" scope="col">
                                                Feature
                                            </th>
                                            <th className="sr-only" scope="col">
                                                Included
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.features.map((feature, index) => (
                                            <tr key={feature.name} className={cx(index % 2 === 0 && "bg-secondary_alt")}>
                                                <th className="flex py-4.5 pl-4 text-left text-sm font-medium text-primary" scope="row">
                                                    {feature.name}
                                                </th>
                                                <td className="py-4.5 pr-4">
                                                    <div className="flex items-center justify-end text-right">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="-my-1 size-6 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="ml-auto size-5 text-fg-quaternary" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">{feature.tiers[tier.name] === true ? "Yes" : "No"}</span>
                                                            </>
                                                        )}{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ))}

                            <div className="mt-8 flex flex-col gap-3 px-4">
                                <Button size="xl">Get started</Button>
                                {tier.canChatToSales && (
                                    <Button color="secondary" size="xl">
                                        Chat to sales
                                    </Button>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="max-lg:hidden">
                    <table className="h-px w-full table-fixed">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr className="border-b border-secondary">
                                <th scope="col">
                                    <span className="sr-only">Feature by plans</span>
                                </th>
                                {tiers.map((tier) => (
                                    <th key={tier.name} className="w-1/4 px-6 pt-0 pb-4 text-center text-display-sm font-extralight text-primary" scope="col">
                                        <p className="inline-flex items-center gap-2">
                                            {tier.name}
                                            {tier.badge && (
                                                <Badge size="md" type="pill-color" color="brand">
                                                    {tier.badge}
                                                </Badge>
                                            )}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="h-full px-6 py-4 align-top md:pb-12">
                                        <div className="flex h-full flex-col justify-between">
                                            <p className="mt-1 text-sm text-tertiary text-center">{tier.description}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            {sections.map((section, index) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            className={cx(index > 0 ? "pt-10" : "pt-0", "px-6 pb-4 text-left text-sm font-medium text-brand-600 uppercase")}
                                            colSpan={4}
                                            scope="colgroup"
                                        >
                                            {section.name}
                                        </th>
                                    </tr>
                                    {section.features.map((feature, index) => (
                                        <tr
                                            key={feature.name}
                                            className={cx(
                                                index % 2 === 0 && "bg-secondary_alt",
                                                index === section.features.length - 1 && "border-b border-secondary",
                                            )}
                                        >
                                            <th className="px-6 py-5.5 text-left text-sm font-medium text-primary" scope="row">
                                                {feature.name}
                                                <Tooltip title={feature.tooltip.title} description={feature.tooltip.description} delay={0} closeDelay={0}>
                                                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                                                        <HelpCircle className="ml-1 inline-block size-4" />
                                                    </TooltipTrigger>
                                                </Tooltip>
                                            </th>
                                            {tiers.map((tier) => (
                                                <td key={tier.name} className="px-6 py-5">
                                                    <div className="flex items-center justify-center text-center">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="size-6 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="mx-auto size-5 text-fg-quaternary" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.name] === true ? "Included" : "Not included"} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className="sr-only" scope="row">
                                    Choose your plan
                                </th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="px-6 pt-10 pb-8">
                                        <div className="flex flex-col gap-3">
                                            <Button size="xl">Get started</Button>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

const FAQAccordion01 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-secondary py-16 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-xl">Your Questions, Answered</h2>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <div className="flex flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-lg font-medium text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="mt-0.5 flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ height: openQuestions.has(index) ? "auto" : 0, opacity: openQuestions.has(index) ? 1 : 0 }}
                                    transition={{ type: "spring", damping: 24, stiffness: 240, bounce: 0.4 }}
                                >
                                    <div className="pt-2 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
                            alt="Marco Kelly"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                            alt="Amelie Laurent"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80"
                            alt="Jaya Willis"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

const PlanFeaturesTable = () => {
    return (
        <div className="bg-primary">

            <PricingLargeTable01 />

            <FAQAccordion01 />
        </div>
    );
};

export default PlanFeaturesTable;

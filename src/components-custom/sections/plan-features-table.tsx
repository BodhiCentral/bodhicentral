"use client";

import { Fragment, useState } from "react";
import { CheckCircle, HelpCircle, Minus } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

type Tier = { name: string; canChatToSales?: boolean; highlighted?: boolean; badge?: string; href?: string; priceMonthly: number; description: string };

const tiers: Tier[] = [
    { name: "Community", href: "#", priceMonthly: 0, description: "Free account for individual practitioners and students of the Dharma." },
    {
        name: "Standard",
        highlighted: true,
        badge: "Popular",
        href: "#",
        priceMonthly: 2,
        description: "Low-cost plan for long-term practitioners and dedicated students of the Dharma.",
    },
    {
        name: "Patron",
        href: "#",
        priceMonthly: 10,
        description: "For generous supporters of our mission and patrons of the Dharma.",
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
        ],
    },
    {
        name: "Content features",
        features: [
            {
                name: "Full Canon navigation",
                tooltip: {
                    title: "Canon navigation for all traditions",
                    description: "Access to all canon traditions, with full navigation.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Full access to all texts",
                tooltip: {
                    title: "Full access to all texts",
                    description: "Access to all canon traditions, including pali, and tibetan texts.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Historical Timelines",
                tooltip: {
                    title: "Historical Timelines",
                    description: "Visual access to historical timelines for all traditions",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Learning Paths in the public domain",
                tooltip: {
                    title: "Full access to all learning materials",
                    description: "Access to all learning paths and materials in the public domain",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "Learning Paths licensed by commercial partners",
                tooltip: {
                    title: "Access to learning paths by commercial partners",
                    description: "This includes the learning paths that are created and licensed by our commercial partners.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Advanced Media synchronization",
                tooltip: {
                    title: "Advanced Media synchronization",
                    description: "State-of-the-art multimedia experiences combining the best of scripture and education.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Quizzes, infographics, and educational materials",
                tooltip: {
                    title: "Quizzes, infographics, and educational materials",
                    description: "Curated educational materials produced by expert educators and qualified Buddhist teachers and instructors.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
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
                    description: "Add personal notes in the margin of the texts for quick reference.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Categorized bookmarks",
                tooltip: {
                    title: "Categorized bookmarks",
                    description: "Bookmark the texts and organize them by categories.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Multi-color highlights",
                tooltip: {
                    title: "Multi-color highlights",
                    description: "Highlight the texts in different colors to organize them by categories.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Footnotes (where provided by the publisher)",
                tooltip: {
                    title: "Footnotes (where provided by the publisher)",
                    description: "View in context footnotes and other publisher-supplied metadata where available.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Cross-references (static lists)",
                tooltip: {
                    title: "Cross-references (static lists)",
                    description: "View cross-references to other texts where available.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Textual apparatus",
                tooltip: {
                    title: "Textual apparatus",
                    description: "View textual apparatus to compare different versions of the texts.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Beginner-friendly introductions to specific traditions",
                tooltip: {
                    title: "Beginner-friendly introductions to specific traditions",
                    description: "Access guided introductions and foundational materials for specific Buddhist traditions and practices.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Lexicon",
                tooltip: {
                    title: "Lexicon",
                    description: "Access the lexicon to look up terms and definitions.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Clickable cross-reference navigation",
                tooltip: {
                    title: "Clickable cross-reference navigation",
                    description: "Clickable cross-reference navigation for easy access to related texts and verses.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Open referenced passages in full context",
                tooltip: {
                    title: "Open referenced passages in full context",
                    description: "Open referenced passages in full context (in addition to showing them inline where they appear).",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Advance Canon search",
                tooltip: {
                    title: "Advance Canon search",
                    description: "Filter Canon texts by title, section, keyword, and more.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Priority access to beta study tools",
                tooltip: {
                    title: "Priority access to beta study tools",
                    description: "Get early access to new study tools before they are released to the public.",
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
                    title: "Supporter recognition on Media",
                    description: "With your Patron subscription, we are adding your name to all our Media presence.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "Helps fund licensing, infrasture, and development",
                tooltip: {
                    title: "Helps funding, infrasture, and development",
                    description: "Your generosity helps us move forward with our mission.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
        ],
    },
];

const PricingLargeTable01 = () => {
    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-container px-4 py-10 md:px-8 md:py-12">
                <div className="mx-auto flex w-full flex-col items-center text-center">

                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg self-start">Subscriptions and features overview</h2>
                </div>
            </div>

            <div className="w-full pb-16 md:px-8 md:pb-16 lg:mx-auto lg:max-w-container">
                {/* xs to lg */}
                <div className="space-y-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section key={tier.name}>
                            <div className="mb-8 flex flex-col px-4">
                                <h3 key={tier.name} className="flex items-center gap-2 text-display-lg font-extralight text-primary">
                                    {tier.name}
                                    {tier.badge && (
                                        <Badge size="md" type="pill-color" color="brand">
                                            {tier.badge}
                                        </Badge>
                                    )}
                                </h3>

                                <p className="mt-4 text-sm text-tertiary">{tier.description}</p>
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
                                                <th className="flex py-3 pl-4 text-left text-sm font-medium text-brand-primary" scope="row">
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
                            <tr>
                                <th scope="col">
                                    <span className="sr-only">Feature by plans</span>
                                </th>
                                {tiers.map((tier) => (
                                    <th key={tier.name} className="w-1/4 px-6 pt-2 pb-3 text-center text-display-xs uppercase font-light text-brand-700 border-b border-secondary" scope="col">
                                        <h3 className="inline-flex items-center gap-2">
                                            {tier.name}
                                        </h3>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="h-full px-6 py-4 align-top md:pb-8">
                                        <div className="flex h-full flex-col justify-between">
                                            <p className="mt-0.5 text-sm text-tertiary text-center">{tier.description}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            {sections.map((section, index) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            className={cx(index > 0 ? "pt-8" : "pt-8 border-t border-secondary", "px-6 pb-4 text-left text-md font-extrabold text-brand-600 tracking-wide bg-brand-50 dark:bg-muted-900 rounded-b-xl")}
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
                                                index % 2 === 0 && "bg-primary",
                                                index === section.features.length - 1 && "border-b border-secondary pb-4",
                                            )}
                                        >
                                            <th className="px-6 py-3 text-left text-sm font-medium text-primary" scope="row">
                                                {feature.name}
                                                <Tooltip title={feature.tooltip.title} description={feature.tooltip.description} delay={0} closeDelay={0}>
                                                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                                                        <HelpCircle className="ml-1 inline-block size-4" />
                                                    </TooltipTrigger>
                                                </Tooltip>
                                            </th>
                                            {tiers.map((tier) => (
                                                <td key={tier.name} className="px-6 py-4">
                                                    <div className="flex items-center justify-center text-center">
                                                        {typeof feature.tiers[tier.name] === "string" ? (
                                                            <span className="block text-sm text-tertiary">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckCircle className="size-5 text-fg-success-primary" />
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
                                    <td key={tier.name} className="px-6 pt-10 pb-4">
                                        <div className="flex flex-col gap-3">
                                            <Button size="sm">Get started</Button>
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

const PlanFeaturesTable = () => {
    return (
        <div className="bg-primary">
            <PricingLargeTable01 />
        </div>
    );
};

export default PlanFeaturesTable;

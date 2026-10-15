"use client";

import { Fragment, useState } from "react";
import { CheckCircle, HelpCircle, Minus } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

type Tier = {
    name: string;
    canChatToSales?: boolean;
    highlighted?: boolean;
    badge?: string;
    href?: string;
    priceMonthly: number;
    description: string;
    primaryAction: string;
};

const tiers: Tier[] = [
    { name: "Not Signed In", href: "#", priceMonthly: 0, description: "Visitors without a Bodhi Central account.", primaryAction: "Begin anywhere" },
    { name: "Community", href: "#", priceMonthly: 0, description: "Free account to keep your place and library.", primaryAction: "Create a free account" },
    {
        name: "Standard",
        highlighted: true,
        href: "#",
        priceMonthly: 4,
        description: "Tools for serious reading and learning.",
        primaryAction: "Start with Standard",
    },
    {
        name: "Patron",
        href: "#",
        priceMonthly: 15,
        description: "Supporters of our mission and patrons of the Dharma.",
        primaryAction: "Become a Patron",
    },
];

type Section = { name: string; features: { name: string; tooltip: { title: string; description: string }; tiers: Record<string, boolean | string> }[] };

const sections: Section[] = [
    {
        name: "Reading",
        features: [
            {
                name: "The canon — every text we have published",
                tooltip: {
                    title: "The Canon",
                    description: "The canon — every text we have published, in every language we publish it in",
                },
                tiers: { "Not Signed In": true, Community: true, Standard: true, Patron: true },
            },
            {
                name: "Footnotes, variant readings and cross-references",
                tooltip: {
                    title: "Footnotes, variant readings and cross-references.",
                    description: "Footnotes, variant readings and cross-references, wherever a text carries them",
                },
                tiers: { "Not Signed In": true, Community: true, Standard: true, Patron: true },
            },
            {
                name: "Essays, learning paths, and blog",
                tooltip: {
                    title: "Essays, Learning Paths browsing and the blog",
                    description: "Essays, news and Learning Paths catalogue browsing",
                },
                tiers: { "Not Signed In": true, Community: true, Standard: true, Patron: true },
            },
            {
                name: "Published timelines",
                tooltip: {
                    title: "Published timelines",
                    description: "Published timelines, including Traditions at a Glance",
                },
                tiers: { "Not Signed In": true, Community: true, Standard: true, Patron: true },
            },
            {
                name: "Search",
                tooltip: {
                    title: "Search",
                    description: "Search everything withing the canon and the public site.",
                },
                tiers: { "Not Signed In": true, Community: true, Standard: true, Patron: true },
            },
        ],
    },
    {
        name: "Your reading",
        features: [
            {
                name: "Your place kept, and the texts you save",
                tooltip: {
                    title: "Your place kept, and the texts you save",
                    description: "Your place kept, and the texts you save — Continue Reading, My Library.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
            {
                name: "My Spaces",
                tooltip: {
                    title: "My Spaces",
                    description: "Build your own workspaces and organize layouts the way you need.",
                },
                tiers: { Community: true, Standard: true, Patron: true },
            },
        ],
    },
    {
        name: "Study tools for personal engagement",
        features: [
            {
                name: "Notes and highlights",
                tooltip: {
                    title: "Notes and highlights",
                    description: "Your personal notes anchored to text and color-coded highlights ",
                },
                tiers: { "Not Signed In": false, Community: false, Standard: true, Patron: true },
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
                name: "A personal library and workspaces",
                tooltip: {
                    title: "A personal library and workspaces",
                    description: "Your personal library and workspaces to help your readings close to you and easy to retreive.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Advanced search and filtering",
                tooltip: {
                    title: "Advanced search and filtering",
                    description: "Advanced search and filtering expanding navigational capabilitites.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Study tools over a timeline",
                tooltip: {
                    title: "Study tools over a timeline",
                    description: "Study tools developed specifically to enhance your experience built over a timeline",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
            {
                name: "Multimedia synchronized to text",
                tooltip: {
                    title: "Media synchronised to text",
                    description: "Multimedia synchronized to text, wherever a recording or asset exists.",
                },
                tiers: { Community: false, Standard: true, Patron: true },
            },
        ],
    },
    {
        name: "Support our mission",
        features: [
            {
                name: "Early access to new texts and features",
                tooltip: {
                    title: "Early access",
                    description: "We will share with you early access to new texts and features coming to the platform.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "Your name on the supporters page",
                tooltip: {
                    title: "Your name on the supporters page",
                    description: "Your name will be listed on the supporters page, if you want it there.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
            {
                name: "A yearly written account of what your support paid for",
                tooltip: {
                    title: "A yearly written account",
                    description: "You will receive a yearly written account of what your support paid for.",
                },
                tiers: { Community: false, Standard: false, Patron: true },
            },
        ],
    },
];

const PricingLargeTable01 = () => {
    return (
        <section className="bg-utility-neutral-100">
            <div className="mx-auto max-w-container px-4 py-4 md:px-8 md:py-6">
                <div className="mx-auto flex w-full flex-col items-center text-center">
                    <h2 className="self-start text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">
                        Everything, side by side
                    </h2>
                </div>
            </div>

            <div className="w-full pb-12 md:px-8 md:pb-14 lg:mx-auto lg:max-w-container">
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

                                <p className="mt-4 text-md text-tertiary">{tier.description}</p>
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
                                    <th
                                        key={tier.name}
                                        className="w-1/5 border-b border-secondary px-6 pt-2 pb-3 text-center text-display-xs font-light text-brand-700 uppercase"
                                        scope="col"
                                    >
                                        <h3 className="inline-flex items-center gap-2">{tier.name}</h3>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                {tiers.map((tier) => (
                                    <td key={tier.name} className="h-full px-6 py-4 align-top md:pb-4">
                                        <div className="flex h-full flex-col justify-between">
                                            <p className="mt-0.5 text-center text-sm text-tertiary">{tier.description}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            {sections.map((section, index) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            className={cx(
                                                index > 0 ? "pt-6" : "pt-6",
                                                "bg-neutral-100 px-6 pb-4 text-left text-lg font-extrabold tracking-wide text-brand-600 dark:bg-muted-900",
                                            )}
                                            colSpan={5}
                                            scope="colgroup"
                                        >
                                            {section.name}
                                        </th>
                                    </tr>
                                    {section.features.map((feature, index) => (
                                        <tr key={feature.name} className={cx(index === section.features.length - 1 && "pb-4")}>
                                            <th className="py-2 pr-2 pl-6 text-left text-sm font-normal text-primary font-stretch-condensed" scope="row">
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
                                                                    <CheckCircle className="size-4 text-fg-success-primary" />
                                                                ) : (
                                                                    <Minus className="mx-auto size-4 text-fg-quaternary" aria-hidden="true" />
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
                                            <Button size="sm">{tier.primaryAction}</Button>
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

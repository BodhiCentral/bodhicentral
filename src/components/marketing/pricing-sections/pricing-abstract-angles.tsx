"use client";

import { useState } from "react";
import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Toggle } from "@/components/base/toggle/toggle";
import { BackgroundStripes } from "@/components/marketing/header-section/base-components/background-stripes";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const PricingAbstractAngles = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            title: "Basic Reading Experience",
            subtitle: selectedPlan === "monthly" ? "Free" : "Free",
            description: "Full access to the Buddhist texts",
            features: [
                "Unlimited access to the Buddhist texts",
                "Full browser experience",
                "Reading and learning paths experiences",
                "Basic bookmarks",

            ],
            icon: Zap,
            buttonText: "Continue learning",
        },
        {
            title: "Discovery Experience",
            subtitle: selectedPlan === "monthly" ? "Free" : "Free",
            description: "Sign up to your Desk",
            badge: "Popular",
            features: [
                "Discover My Desk basic features",
                "Basic storage capacity",
                "Up to 3 personal Spaces",
                "Up to 5 stored texts",
                "Up to 20 Saved Searches",
                "Bookmarks",
                "Chat and email support",
            ],
            icon: LayersTwo01,
            buttonText: "Start free sign up",
        },
        {
            title: "Full Access Subscription",
            subtitle: selectedPlan === "monthly" ? "$2/month" : "$20/year",
            description: "Unlimited everything!",
            badge: "Popular",
            features: [
                "Everything in Discovery",
                "Unlimited personal Spaces",
                "Unlimited stored texts",
                "Unlimited Saved Searches",
                "Unlimited bookmarks",
                "Unlimited notes",
                "Priority support",
            ],
            icon: LayersThree01,
            buttonText: "Start Subscription",
        },
    ];

    return (
        <section className="bg-primary">
            <div className="bg-utility-brand-50_alt pt-16 md:pt-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <Badge size="lg" type="pill-color" color="brand" className="hidden bg-transparent md:flex">
                            Subscription plans
                        </Badge>
                        <Badge size="md" type="pill-color" color="brand" className="bg-transparent md:hidden">
                            Subscription plans
                        </Badge>

                        <h2 className="mt-4 text-display-md font-semibold text-brand-primary md:text-display-lg">Plans for all</h2>
                        <p className="mt-4 text-lg text-primary md:mt-6 md:text-xl">
                            We believe that Buddhist texts and learning paths should be open and accessible for everyone. Please enjoy the <strong>Basic</strong> and <strong>Discovery</strong> experiences!
                        </p>
                        <p className="mt-4 text-lg text-primary md:mt-6 md:text-xl">
                            Your <strong>Full Access</strong> subscription helps us keep the platform running and improving, and allows us to offer the Basic and Discovery experiences for free.
                        </p>
                        <div className="mt-8 flex md:mt-12">
                            <div className="relative z-10 inline-flex gap-3">
                                <Toggle
                                    id="annual-pricing"
                                    size="md"
                                    isSelected={selectedPlan === "annually"}
                                    onChange={(value) => setSelectedPlan(value ? "annually" : "monthly")}
                                />

                                <label htmlFor="annual-pricing" className="text-md font-medium text-brand-primary select-none">
                                    Annual Subscription <span className="text-brand-secondary">(save 20%)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-16 md:py-24">
                <BackgroundStripes />
                <div className="relative mx-auto max-w-container px-4 md:px-8">
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                        {plans.map((plan) => (
                            <PricingTierCardIcon key={plan.title} {...plan} iconTheme="modern" iconColor="gray" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

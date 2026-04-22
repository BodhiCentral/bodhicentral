"use client";

import { useState } from "react";
import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { Toggle } from "@/components/base/toggle/toggle";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const PlansTab = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    // Simulate what plan the user currently has (we will hook this to Supabase later)
    // Try changing the currentPlanId to ('community'), ('standard'), or ('patron') to see the UI update instantly!
    const [currentPlanId, setCurrentPlanId] = useState<'community' | 'standard' | 'patron'>('community');

    const getCurrentPlanDetails = () => {
        switch (currentPlanId) {
            case 'community':
                return {
                    name: 'COMMUNITY',
                    price: 'FREE',
                    period: '',
                    description: 'Account personalization and saved preferences.',
                    storageText: 'Basic cloud storage.',
                    storagePercent: 90,
                    showProgress: true,
                    renews: 'Never expires'
                }
            case 'standard':
                return {
                    name: 'STANDARD',
                    price: '$2',
                    period: '/ month',
                    description: 'Daily Buddhist study tools for personal engagement.',
                    storageText: '50 MB / 100 MB',
                    storagePercent: 10,
                    showProgress: true,
                    renews: 'Never expires'
                }
            case 'patron':
                return {
                    name: 'PATRON',
                    price: '$15',
                    period: '/ month',
                    description: 'Support Bodhi Central’s mission and help fund ongoing development.',
                    storageText: 'Unlimited personal Spaces and Texts',
                    showProgress: false,
                    renews: 'securely renews on Oct 12, 2026'
                }
        }
    };

    const currentDetails = getCurrentPlanDetails();

    const plans = [
        {
            id: 'free',
            title: "COMMUNITY",
            subtitle: selectedPlan === "monthly" ? "Free" : "Free",
            description: "Account personalization and basic preferences.",
            features: [
                "Access to all the Buddhist texts",
                "Full browser experience",
                "Textual references",
                "Reading & display settings",
            ],
            icon: Zap,
            buttonText: currentPlanId === 'community' ? "Current Plan" : "Downgrade to COMMUNITY",
        },
        {
            id: 'standard',
            title: "STANDARD",
            subtitle: selectedPlan === "monthly" ? "$2/month" : "$20/year",
            description: "Daily Buddhist study tools for personal engagement.",
            badge: "Popular",
            features: [
                "All Free-tier features",
                "Marginal notes",
                "Categorized bookmarks",
                "Multicolor-highlights",
                "Footnotes",
                "Search personal notes, bookmarks, and highlights",
            ],
            icon: LayersTwo01,
            buttonText: currentPlanId === 'standard' ? "Current Plan" : currentPlanId === 'community' ? "Upgrade to STANDARD" : "Downgrade to STANDARD",
        },
        {
            id: 'patron',
            title: "PATRON",
            subtitle: selectedPlan === "monthly" ? "$15/month" : "$150/year",
            description: "Support Bodhi Central’s mission and help fund ongoing development.",
            badge: "Popular",
            features: [
                "All Standard-tier features",
                "Early access to experimental and pre-release features",
                "Preview new tools before general availability",
                "Supported recognition in our website",
                "Helps fund licensing, infrastructure, and development",
                "Patron-exclusive content gifts",
            ],
            icon: LayersThree01,
            buttonText: currentPlanId === 'patron' ? "Current Plan" : "Upgrade to PATRON",
        },
    ];

    return (
        <div className="flex flex-col gap-8 px-4 lg:px-8">
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Subscription plan</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage your subscription, billing cycle, and plan features.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Dynamic Current Plan Card */}
                <div className="flex flex-col gap-6 rounded-xl bg-primary p-6 shadow-xs ring-1 ring-secondary ring-inset">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-semibold text-primary">{currentDetails.name}</h3>
                                <Badge size="sm" type="modern">
                                    Active
                                </Badge>
                            </div>
                            <p className="mt-1 text-sm text-secondary">{currentDetails.description}</p>
                        </div>
                        <div className="flex items-end gap-1 sm:flex-col sm:items-end sm:gap-0">
                            <div className="flex items-baseline gap-1">
                                <span className="text-display-sm font-semibold text-primary">{currentDetails.price}</span>
                                {currentDetails.period && <span className="text-sm text-secondary">{currentDetails.period}</span>}
                            </div>
                        </div>
                    </div>

                    <hr className="h-px border-none bg-border-secondary" />

                    {/* Usage limits */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-secondary">Storage usage</span>
                            <span className="text-sm font-medium text-secondary">{currentDetails.storageText}</span>
                        </div>
                        {currentDetails.showProgress && (
                            <>
                                <ProgressBar value={currentDetails.storagePercent!} max={100} min={0} />
                                <p className="text-sm text-tertiary">Consider upgrading for more storage.</p>
                            </>
                        )}
                        {!currentDetails.showProgress && currentPlanId === 'standard' && (
                            <p className="text-sm text-tertiary">You have unlimited access! Feel free to store as many texts and spaces as you need.</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-secondary">Your plan <span className="font-semibold text-primary">{currentDetails.renews}</span>.</p>
                        <div className="flex items-center gap-3">
                            {currentPlanId === 'patron' && (
                                <Button size="md" color="secondary">
                                    Cancel plan
                                </Button>
                            )}
                            {currentPlanId !== 'patron' && (
                                <Button size="md" color="primary" onClick={() => setCurrentPlanId('standard')}>
                                    Upgrade
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Upgrade Options */}
                <div className="mt-4 flex flex-col gap-4 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h4 className="text-md font-semibold text-primary">Available plans</h4>

                        <div className="flex items-center gap-3">
                            <label htmlFor="dashboard-annual-pricing" className="text-sm font-medium text-secondary select-none">
                                Annual billing (save 20%)
                            </label>
                            <Toggle
                                id="dashboard-annual-pricing"
                                size="sm"
                                isSelected={selectedPlan === "annually"}
                                onChange={(value) => setSelectedPlan(value ? "annually" : "monthly")}
                            />
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 xl:gap-8">
                        {plans.map((plan) => (
                            <PricingTierCardIcon key={plan.id} {...plan} iconTheme="modern" iconColor="gray" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

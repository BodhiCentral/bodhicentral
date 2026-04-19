"use client";

import { useState, useEffect } from "react";
import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { Toggle } from "@/components/base/toggle/toggle";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { createClient } from "@/utils/supabase/client";

export const PlansTab = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState<any>(null);

    // Get the base URL dynamicly for redirects
    const getBaseUrl = () => {
        if (typeof window !== "undefined") {
            return `${window.location.protocol}//${window.location.host}`;
        }
        return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    };

    const siteUrl = getBaseUrl();
    const PATREON_CAMPAIGN_URL = process.env.NEXT_PUBLIC_PATREON_CAMPAIGN_URL || "https://www.patreon.com/BodhiCentral";

    // Default to 'discovery' if nothing is found
    const [currentPlanId, setCurrentPlanId] = useState<'basic' | 'discovery' | 'full'>('discovery');

    useEffect(() => {
        const fetchProfile = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                const { data } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (data) {
                    setProfile(data);
                    // Match plan_type to our UI IDs
                    if (data.plan_type === 'full_access') setCurrentPlanId('full');
                    else if (data.plan_type === 'free' && data.patreon_id) setCurrentPlanId('discovery');
                    else setCurrentPlanId('basic');
                }
            }
            setLoading(false);
        };

        fetchProfile();
    }, []);

    const getCurrentPlanDetails = () => {
        switch (currentPlanId) {
            case 'basic':
                return {
                    name: 'Basic Reading Experience',
                    price: 'Free',
                    period: '',
                    description: 'Full access to the Buddhist texts.',
                    storageText: 'Cloud storage is not included.',
                    showProgress: false,
                    renews: 'Never expires'
                }
            case 'discovery':
                return {
                    name: 'Discovery Experience',
                    price: 'Free',
                    period: '',
                    description: 'Sign up to your Desk with basic features.',
                    storageText: '82 MB / 100 MB',
                    storagePercent: 82,
                    showProgress: true,
                    renews: 'Never expires'
                }
            case 'full':
                return {
                    name: 'Full Access Subscription',
                    price: '$2',
                    period: '/ month',
                    description: 'Unlimited everything!',
                    storageText: 'Unlimited personal Spaces and Texts',
                    showProgress: false,
                    renews: 'securely renews on Oct 12, 2026'
                }
        }
    };

    const currentDetails = getCurrentPlanDetails();

    const plans = [
        {
            id: 'basic',
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
            buttonText: currentPlanId === 'basic' ? "Current Plan" : "Downgrade to Basic",
        },
        {
            id: 'discovery',
            title: "Discovery Experience",
            subtitle: selectedPlan === "monthly" ? "Free" : "Free",
            description: "Sign up to your Desk",
            badge: "Popular",
            features: [
                "Discover My Desk basic features",
                "Basic storage capacity",
                "Up to 2 personal Spaces",
                "Up to 5 stored texts",
                "Up to 20 Saved Searches",
                "Bookmarks",
                "Chat and email support",
            ],
            icon: LayersTwo01,
            buttonText: currentPlanId === 'discovery' ? "Current Plan" : currentPlanId === 'basic' ? "Start free account" : "Downgrade to Discovery",
        },
        {
            id: 'full',
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
            buttonText: currentPlanId === 'full' ? "Current Subscription" : "Start Subscription",
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
                                <p className="text-sm text-tertiary">You are approaching your storage limit. Consider upgrading for unlimited storage.</p>
                            </>
                        )}
                        {!currentDetails.showProgress && currentPlanId === 'full' && (
                            <p className="text-sm text-tertiary text-brand-primary">You have unlimited access! Feel free to store as many texts and spaces as you need.</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-secondary">Your plan <span className="font-semibold text-primary">{currentDetails.renews}</span>.</p>
                        <div className="flex items-center gap-3">
                            {currentPlanId === 'full' && (
                                <Button size="md" color="secondary">
                                    Manual review
                                </Button>
                            )}
                            {currentPlanId !== 'full' && (
                                <Button size="md" color="primary" href={PATREON_CAMPAIGN_URL}>
                                    Upgrade to Full Access
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Patreon Connection Status Card */}
                <div className="flex flex-col gap-6 rounded-xl bg-orange-50/50 dark:bg-orange-900/10 p-6 shadow-xs ring-1 ring-orange-200 dark:ring-orange-800/50 ring-inset">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-orange-600" fill="currentColor">
                                        <path d="M0 .48v23.04h24V.48H0zm15.386 17.315c-2.525 0-4.572-2.047-4.572-4.572 0-2.525 2.047-4.572 4.572-4.572 2.525 0 4.572 2.047 4.572 4.572 0 2.525-2.047 4.572-4.572 4.572zm-12.012 0h2.418V6.213H3.374v11.587z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-primary">Patreon Integration</h3>
                                    <p className="text-sm text-secondary">
                                        {profile?.patreon_id
                                            ? `Account Synced (ID: ${profile.patreon_id})`
                                            : "Link your account to unlock professional features"}
                                    </p>
                                </div>
                            </div>
                            {profile?.patreon_id ? (
                                <Badge size="sm" color="success">Linked</Badge>
                            ) : (
                                <Badge size="sm" color="warning">Not Linked</Badge>
                            )}
                        </div>

                        {/* Step By Step Guide */}
                        {!profile?.patreon_id && (
                            <div className="flex flex-col gap-3 pt-2">
                                <p className="text-sm font-medium text-primary">How to upgrade:</p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2 rounded-lg bg-orange-100/50 dark:bg-orange-900/20 p-3 ring-1 ring-orange-200 dark:ring-orange-800/30">
                                        <span className="text-xs font-bold text-orange-700 dark:text-orange-400">STEP 1</span>
                                        <p className="text-xs text-secondary italic">Become a patron on our official page for $2/mo.</p>
                                        <Button size="sm" color="primary" href={PATREON_CAMPAIGN_URL} className="mt-1">Join Patreon $2 Tier</Button>
                                    </div>
                                    <div className="flex flex-col gap-2 rounded-lg bg-orange-100/50 dark:bg-orange-900/20 p-3 ring-1 ring-orange-200 dark:ring-orange-800/30">
                                        <span className="text-xs font-bold text-orange-700 dark:text-orange-400">STEP 2</span>
                                        <p className="text-xs text-secondary italic">Sync your account to verify your subscription.</p>
                                        <Button size="sm" color="secondary" href={`https://www.patreon.com/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_PATREON_CLIENT_ID || 'MDts3ePb59IdeCBmMpWOe0c5kLuJdK-GPzfB1BCZ7f1IRF_m47rUKKvsZIeymeuC'}&redirect_uri=${siteUrl}/api/auth/patreon/callback`}
                                            className="mt-1">Sync Patreon Account</Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {profile?.patreon_id && profile?.patreon_status !== 'active_patron' && (
                            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800/50 dark:bg-orange-900/10">
                                <p className="text-xs text-orange-800 dark:text-orange-300">
                                    <strong>Status:</strong> Your account is connected, but we don't see an active $2 subscription. <a href={PATREON_CAMPAIGN_URL} className="underline font-bold">Join the tier here</a> and click sync again.
                                </p>
                            </div>
                        )}
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

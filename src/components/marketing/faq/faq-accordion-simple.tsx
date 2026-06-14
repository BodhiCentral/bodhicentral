"use client";

import { useState } from "react";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";

const faqsExtended = [
    {
        question: "What is included in the Community free plan?",
        answer: "Anyone can read the Bodhi Central scriptures for free — no account or subscription required. Free access includes: Reading all original canon traditions and publicly availiable translations, navigating the canon with intuitive browsing experiences, and reading display preferences. Creating a Community free account is optional and only required to save personal preferences.",
        icon: Heart,
    },
    {
        question: "What do I get by creating a free acccount?",
        answer: "A free account lets you personalize your experience across devices, including: Preferred canon galleries, font settings, light and dark mode selectors, default reading layout, and theme preferences. Creating a free account does not change which canon texts you can access — it simply lets Bodhi Central remember how you prefer to study.",
        icon: SwitchHorizontal01,
    },
    {
        question: "Why does Bodhi Central charge for some features?",
        answer: "Bodhi Central provides free access to Buddhist scripture worldwide, but operating the platform is not free. Optional subscriptions unlock advanced study tools that support deeper, more efficient study — while also sustaining the platform log-term. Paid plans focus on capabilities such as organization, analysis, and original-language tools, while the core canonical reading remains freely available to everyone.",
        icon: SlashCircle01,
    },
    {
        question: "Does Bodhi Central charge for access to the scripture itself?",
        answer: "No. We do not charge for access to any Buddhist scripture. All available Canon traditions remain freely accessible, without paywalls or subscriptions. Subscriptions apply only to optional study tools and advanced features, not scripture.",
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
        question: "Do you charge for scriptural footnotes, cross-references, or other publisher-supplied metadata?",
        answer: "No. For any Scripture version that includes footnotes, cross-references, or other publisher-supplied study metadata, that information is made freely available to all users directly within the reader view. This applies to all anonymous users worldwide regardless of registration or subscription status. Optional subscriptions do not restrict or modify basic access to this material at the bottom of each chapter. Paid plans may unlock additional tools that make it easier to view, navigate, study, or reference this information alongside the Scriptural texts, but the underlying content itself remains freely accessible to everyone.",
        icon: Mail01,
    },
];

export const FAQAccordionSimple = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="py-16 md:py-20 relative z-1">
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

                                        <span aria-hidden="true" className="mt-0.5 flex size-5 items-center text-fg-brand-primary">
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
            </div>
        </section>
    );
};

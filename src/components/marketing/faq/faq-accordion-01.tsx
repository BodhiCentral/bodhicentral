"use client";

import { useState } from "react";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { StillHaveQuestions } from "./still-have-questions-01";

const faqsExtended = [
    {
        question: "Do I need an account to read?",
        answer: "No. Every text we publish, everything published around it, and search across all of it work without an account. An account is for keeping your own reading.",
        icon: Heart,
    },
    {
        question: "What does a free account add?",
        answer: "Your place in whatever you are reading, the texts you save, and your reading and display settings — on every device you sign in on. Nothing about what you can read changes.",
        icon: SwitchHorizontal01,
    },
    {
        question: "Do you charge for footnotes, cross-references or a text's apparatus?",
        answer: "No. Where a text carries footnotes, variant readings, cross-references or an apparatus of its own, those are part of the text and are free to every reader, signed in or not. Paid tools can help you search and organise your own work across them; the material itself is never behind a price.",
        icon: SlashCircle01,
    },
    {
        question: "What does Standard actually unlock?",
        answer: "The tools you use on a text rather than anything in the text: notes and highlights, categorised bookmarks, a personal library and workspaces, advanced search and filtering, the study tools over a timeline, and reading synchronised to media wherever a recording exists.",
        icon: File05,
    },
    {
        question: "Can I change or cancel at any time?",
        answer: "Yes. Upgrades take effect immediately. Downgrades and cancellations take effect at the end of the period you have already paid for, and you keep what you paid for until then.",
        icon: CreditCardRefresh,
    },
    {
        question: "Do prices differ by country?",
        answer: "Yes. Prices are published and are the same for everyone in a region, and in lower-income regions they are set lower — to what people there can reasonably pay rather than to what the market would bear. The price you see is the one for where you are.",
        icon: Mail01,
    },
    {
        question: "Why is there a Patron tier if it unlocks nothing extra?",
        answer: "Because it is not a product tier. It pays for translation and editorial work on a corpus that stays free, and once a year we publish an account of what it funded. If it unlocked study tools it would be a purchase rather than support, and we would rather it stayed support.",
        icon: Mail01,
    },
    {
        question: "Why does a Buddhist platform charge at all?",
        answer: "Because a corpus that has to be here in twenty years is hard to promise on an annual appeal. We are a for-profit company doing work this field has usually funded by donation, and we think a company that earns its keep from the people it serves answers to them more continuously than to a funder. The full reasoning, and the commitments that make it checkable, are on our About page.",
        icon: Mail01,
    },
    {
        question: "What happens to my notes and highlights if I stop paying?",
        answer: "They stay. Cancelling a subscription stops the paid tools; it does not remove anything you have already written, and your notes, highlights, bookmarks and saved texts remain visible, and downloadable, on the free tier. What we do not do is keep them for ever if you never come back: if an account goes twelve months without anyone signing in to it, we write to you first — telling you what will be removed, on what date, and giving you a link to download all of it — and only then remove it from our databases. **The clock runs on whether you are using Bodhi Central, not on whether you are paying for it.**",
        icon: Mail01,
    },
];

export const FAQAccordion01 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-warm-off-300 py-16 md:py-20 dark:bg-warm-off-950">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-xl dark:text-brand-400">Your Questions, Answered</h2>
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
                                        <span className="text-xl font-medium text-primary">{faq.question}</span>

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
            <StillHaveQuestions />
        </section>
    );
};

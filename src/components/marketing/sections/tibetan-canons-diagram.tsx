"use client";

import { useState } from "react";
import { Dataflow01, Columns03, Rows03 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Toggle } from "@/components/base/toggle/toggle";
import { cx } from "@/utils/cx";

export const TibetanCanonsDiagram = () => {
    const [isRowsLayout, setIsRowsLayout] = useState(true);

    return (
        <section className="py-10 md:py-14 bg-linear-to-b from-red-50 to-orange-100 dark:bg-linear-to-b dark:from-gray-900 dark:to-red-950">
            {/* Section Header */}
            <div className="mx-auto max-w-container px-4 md:px-8 pb-4">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Tibetan Canons</span>
                    <h2 className="mt-1 text-display-md font-semibold text-primary md:text-display-lg">The Tibetan Canons at a glance</h2>
                </div>
            </div>

            {/* Toggle Switch */}
            <div className="mx-auto max-w-container px-4 md:px-6 pb-4">
                <div className="flex justify-end items-center gap-3">
                    <button
                        onClick={() => setIsRowsLayout(false)}
                        className={cx(
                            "p-1 rounded-md transition-colors",
                            !isRowsLayout ? "text-brand-700 bg-red-100 dark:bg-red-900/40" : "text-tertiary hover:text-secondary"
                        )}
                        aria-label="Columns Layout"
                    >
                        <Columns03 className="size-5" />
                    </button>

                    <button
                        onClick={() => setIsRowsLayout(true)}
                        className={cx(
                            "p-1 rounded-md transition-colors",
                            isRowsLayout ? "text-brand-700 bg-red-100 dark:bg-red-900/40" : "text-tertiary hover:text-secondary"
                        )}
                        aria-label="Rows Layout"
                    >
                        <Rows03 className="size-5" />
                    </button>
                </div>
            </div>

            <div className="mt-4 transition-all duration-300">
                {!isRowsLayout ? (
                    /* Tibetan Canons COLUMNS LAYOUT */
                    <div className="mx-auto max-w-container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-in fade-in duration-500">
                        {/* The Kangyur */}
                        <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-sm h-full max-w-lg mx-auto w-full">
                            <h4 className="text-display-sm text-brand-700 dark:text-brand-700/80 text-center py-2">The Degé Kangyur</h4>
                            <p className="text-sm text-tertiary text-center pb-4 px-4 whitespace-pre-wrap">Translations of Indian scriptures into Tibetan (102 vols.)</p>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2 grow">
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-900/40 px-2 py-3 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-md font-light text-primary/70 text-center uppercase tracking-wider">Vinaya</p>
                                    <p className="text-md font-bold text-center text-secondary">Monastic Discipline</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Sūtra</p>
                                    <p className="text-md font-bold text-center text-secondary">Discourses of the Buddha</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-900/40 px-2 py-3 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Tantra</p>
                                    <p className="text-md font-bold text-center text-secondary">Tantra</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-green-100/60 dark:bg-green-900/40 px-2 py-3 rounded-2xl border border-green-200 dark:border-green-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">གཟུངས་འབུམ།</p>
                                    <p className="text-md font-bold text-center text-secondary">Dhāraṇīs Collection</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-gray-100/60 dark:bg-gray-800/40 px-2 py-3 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">བཀའ་འགྱུར་དཀར་ཆག</p>
                                    <p className="text-md font-bold text-center text-secondary">The Degé Kangyur Catalog</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                    Kangyur Outline
                                </Button>
                            </div>
                        </div>

                        {/* The Tengyur */}
                        <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-md h-full max-w-lg mx-auto w-full">
                            <h4 className="text-display-sm text-brand-700 dark:text-brand-700/80 text-center py-2">The Degé Tengyur</h4>
                            <p className="text-sm text-tertiary text-center pb-4 px-4 whitespace-pre-wrap">Translations of Indian Treatises in Tibetan (213 vols.)</p>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2 grow">
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-olive-100/60 dark:bg-olive-900/40 px-2 py-3 rounded-2xl border border-olive-200 dark:border-olive-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Stotra</p>
                                    <p className="text-md font-bold text-center text-secondary">Praises to Buddhas & Deities</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-900/40 px-2 py-3 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Tantra</p>
                                    <p className="text-md font-bold text-center text-secondary">Tantra Treatises</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Sūtra Commentaries & Philosophy</p>
                                    <p className="text-md font-bold text-center text-secondary">Prajñāpāramitā, Middle Way, Sūtra, and Mind Only</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-900/40 px-2 py-3 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Abhidharma</p>
                                    <p className="text-md font-bold text-center text-secondary">Systematic Treatises</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-fuchsia-100/60 dark:bg-fuchsia-900/40 px-2 py-3 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Traditional Sciences</p>
                                    <p className="text-md font-bold text-center text-secondary">Linguistics, Medicine, Arts, Secular Ethics, and other texts </p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-gray-100/60 dark:bg-gray-800/40 px-2 py-3 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center tracking-wider">Karchak</p>
                                    <p className="text-md font-bold text-center text-secondary">The Degé Tengyur Catalog</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                    Tengyur Outline
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Tibetan Canons ROWS LAYOUT */
                    <div className="mx-auto max-w-container px-4 md:px-6 grid grid-cols-1 gap-4 items-start animate-in fade-in duration-500">
                        {/* The Degé Kangyur - Rows Layout */}
                        <div className="flex flex-col bg-secondary p-6 gap-2 rounded-4xl drop-shadow-sm">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <h4 className="text-display-xs text-brand-700 dark:text-brand-700/80">The Degé Kangyur</h4>
                                    <p className="text-xs text-tertiary">Translations of Indian scriptures into Tibetan (102 vols.)</p>
                                </div>
                                <div className="flex flex-col gap-3 md:justify-center pb-1">
                                    <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                        Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-2 items-start justify-center rounded-3xl mt-2">
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-900/40 px-10 py-3 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">འདུལ་བ།</p>
                                    <p className="text-md font-bold text-center text-secondary">Discipline</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-10 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">ཤེར་ཕྱིན།</p>
                                    <p className="text-md font-bold text-center text-secondary">Perfection of Wisdom</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">གསར་འགྱུར།</p>
                                    <p className="text-md font-bold text-center text-secondary">Thirteen Theravāda Sūtras</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">ཕལ་ཆེན།</p>
                                    <p className="text-md font-bold text-center text-secondary">A Multitude of Buddhas</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">དཀོན་བརྩེགས།</p>
                                    <p className="text-md font-bold text-center text-secondary">Heap of Jewels</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">མདོ་སྡེ།</p>
                                    <p className="text-md font-bold text-center text-secondary">General Sūtra Collection</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-900/40 px-2 py-3 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">རྒྱུད་འབུམ།</p>
                                    <p className="text-md font-bold text-center text-secondary">Tantra Collection</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-900/40 px-2 py-3 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">རྙིང་རྒྱུད།</p>
                                    <p className="text-md font-bold text-center text-secondary">Nyingma Tantra Collection</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-900/40 px-2 py-3 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">དུས་འཁོར་འགྲེལ་བཤད།</p>
                                    <p className="text-md font-bold text-center text-secondary">Wheel of Time Commentary</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-green-100/60 dark:bg-green-900/40 px-2 py-3 rounded-2xl border border-green-200 dark:border-green-800">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">གཟུངས་འབུམ།</p>
                                    <p className="text-md font-bold text-center text-secondary">Dhāraṇīs Collection</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-gray-100/60 dark:bg-gray-800/40 px-2 py-3 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <p className="text-lg font-light text-primary/70 text-center tracking-tight">བཀའ་འགྱུར་དཀར་ཆག</p>
                                    <p className="text-md font-bold text-center text-secondary">The Degé Kangyur Catalog</p>
                                </div>
                            </div>
                        </div>

                        {/* The Tengyur - Rows Layout */}
                        <div className="flex flex-col bg-secondary p-6 gap-2 rounded-4xl drop-shadow-sm">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <h4 className="text-display-xs text-brand-700 dark:text-brand-700/80">The Degé Tengyur</h4>
                                    <p className="text-xs text-tertiary">Translations of Indian Commentaries in Tibetan (213 vols.)</p>
                                </div>
                                <div className="flex flex-col gap-3 md:justify-center pb-1">
                                    <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                        Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-2 items-start justify-center rounded-3xl mt-2">
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-mist-100/60 dark:bg-mist-900/40 px-2 py-3 rounded-2xl border border-mist-200 dark:border-mist-800">
                                    <p className="text-md font-light text-primary/70 text-center">Stotra</p>
                                    <p className="text-md font-bold text-center text-secondary">Praises to Buddhas & Deties</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-900/40 px-2 py-3 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-md font-light text-primary/70 text-center">Tantra</p>
                                    <p className="text-md font-bold text-center text-secondary">Tantric Treatises</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-900/40 px-2 py-3 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-md font-light text-primary/70 text-center">Philosophy</p>
                                    <p className="text-md font-bold text-center text-secondary">Prajñāpāramitā, Madhyamaka, Sūtra, and Yogācāra</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-900/40 px-2 py-3 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-md font-light text-primary/70 text-center">Abhidharma</p>
                                    <p className="text-md font-bold text-center text-secondary">Systematic Treatises</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-900/40 px-2 py-3 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-md font-light text-primary/70 text-center">Vinaya</p>
                                    <p className="text-md font-bold text-center text-secondary">Discipline Treatises</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-fuchsia-100/60 dark:bg-fuchsia-900/40 px-2 py-3 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800">
                                    <p className="text-md font-light text-primary/70 text-center">TraditionalSciences</p>
                                    <p className="text-md font-bold text-center text-secondary">Linguistics, Medicine, Arts, Secular Ethics, and other texts</p>
                                </div>
                                <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-gray-100/60 dark:bg-gray-800/40 px-2 py-3 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Karchak</p>
                                    <p className="text-md font-bold text-center text-secondary">The Degé Tengyur Catalog</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

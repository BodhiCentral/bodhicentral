"use client";

import { useState } from "react";
import { Columns02, Columns03, Dataflow01, Rows03 } from "@untitledui/icons";
import { openKangyurNavigator } from "@/components-custom/navigation/canon-navigation/kangyur-navigation-modal-wrapper";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export const TibetanCanonsDiagram = () => {
    const [isRowsLayout, setIsRowsLayout] = useState(true);

    return (
        <section className="relative bg-[url(/ornaments/golden-wheel.png)] bg-contain bg-center bg-no-repeat py-10 md:py-24">
            {/* Overlay layer for easy customization of color/transparency */}
            <div className="absolute inset-0 z-0 bg-brand-50/90 dark:bg-brand-800/90" aria-hidden="true" />
            {/* Section Header */}
            <div className="relative z-10 mx-auto max-w-container px-4 pb-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-light text-brand-secondary md:text-md">Tibetan Canon</span>
                    <h2 className="text-display-lg font-extralight text-brand-800 md:text-display-2xl dark:text-brand-300">Tibetan Canon Divisions</h2>
                </div>
            </div>

            {/* Toggle Switch */}
            <div className="relative z-20 mx-auto max-w-container px-4 pb-4 md:px-6">
                <div className="flex items-center justify-start gap-4">
                    <p>Layout:</p>
                    <button
                        onClick={() => setIsRowsLayout(true)}
                        className={cx(
                            "cursor-pointer rounded-md p-1 transition-colors",
                            isRowsLayout ? "bg-brand-100 text-brand-700 dark:bg-brand-900/40" : "text-tertiary hover:text-secondary",
                        )}
                        aria-label="Rows Layout"
                    >
                        <Rows03 className="size-6" />
                    </button>
                    <button
                        onClick={() => setIsRowsLayout(false)}
                        className={cx(
                            "cursor-pointer rounded-md p-1 transition-colors",
                            !isRowsLayout ? "bg-brand-100 text-brand-700 dark:bg-brand-900/40" : "text-tertiary hover:text-secondary",
                        )}
                        aria-label="Columns Layout"
                    >
                        <Columns02 className="size-6" />
                    </button>
                </div>
            </div>

            <div className="mt-4 transition-all duration-300">
                {!isRowsLayout ? (
                    /* Tibetan Canons COLUMNS LAYOUT */
                    <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-16 px-4 duration-600 animate-in fade-in md:grid-cols-2 md:px-6">
                        {/* The Kangyur */}
                        <div className="mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-start gap-1 rounded-4xl bg-white/90 p-4 drop-shadow-sm dark:bg-brand-950/80">
                            <h4 className="text-display-xs text-brand-800 dark:text-brand-400">The Degé Kangyur</h4>
                            <p className="px-4 pb-3 text-center text-sm whitespace-pre-wrap text-tertiary">
                                Translations of Indian scriptures into Tibetan (102 vols.)
                            </p>
                            <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-2.5 rounded-3xl p-2 md:grid-cols-2">
                                <div className="col-span-2 mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-blue-200 bg-blue-100/60 px-10 py-2 dark:border-blue-700 dark:bg-blue-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Vinaya</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">འདུལ་བ།</p>
                                </div>
                                <div className="mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-10 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Perfection of Wisdom</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">ཤེར་ཕྱིན།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Thirteen Theravāda Sūtras</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">གསར་འགྱུར།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">A Multitude of Buddhas</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">ཕལ་ཆེན།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Heap of Jewels</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">དཀོན་བརྩེགས།</p>
                                </div>
                                <div className="col-span-2 mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Sūtra Section</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">མདོ་སྡེ།</p>
                                </div>
                                <div className="mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-2 dark:border-red-700 dark:bg-red-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Tantra Collection</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">རྒྱུད་འབུམ།</p>
                                </div>
                                <div className="mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-2 dark:border-red-700 dark:bg-red-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Old Tantra</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">རྙིང་རྒྱུད།</p>
                                </div>
                                <div className="col-span-2 mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-2 dark:border-red-700 dark:bg-red-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Wheel of Time Commentary</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">དུས་འཁོར་འགྲེལ་བཤད།</p>
                                </div>
                                <div className="col-span-2 mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-green-200 bg-green-100/60 px-2 py-2 dark:border-green-700 dark:bg-green-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Dhāraṇī Collection</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">གཟུངས་འབུམ།</p>
                                </div>
                                <div className="col-span-2 mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-gray-300 bg-gray-200/60 px-2 py-2 dark:border-gray-600 dark:bg-gray-700/40">
                                    <p className="text-center text-md font-bold text-secondary">Kangyur Catalog</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">བཀའ་འགྱུར་དཀར་ཆག</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconTrailing={Dataflow01} onClick={() => openKangyurNavigator()}>
                                    Navigate the Kangyur Outline
                                </Button>
                            </div>
                        </div>

                        {/* The Tengyur */}
                        <div className="mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-start gap-1 rounded-4xl bg-white/90 p-4 drop-shadow-sm dark:bg-brand-950/80">
                            <h4 className="text-display-xs text-brand-800 dark:text-brand-400">The Degé Tengyur</h4>
                            <p className="px-4 pb-3 text-center text-sm whitespace-pre-wrap text-tertiary">
                                Translations of Indian Treatises in Tibetan (213 vols.)
                            </p>
                            <div className="grid grid-cols-1 items-center justify-center gap-2.5 rounded-3xl p-2 md:grid-cols-2">
                                <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-gray-300 bg-gray-200/60 px-2 py-2 dark:border-gray-600 dark:bg-gray-700/40">
                                    <p className="text-center text-md font-bold text-secondary">Praise</p>
                                    <p className="text-center text-sm font-light text-primary/70">བསྟོད་ཚོགས།</p>
                                </div>
                                <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-2 dark:border-red-700 dark:bg-red-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Tantra</p>
                                    <p className="text-center text-sm font-light text-primary/70">རྒྱུད།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Perfection of Wisdom</p>
                                    <p className="text-center text-sm font-light text-primary/70">ཤེས་ཕྱིན།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Middle Way</p>
                                    <p className="text-center text-sm font-light text-primary/70">དབུ་མ།</p>
                                </div>
                                <div className="col-span-2 mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Sūtra Commentaries</p>
                                    <p className="text-center text-sm font-light text-primary/70">མདོ་འགྲེལ།</p>
                                </div>
                                <div className="mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-2 dark:border-yellow-700 dark:bg-yellow-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Mind Only</p>
                                    <p className="text-center text-sm font-light text-primary/70">སེམས་ཙམ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-100/60 px-2 py-2 dark:border-orange-700 dark:bg-orange-700/40">
                                    <p className="text-center text-md font-bold text-secondary">Abhidharma</p>
                                    <p className="text-center text-sm font-light text-primary/70">མངོན་པ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-blue-200 bg-blue-100/60 px-2 py-2 dark:border-blue-700 dark:bg-blue-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Vinaya</p>
                                    <p className="text-center text-sm font-light text-primary/70">འདུལ་བ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-mauve-300 bg-mauve-300/40 px-2 py-2 dark:border-mauve-500 dark:bg-mauve-600/50">
                                    <p className="text-center text-md font-bold text-secondary">Buddha's previous lives</p>
                                    <p className="text-center text-sm font-light text-primary/70">སྐྱེས་རབས།</p>
                                </div>
                                <div className="mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-mauve-300 bg-mauve-300/40 px-2 py-2 dark:border-mauve-500 dark:bg-mauve-600/50">
                                    <p className="text-center text-md font-bold text-secondary">Epistles</p>
                                    <p className="text-center text-lg font-light text-primary/70">སྤྲིང་ཡིག</p>
                                </div>
                                <div className="mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-mauve-300 bg-mauve-300/40 px-2 py-2 dark:border-mauve-500 dark:bg-mauve-600/50">
                                    <p className="text-center text-md font-bold text-secondary">Valid Cognition</p>
                                    <p className="text-center text-sm font-light text-primary/70">ཚད་མ།</p>
                                </div>
                                <div className="col-span-2 mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-violet-200 bg-violet-200/60 px-10 py-2 dark:border-violet-600 dark:bg-violet-600/40">
                                    <p className="text-center text-md font-bold text-secondary">
                                        Linguistics, Medicine, Arts, Secular Ethics, and various texts
                                    </p>
                                    <p className="text-center text-sm font-light text-primary/70">
                                        སྒྲ་མདོ། གསོ་བ་རིག་པ། བཟོ་རིག་པ། ཐུན་མོང་བ་ལུགས་ཀྱི་བསྟན་བཅོས། བསྟན་བཅོས་སྣ་ཚོགས།
                                    </p>
                                </div>
                                <div className="col-span-2 mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-gray-300 bg-gray-200/60 px-2 py-2 dark:border-gray-600 dark:bg-gray-700/40">
                                    <p className="text-center text-md font-bold text-secondary">Tengyur Catalog</p>
                                    <p className="text-center text-sm font-light text-primary/70">བསྟན་འགྱུར་དཀར་ཆག</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconTrailing={Dataflow01} onClick={() => openKangyurNavigator()}>
                                    Navigate the Tengyur Outline
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Tibetan Canons ROWS LAYOUT */
                    <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-8 px-4 duration-600 animate-in fade-in md:px-6">
                        {/* The Degé Kangyur - Rows Layout */}
                        <div className="flex flex-col gap-4 rounded-4xl bg-white/90 p-6 drop-shadow-sm dark:bg-brand-950/80">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <h4 className="text-display-xs text-brand-700 dark:text-brand-700/80">The Degé Kangyur</h4>
                                    <p className="text-xs text-tertiary">Translations of Indian scriptures into Tibetan (102 vols.)</p>
                                </div>
                                <div className="flex flex-col gap-3 pb-1 md:justify-center">
                                    <Button color="secondary" size="sm" iconTrailing={Dataflow01} onClick={() => openKangyurNavigator()}>
                                        Navigate the Kangyur Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto mt-2 grid w-full grid-cols-1 items-start justify-center gap-2.5 rounded-3xl md:grid-cols-4">
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-blue-200 bg-blue-100/60 px-10 py-3 dark:border-blue-700 dark:bg-blue-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Vinaya</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">འདུལ་བ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-10 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Perfection of Wisdom</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">ཤེར་ཕྱིན།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Thirteen Theravāda Sūtras</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">གསར་འགྱུར།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">A Multitude of Buddhas</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">ཕལ་ཆེན།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Heap of Jewels</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">དཀོན་བརྩེགས།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 md:col-span-2 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Sūtra Section</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">མདོ་སྡེ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-3 dark:border-red-800 dark:bg-red-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Tantra Collection</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">རྒྱུད་འབུམ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-3 dark:border-red-800 dark:bg-red-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Old Tantra</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">རྙིང་རྒྱུད།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-3 dark:border-red-800 dark:bg-red-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Wheel of Time Commentary</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">དུས་འཁོར་འགྲེལ་བཤད།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-green-200 bg-green-100/60 px-2 py-3 dark:border-green-800 dark:bg-green-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Dhāraṇī Collection</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">གཟུངས་འབུམ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-gray-300 bg-gray-200/60 px-2 py-3 dark:border-gray-600 dark:bg-gray-700/60">
                                    <p className="text-center text-md font-bold text-secondary">Kangyur Catalog</p>
                                    <p className="text-center text-sm font-light tracking-tight text-primary/70">བཀའ་འགྱུར་དཀར་ཆག</p>
                                </div>
                            </div>
                        </div>

                        {/* The Tengyur - Rows Layout */}
                        <div className="flex flex-col gap-4 rounded-4xl bg-white/90 p-6 drop-shadow-sm dark:bg-brand-950/80">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <h4 className="text-display-xs text-brand-700 dark:text-brand-700/80">The Degé Tengyur</h4>
                                    <p className="text-xs text-tertiary">Translations of Indian Commentaries in Tibetan (213 vols.)</p>
                                </div>
                                <div className="flex flex-col gap-3 pb-1 md:justify-center">
                                    <Button color="secondary" size="sm" iconTrailing={Dataflow01} onClick={() => openKangyurNavigator()}>
                                        Navigate the Tengyur Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto mt-2 grid w-full grid-cols-1 items-start justify-center gap-2.5 rounded-3xl md:grid-cols-5">
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-mist-200 bg-mist-200/70 px-2 py-3 dark:border-mist-700 dark:bg-mist-800/60">
                                    <p className="text-center text-md font-bold text-secondary">Praise</p>
                                    <p className="text-center text-sm font-light text-primary/70">བསྟོད་ཚོགས།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-red-200 bg-red-100/60 px-2 py-3 dark:border-red-800 dark:bg-red-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Tantra</p>
                                    <p className="text-center text-sm font-light text-primary/70">རྒྱུད།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Perfection of Wisdom</p>
                                    <p className="text-center text-sm font-light text-primary/70">ཤེས་ཕྱིན།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Middle Way</p>
                                    <p className="text-center text-sm font-light text-primary/70">དབུ་མ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Sūtra Commentaries</p>
                                    <p className="text-center text-sm font-light text-primary/70">མདོ་འགྲེལ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-yellow-300 bg-yellow-100/60 px-2 py-3 dark:border-yellow-800 dark:bg-yellow-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Mind Only</p>
                                    <p className="text-center text-sm font-light text-primary/70">སེམས་ཙམ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-orange-200 bg-orange-100/60 px-2 py-3 dark:border-orange-800 dark:bg-orange-900/40">
                                    <p className="text-center text-md font-bold text-secondary">Abhidharma</p>
                                    <p className="text-center text-sm font-light text-primary/70">མངོན་པ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-blue-200 bg-blue-100/60 px-2 py-3 dark:border-blue-700 dark:bg-blue-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Vinaya</p>
                                    <p className="text-center text-sm font-light text-primary/70">འདུལ་བ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-olive-300 bg-olive-200/70 px-2 py-3 dark:border-olive-700 dark:bg-olive-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Buddha's previous lives</p>
                                    <p className="text-center text-sm font-light text-primary/70">སྐྱེས་རབས།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-olive-300 bg-olive-200/70 px-2 py-3 dark:border-olive-700 dark:bg-olive-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Epistles</p>
                                    <p className="text-center text-sm font-light text-primary/70">སྤྲིང་ཡིག</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-olive-300 bg-olive-200/70 px-2 py-3 dark:border-olive-700 dark:bg-olive-800/40">
                                    <p className="text-center text-md font-bold text-secondary">Valid Cognition</p>
                                    <p className="text-center text-sm font-light text-primary/70">ཚད་མ།</p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-violet-200 bg-violet-200/60 px-2 py-3 md:col-span-3 dark:border-violet-700 dark:bg-violet-800/40">
                                    <p className="text-center text-md font-bold text-secondary">
                                        Linguistics, Medicine, Arts, Secular Ethics, and various texts
                                    </p>
                                    <p className="text-center text-sm font-light text-primary/70">
                                        སྒྲ་མདོ། གསོ་བ་རིག་པ། བཟོ་རིག་པ། ཐུན་མོང་བ་ལུགས་ཀྱི་བསྟན་བཅོས། བསྟན་བཅོས་སྣ་ཚོགས།
                                    </p>
                                </div>
                                <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-1 rounded-xl border border-gray-300 bg-gray-200/60 px-2 py-3 dark:border-gray-600 dark:bg-gray-700/60">
                                    <p className="text-center text-md font-bold text-secondary">Tengyur Catalog</p>
                                    <p className="text-center text-sm font-light text-primary/70">བསྟན་འགྱུར་དཀར་ཆག</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

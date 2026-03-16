"use client";

import { useState } from "react";
import { Dataflow01, Columns03, Rows03 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export const ThreePitakasDiagram = () => {
    const [isRowsLayout, setIsRowsLayout] = useState(true);

    return (
        <section className="relative py-10 md:pt-24 md:pb-36 bg-[url(/floral-background-golden-outlines-01.webp)] bg-cover bg-bottom bg-no-repeat">
            {/* Overlay layer for easy customization of color/transparency */}
            <div className="absolute inset-0 bg-olive-50/97 dark:bg-olive-900/97 z-0" aria-hidden="true" />
            {/* Section Header */}
            <div className="relative z-10 mx-auto max-w-container px-4 md:px-8 pb-4">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pali Canon</span>
                    <h2 className="mt-1 text-display-md font-semibold text-primary md:text-display-lg">The Three Piṭaka Divisions</h2>
                </div>
            </div>

            {/* Toggle Switch */}
            <div className="relative mx-auto z-20 max-w-container px-4 md:px-6 pb-2">
                <div className="flex justify-start items-center gap-3">
                    <button
                        onClick={() => setIsRowsLayout(true)}
                        className={cx(
                            "p-1 rounded-md transition-colors cursor-pointer",
                            isRowsLayout ? "text-brand-700 bg-orange-100 dark:bg-orange-900/40" : "text-tertiary hover:text-secondary"
                        )}
                        aria-label="Rows Layout"
                    >
                        <Rows03 className="size-5" />
                    </button>
                    <button
                        onClick={() => setIsRowsLayout(false)}
                        className={cx(
                            "p-1 rounded-md transition-colors cursor-pointer",
                            !isRowsLayout ? "text-brand-700 bg-orange-100 dark:bg-orange-900/40" : "text-tertiary hover:text-secondary"
                        )}
                        aria-label="Columns Layout"
                    >
                        <Columns03 className="size-5" />
                    </button>


                </div>
            </div>

            <div className="mt-4 transition-all duration-300">
                {!isRowsLayout ? (
                    /* Tipiṭaka Baskets COLUMNS LAYOUT */
                    <div className="mx-auto max-w-container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start animate-in fade-in duration-500">
                        {/* Vinaya Piṭaka */}
                        <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-sm h-full">
                            <h4 className="text-display-xs text-brand-700 dark:text-brand-600/80 text-center py-2">Vinaya Piṭaka Divisions</h4>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2 grow">
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-950/80 px-2 py-4 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-md font-light text-primary/70 text-center">Suttavibhaṅga</p>
                                    <p className="text-md font-bold text-center text-secondary">Rules and Their Analysis</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-orange-100/60 dark:bg-orange-950/80 px-2 py-4 rounded-2xl border border-orange-200 dark:border-orange-800">
                                    <p className="text-md font-light text-primary/70 text-center">Khandhakas</p>
                                    <p className="text-md font-bold text-center text-secondary">Chapters on Legal Topics</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-950/80 px-2 py-4 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-md font-light text-primary/70 text-center">Parivāra</p>
                                    <p className="text-md font-bold text-center text-secondary">The Compendium</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                    Vinayapiṭaka Outline
                                </Button>
                            </div>
                        </div>

                        {/* Sutta Piṭaka */}
                        <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-md h-full">
                            <h4 className="text-display-xs text-brand-700 dark:text-brand-600/80 text-center py-2">Sutta Piṭaka Divisions</h4>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2 grow">
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-emerald-100/60 dark:bg-emerald-950/80 px-2 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                                    <p className="text-md font-light text-primary/70 text-center">Dīghanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Long Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-cyan-100/60 dark:bg-cyan-950/80 px-2 py-4 rounded-2xl border border-cyan-200 dark:border-cyan-800">
                                    <p className="text-md font-light text-primary/70 text-center">Majjhimanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Middle Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-950/80 px-2 py-4 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-md font-light text-primary/70 text-center">Samyuttanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Linked Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-violet-100/60 dark:bg-violet-950/80 px-2 py-4 rounded-2xl border border-violet-200 dark:border-violet-800">
                                    <p className="text-md font-light text-primary/70 text-center">Aṅguttaranikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Numbered Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-fuchsia-100/60 dark:bg-fuchsia-950/80 px-2 py-4 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800">
                                    <p className="text-md font-light text-primary/70 text-center">Khuddakanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Minor Collection</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                    Suttapiṭaka Outline
                                </Button>
                            </div>
                        </div>

                        {/* Abhidhamma Piṭaka */}
                        <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-md h-full">
                            <h4 className="text-display-xs text-brand-700 dark:text-brand-600/80 text-center py-2">Abhidhamma Piṭaka Books</h4>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2 grow">
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                    <p className="text-md font-light text-primary/70 text-center">Dhammasaṅgaṇi</p>
                                    <p className="text-md font-bold text-center text-secondary">Compendium of Phenomena</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700">
                                    <p className="text-md font-light text-primary/70 text-center">Vibhaṅga</p>
                                    <p className="text-md font-bold text-center text-secondary">Book of Analysis</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Dhātukathā</p>
                                    <p className="text-md font-bold text-center text-secondary">Discussion of Elements</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Puggalapaññatti</p>
                                    <p className="text-md font-bold text-center text-secondary">Description of Personality Types</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Kathāvatthu</p>
                                    <p className="text-md font-bold text-center text-secondary">Points of Controversy</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Yamaka</p>
                                    <p className="text-md font-bold text-center text-secondary">The Pairs</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                    <p className="text-md font-light text-primary/70 text-center">Paṭṭhāna</p>
                                    <p className="text-md font-bold text-center text-secondary">Conditional Relations</p>
                                </div>
                            </div>
                            <div className="my-4 flex flex-col gap-3 md:my-6 md:justify-center">
                                <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                    Abhidhammapiṭaka Outline
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Tipiṭaka Baskets ROWS LAYOUT */
                    <div className="mx-auto max-w-container px-4 md:px-6 grid grid-cols-1 gap-4 items-start animate-in fade-in duration-500">
                        {/* Vinaya Piṭaka */}
                        <div className="flex flex-col bg-secondary px-6 py-4 gap-2 rounded-4xl drop-shadow-sm">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <h4 className="text-display-xs text-brand-700 dark:text-brand-600/80">Vinaya Piṭaka Divisions</h4>
                                <div className="flex flex-col gap-3 md:justify-center pb-1">
                                    <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                        Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-2 rounded-3xl">
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-950/80 px-2 py-4 rounded-2xl border border-red-200 dark:border-red-800">
                                    <p className="text-md font-light text-primary/70 text-center">Suttavibhaṅga</p>
                                    <p className="text-md font-bold text-center text-secondary">Rules and Their Analysis</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-orange-100/60 dark:bg-orange-950/80 px-2 py-4 rounded-2xl border border-orange-200 dark:border-orange-800">
                                    <p className="text-md font-light text-primary/70 text-center">Khandhakas</p>
                                    <p className="text-md font-bold text-center text-secondary">Chapters on Legal Topics</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-950/80 px-2 py-4 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-md font-light text-primary/70 text-center">Parivāra</p>
                                    <p className="text-md font-bold text-center text-secondary">The Compendium</p>
                                </div>
                            </div>
                        </div>

                        {/* Sutta Piṭaka */}
                        <div className="flex flex-col bg-secondary px-6 py-4 gap-2 rounded-4xl drop-shadow-sm">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <h4 className="text-display-xs text-brand-700 dark:text-brand-600/80">Sutta Piṭaka Divisions</h4>
                                <div className="flex flex-col gap-3 md:justify-center pb-1">
                                    <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                        Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-2 rounded-3xl">
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-emerald-100/60 dark:bg-emerald-950/80 px-2 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                                    <p className="text-md font-light text-primary/70 text-center">Dīghanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Long Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-cyan-100/60 dark:bg-cyan-950/80 px-2 py-4 rounded-2xl border border-cyan-200 dark:border-cyan-800">
                                    <p className="text-md font-light text-primary/70 text-center">Majjhimanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Middle Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-950/80 px-2 py-4 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-md font-light text-primary/70 text-center">Samyuttanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Linked Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-violet-100/60 dark:bg-violet-950/80 px-2 py-4 rounded-2xl border border-violet-200 dark:border-violet-800">
                                    <p className="text-md font-light text-primary/70 text-center">Aṅguttaranikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Numbered Discourses</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-fuchsia-100/60 dark:bg-fuchsia-950/80 px-2 py-4 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800">
                                    <p className="text-md font-light text-primary/70 text-center">Khuddakanikāya</p>
                                    <p className="text-md font-bold text-center text-secondary">Minor Collection</p>
                                </div>
                            </div>
                        </div>

                        {/* Abhidhamma Piṭaka */}
                        <div className="flex flex-col bg-secondary px-6 py-4 gap-2 rounded-4xl drop-shadow-sm">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <h4 className="text-display-xs text-brand-700 dark:text-brand-600/80">Abhidhamma Piṭaka (Seven Books)</h4>
                                <div className="flex flex-col gap-3 md:justify-center pb-1">
                                    <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                        Outline
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-start justify-center gap-2 rounded-3xl">
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                    <p className="text-md font-light text-primary/70 text-center">Dhammasaṅgaṇi</p>
                                    <p className="text-md font-bold text-center text-secondary">Compendium of Phenomena</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700">
                                    <p className="text-md font-light text-primary/70 text-center">Vibhaṅga</p>
                                    <p className="text-md font-bold text-center text-secondary">Book of Analysis</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Dhātukathā</p>
                                    <p className="text-md font-bold text-center text-secondary">Discussion of Elements</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Puggalapaññatti</p>
                                    <p className="text-md font-bold text-center text-secondary">Description of Personality Types</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Kathāvatthu</p>
                                    <p className="text-md font-bold text-center text-secondary">Points of Controversy</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                    <p className="text-md font-light text-primary/70 text-center">Yamaka</p>
                                    <p className="text-md font-bold text-center text-secondary">The Pairs</p>
                                </div>
                                <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                    <p className="text-md font-light text-primary/70 text-center">Paṭṭhāna</p>
                                    <p className="text-md font-bold text-center text-secondary">Conditional Relations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

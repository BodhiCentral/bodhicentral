"use client";

import Image from 'next/image';
import { Button } from "@/components/base/buttons/button";
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";
import { CollectionGalleryAbhidhammaPitaka } from "@/components/marketing/collection-sections/collection-gallery-abhidhamma-pitaka";

export default function TheravadaTraditionPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/jetavanaramaya-scenery-01.jpg)] bg-cover bg-center bg-no-repeat pb-36">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/62 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-20 pb-12 px-4 md:px-6">
                        <h1 className="text-display-md text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl">Theravāda Tradition</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center gap-0">

                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/35 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} className="mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Vinaya Piṭaka</h2>
                                    <p className="text-md text-tertiary text-center pb-4">The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.</p>
                                    <Button color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/35 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} className="mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Sutta Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary text-center">The second basket of the Pali Canon, containing the discourses of the Buddha.</p>
                                    <Button color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/35 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} className="mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Abhidhamma Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary text-center">The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.</p>
                                    <Button color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section>
                <CollectionGalleryVinayaPitaka />
                <CollectionGallerySuttaPitaka />
                <CollectionGalleryAbhidhammaPitaka />
            </section>
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8 pb-12">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Pāḷi Tipiṭaka</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">The Three Baskets at a glance</h2>
                    </div>
                </div>
                {/* <!-- Tipiṭaka Baskets Table --> */}
                <div className="mx-auto max-w-container p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-tertiary dark:bg-tertiary/10 border border-secondary rounded-[2.5rem] drop-shadow-lg">
                    {/* <!-- Vinaya Piṭaka --> */}
                    <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-sm">
                        <h3 className="text-display-sm text-primary text-center py-2">Vinaya Piṭaka</h3>
                        <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2">
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-cyan-100/70 dark:bg-cyan-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Suttavibhaṅga</p>
                                <p className="text-sm font-bold text-center text-secondary">Rules and Their Analysis</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-fuchsia-100/70 dark:bg-fuchsia-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary text-center">Khandhakas</p>
                                <p className="text-sm font-bold text-center text-secondary">Chapters on Legal Topics</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-red-100/70 dark:bg-red-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Parivāra</p>
                                <p className="text-sm font-bold text-center text-secondary">The Compendium</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Sutta Piṭaka --> */}
                    <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-md">
                        <h3 className="text-display-sm text-primary text-center py-2">Sutta Piṭaka</h3>
                        <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2">
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-orange-100/70 dark:bg-orange-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Dīghanikāya</p>
                                <p className="text-sm font-bold text-center text-secondary">Long Discourses</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-yellow-100/70 dark:bg-yellow-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Majjhimanikāya</p>
                                <p className="text-sm font-bold text-center text-secondary">Middle Discourses</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-emerald-100/70 dark:bg-emerald-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Samyuttanikāya</p>
                                <p className="text-sm font-bold text-center text-secondary">Linked Discourses</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-red-100/70 dark:bg-red-900/70 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Aṅguttaranikāya</p>
                                <p className="text-sm font-bold text-center text-secondary">Numbered Discourses</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-100/70 dark:bg-gray-950/95 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Khuddakanikāya</p>
                                <p className="text-sm font-bold text-center text-secondary">Minor Collection</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Abhidhamma Piṭaka --> */}
                    <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-4xl drop-shadow-md">
                        <h3 className="text-display-sm text-primary text-center py-2">Abhidhamma Piṭaka</h3>
                        <div className="mx-auto w-full flex flex-col items-center justify-center gap-2 rounded-3xl p-2">
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-200/70 dark:bg-gray-800/90 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Dhammasaṅgaṇi</p>
                                <p className="text-sm font-bold text-center text-secondary">Compendium of Phenomena</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-200/70 dark:bg-gray-800/90 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Vibhaṅga</p>
                                <p className="text-sm font-bold text-center text-secondary">Book of Analysis</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-200/70 dark:bg-gray-800/90 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Dhātukathā</p>
                                <p className="text-sm font-bold text-center text-secondary">Discussion of Elements</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-200/70 dark:bg-gray-800/90 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Puggalapaññatti</p>
                                <p className="text-sm font-bold text-center text-secondary">Description of Personality Types</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-200/70 dark:bg-gray-800/90 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Kathāvatthu</p>
                                <p className="text-sm font-bold text-center text-secondary">Points of Controversy</p>
                            </div>
                            <div className="mx-auto w-full flex flex-col items-center justify-center gap-0.5 bg-gray-200/70 dark:bg-gray-800/90 px-2 py-4 rounded-2xl">
                                <p className="text-xl font-light text-primary/60 text-center">Paṭṭhāna</p>
                                <p className="text-sm font-bold text-center text-secondary">Conditional Relations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

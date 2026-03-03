"use client";

import Image from 'next/image';
import { Button } from "@/components/base/buttons/button";
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";
import { CollectionGalleryAbhidhammaPitaka } from "@/components/marketing/collection-sections/collection-gallery-abhidhamma-pitaka";
import { Dataflow01 } from "@untitledui/icons";
import { ThreePitakasDiagram } from "@/components/marketing/sections/three-pitakas-diagram";

export default function TheravadaTraditionPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/jetavanaramaya-scenery-01.jpg)] bg-cover bg-center bg-no-repeat pb-36">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/62 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-20 pb-12 px-4 md:px-6">
                        <h1 className="text-display-md text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl">Theravada Tradition</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center gap-0">

                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/60 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Vinaya Piṭaka</h2>
                                    <p className="text-md text-tertiary text-center pb-4">The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.</p>
                                    <Button href="/canon-overviews/vinaya-overview" color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/60 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Sutta Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary text-center">The second basket of the Pali Canon, containing the discourses of the Buddha.</p>
                                    <Button color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/60 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
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
            <ThreePitakasDiagram />
        </>
    );
}

"use client";

import Image from 'next/image';
import { Button } from "@/components/base/buttons/button";
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";
import { CollectionGalleryAbhidhammaPitaka } from "@/components/marketing/collection-sections/collection-gallery-abhidhamma-pitaka";
import { Dataflow01 } from "@untitledui/icons";
import { ThreePitakasDiagram } from "@/components/marketing/sections/three-pitakas-diagram";
import { BlogSectionTipitakaOverviewsLeftAligned } from "@/components/marketing/blog/base-components/blog-tipitaka-overviews-left-aligned";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); //register the hook to avoid React version descrepancies
gsap.registerPlugin(ScrollTrigger);



export default function TheravadaTraditionPage() {

    // TODO: Implement GSAP Timeline animations for the hero section (title and subtitle) and the three Pitaka cards inside the Hero section
    // The hero section (title and subtitle) should fade in after the page loads and fade out as we scroll down and the Pitaka cards should fade in sequence: The central card, Sutta Pitaka, shuold fade in first, then Vinaya Pitaka, then Abhidhamma Pitaka. 

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

        function init() {
            tl.from("#hero", { easy: "linear", autoAlpha: 0 })
                .from(".hero-title", {
                    scale: 0,
                    duration: 2,
                })
                .from(".hero-subtitle", {
                    duration: 0.5,
                })
                .from(".sutta-card", {
                    y: -100,
                    scale: 0,
                    duration: 1.5,
                })
                .from(".vinaya-card", {
                    x: 200,
                    scale: 0.3,
                    duration: 0.5,
                })
                .from(".abhidhamma-card", {
                    x: -200,
                    scale: 0.3,
                    duration: 0.5,
                });
        }

        window.addEventListener("load", function (event) {
            init();
        });
    }, { scope: container });




    return (
        <>

            <div className="relative mx-auto bg-[url(/jetavanaramaya-scene-01.jpg)] bg-cover bg-center bg-no-repeat pt-12 pb-24">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/50 via-30% to-white/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div ref={container} id="hero" className="hidden relative z-10">
                    <section className="flex flex-col items-center justify-center pt-20 pb-12 px-4 md:px-6">
                        <h1 className="hero-title text-display-sm text-center text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-2xl">Theravāda Tradition</h1>
                        <p className="hero-subtitle text-center text-lg font-semibold text-tertiary">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="vinaya-card flex flex-col items-center justify-center gap-0">

                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/80 dark:via-55% dark:to-black/15 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Vinaya Piṭaka</h2>
                                    <p className="text-md text-tertiary font-semibold text-center pb-4">The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.</p>
                                    <Button href="/canon-overviews/vinaya-overview" color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="sutta-card flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/80 dark:via-55% dark:to-black/15 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Sutta Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary font-semibold text-center">The second basket of the Pali Canon, containing the discourses of the Buddha.</p>
                                    <Button href="/canon-overviews/sutta-overview" color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="abhidhamma-card flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/80 dark:via-55% dark:to-black/15 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Abhidhamma Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary font-semibold text-center">The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.</p>
                                    <Button href="/canon-overviews/abhidhamma-overview" color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat drop-shadow-xs drop-shadow-black/80 dark:drop-shadow-black/50 opacity-50 dark:opacity-40">
                </div>

            </div>
            <section>
                <CollectionGallerySuttaPitaka />
                <CollectionGalleryVinayaPitaka />
                <CollectionGalleryAbhidhammaPitaka />
            </section>
            <ThreePitakasDiagram />
            <BlogSectionTipitakaOverviewsLeftAligned />
        </>
    );
}

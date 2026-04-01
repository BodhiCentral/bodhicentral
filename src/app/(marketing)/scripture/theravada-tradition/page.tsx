"use client";

import Image from 'next/image';
import { Button } from "@/components/base/buttons/button";
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";
import { CollectionGalleryAbhidhammaPitaka } from "@/components/marketing/collection-sections/collection-gallery-abhidhamma-pitaka";
import { Dataflow01, ArrowDown } from "@untitledui/icons";
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
        const tl = gsap.timeline({
            defaults: {
                ease: "back(0.5)"
            }
        });

        // The "Cloak" technique:
        // We use fromTo to explicitly animate from opacity 0 to 1, 
        // which overrides the CSS 'opacity-0' class correctly.
        tl.fromTo("#hero",
            { autoAlpha: 0 },
            { autoAlpha: 1, ease: "linear" }
        )
            .from(".hero-title", {
                scale: 0,
                duration: 1.1,
            })
            .from(".hero-subtitle", {
                scale: 0.5,
                autoAlpha: 0,
                duration: 0.8,
            }, "-=0.6")
            .from(".sutta-card", {
                autoAlpha: 0,
                y: -150,
                scale: 0.3,
                duration: 0.8,
            })
            .from(".vinaya-card", {
                x: 280,
                y: -140,
                autoAlpha: 0,
                scale: 0.6,
                duration: 0.8,
            }, "-=0.6")
            .from(".abhidhamma-card", {
                x: -280,
                y: -140,
                autoAlpha: 0,
                scale: 0.6,
                duration: 0.8,
            }, "-=0.8");

        // Pitaka Gallery animations
        const galleries = gsap.utils.toArray(".gallery-in") as HTMLElement[];
        galleries.forEach((gallery) => {
            const content = gallery.querySelector(".gallery-content");
            if (!content) return;

            gsap.timeline({
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 90%",
                    end: "bottom 10%",
                    // scrub: true (instead of 1) perfectly locks the animation to the scrollbar 
                    // without any artificial delay. This fixes the issue where fast scrolling 
                    // skips the animation because of the 1-second lag calculation.
                    scrub: true,
                }
            })
                .fromTo(content,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.15, ease: "power2.inOut" }
                )
                .to(content, { autoAlpha: 1, duration: 0.7 })
                .to(content, { autoAlpha: 0, duration: 0.15, ease: "power2.inOut" });
        });

        // Force a recalculation of all ScrollTrigger positions shortly after mount.
        // This solves the bug where images or fonts loading slightly after the initial 
        // mount push the DOM down, causing ScrollTrigger to calculate the start/end
        // coordinates incorrectly (which is why resizing the window fixed it for you).
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => clearTimeout(timeout);

    }, { scope: container });




    return (
        <div ref={container}>
            <div className="relative mx-auto bg-[url(/jetavanaramaya-scene-01.jpg)] bg-cover bg-center bg-no-repeat pt-12 pb-20">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/50 via-30% to-white/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div id="hero" className="opacity-0 relative z-10">
                    <section className="md:flex flex-col items-center justify-center pt-16 pb-12 px-4 md:px-6">
                        <h1 className="hero-title text-display-sm text-center text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-2xl text-shadow-sm">Theravāda Tradition</h1>
                        <p className="hero-subtitle text-center text-lg font-semibold text-tertiary">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="vinaya-card flex flex-col items-center justify-center gap-0">

                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/80 dark:via-55% dark:to-black/15 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Vinaya Piṭaka</h2>
                                    <p className="text-md text-tertiary font-semibold text-center pb-4">The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.</p>
                                    <Button href="#vinaya-pitaka-gallery" color="secondary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Vinaya gallery" />
                                </div>
                            </div>
                            <div className="sutta-card flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/80 dark:via-55% dark:to-black/15 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Sutta Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary font-semibold text-center">The second basket of the Pali Canon, containing the discourses of the Buddha.</p>
                                    <Button href="#sutta-pitaka-gallery" color="secondary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Sutta gallery" />
                                </div>
                            </div>
                            <div className="abhidhamma-card flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/20 via-white/85 via-55% to-white/15 dark:bg-linear-to-b dark:from-black/15 dark:via-black/80 dark:via-55% dark:to-black/15 p-4 rounded-[7rem]">
                                    <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block mix-blend-multiply drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-70" />
                                    <h2 className="text-display-sm text-primary text-center py-2">Abhidhamma Piṭaka</h2>
                                    <p className="pb-4 text-md text-tertiary font-semibold text-center">The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.</p>
                                    <Button href="#abhidhamma-pitaka-gallery" color="secondary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Abhidhamma gallery" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat drop-shadow-xs drop-shadow-black/80 dark:drop-shadow-black/50 opacity-50 dark:opacity-40">
                </div>

            </div>
            {/* Gallery Section */}
            <section>
                {/* TODO: Implement a GSAP ScrollTrigger animation for each of the three Pitaka galleries inside the Gallery Section. */}
                {/* The animation should be a fade-in for each gallery when the content of the gallery enters the bottom of the viewport. */}
                {/* The animation should also include a fade-out for each gallery when the content of the gallery leaves the top of the viewport. */}
                <div id="sutta-pitaka-gallery" className=""><CollectionGallerySuttaPitaka /></div>
                <div id="vinaya-pitaka-gallery" className=""><CollectionGalleryVinayaPitaka /></div>
                <div id="abhidhamma-pitaka-gallery" className=""><CollectionGalleryAbhidhammaPitaka /></div>
            </section>
            <ThreePitakasDiagram />
            <BlogSectionTipitakaOverviewsLeftAligned />
        </div>
    );
}

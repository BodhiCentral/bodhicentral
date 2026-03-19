"use client";


import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { FeaturesAlternatingLayout01 } from "@/components/marketing/features/features-alternating-layout-01";
import Image from 'next/image';

export const HomeScreen = () => {
    const clipboard = useClipboard();

    return (
        <div className="relative overflow-hidden bg-brand-50 dark:bg-brand-200">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="/patterns/grid-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-10 hidden max-w-none -translate-x-1/2 opacity-10 md:block dark:opacity-40 dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="/patterns/grid-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-10 md:hidden dark:opacity-40 dark:brightness-[0.2]"
            />

            <section className="relative py-10 md:pb-10 bg-[url(/monk-seated-in-meditation-under-forest-tree-1920.webp)] bg-cover bg-center">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/5 dark:bg-black/30 z-0" aria-hidden="true" />


                <Image
                    alt="Light Accent"
                    aria-hidden="true"
                    src="/patterns/light-accent.webp"
                    width={1280}
                    height={1280}
                    className="absolute z-20 -right-10 -bottom-14 max-w-160 opacity-30 mix-blend-multiple md:right-10 md:-bottom-1/3 md:max-w-7xl mask-b-from-90% mask-b-to-100% scale-x-[-1]"
                />
                <div className="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:min-h-150 lg:items-center">
                    <div className="z-10 flex max-w-2xl flex-col items-start">
                        <span className="text-sm font-regular text-brand-100 dark:text-brand-100 md:text-lg uppercase tracking-wider">Inclusive ⟐ Relevant ⟐ Awake</span>
                        <h1 className="text-display-md text-brand-25 dark:text-brand-300 md:text-display-xl lg:text-display-2xl text-shadow-md text-shadow-gray-700 dark:text-shadow-gray-950">
                            Gateways to Buddhist paths of the Awakening
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-balance text-brand-100 dark:text-brand-100 md:mt-6 md:text-xl">
                            A modern platform channeling universally revered Buddhist teachings and practical knowledge for everyone.{" "}
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Intro
                            </Button>
                            <Button size="xl" href="/sign-up">Sign up</Button>
                        </div>
                    </div>

                    <div className="hidden relative lg:absolute lg:top-0 lg:right-50 lg:h-100 lg:w-100 opacity-60 mix-blend-plus-lighter">
                        <Image
                            className="object-cover"
                            src="/cognitive-mandala-02.webp"
                            alt="Cognitive mandala"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>
            <FeaturesAlternatingLayout01 />
        </div >


    );
};

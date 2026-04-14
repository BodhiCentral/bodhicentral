import Image from 'next/image';
import { KangyurDivisionsSection } from '@/components/marketing/collection-sections/kangyur-divisions-section';
import { TengyurDivisionsSection } from '@/components/marketing/collection-sections/tengyur-divisions-section';
import { Button } from '@/components/base/buttons/button';
import { ArrowDown } from "@untitledui/icons";
import { TibetanCanonsDiagram } from "@/components/marketing/sections/tibetan-canons-diagram";

export default function TibetanCanonsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100vh-3.5rem)] bg-[url(/tibetan-buddhist-library-01.jpg)] bg-cover bg-center bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/50 via-30% to-black/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10 z-0" aria-hidden="true" />

                {/* Hero Inner Content */}
                <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                    {/* Hero Title & Subtitle */}
                    <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                        <h1 className="text-display-sm font-extralight text-center text-brand-300 dark:text-brand-300 md:text-display-lg lg:text-display-3xl text-shadow-brand-950 text-shadow-sm">Tibetan Canons</h1>
                        <p className="hero-subtitle text-center text-lg font-light text-white">The Kangyur and Tengyur, the Tibetan Buddhist scriptures and commentaries.</p>
                    </div>
                    {/* Tibetan Canons Cards */}
                    <div className="mx-auto max-w-5xl px-4 pb-50 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-start animate-[fadeUp_1s_ease_both] delay-450">
                        {/* Kangyur Card */}
                        <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-8 rounded-full">
                            <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                            <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Kangyur</h2>
                            <p className="text-md text-tertiary font-semibold text-center pb-6">The Kangyur is the collection of the translated words of the Buddha in Tibetan.</p>
                            <Button href="#vinaya-pitaka-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Vinaya gallery" />
                        </div>
                        {/* Tengyur Card */}
                        <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-8 rounded-full">
                            <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                            <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Tengyur</h2>
                            <p className="pb-6 text-md text-tertiary font-semibold text-center">The Tengyur is the collection of the translated Buddhist treatises in Tibetan.</p>
                            <Button href="#sutta-pitaka-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Sutta gallery" />
                        </div>
                    </div>
                </div>
                <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat drop-shadow-xs drop-shadow-black/80 dark:drop-shadow-black/50 opacity-50 dark:opacity-40">
                </div>

                {/* Scroll cue */}
                <div className="scroll-cue">
                    <span className="scroll-cue-text">Explore</span>
                    <div className="scroll-cue-line"></div>
                </div>

            </section>
            <KangyurDivisionsSection />
            <TengyurDivisionsSection />
            <TibetanCanonsDiagram />
        </>
    );
}

import Image from 'next/image';
import { KangyurDivisionsSection } from '@/components/marketing/collection-sections/kangyur-divisions-section';
import { TengyurDivisionsSection } from '@/components/marketing/collection-sections/tengyur-divisions-section';
import { TibetanCanonsDiagram } from "@/components/marketing/sections/tibetan-canons-diagram";
import { BlogSectionTibetanCanonOverviews } from '@/components-custom/blog/blog-tibetan-canon-overviews';

export default function TibetanCanonsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100vh)] bg-[url(/tibetan-buddhist-library-01.jpg)] bg-cover bg-center bg-no-repeat pt-16">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/50 via-30% to-black/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10 z-0" aria-hidden="true" />

                {/* Hero Inner Content */}
                <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                    {/* Hero Title & Subtitle */}
                    <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                        <h1 className="text-display-xl font-extralight text-center text-brand-300 dark:text-brand-300 md:text-display-3xl lg:text-display-4xl text-shadow-brand-950 text-shadow-sm">Tibetan Canon</h1>
                        <p className="hero-subtitle text-center text-xl font-light text-white">The Kangyur and Tengyur, the Tibetan Buddhist scriptures and commentaries.</p>
                    </div>
                    {/* Tibetan Canons Cards */}
                    <div className="mx-auto max-w-120 md:max-w-5xl px-4 md:pb-50 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-18 items-start animate-[fadeUp_1s_ease_both] delay-450">
                        {/* Kangyur Card */}
                        <a href="#kangyur-divisions-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400 h-full" aria-label="Go to Kangyur collection gallery">
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-40% to-brand-500/20 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-4 md:p-6 rounded-full">
                                <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                                <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">The Kangyur Collection</h2>
                                <p className="text-md text-tertiary font-semibold text-center pb-4">The Kangyur is the collection of the translated words of the Buddha in Tibetan.</p>
                            </div>
                        </a>
                        {/* Tengyur Card */}
                        <a href="#tengyur-divisions-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400 h-full" aria-label="Go to Tengyur collection gallery">
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-40% to-brand-500/20 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-4 md:p-6 rounded-full">
                                <Image src="/thai-ornament-top-linear-logo.png" alt="thai ornament" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-60" />
                                <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">The Tengyur Collection</h2>
                                <p className="text-md text-tertiary font-semibold text-center pb-4">The Tengyur is the collection of the translated Buddhist treatises in Tibetan.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat drop-shadow-xs drop-shadow-black/80 dark:drop-shadow-black/50 opacity-40 dark:opacity-30">
                </div>

                {/* Scroll cue */}
                <div className="scroll-cue">
                    <span className="scroll-cue-text">Explore</span>
                    <div className="scroll-cue-line"></div>
                </div>

            </section>
            <section>
                <div id="kangyur-divisions-gallery" className="">
                    <KangyurDivisionsSection />
                </div>
                <div id="tengyur-divisions-gallery" className="">
                    <TengyurDivisionsSection />
                </div>
            </section>
            <TibetanCanonsDiagram />
            <BlogSectionTibetanCanonOverviews />
        </>
    );
}

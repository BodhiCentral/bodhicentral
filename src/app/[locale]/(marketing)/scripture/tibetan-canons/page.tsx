import Image from 'next/image';
import { KangyurDivisionsSection } from '@/components/marketing/collection-sections/kangyur-divisions-section';
import { TengyurDivisionsSection } from '@/components/marketing/collection-sections/tengyur-divisions-section';
import { TibetanCanonsDiagram } from "@/components/marketing/sections/tibetan-canons-diagram";
import { BlogSectionTibetanCanonOverviews } from '@/components-custom/blog/blog-tibetan-canon-overviews';

export default function TibetanCanonsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100vh)] bg-[url(/tibetan-buddhist-library-01.jpg)] bg-cover bg-bottom bg-no-repeat pt-16">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-black/50 from-5% via-black/5 via-40% to-black/30 to-100% dark:bg-linear-to-b dark:from-brand-900/80 dark:via-black/40 dark:via-35% dark:to-brand-950/50 z-0" aria-hidden="true" />

                {/* Hero Inner Content */}
                <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                    {/* Hero Title & Subtitle */}
                    <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                        <h1 className="text-display-xl font-extralight text-center text-brand-300 dark:text-brand-300 md:text-display-3xl lg:text-display-4xl text-shadow-brand-950 text-shadow-sm">Tibetan Canon</h1>
                        <p className="hero-subtitle text-center text-xl font-light text-white w-110">Buddhist Indian scriptures and commentaries translated to Tibetan.</p>
                    </div>
                    {/* Tibetan Canons Cards */}
                    <div className="mx-auto max-w-110 md:max-w-4xl px-6 md:pb-16 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start animate-[fadeUp_1s_ease_both] delay-450">
                        {/* Kangyur Card */}
                        <a href="#kangyur-divisions-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400 h-full" aria-label="Go to Kangyur collection gallery">
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_36%] from-brand-50 via-brand-50/90 via-30% to-brand-200/60 dark:bg-linear-to-b dark:bg-radial-[at_50%_36%] dark:from-brand-800 dark:via-brand-800/80 dark:via-30% dark:to-brand-700/70 to-80% p-4 md:px-10 md:py-8 rounded-full drop-shadow-2xl border-b-2 border-brand-500">
                                <Image src="/ornaments/golden-wheel-280px.webp" alt="wheel of dharma" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block opacity-80 dark:opacity-100" />
                                <h2 className="text-display-md font-normal text-brand-800 dark:text-brand-50 text-center py-2">Scriptures - Kangyur</h2>
                                <p className="text-md text-secondary font-semibold text-center pb-4">Tibetan translations of Indian Scriptures with the words of the Buddha.</p>
                            </div>
                        </a>
                        {/* Tengyur Card */}
                        <a href="#tengyur-divisions-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400 h-full" aria-label="Go to Tengyur collection gallery">
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_36%] from-brand-50 via-brand-50/90 via-30% to-brand-200/60 dark:bg-linear-to-b dark:bg-radial-[at_50%_36%] dark:from-brand-800 dark:via-brand-800/80 dark:via-30% dark:to-brand-700/70 to-80% p-4 md:px-10 md:py-8 rounded-full drop-shadow-2xl border-b-2 border-brand-500">
                                <Image src="/ornaments/golden-wheel-280px.webp" alt="wheel of dharma" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block opacity-80 dark:opacity-100" />
                                <h2 className="text-display-md font-normal text-brand-800 dark:text-brand-50 text-center py-2">Treatises - Tengyur</h2>
                                <p className="text-md text-secondary font-semibold text-center pb-4">Tibetan translations of Indian treatises elucidating the words of the Buddha.</p>
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

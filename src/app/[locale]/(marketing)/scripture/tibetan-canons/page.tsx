import Image from 'next/image';
import { KangyurDivisionsSection } from '@/components/marketing/collection-sections/kangyur-divisions-section';
import { TengyurDivisionsSection } from '@/components/marketing/collection-sections/tengyur-divisions-section';
import { TibetanCanonsDiagram } from "@/components/marketing/sections/tibetan-canons-diagram";
import { BlogSectionTibetanCanonOverviews } from '@/components-custom/blog/blog-tibetan-canon-overviews';
import "@/styles/home-hero.css";

export default function TibetanCanonsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100vh)] bg-[url(/tibetan-buddhist-library-01.jpg)] bg-cover bg-bottom bg-no-repeat pt-16 overflow-hidden">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-black/70 from-5% via-black/10 via-40% to-black/0 to-100% dark:bg-linear-to-b dark:from-brand-900/80 dark:via-black/40 dark:via-35% dark:to-brand-950/50 z-0" aria-hidden="true" />
<svg className="hero-mandala-right absolute z-0 right-0 w-140 h-140 opacity-60" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="196" stroke="#B08D57" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="170" stroke="#B08D57" strokeWidth="0.3" />
                    <circle cx="200" cy="200" r="140" stroke="#B08D57" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="100" stroke="#B08D57" strokeWidth="0.3" />
                    <circle cx="200" cy="200" r="60" stroke="#B08D57" strokeWidth="0.5" />
                    {/* petals x8 */}
                    <g stroke="#B08D57" strokeWidth="0.4" fill="none">
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(0 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(45 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(90 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(135 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(180 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(225 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(270 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(315 200 200)" />
                    </g>
                    {/* outer petal ring x16 */}
                    <g stroke="#B08D57" strokeWidth="0.25" fill="none">
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(0 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(22.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(45 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(67.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(90 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(112.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(135 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(157.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(180 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(202.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(225 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(247.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(270 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(292.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(315 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(337.5 200 200)" />
                    </g>
                    {/* dot ring */}
                    <g fill="#B08D57">
                        <circle cx="200" cy="4" r="1.5" transform="rotate(0 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(45 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(90 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(135 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(180 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(225 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(270 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(315 200 200)" />
                    </g>
                    </svg>
                {/* Hero Inner Content */}
                <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                    
                    {/* Hero Title & Subtitle */}
                    <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                        <h1 className="text-display-xl font-extralight text-center text-brand-300 dark:text-brand-300 md:text-display-3xl lg:text-display-4xl text-shadow-brand-950 text-shadow-sm">Tibetan Canon</h1>
                        <p className="hero-subtitle text-center text-xl font-light text-white w-110">Buddhist Indian scriptures and treatises translated into Tibetan.</p>
                    </div>
                    {/* Tibetan Canons Cards */}
                    <div className="mx-auto max-w-110 md:max-w-4xl px-6 md:pb-16 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start animate-[fadeUp_1s_ease_both] delay-450">
                        {/* Kangyur Card */}
                        <a href="#kangyur-divisions-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400 h-full" aria-label="Go to Kangyur collection gallery">
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_36%] from-brand-50 via-brand-50/90 via-30% to-brand-200/60 dark:bg-linear-to-b dark:bg-radial-[at_50%_36%] dark:from-brand-800 dark:via-brand-800/80 dark:via-30% dark:to-brand-700/70 to-80% p-4 md:px-12 md:py-10 rounded-full drop-shadow-2xl border-b border-brand-500">
                                <Image src="/ornaments/golden-wheel-280px.webp" alt="wheel of dharma" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block opacity-80 dark:opacity-100" />
                                <h2 className="text-display-md font-normal text-brand-800 dark:text-brand-50 text-center py-2">Scriptures - Kangyur</h2>
                                <p className="text-md text-secondary font-semibold text-center pb-4">Tibetan translations of Indian Scriptures with the words of the Buddha.</p>
                            </div>
                        </a>
                        {/* Tengyur Card */}
                        <a href="#tengyur-divisions-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400 h-full" aria-label="Go to Tengyur collection gallery">
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_36%] from-brand-50 via-brand-50/90 via-30% to-brand-200/60 dark:bg-linear-to-b dark:bg-radial-[at_50%_36%] dark:from-brand-800 dark:via-brand-800/80 dark:via-30% dark:to-brand-700/70 to-80% p-4 md:px-10 md:py-8 rounded-full drop-shadow-2xl border-b border-brand-500">
                                <Image src="/ornaments/golden-wheel-280px.webp" alt="wheel of dharma" width={100} height={100} style={{ width: "auto", height: "auto" }} className="hidden md:block opacity-80 dark:opacity-100" />
                                <h2 className="text-display-md font-normal text-brand-800 dark:text-brand-50 text-center py-2">Treatises - Tengyur</h2>
                                <p className="text-md text-secondary font-semibold text-center pb-4">Tibetan translations of Indian treatises elucidating the words of the Buddha.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat opacity-30 dark:opacity-30">
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

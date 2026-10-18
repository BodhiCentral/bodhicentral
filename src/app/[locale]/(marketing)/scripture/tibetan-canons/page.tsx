import Image from "next/image";
import { BlogSectionTibetanCanonOverviews } from "@/components-custom/blog/blog-tibetan-canon-overviews";
import { KangyurDivisionsSection } from "@/components/marketing/collection-sections/kangyur-divisions-section";
import { TengyurDivisionsSection } from "@/components/marketing/collection-sections/tengyur-divisions-section";
import { TibetanCanonsDiagram } from "@/components/marketing/sections/tibetan-canons-diagram";

export default function TibetanCanonsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative mx-auto flex h-[calc(100vh)] flex-col gap-4 overflow-hidden bg-[url(/tibetan-buddhist-library-01.jpg)] bg-cover bg-bottom bg-no-repeat pt-32">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 z-0 bg-linear-to-b from-black/80 from-15% via-black/20 via-40% to-black/60 to-100%" aria-hidden="true" />
                <svg
                    className="hero-mandala-tibetan-canons absolute top-0 right-0 z-0 h-100 w-100"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
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
                <div className="relative z-10 mx-24 flex max-w-container flex-col gap-10">
                    {/* Hero Title & Subtitle */}
                    <div className="animate-[fadeUp_1s_ease_both] flex-col gap-1 delay-300 md:flex">
                        <h1 className="text-display-xl font-extralight text-brand-400 text-shadow-brand-950 text-shadow-sm md:text-display-2xl lg:text-display-4xl">
                            Tibetan Canon
                        </h1>
                        <p className="hero-subtitle w-130 text-xl font-light text-white">
                            The Buddhist Indian scriptures and treatises translated into Tibetan.
                        </p>
                    </div>
                    {/* Tibetan Canons Cards */}
                    <div className="grid max-w-140 animate-[fadeUp_1s_ease_both] grid-cols-1 items-start gap-10 delay-450 md:max-w-2xl md:grid-cols-2 md:gap-14 md:pb-16 lg:max-w-3xl lg:gap-20">
                        {/* Kangyur Card */}
                        <a
                            href="#kangyur-divisions-gallery"
                            className="h-full cursor-pointer transition-transform duration-400 hover:scale-[1.04]"
                            aria-label="Go to Kangyur collection gallery"
                        >
                            <div className="flex h-full flex-col">
                                <Image
                                    src="/ornaments/golden-wheel-280px.webp"
                                    alt="wheel of dharma"
                                    width={62}
                                    height={62}
                                    style={{ width: "62px", height: "62px" }}
                                    className="hidden opacity-100 md:block"
                                />
                                <h2 className="py-2 text-display-lg font-extralight text-brand-400">The Kangyur</h2>
                                <p className="pb-4 text-lg font-light text-balance text-white">
                                    Tibetan translations of Indian scriptures attributed to the Buddha.
                                </p>
                            </div>
                        </a>
                        {/* Tengyur Card */}
                        <a
                            href="#tengyur-divisions-gallery"
                            className="h-full cursor-pointer transition-transform duration-400 hover:scale-[1.04]"
                            aria-label="Go to Tengyur collection gallery"
                        >
                            <div className="flex h-full flex-col">
                                <Image
                                    src="/ornaments/golden-wheel-280px.webp"
                                    alt="wheel of dharma"
                                    width={62}
                                    height={62}
                                    style={{ width: "62px", height: "62px" }}
                                    className="hidden opacity-100 md:block"
                                />
                                <h2 className="py-2 text-display-lg font-extralight text-brand-400">The Tengyur</h2>
                                <p className="pb-4 text-lg font-light text-balance text-white">
                                    Tibetan translations of Indian treatises that elaborate on the Buddha's words.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 left-0 mx-auto h-6 bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat opacity-30 dark:opacity-30"></div>

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

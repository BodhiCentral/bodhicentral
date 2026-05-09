import Image from 'next/image';
import { GalleryNyingmaStudies } from '@/components-custom/galleries/gallery-nyingma-studies';
import { GalleryKagyuStudies } from '@/components-custom/galleries/gallery-kagyu-studies';
import { FeaturedGalleryIndianGoldenTexts } from '@/components-custom/galleries/featured-gallery-indian-golden-texts';
import { BlogSectionTibetanStudiesOverviews } from '@/components-custom/blog/blog-tibetan-studies-overviews';
import { ArrowDown } from '@untitledui/icons';

export default function TibetanSchoolsPage() {
    return (
        <>
            <main>
                {/* Hero Section */}
                <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100vh-3.5rem)] bg-[url(/himalayan-scenery-02.jpg)] bg-cover bg-center bg-no-repeat">
                    {/* Overlay layer for easy customization of color/transparency */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 via-30% to-black/20 z-0" aria-hidden="true" />

                    {/* Hero Inner Content */}
                    <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                        {/* Hero Title & Subtitle */}
                        <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                            <h1 className="text-display-sm font-extralight text-center text-brand-300 dark:text-brand-300 md:text-display-lg lg:text-display-3xl text-shadow-brand-950 text-shadow-sm">Tibetan Schools</h1>
                            <p className="hero-subtitle text-center text-lg font-light text-white">The curricula of the four main schools of Tibetan Buddhism.</p>
                        </div>
                        {/* School Cards */}
                        <div className="relative mx-auto max-w-auto lg:max-w-360 px-6 md:pb-20 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-8 items-center justify-center animate-[fadeUp_1s_ease_both] delay-450">
                            {/* Nyingma Card */}
                            <a href="#nyingma-studies-gallery" className="cursor-pointer hover:scale-[1.05] transition-transform duration-400 " aria-label="Go to Nyingma Studies gallery">

                                <div className="relative top-0 md:top-0 lg:top-[-96px] flex flex-col h-full items-center justify-start bg-radial-[at_50%_38%] from-brand-50/90 via-brand-200/95 via-20% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_38%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-20% dark:to-black/15 p-2 md:p-6 rounded-full">
                                    <Image src="/collections_thumbnails_nyingma.jpg" alt="Nyingma Studies Master" width={110} height={110} style={{ width: "110px", height: "110px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                    <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Nyingma</h2>
                                    <p className="text-sm text-secondary font-semibold text-center pb-4 px-4">The Thirteen Indian Treatises of the Nyingma school.</p>
                                </div>
                            </a>

                            {/* Sakya Card */}
                            <a href="#sakya-studies-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400" aria-label="Go to Sakya Studies gallery">

                                <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_38%] from-brand-50 via-brand-200/90 via-20% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_38%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-20% dark:to-black/15 p-2 md:p-6 rounded-full">
                                    <Image src="/collections_thumbnails_sakya.jpg" alt="thai ornament" width={100} height={100} style={{ width: "100px", height: "100px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                    <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Sakya</h2>
                                    <p className="pb-4 px-4 text-sm text-secondary font-semibold text-center">The Eighteen Treatises of the Sakya school.</p>
                                </div>
                            </a>
                            {/* Gelug Card */}
                            <a href="#gelug-studies-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400" aria-label="Go to Gelug Studies gallery">

                                <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_38%] from-brand-50/90 via-brand-200/95 via-20% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_38%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-20% dark:to-black/15 p-2 md:p-6 rounded-full">
                                    <Image src="/collections_thumbnails_gelug.jpg" alt="thai ornament" width={100} height={100} style={{ width: "100px", height: "100px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                    <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Gelug</h2>
                                    <p className="pb-4 px-4 text-sm text-secondary font-semibold text-center">Standard curriculum of the Gelug monastic colleges.</p>
                                </div>
                            </a>
                            {/* Kagyu Card */}
                            <a href="#kagyu-studies-gallery" className="cursor-pointer hover:scale-[1.06] transition-transform duration-400" aria-label="Go to Kagyu Studies gallery">

                                <div className="relative top-0 md:top-0 lg:top-[-96px] flex flex-col h-full items-center justify-start bg-radial-[at_50%_38%] from-brand-50/90 via-brand-200/95 via-20% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_38%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-20% dark:to-black/15 p-2 md:p-6 rounded-full">
                                    <Image src="/collections_thumbnails_kagyu.jpg" alt="thai ornament" width={100} height={100} style={{ width: "100px", height: "100px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                    <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Kagyu</h2>
                                    <p className="pb-4 px-4 text-sm text-secondary font-semibold text-center">The Eight Great Treatises of the Kagyu school.</p>
                                </div>
                            </a>
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
                {/* Gallery Section */}
                <section>
                    <div id="nyingma-studies-gallery" className=""><GalleryNyingmaStudies /></div>
                    <div id="kagyu-studies-gallery" className=""><GalleryKagyuStudies /></div>
                    <div id="indian-mahayana-gallery" className=""><FeaturedGalleryIndianGoldenTexts /></div>
                </section>
                <BlogSectionTibetanStudiesOverviews />
            </main>
        </>
    );
}

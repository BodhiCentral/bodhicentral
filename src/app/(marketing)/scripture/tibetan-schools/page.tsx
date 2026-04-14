import Image from 'next/image';
import { CollectionGalleryNyingma } from '@/components/marketing/collection-sections/collection-gallery-nyingma';
import { CollectionGalleryKagyu } from '@/components/marketing/collection-sections/collection-gallery-kagyu';
import { Button } from '@/components/base/buttons/button';
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
                        <div className="relative mx-auto max-w-full px-6 pb-20 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-center animate-[fadeUp_1s_ease_both] delay-450">
                            {/* Nyingma Card */}
                            <div className="relative top-0 md:top-[-68px] lg:top-[-96px] flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-6 rounded-full">
                                <Image src="/collections_thumbnails_nyingma.jpg" alt="thai ornament" width={90} height={90} style={{ width: "90px", height: "90px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Nyingma Studies</h2>
                                <p className="text-sm text-tertiary font-semibold text-center pb-6">The Thirteen Great Indian Treatises on Vinaya, Abhidharma, the Profound View, and Vast Conduct.</p>
                                <Button href="#nyingma-studies-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Vinaya gallery" />
                            </div>
                            {/* Sakya Card */}
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-6 rounded-full">
                                <Image src="/collections_thumbnails_sakya.jpg" alt="thai ornament" width={90} height={90} style={{ width: "90px", height: "90px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Sakya Studies</h2>
                                <p className="pb-6 text-sm text-tertiary font-semibold text-center">The Eighteen Treatises of the Sakya studies published by the International Buddhist Academy with Sachen International.</p>
                                <Button href="#sakya-studies-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Sutta gallery" />
                            </div>
                            {/* Gelug Card */}
                            <div className="flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-6 rounded-full">
                                <Image src="/collections_thumbnails_gelug.jpg" alt="thai ornament" width={90} height={90} style={{ width: "90px", height: "90px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Gelug Studies</h2>
                                <p className="pb-6 text-sm text-tertiary font-semibold text-center">Standardized Tibetan studies into five genres: Pramana, Prajnaparamita, Madhyamaka,
                                    Abhidharma, and Vinaya.</p>
                                <Button href="#gelug-studies-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Abhidhamma gallery" />
                            </div>
                            {/* Kagyu Card */}
                            <div className="relative top-0 md:top-[-68px] lg:top-[-96px] flex flex-col h-full items-center justify-start bg-radial-[at_50%_46%] from-brand-50/90 via-brand-200/95 via-32% to-brand-600/2 dark:bg-linear-to-b dark:bg-radial-[at_50%_46%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-30% dark:to-black/15 p-6 rounded-full">
                                <Image src="/collections_thumbnails_kagyu.jpg" alt="thai ornament" width={90} height={90} style={{ width: "90px", height: "90px" }} className="hidden md:block drop-shadow-xs drop-shadow-black/90 dark:drop-shadow-black/50 opacity-90 rounded-full" />
                                <h2 className="text-display-md text-brand-800 dark:text-brand-200 text-center py-2">Kagyu Studies</h2>
                                <p className="pb-6 text-sm text-tertiary font-semibold text-center">Standardized Tibetan studies into five genres: Pramana, Prajnaparamita, Madhyamaka,
                                    Abhidharma, and Vinaya.</p>
                                <Button href="#kagyu-studies-gallery" className="mt-auto" color="primary" size="sm" iconLeading={<ArrowDown data-icon />} aria-label="Go to Abhidhamma gallery" />
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
            </main>
            <CollectionGalleryNyingma />
            <CollectionGalleryKagyu />
        </>
    );
}

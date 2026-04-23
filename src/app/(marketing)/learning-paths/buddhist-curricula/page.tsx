import { BlogSectionTibetanCanonOverviews } from '@/components-custom/blog/blog-tibetan-canon-overviews';

export default function AcademicPathsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center gap-4 mx-auto h-[calc(100vh-3.5rem)] bg-[url(/ancient-nalanda-university-idealization.jpg)] bg-cover bg-center bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/50 via-30% to-black/10 dark:bg-linear-to-b dark:from-black/15 dark:via-black/50 dark:via-30% dark:to-black/10 z-0" aria-hidden="true" />

                {/* Hero Inner Content */}
                <div className="relative flex flex-col items-center justify-center gap-12 z-10">
                    {/* Hero Title & Subtitle */}
                    <div className="md:flex flex-col items-center justify-center gap-1 px-4 md:px-6 animate-[fadeUp_1s_ease_both] delay-300 ">
                        <h1 className="text-display-sm font-extralight text-center text-brand-300 dark:text-brand-300 md:text-display-lg lg:text-display-3xl text-shadow-brand-950 text-shadow-sm">Buddhist Curricula Overview</h1>
                        <p className="hero-subtitle text-center text-lg font-light text-white">Landing page in progress...</p>
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
            <BlogSectionTibetanCanonOverviews />
        </>
    );
}

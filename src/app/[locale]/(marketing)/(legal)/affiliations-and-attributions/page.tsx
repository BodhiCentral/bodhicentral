export default function TraditionsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/blog-featured-img-001.webp)] bg-position-bottom bg-cover bg-center bg-no-repeat py-24">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/55 dark:bg-black/55 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative mx-auto max-w-container z-10">
                    <section className="flex flex-col mx-auto max-w-3xl items-center justify-center pt-20 pb-8 px-4 md:px-6">
                        <h1 className="text-display-md font-light text-center text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl pb-6">Attributions and Affiliations</h1>
                        <p className="text-center text-lg font-base text-tertiary">Thanks to the following organizations for their contributions and grounding in the Dharma:</p>
                        <h2 className="text-display-md font-extralight text-white md:text-display-lg lg:text-display-xl mt-16">Section in progress</h2>
                    </section>
                </div>
            </div>
        </>
    );
}

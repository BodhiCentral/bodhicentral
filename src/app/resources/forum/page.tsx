export default function TraditionsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/golden-buddha-faces.jpg)] bg-position-bottom bg-cover bg-center bg-no-repeat pb-40">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/55 dark:bg-black/55 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col mx-auto max-w-2xl items-center justify-center pt-20 pb-12 px-4 md:px-6">
                        <h1 className="text-display-md text-center text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl pb-6">Bodhi Central Forum</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">A place to discuss Buddhist texts, practices, and teachings.</p>
                        <h2 className="text-display-md text-green-800 dark:text-green-200 md:text-display-lg lg:text-display-xl mt-40">Section in progress</h2>
                    </section>
                </div>
            </div>
        </>
    );
}

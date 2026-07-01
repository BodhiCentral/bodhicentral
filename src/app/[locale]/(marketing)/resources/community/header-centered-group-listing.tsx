"use client";

export const HeaderCenteredGroupListing = () => {
    return (
        <section className="bg-primary py-8 md:py-16">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Resources</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Communities Around You</h1>
                    <p className="mt-2 text-lg text-tertiary md:mt-4 md:text-xl">
                        Find Buddhist groups and join communities near you.
                    </p>
                </div>
            </div>
        </section>
    );
};

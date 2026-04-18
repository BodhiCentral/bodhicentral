import Image from "next/image";

export const AttributionsAffiliationsBanner = () => {
    return (
        <section className="bg-warm-off-300 dark:bg-primary py-16 md:py-32">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h3 className="mt-3 text-display-sm text-brand-800 dark:text-brand-400 md:text-display-md">Partner affiliations and attributions</h3>
                        <p className="mt-3 text-md font-light text-tertiary md:mt-4 md:text-lg">
                            Thanks to the following organizations for their contributions and grounding in the Dharma:
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <Image alt="Odeaolabs" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Kintsugi" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Magnolia" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Warpspeed" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Sisyphus" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Himalayan Archive of Resilience" src="/social-logos/har_logo_blocks@2x.png" className="h-9 md:h-10 dark:hidden grayscale opacity-60" width={100} height={100} />
                        <Image alt="Kintsugi" src="/social-logos/the-treasury-of-lives-logo.png" className="h-9 md:h-10 dark:hidden grayscale opacity-60" width={220} height={100} />
                        <Image alt="Magnolia" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Warpspeed" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />
                        <Image alt="Sisyphus" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 dark:hidden" width={100} height={100} />

                        {/* Dark mode images (hidden in light mode) */}

                        <Image alt="Odeaolabs" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Kintsugi" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Magnolia" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Warpspeed" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Sisyphus" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Odeaolabs" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Kintsugi" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Magnolia" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Warpspeed" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                        <Image alt="Sisyphus" src="/placeholder-image-landscape.svg" className="h-9 md:h-10 opacity-85 not-dark:hidden" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    );
};

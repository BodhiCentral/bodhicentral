"use client";

import { Dataflow01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { TibetanCanonDivisionsGallery } from "./tibetan-canon-divisions-gallery";
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";

export const TengyurDivisionsSection = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-brand-50 from-0% via-brand-100 via-30% to-brand-200 to-100% dark:bg-linear-to-b dark:from-brand-800/50 dark:from-0% dark:via-brand-800/30 dark:via-30% dark:to-brand-900/90 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                {/* <!-- Collection Gallery Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg">Tengyur Divisions</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-balance">
                            The Tengyur is the collection of the Buddhist commentaries in Tibetan. It contains some 3,300 works in 213 volumes, all translations into Tibetan of the Indian commentaries on the words of the Buddha. These seventeen divisions follow Adarshah's digital edition of the Degé Tengyur.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button href="/canon-overviews/tengyur-overview" color="secondary" size="md">
                            Overview
                        </Button>
                        <Button color="secondary" size="md" iconTrailing={Dataflow01} onClick={() => openCanonNavigator()} >
                            Tengyur Outline
                        </Button>
                    </div>
                </div>

                {/* <!-- Tibetan Canon Section Gallery --> */}
                <TibetanCanonDivisionsGallery canonType="tengyur" />
            </div>
        </section >
    );
};

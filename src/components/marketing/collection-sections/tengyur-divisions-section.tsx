"use client";

import { Dataflow01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { TibetanCanonDivisionsGallery } from "./tibetan-canon-divisions-gallery";

export const TengyurDivisionsSection = () => {
    return (
        <section className="relative overflow-hidden z-100 bg-linear-to-b from-orange-25 from-0% via-orange-50 via-10% to-orange-100 to-100% dark:bg-linear-to-b dark:from-gray-950/0 dark:from-0% dark:via-gray-950 dark:via-10% dark:to-orange-950 py-6 md:py-8">
            <div className="mx-auto px-4 md:px-8">
                {/* <!-- Collection Gallery Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Tengyur Divisions</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-balance">
                            The Tengyur is the collection of the Buddhist commentaries in Tibetan. It contains some 3,300 works in 213 volumes, all translations into Tibetan of the Indian commentaries on the words of the Buddha. These seventeen divisions follow Adarshah's digital edition of the Degé Tengyur.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button color="secondary" size="xl" iconLeading={Dataflow01}>
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

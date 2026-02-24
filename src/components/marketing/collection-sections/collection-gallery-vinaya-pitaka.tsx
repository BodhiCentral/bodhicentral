"use client";

import { Dataflow01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { CollectionPaliSectionGallery } from "./collection-pali-section-gallery";

export const CollectionGalleryVinayaPitaka = () => {
    return (
        <section className="relative overflow-hidden -mt-28 z-100 bg-linear-to-b from-orange-25/0 from-0% via-orange-50 via-9% to-orange-100 to-100% dark:bg-linear-to-b dark:from-gray-950/0 dark:from-0% dark:via-gray-950 dark:via-9% dark:to-orange-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                {/* <!-- Collection Gallery Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Vinaya Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-balance">
                            The Vinaya Piṭaka, “the Basket of Monastic Law”, contains the rules that are binding on monastics and the regulations that apply to monastic communities.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-end">
                        <Button color="secondary" size="xl" iconLeading={Dataflow01}>
                            Vinayapiṭaka Outline
                        </Button>
                    </div>
                </div>

                {/* <!-- Collection Pali Section Gallery --> */}
                <CollectionPaliSectionGallery pitakaType="vinaya" />
            </div>
        </section >
    );
};

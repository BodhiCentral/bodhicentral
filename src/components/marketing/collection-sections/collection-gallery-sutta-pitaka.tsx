"use client";

import { Dataflow01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { CollectionPaliSectionGallery } from "./collection-pali-section-gallery";

export const CollectionGallerySuttaPitaka = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-brand-50 from-0% via-brand-100 via-30% to-brand-200 to-100% dark:bg-linear-to-b dark:from-brand-800/50 dark:from-0% dark:via-brand-800/30 dark:via-30% dark:to-brand-900/90 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                {/* <!-- Collection Gallery Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-brand-700 dark:text-brand-200 md:text-display-lg">Sutta Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-balance">
                            The Sutta Piṭaka, the “basket of discourses,” is the most important body of sacred scripture in Buddhism. This collection contains the teachings of the Buddha and his disciples, as collected and transmitted by the schools of early Buddhism. This is the well-spring of Dhamma, from which the teachings and practices of the many schools of Buddhism are drawn.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button href="/canon-overviews/sutta-overview" color="secondary" size="md">
                            Overview
                        </Button>
                        <Button href="#" color="secondary" size="md" iconLeading={Dataflow01}>
                            Suttapiṭaka Outline
                        </Button>

                    </div>
                </div>

                {/* <!-- Collection Pali Section Gallery --> */}
                <CollectionPaliSectionGallery pitakaType="sutta" />
            </div>
        </section >
    );
};

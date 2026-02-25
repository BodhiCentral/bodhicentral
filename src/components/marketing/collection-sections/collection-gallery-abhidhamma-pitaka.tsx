"use client";

import { Dataflow01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { CollectionPaliSectionGallery } from "./collection-pali-section-gallery";

export const CollectionGalleryAbhidhammaPitaka = () => {
    return (
        <section className="overflow-hidden bg-linear-to-b from-orange-50 to-orange-100 dark:bg-linear-to-b dark:from-gray-900 dark:to-orange-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">

                {/* <!-- Collection Gallery Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Abhidhamma Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-balance">
                            The Abhidhamma Piṭaka, the "basket of systematic treatises," are summaries and analyses of the teachings drawn from the earlier discourses. The Abhidhamma is intended for advanced students who have mastered the teachings of the discourses.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button color="secondary" size="xl" iconLeading={Dataflow01}>
                            Abhidhammapiṭaka Outline
                        </Button>
                    </div>
                </div>

                {/* <!-- Collection Pali Section Gallery --> */}
                <CollectionPaliSectionGallery pitakaType="abhidhamma" />
            </div>
        </section >
    );
};

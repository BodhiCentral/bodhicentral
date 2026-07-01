import Image from 'next/image';
import { GalleryNyingmaStudies } from '@/components-custom/galleries/gallery-nyingma-studies';
import { GalleryKagyuStudies } from '@/components-custom/galleries/gallery-kagyu-studies';

export default function IndianMahayanaPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/himalayan-scenery-02.jpg)] bg-cover bg-center bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/62 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-16 pb-2 px-4 md:px-6">
                        <h1 className="text-display-md text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl">Indian Mahayana Studies</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">Indian Buddhist texts written down during the Golden Age of Buddhist philosophy in India</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_gelug.jpg" alt="Gelug" width={190} height={190} className="tibetanStudiesCard_img" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-2 border-t-4 border-yellow-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Vinaya</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The Vinaya is the collection of monastic rules and regulations.</p>
                                </div>
                            </div>
                            <div className="col-start-2 md:col-start-4 flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_sakya.jpg" alt="Sakya" width={190} height={190} className="tibetanStudiesCard_img" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40  p-2 border-t-4 border-green-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Abhidharma</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The Abhidharma is the collection of Buddhist philosophy.</p>
                                </div>
                            </div>
                            <div className="col-start-1 md:col-start-2 h-auto md:-mt-60 flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_nyingma.jpg" alt="Nyingma" width={190} height={190} className="tibetanStudiesCard_img rounded-full" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-2 border-t-4 border-cyan-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Prajnaparamita</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The Profound View.</p>
                                </div>
                            </div>
                            <div className="col-start-2 md:col-start-3 h-auto md:-mt-60 flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_kagyu.jpg" alt="Kagyu" width={190} height={190} className="tibetanStudiesCard_img rounded-full" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-2 border-t-4 border-pink-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Pramana</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Principles of valid cognition.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <GalleryNyingmaStudies />
            <GalleryKagyuStudies />
        </>
    );
}

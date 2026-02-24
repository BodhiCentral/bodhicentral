"use client";

import { ArrowLeft, ArrowRight, Dataflow01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        english_title: "Compendium of Phenomena",
        pali_title: "Dhammasaṅgaṇī",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "The Dhammasaṅgaṇī (Compendium of Phenomena) is built on the idea of a mātikā, a lists of contents or matrix. A mātikā acts as a simple instance of a template that is applied and transformed in ever more complex forms throughout the work. The Dhammasaṅgaṇī mātikās list sets of phenomena (dhammas). Most of these are doctrinal terms familiar from the suttas, although some are specialized Abhidhamma terms. The Dhammasaṅgaṇī starts with three mātikās. The first classifies dhammas into 22 sets of three (tika), and the next two use sets of two (duka), 100 pairs for Abhidhamma terms, and 42 for Sutta terms.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Ds",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
    {
        english_title: "Book of Analysis",
        pali_title: "Vibhaṅga",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "The Vibhaṅga (Book of Analysis) consists of 18 chapters arranged by topic. The list of topics is closely related to the Saṁyutta Nikāya—aggregates, senses, dependent origination, etc. Most of the chapters have a threefold structure. (1) Analysis according to the suttas: this quotes a key passage from the suttas on the relvant topic and offers a modest analysis. (2) Analysis according to the Abhidhamma: applies the sets of synonyms and terms as developed in the Dhammasaṅgaṇī. (3) Catechism: tests the students knowledge with systematic questioning.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Vb",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
    {
        english_title: "Discurssion of Elements",
        pali_title: "Dhātukathā",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "The Dhātukathā (Discussion of Elements) shows how the mātikās relate to the 5 aggregates, 12 bases and 18 elements. It is organized according to fourteen methods.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Dt",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
    {
        english_title: "Description of Personality Types",
        pali_title: "Puggalapaññatti",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "The Puggalapaññatti (Designation of Person) departs from the strictly phenomenological approach of most Abhidhamma texts to present a compendium of passages relating to different kinds of individual. These are set out in a mātikā listing kinds of individuals numerically organized from one to ten. As suggested by the numerical arrangement, these terms are mostly derived from the Aṅguttara Nikāya, with modest changes in wording. The main concern is to classify personal or psychological tendencies as they relate to the development of the Buddhist path.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Pp",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
    {
        english_title: "Points of Controversy",
        pali_title: "Kathāvatthu",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "The Kathāvatthu (Points of Controversy) is a collection of over 200 discussions on points of interpretation of Buddhist doctrine. These consist of a debate between unnamed protagonists. Each relies either on logic or quotations from the suttas to support their arguments. Some of the discussions concern central problems in Buddhist philosophy, such as the nature of not-self, or the problem of continuity and impermanence. Many, however, are very minor.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Kv",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
    {
        english_title: "The Pairs",
        pali_title: "Yamaka",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "The Yamaka (Pairs) consists of ten chapters on different topics, starting with the roots of wholesome or unwholesome conduct. It applies a series of pairs of questions, with the object of fully determining the scope of application of terms. For example, are all rūpa (physical phenomena) part of the aggregate of physical phenomena? No, because there are idiomatic uses of rūpa such as evarūpa (“of such a sort”). But are all instances of the aggregate of physical phenomena? Yes.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Ya",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
    {
        english_title: "Conditional Relations",
        pali_title: "Paṭṭhāna",
        author_pali: "Buddha Shakyamuni",
        canon: "Systematic Treatises",
        short_description: "Paṭṭhāna (Conditional Relations) sets out a simple mātikā listing 24 kinds of condition. For example, the first is the “root condition” (hetupaccayo), dealing with how acts are caused by the unwholesome roots of greed, hate, and delusion, or their opposites. This mātikā is then applied to the mātikās of Dhammasaṅgaṇī, creating a bewildering complexity of possible combinations. The Paṭṭhāna is always heavily abbreviated, but if it were to be fully spelled out, it would probably be the largest book ever created, with many billions of combinations.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Abhidhamma",
        section_numbers: "Patthana",
        color: "bg-gray-900/65",
        darkColor: "dark:bg-gray-900/75",
    },
];

export const CollectionGalleryAbhidhammaPitaka = () => {
    return (
        <section className="overflow-hidden bg-linear-to-b from-orange-50 to-orange-100 dark:bg-linear-to-b dark:from-gray-900 dark:to-orange-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Abhidhamma Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Abhidhamma Piṭaka, the "basket of systematic treatises," are summaries and analyses of the teachings drawn from the earlier discourses. The Abhidhamma is intended for advanced students who have mastered the teachings of the discourses.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button color="secondary" size="xl" iconLeading={Dataflow01}>
                            Abhidhammapiṭaka Outline
                        </Button>
                    </div>
                </div>

                <Carousel.Root
                    className="mt-4 md:mt-6"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-4 md:pr-4">
                        {collectionTexts.map((text) => (
                            <Carousel.Item
                                key={text.english_title}
                                className="group relative flex aspect-[.5625] w-full max-w-60 flex-col justify-end md:aspect-[.5625] md:max-w-72 drop-shadow-lg border-2 border-orange-300 dark:border-red-950 rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300"
                            >
                                <img alt={text.pali_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-[-1] cursor-grab object-cover rounded-sm group-hover:hidden transition-all duration-300" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm group-hover:hidden transition-all duration-300">
                                    <div className={`relative ${text.color} ${text.darkColor} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                                        <h3 className="text-lg font-medium text-brand-200">{text.english_title}</h3>
                                        <p className="mt-1 text-lg">{text.pali_title}</p>
                                        <p className="mt-4 text-xs font-regular">{text.canon}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <div className="flex flex-col gap-0">
                                                <p className="text-sm font-normal text-brand-200 uppercase">{text.pitaka_section}</p>
                                                <p className="text-xs font-normal text-brand-200">{text.section_numbers}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`hidden z-20 flex flex-col justify-between group-hover:flex ${text.color} ${text.darkColor} backdrop-blur-[10px] h-full transition-all duration-300 text-white p-5 overflow-y-auto`}>
                                    <div className="flex flex-col gap-2 mt-1 items-top">
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm font-normal pb-2">{text.canon}</p>
                                            <h3 className="text-lg font-medium text-brand-200">{text.english_title}</h3>
                                        </div>
                                        <p className="mt-2 text-sm md:text-regular tracking-tight pb-4">{text.short_description}</p>
                                    </div>

                                    <Button size="sm" className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400">
                                        Explore section
                                    </Button>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-6 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>
        </section >
    );
};

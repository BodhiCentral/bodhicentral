"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import Image from "next/image";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";
import { createClient } from "@/utils/supabase/client";

interface PaliSection {
    id_volumen: string;
    pitaka_type: string;
    english_title: string;
    pali_title: string;
    author_pali: string;
    pitaka_division_english: string;
    short_description: string;
    thumbnail_cover: string;
    pitaka_division: string;
    division_abbreviation: string;
    section_numbers: string;
    color: string;
    dark_color: string;
    pali_section_slug: string;
    sort_order: number;
}

interface PaliDivisionsGalleryProps {
    pitakaType: "vinaya" | "sutta" | "abhidhamma";
}

const TAILWIND_COLOR_SAFELIST = [
    "bg-cyan-950/80",
    "dark:bg-cyan-950/80",
    "bg-blue-950/80",
    "dark:bg-blue-950/80",
    "bg-violet-950/80",
    "dark:bg-violet-950/80",
    "bg-red-900/80",
    "dark:bg-red-900/80",
    "bg-orange-900/80",
    "dark:bg-orange-900/80",
    "bg-yellow-800/80",
    "dark:bg-yellow-800/80",
    "bg-fuchsia-950/80",
    "dark:bg-fuchsia-950/80",
    "bg-emerald-900/80",
    "dark:bg-emerald-900/80",
    "bg-gray-800/80",
    "dark:bg-gray-800/80",
    "bg-olive-800/80",
    "dark:bg-olive-800/80",
];

const PaliSectionCard = ({ section }: { section: PaliSection }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Carousel.Item
            key={section.id_volumen || section.english_title}
            className={`group relative flex aspect-[.5625] w-full max-w-56 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border border-olive-500 drop-shadow-xl drop-shadow-brand-600/30 transition-all duration-500 hover:scale-[1.05] md:aspect-[.5625] md:max-w-64 dark:border-olive-950 dark:drop-shadow-brand-700/20`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <Image
                alt={section.pali_title}
                src={section.thumbnail_cover}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
                className={`absolute inset-0 top-0 z-0 size-full cursor-grab rounded-sm object-cover ${isFlipped ? "invisible opacity-0" : "group-hover:invisible group-hover:opacity-0"}`}
            />
            <div className={`absolute top-[-28px] right-[8px] z-200 flex h-14 w-16 items-end justify-center pb-1 ${section.color} rounded-full`}>
                <h6 className="text-brand-100">{section.division_abbreviation}</h6>
            </div>

            <div
                className={`z-10 rounded-b-sm bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 ${isFlipped ? "invisible opacity-0" : "group-hover:invisible group-hover:opacity-0"}`}
            >
                <div
                    className={`relative ${section.color} ${section.dark_color} rounded-b-sm px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5`}
                >
                    <h3 className="pb-1 text-3xl font-medium text-brand-300">{section.english_title}</h3>
                    <p className="mt-1 text-lg">{section.pali_title}</p>

                    <div className="items-top mt-2 flex justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="font-regular mt-4 text-sm text-brand-300">{section.pitaka_division_english}</p>
                            <p className="text-sm font-normal text-white uppercase">{section.pitaka_division}</p>
                            <p className="hidden text-xs font-normal text-white">{section.section_numbers}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute inset-0 z-20 flex flex-col justify-between ${section.color} ${section.dark_color} h-full overflow-y-auto p-5 text-white backdrop-blur-[10px] transition-all duration-300 ${isFlipped ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"}`}
                onClick={(e) => {
                    // Prevent flipping back when clicking the button inside the reversed side
                    if ((e.target as HTMLElement).closest("button")) {
                        e.stopPropagation();
                    }
                }}
            >
                {/* Card Reversed Side */}
                <div className="items-top mt-1 flex flex-col gap-2">
                    <div className="flex flex-col gap-0">
                        <p className="pb-2 text-sm font-normal">{section.pali_title}</p>
                        <h3 className="text-lg font-medium text-brand-300">{section.english_title}</h3>
                    </div>
                    <p className="md:text-regular mt-2 pb-4 text-sm text-balance">{section.short_description}</p>
                </div>

                <Button
                    size="sm"
                    href={`/reader/pali-canon/${section.pali_section_slug}`}
                    className="border-0.5 border-white/50 bg-black/20 text-white/80 hover:border-white/50 hover:bg-black/30 hover:text-white/90 dark:border-gray-900/50 dark:bg-gray-900/50 dark:text-gray-400"
                >
                    Open section
                </Button>
            </div>
        </Carousel.Item>
    );
};

export const PaliDivisionsGallery = ({ pitakaType }: PaliDivisionsGalleryProps) => {
    const [sections, setSections] = useState<PaliSection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClient();

    useEffect(() => {
        const fetchSections = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase.from("pali_sections").select("*").eq("pitaka_type", pitakaType).order("id_volumen", { ascending: true });

                if (error) throw error;
                setSections(data || []);
            } catch (err: any) {
                console.error("Error fetching pali sections:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSections();
    }, [pitakaType, supabase]);

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <div className="size-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
            </div>
        );
    }

    if (error) {
        return <div className="flex h-64 items-center justify-center text-red-500">Error loading sections: {error}</div>;
    }

    if (sections.length === 0) {
        return null; // Or a placeholder
    }

    return (
        <Carousel.Root
            className="mt-4 md:mt-6"
            opts={{
                align: "start",
            }}
        >
            <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-5 md:pr-4">
                {sections.map((section) => (
                    <PaliSectionCard key={section.id_volumen || section.english_title} section={section} />
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
    );
};

"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";
import { createClient } from "@/utils/supabase/client";

interface PaliSection {
    id: string;
    pitaka_type: string;
    english_title: string;
    pali_title: string;
    author_pali: string;
    canon: string;
    short_description: string;
    thumbnail_cover: string;
    pitaka_section: string;
    section_numbers: string;
    color: string;
    dark_color: string;
}

interface CollectionPaliSectionGalleryProps {
    pitakaType: "vinaya" | "sutta" | "abhidhamma";
}

const TAILWIND_COLOR_SAFELIST = [
    "bg-cyan-950/70", "dark:bg-cyan-900/70",
    "bg-fuchsia-950/70", "dark:bg-fuchsia-900/70",
    "bg-red-900/70", "dark:bg-red-900/70",
    "bg-orange-950/65", "dark:bg-orange-900/70",
    "bg-yellow-800/70", "dark:bg-yellow-800/70",
    "bg-emerald-900/70", "dark:bg-emerald-900/70",
    "bg-gray-900/70", "dark:bg-gray-900/70",
    "bg-gray-900/65", "dark:bg-gray-900/75"
];

const PaliSectionCard = ({ section }: { section: PaliSection }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Carousel.Item
            key={section.id || section.english_title}
            className="group relative flex aspect-[.5625] w-full max-w-68 flex-col justify-end md:aspect-[.5625] md:max-w-76 drop-shadow-lg border-2 border-orange-300 dark:border-red-950 rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <img
                alt={section.pali_title}
                src={section.thumbnail_cover}
                className={`absolute inset-0 z-0 size-full top-0 cursor-grab object-cover rounded-sm ${isFlipped ? "opacity-0 invisible" : "group-hover:opacity-0 group-hover:invisible"}`}
            />

            <div className={`z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm ${isFlipped ? "opacity-0 invisible" : "group-hover:opacity-0 group-hover:invisible"}`}>
                <div className={`relative ${section.color} ${section.dark_color} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                    <h3 className="text-lg font-medium text-brand-200">{section.english_title}</h3>
                    <p className="mt-1 text-lg">{section.pali_title}</p>
                    <p className="mt-4 text-xs font-regular">{section.canon}</p>
                    <div className="flex gap-2 mt-1 justify-between items-top">
                        <div className="flex flex-col gap-0">
                            <p className="text-sm font-normal text-brand-200 uppercase">{section.pitaka_section}</p>
                            <p className="text-xs font-normal text-brand-200">{section.section_numbers}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute inset-0 z-20 flex flex-col justify-between ${section.color} ${section.dark_color} backdrop-blur-[10px] h-full transition-all duration-300 text-white p-5 overflow-y-auto ${isFlipped ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"}`}
                onClick={(e) => {
                    // Prevent flipping back when clicking the button inside the reversed side
                    if ((e.target as HTMLElement).closest('button')) {
                        e.stopPropagation();
                    }
                }}
            >
                {/* Card Reversed Side */}
                <div className="flex flex-col gap-2 mt-1 items-top">
                    <div className="flex flex-col gap-0">
                        <p className="text-sm font-normal pb-2">{section.canon}</p>
                        <h3 className="text-lg font-medium text-brand-200">{section.english_title}</h3>
                    </div>
                    <p className="mt-2 text-sm md:text-regular text-balance pb-4">{section.short_description}</p>
                </div>

                <Button
                    size="sm"
                    className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400"
                >
                    Explore section
                </Button>
            </div>
        </Carousel.Item>
    );
};

export const CollectionPaliSectionGallery = ({ pitakaType }: CollectionPaliSectionGalleryProps) => {
    const [sections, setSections] = useState<PaliSection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClient();

    useEffect(() => {
        const fetchSections = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from("pali-sections")
                    .select("*")
                    .eq("pitaka_type", pitakaType)
                    .order("id", { ascending: true });

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
        return (
            <div className="flex h-64 items-center justify-center text-red-500">
                Error loading sections: {error}
            </div>
        );
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
            <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-4 md:pr-4">
                {sections.map((section) => (
                    <PaliSectionCard key={section.id || section.english_title} section={section} />
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

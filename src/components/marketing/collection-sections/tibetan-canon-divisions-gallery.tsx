"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";
import { createClient } from "@/utils/supabase/client";

interface TibetanCanonDivision {
    id_sorting: string;
    canon: string;
    english_title: string;
    tibetan_title: string;
    sanskrit_title: string;
    author_english: string;
    author_tibetan: string;
    canon_division: string;
    short_description: string;
    thumbnail_cover: string;
    volumes: string;
    toh_numbers: string;
    color: string;
    dark_color: string;
}

interface TibetanCanonDivisionsGalleryProps {
    canonType: "kangyur" | "tengyur";
}

const TAILWIND_COLOR_SAFELIST = [
    "bg-cyan-950/80", "dark:bg-cyan-950/80",
    "bg-blue-950/75", "dark:bg-blue-950/75",
    "bg-violet-950/80", "dark:bg-violet-950/80",
    "bg-red-900/75", "dark:bg-red-900/75",
    "bg-orange-900/75", "dark:bg-orange-900/75",
    "bg-yellow-950/70", "dark:bg-yellow-950/70",
    "bg-fuchsia-950/80", "dark:bg-fuchsia-950/80",
    "bg-green-950/75", "dark:bg-green-950/75",
    "bg-gray-900/75", "dark:bg-gray-900/75",
    "bg-olive-800/80", "dark:bg-olive-800/80"
];

const TibetanCanonDivisionsCard = ({ section }: { section: TibetanCanonDivision }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Carousel.Item
            key={section.toh_numbers || section.english_title}
            className="group relative flex aspect-[.5625] w-full max-w-68 flex-col justify-end md:aspect-[.5625] md:max-w-76 bg-radial-[at_50%_35%] from-yellow-100 via-yellow-200 via-27% to-yellow-700 to-75% dark:from-yellow-dark-100 dark:via-yellow-dark-300 dark:via-26% dark:to-yellow-700 dark:to-75% drop-shadow-lg border-2 border-orange-300 dark:border-red-950 rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <img
                alt={section.english_title}
                src={section.thumbnail_cover}
                className={`absolute inset-0 z-0 size-full top-0 cursor-grab object-cover rounded-sm ${isFlipped ? "opacity-0 invisible" : "group-hover:opacity-0 group-hover:invisible"}`}
            />
            <div className="absolute flex items-end justify-center z-200 w-30 h-16 top-[-34px] right-[12px] pb-1.5 bg-red-950/80 rounded-3xl">
                <h6 className=" text-brand-200">{section.toh_numbers}</h6>
            </div>

            <div className={`z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm ${isFlipped ? "opacity-0 invisible" : "group-hover:opacity-0 group-hover:invisible"}`}>
                <div className={`relative ${section.color} ${section.dark_color} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                    <h3 className="text-xl font-medium text-brand-200">{section.english_title}</h3>
                    <p className="mt-1 text-2xl font-regular">{section.tibetan_title}</p>
                    <p className="mt-2 text-sm font-regular">{section.sanskrit_title}</p>
                    <div className="flex gap-2 mt-6 justify-between items-top">
                        <div className="flex flex-col gap-0">
                            <p className="text-sm font-normal text-brand-200 uppercase">{section.canon_division}</p>
                            <p className="text-xs font-normal text-brand-200">{section.volumes}</p>
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
                        <p className="text-sm font-normal pb-2">{section.canon_division}</p>
                        <h3 className="text-lg font-medium text-brand-200">{section.english_title}</h3>
                    </div>
                    <p className="mt-2 text-sm md:text-regular text-balance pb-4">{section.short_description}</p>
                </div>

                <Button
                    size="sm"
                    className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400"
                >
                    Explore division
                </Button>
            </div>
        </Carousel.Item>
    );
};

export const TibetanCanonDivisionsGallery = ({ canonType }: TibetanCanonDivisionsGalleryProps) => {
    const [sections, setSections] = useState<TibetanCanonDivision[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClient();

    useEffect(() => {
        const fetchSections = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from("tibetan-canon-sections")
                    .select("*")
                    .eq("canon", canonType)
                    .order("id_sorting", { ascending: true });

                if (error) throw error;
                setSections(data || []);
            } catch (err: any) {
                console.error("Error fetching Tibetan Canon divisions:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSections();
    }, [canonType, supabase]);

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
                    <TibetanCanonDivisionsCard key={section.toh_numbers || section.english_title} section={section} />
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

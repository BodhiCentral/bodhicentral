"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import Image from "next/image";
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
    texts_count: string;
    color: string;
    dark_color: string;
}

interface TibetanCanonDivisionsGalleryProps {
    canonType: "kangyur" | "tengyur";
}

const TAILWIND_COLOR_SAFELIST = [
    "bg-cyan-950/80",
    "dark:bg-cyan-950/80",

    "bg-blue-950/75",
    "dark:bg-blue-950/75",

    "bg-violet-950/80",
    "dark:bg-violet-950/80",

    "bg-red-900/75",
    "dark:bg-red-900/75",

    "bg-orange-900/75",
    "dark:bg-orange-900/75",

    "bg-yellow-950/70",
    "dark:bg-yellow-950/70",

    "bg-fuchsia-950/70",
    "dark:bg-fuchsia-950/70",

    "bg-green-950/75",
    "dark:bg-green-950/75",

    "bg-gray-900/75",
    "dark:bg-gray-900/75",

    "bg-olive-800/80",
    "dark:bg-olive-800/80",
];

const TibetanCanonDivisionsCard = ({ section }: { section: TibetanCanonDivision }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Carousel.Item
            key={section.toh_numbers || section.english_title}
            className={`group relative flex aspect-[.5625] w-full max-w-68 flex-col justify-end md:aspect-[.5625] md:max-w-72 bg-${section.color} dark:bg-${section.dark_color} cursor-pointer overflow-hidden rounded-2xl border-2 border-olive-500 drop-shadow-xl drop-shadow-brand-600/30 transition-all duration-700 hover:scale-[1.08] dark:border-olive-950 dark:drop-shadow-brand-700/20`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <Image
                alt={section.english_title}
                src={section.thumbnail_cover}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
                className={`absolute inset-0 top-0 z-0 size-full cursor-grab rounded-sm object-cover mix-blend-luminosity grayscale ${isFlipped ? "invisible opacity-0" : "group-hover:invisible group-hover:opacity-0"}`}
            />
            <div
                className={`absolute top-[-34px] right-[12px] z-200 flex h-16 w-auto items-end justify-center px-3.5 pb-1 bg-${section.color} drop-shadow-dark/80 rounded-2xl drop-shadow-md`}
            >
                <h6 className="text-brand-200">{section.texts_count}</h6>
            </div>

            <div
                className={`z-10 rounded-b-sm bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 ${isFlipped ? "invisible opacity-0" : "group-hover:invisible group-hover:opacity-0"}`}
            >
                <div
                    className={`relative bg-${section.color} dark:bg-${section.dark_color} rounded-b-sm px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5`}
                >
                    <h3 className="text-2xl font-semibold text-brand-300">{section.english_title}</h3>
                    <p className="mt-2 text-xl">{section.tibetan_title}</p>
                    <p className="mt-1 text-lg font-light">{section.sanskrit_title}</p>
                    <div className="items-top mt-8 flex justify-between gap-2">
                        <div className="flex flex-col gap-0">
                            <p className="text-md text-brand-300 uppercase">{section.canon_division}</p>
                            <p className="hidden text-sm text-brand-200">{section.toh_numbers}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute inset-0 z-20 flex flex-col justify-between bg-${section.color} dark:bg-${section.dark_color} h-full overflow-y-auto p-5 text-white backdrop-blur-[10px] transition-all duration-300 ${isFlipped ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"}`}
                onClick={(e) => {
                    // Prevent flipping back when clicking the button inside the reversed side
                    if ((e.target as HTMLElement).closest("button")) {
                        e.stopPropagation();
                    }
                }}
            >
                {/* Card Reversed Side */}
                <div className="items-top flex flex-col gap-2">
                    <div className="flex flex-col gap-0">
                        <p className="pb-1 text-sm font-normal">{section.tibetan_title}</p>
                        <h3 className="text-lg font-medium text-brand-300">{section.english_title}</h3>
                    </div>
                    <p className="md:text-light pb-2 text-xs text-balance">{section.short_description}</p>
                </div>

                <Button
                    size="lg"
                    className="border-0.5 border-white/50 bg-black/20 text-white hover:border-white/50 hover:bg-black/30 hover:text-white/60 dark:border-gray-900/50 dark:bg-gray-900/50 dark:text-white"
                >
                    Open division
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

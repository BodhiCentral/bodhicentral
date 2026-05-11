"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

interface TibetanStudiesText {
    sort_order: number;
    primary_school: string;
    secondary_school: string;
    genre: string;
    english_title: string;
    tibetan_title: string;
    sanskrit_title: string;
    part: string;
    author_english: string;
    author_tibetan: string;
    canon_division: string;
    short_description: string;
    thumbnail_cover: string;
    volumes: string;
    toh_numbers: string;
    color: string;
    dark_color: string;
    url: string;
}

interface GalleryTibetanStudiesTextsProps {
    schoolType: "Nyingma" | "Sakya" | "Kagyu" | "Gelug" | "Indian Mahayana";
}

const TAILWIND_COLOR_SAFELIST = [
    "bg-cyan-900/70", "dark:bg-cyan-900/70",
    "bg-pink-950/70", "dark:bg-pink-950/70",
    "bg-blue-950/75", "dark:bg-blue-950/75",
    "bg-violet-950/80", "dark:bg-violet-950/80",
    "bg-red-900/75", "dark:bg-red-900/75",
    "bg-orange-900/75", "dark:bg-orange-900/75",
    "bg-yellow-950/70", "dark:bg-yellow-950/70",
    "bg-fuchsia-950/80", "dark:bg-fuchsia-950/80",
    "bg-green-950/75", "dark:bg-green-950/75",
    "bg-gray-900/75", "dark:bg-gray-900/75",
    "bg-olive-700/80", "dark:bg-olive-700/80"
];

const TibetanStudiesTextCard = ({ text }: { text: TibetanStudiesText }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Carousel.Item
            key={text.toh_numbers || text.english_title}
            className="group relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68  drop-shadow-lg border-2 border-brand-300 dark:border-brand-950 rounded-xl overflow-hidden hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <Image
                alt={text.english_title}
                src={text.thumbnail_cover}
                width={200}
                height={200}
                style={{ width: "100%", height: "100%" }}
                className={`absolute inset-0 z-0 size-full top-0 cursor-grab object-cover rounded-sm ${isFlipped ? "opacity-0 invisible" : "group-hover:opacity-0 group-hover:invisible"}`}
            />
            <div className={`absolute hidden md:hidden items-end justify-end z-200 w-auto px-3.5 h-14 top-[-32px] right-[12px] pb-0.5 ${text.color} rounded-2xl`}>
                <h6 className=" text-brand-200">{text.part}</h6>
            </div>

            <div className={`z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm ${isFlipped ? "opacity-0 invisible" : "group-hover:opacity-0 group-hover:invisible"}`}>
                <div className={`relative ${text.color} ${text.dark_color} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                    <h3 className="text-xl text-brand-300" dangerouslySetInnerHTML={{ __html: text.english_title }} />
                    <p className="mt-3 text-lg font-regular" dangerouslySetInnerHTML={{ __html: text.tibetan_title }} />
                    <p className="mt-2 text-md font-regular" dangerouslySetInnerHTML={{ __html: text.sanskrit_title }} />
                    <div className="flex gap-2 mt-6 justify-between items-top">
                        <div className="flex flex-col gap-0">
                            <p className="text-sm font-normal text-brand-300 uppercase" dangerouslySetInnerHTML={{ __html: text.author_english }} />
                            <p className="text-sm font-normal text-brand-200" dangerouslySetInnerHTML={{ __html: text.genre }} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute inset-0 z-20 flex flex-col justify-between ${text.color} ${text.dark_color} backdrop-blur-[10px] h-full transition-all duration-300 text-white p-5 overflow-y-auto ${isFlipped ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"}`}
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
                        <p className="text-lg font-normal pb-2" dangerouslySetInnerHTML={{ __html: text.tibetan_title }} />
                        <h3 className="text-lg font-medium text-brand-300" dangerouslySetInnerHTML={{ __html: text.english_title }} />
                    </div>
                    <p className="mt-2 text-sm md:text-regular text-balance pb-4" dangerouslySetInnerHTML={{ __html: text.short_description }} />
                </div>

                <Button
                    size="sm"
                    href="/reader"
                    className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400"
                >
                    Open text
                </Button>
            </div>
        </Carousel.Item>
    );
};

export const GalleryTibetanStudiesTexts = ({ schoolType }: GalleryTibetanStudiesTextsProps) => {
    const [tibetanTexts, setTibetanTexts] = useState<TibetanStudiesText[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClient();

    useEffect(() => {
        const fetchTexts = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from("tibetan_studies_texts")
                    .select("*")
                    .eq("primary_school", schoolType)
                    .order("sort_order", { ascending: true });

                if (error) throw error;
                setTibetanTexts(data || []);
            } catch (err: any) {
                console.error("Error fetching texts:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTexts();
    }, [schoolType, supabase]);

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

    if (tibetanTexts.length === 0) {
        return null; // Or a placeholder
    }

    return (
        <Carousel.Root
            className="mt-4 md:mt-6"
            opts={{
                align: "start",
            }}
        >
            <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-4 md:pr-4 backdrop-blur-sm">
                {tibetanTexts.map((text) => (
                    <TibetanStudiesTextCard key={text.toh_numbers || text.english_title} text={text} />
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs } from "@/components/application/tabs/tabs";

interface PaliSection {
    id: string;
    pali_title: string;
    english_title: string;
    section_numbers: string | null;
    sort_order: number | null;
}

interface PaliText {
    id: string;
    vagga_id: string;
    text_number: string | null;
    pali_title: string | null;
    english_title: string;
    slug: string;
    sort_order: number | null;
}

interface PaliSectionChapterTabsProps {
    vaggas: PaliSection[];
    texts: PaliText[];
}

export const PaliSectionChapterTabs = ({ vaggas, texts }: PaliSectionChapterTabsProps) => {
    const [selectedVaggaId, setSelectedVaggaId] = useState<string>(vaggas[0]?.id ?? "");

    if (vaggas.length === 0) {
        return (
            <div className="flex h-40 items-center justify-center text-tertiary">
                No chapters found for this section.
            </div>
        );
    }

    const textsForSelectedVagga = texts.filter((t) => t.vagga_id === selectedVaggaId);

    return (
        <section className="relative py-12">
            <div className="mx-auto max-w-container">
                <h2 className="text-display-sm text-center font-light text-brand-800 dark:text-brand-200 pb-8">
                    Chapters
                </h2>

                <Tabs
                    selectedKey={selectedVaggaId}
                    onSelectionChange={(key) => setSelectedVaggaId(String(key))}
                >
                    <Tabs.List
                        items={vaggas.map((v) => ({
                            id: v.id,
                            label: v.english_title,
                            children: v.english_title,
                        }))}
                        type="underline"
                        size="md"
                        aria-label="Chapters"
                        className="overflow-x-auto"
                    >
                        {(item) => (
                            <Tabs.Item id={item.id} key={item.id}>
                                {item.label}
                            </Tabs.Item>
                        )}
                    </Tabs.List>

                    {vaggas.map((vagga) => (
                        <Tabs.Panel key={vagga.id} id={vagga.id} className="mt-6">
                            {vagga.id === selectedVaggaId && (
                                <div className="border border-brand-200 dark:border-brand-800 rounded-xl overflow-hidden">
                                    {textsForSelectedVagga.length === 0 ? (
                                        <div className="flex h-32 items-center justify-center text-tertiary">
                                            No texts found in this chapter.
                                        </div>
                                    ) : (
                                        <ul className="divide-y divide-brand-100 dark:divide-brand-900">
                                            {textsForSelectedVagga.map((text) => (
                                                <li key={text.id}>
                                                    <Link
                                                        href={`/reader/texts/${text.slug}`}
                                                        className="flex items-center gap-4 px-6 py-4 bg-cream-50 dark:bg-brand-950 hover:bg-cream-100 dark:hover:bg-brand-900 transition-colors duration-150 group"
                                                    >
                                                        {text.text_number && (
                                                            <span className="min-w-12 text-sm font-semibold text-brand-400 dark:text-brand-500 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                                                                {text.text_number}
                                                            </span>
                                                        )}
                                                        <div className="flex flex-col gap-0.5">
                                                            <span className="text-md font-medium text-primary group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
                                                                {text.english_title}
                                                            </span>
                                                            {text.pali_title && (
                                                                <span className="text-sm text-tertiary">
                                                                    {text.pali_title}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </Tabs.Panel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

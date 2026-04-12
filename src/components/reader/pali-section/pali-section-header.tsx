interface PaliSection {
    id: string;
    parent_id: string | null;
    section_type: string;
    pali_section_slug: string;
    pali_title: string;
    english_title: string;
    pitaka_type: string;
    pitaka_section_english: string | null;
    section_abbreviation: string | null;
    section_numbers: string | null;
    short_description: string | null;
    color: string | null;
    dark_color: string | null;
    thumbnail_cover: string | null;
    sort_order: number | null;
}

interface PaliSectionHeaderProps {
    section: PaliSection;
    parentSection: PaliSection | null;
}

export const PaliSectionHeader = ({ section, parentSection }: PaliSectionHeaderProps) => {
    const pitakaLabel =
        section.pitaka_type === "sutta"
            ? "Sutta Piṭaka"
            : section.pitaka_type === "vinaya"
                ? "Vinaya Piṭaka"
                : "Abhidhamma Piṭaka";

    return (
        <section className="relative py-12">
            <div className="mx-auto max-w-container grid grid-cols-[0.5fr_2fr] gap-0 border border-brand-500 rounded-xl overflow-hidden drop-shadow-sm">
                {/* Left Column */}
                <div className="flex flex-col gap-6 p-8 items-center justify-between bg-cream-100 dark:bg-brand-900 border-r border-brand-500">
                    <p className="text-lg text-center text-brand-800 dark:text-brand-200">{pitakaLabel}</p>
                    <div className="flex flex-col gap-1">
                        {section.section_abbreviation && (
                            <p className="text-center text-lg font-semibold text-tertiary">{section.section_abbreviation}</p>
                        )}
                        {section.pitaka_section_english && (
                            <p className="text-center text-md font-semibold text-tertiary">{section.pitaka_section_english}</p>
                        )}
                        {parentSection && (
                            <p className="text-center text-xl font-semibold text-tertiary">{parentSection.english_title}</p>
                        )}
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 p-8 bg-cream-50 dark:bg-brand-900">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-center text-lg font-regular text-tertiary">{section.pali_title}</p>
                        <h1 className="text-display-md text-center font-light text-brand-800 dark:text-brand-200">
                            {section.english_title}
                        </h1>
                    </div>
                    {section.short_description && (
                        <p className="text-md font-regular text-tertiary">{section.short_description}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

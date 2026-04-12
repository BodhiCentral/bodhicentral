import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { PaliSectionHeader } from "@/components/reader/pali-section/pali-section-header";
import { PaliSectionChapterTabs } from "@/components/reader/pali-section/pali-section-chapter-tabs";

export default async function PaliCanonSectionPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const supabase = await createClient();

    // 1. Fetch the main section by its slug
    const { data: section, error: sectionError } = await supabase
        .from("pali_sections")
        .select("*")
        .eq("pali_section_slug", slug)
        .single();

    if (sectionError || !section) {
        notFound();
    }

    // 2. Fetch parent section (e.g., the Nikāya this Paṇṇāsa belongs to)
    const { data: parentSection } = section.parent_id
        ? await supabase
              .from("pali_sections")
              .select("*")
              .eq("id", section.parent_id)
              .single()
        : { data: null };

    // 3. Fetch child Vaggas (chapters) of this section
    const { data: vaggas } = await supabase
        .from("pali_sections")
        .select("*")
        .eq("parent_id", section.id)
        .eq("section_type", "vagga")
        .order("sort_order", { ascending: true });

    const vaggaList = vaggas ?? [];

    // 4. Fetch all texts belonging to any of these Vaggas
    const vaggaIds = vaggaList.map((v) => v.id);

    // --- DEBUG: remove after resolving ---
    console.log("[DEBUG] vaggaIds:", vaggaIds);

    const textsResult = vaggaIds.length > 0
        ? await supabase
              .from("pali_texts")
              .select("*")
              .in("vagga_id", vaggaIds)
              .order("sort_order", { ascending: true })
        : { data: [], error: null };

    // --- DEBUG: remove after resolving ---
    console.log("[DEBUG] texts data:", textsResult.data);
    console.log("[DEBUG] texts error:", textsResult.error);

    const textList = textsResult.data ?? [];

    return (
        <main className="bg-primary-100 dark:bg-primary-900">
            <PaliSectionHeader section={section} parentSection={parentSection} />
            <PaliSectionChapterTabs vaggas={vaggaList} texts={textList} />
        </main>
    );
}

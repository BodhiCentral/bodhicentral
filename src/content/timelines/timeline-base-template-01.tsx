"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import type { Timeline, LaneData, ArticleData, TimelineOptions } from "histropediajs";

// ─────────────────────────────────────────────────────────
// Palette constants (matches Bodhi Central brand)
// ─────────────────────────────────────────────────────────
const BURGUNDY = "#8a2525";
const GOLD = "#cca43b";
const FONT_BASE = "'Inter', var(--font-nunito), sans-serif";

// ─────────────────────────────────────────────────────────
// Theme-specific timeline style configurations
// ─────────────────────────────────────────────────────────
const buildStyleOptions = (isDark: boolean): TimelineOptions["style"] => ({
    mainLine: {
        visible: true,
        size: 6,
    },
    marker: {
        minor: { height: 12, color: isDark ? BURGUNDY : GOLD, futureColor: "#4b5563" },
        major: { height: 28, color: isDark ? GOLD : BURGUNDY, futureColor: "#9ca3af" },
    },
    dateLabel: {
        minor: {
            font: `normal 11px ${FONT_BASE}`,
            color: isDark ? "#94a3b8" : "#475569",
            futureColor: "#6b7280",
        },
        major: {
            font: `600 14px ${FONT_BASE}`,
            color: isDark ? "#e2e8f0" : "#1e293b",
            futureColor: "#9ca3af",
        },
    },
    draggingHighlight: {
        color: isDark ? "rgba(30, 41, 59, 0.4)" : "rgba(241, 245, 249, 0.5)",
    },
});

// ─────────────────────────────────────────────────────────
// Shared article default style (overridden per-theme below)
// ─────────────────────────────────────────────────────────
const buildArticleDefaultStyle = (isDark: boolean) => ({
    width: 190,
    height: 80,
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    borderRadius: 8,
    border: {
        color: isDark ? "#334155" : "#e2e8f0",
        width: 1,
    },
    shadow: {
        x: 0, y: 3, amount: 10,
        color: isDark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.09)",
    },
    connectorLine: {
        visible: true,
        thickness: 1.5,
    },
    header: {
        text: {
            font: `600 14px ${FONT_BASE}`,
            color: isDark ? "#f1f5f9" : "#1e293b",
            align: "left" as const,
            numberOfLines: 2,
            lineHeight: 20,
            margin: 10,
        },
    },
    subheader: {
        color: isDark ? "#0f172a" : "#f1f5f9",
        text: {
            font: `normal 11px ${FONT_BASE}`,
            color: isDark ? "#64748b" : "#475569",
            align: "left" as const,
        },
    },
});

// ─────────────────────────────────────────────────────────
// Lane definitions (Lineage Recensions + Printed Editions)
// ─────────────────────────────────────────────────────────
const buildLanes = (isDark: boolean): LaneData[] => [
    {
        id: "recensions",
        title: "Lineage Recensions",
        layout: { heightWeight: 2 },
        style: {
            header: {
                backgroundColor: isDark
                    ? "rgba(138, 37, 37, 0.18)"
                    : "rgba(138, 37, 37, 0.05)",
            },
            body: {
                backgroundColor: isDark
                    ? "rgba(138, 37, 37, 0.07)"
                    : "rgba(138, 37, 37, 0.02)",
                borderColor: isDark ? "rgba(138,37,37,0.30)" : "rgba(138,37,37,0.12)",
                borderWidth: 1,
                borderRadius: 4,
            },
            title: {
                color: isDark ? "#f8fafc" : BURGUNDY,
                font: `600 13px ${FONT_BASE}`,
            },
        },
        article: {
            defaultCardLayout: "landscape",
            defaultStyle: {
                color: BURGUNDY,
                connectorLine: { thickness: 1.5 },
            },
            autoStacking: { active: true, rowSpacing: 24 },
        },
    },
    {
        id: "editions",
        title: "Canonical Editions",
        layout: { heightWeight: 2 },
        style: {
            header: {
                backgroundColor: isDark
                    ? "rgba(204, 164, 59, 0.45)"
                    : "rgba(204, 164, 59, 0.06)",
            },
            body: {
                backgroundColor: isDark
                    ? "rgba(204, 164, 59, 0.7)"
                    : "rgba(204, 164, 59, 0.02)",
                borderColor: isDark ? "rgba(204,164,59,0.30)" : "rgba(204,164,59,0.15)",
                borderWidth: 1,
                borderRadius: 6,
            },
            title: {
                color: isDark ? "#f8fafc" : "#92730d",
                font: `600 13px ${FONT_BASE}`,
            },
        },
        article: {
            defaultCardLayout: "landscape",
            defaultStyle: {
                color: GOLD,
                connectorLine: { thickness: 1.5 },
            },
            autoStacking: { active: true, rowSpacing: 24 },
        },
    },
];

// ─────────────────────────────────────────────────────────
// Article data — Major Kangyur Editions and Recensions
// Sources: Kangyur Overview, Bodhi Central
// ─────────────────────────────────────────────────────────
const KANGYUR_ARTICLES: ArticleData[] = [
    // ── Lineage Recensions ──────────────────────────────
    {
        id: "tshalpa",
        title: "Tshal Gungthang",
        subtitle: "Tshalpa recension (manuscript)",
        lane: "recensions",
        from: { year: 1347 },
        to: { year: 1351 },
        rank: 100,
        style: { color: BURGUNDY },
    },
    {
        id: "thempangma",
        title: "Thempangma",
        subtitle: "Gyantsé recension (manuscript)",
        lane: "recensions",
        from: { year: 1431 },
        rank: 90,
        style: { color: BURGUNDY },
    },

    // ── Canonical Editions ───────────────────────────────
    {
        id: "yongle",
        title: "Yongle Edition",
        subtitle: "First printed Kangyur · Beijing",
        lane: "editions",
        from: { year: 1410 },
        rank: 100,
        starred: true,
        style: { color: GOLD },
    },
    {
        id: "lithang",
        title: "Lithang Edition",
        subtitle: "Xylograph blockprint",
        lane: "editions",
        from: { year: 1609 },
        to: { year: 1614 },
        rank: 85,
        style: { color: GOLD },
    },
    {
        id: "ulaanbaatar",
        title: "Ulaanbaatar",
        subtitle: "Thempangma manuscript tradition",
        lane: "editions",
        from: { year: 1671 },
        rank: 75,
        style: { color: GOLD },
    },
    {
        id: "berlin",
        title: "Berlin Manuscript",
        subtitle: "Tshalpa tradition · manuscript",
        lane: "editions",
        from: { year: 1680 },
        rank: 70,
        style: { color: GOLD },
    },
    {
        id: "london-shelkar",
        title: "London (Shelkar)",
        subtitle: "Thempangma manuscript",
        lane: "editions",
        from: { year: 1712 },
        rank: 70,
        style: { color: GOLD },
    },
    {
        id: "stok-palace",
        title: "Stok Palace",
        subtitle: "Thempangma manuscript",
        lane: "editions",
        from: { year: 1729 },
        rank: 70,
        style: { color: GOLD },
    },
    {
        id: "narthang",
        title: "Narthang Edition",
        subtitle: "Conflated recension · xylograph",
        lane: "editions",
        from: { year: 1730 },
        rank: 90,
        starred: true,
        style: { color: GOLD },
    },
    {
        id: "dege",
        title: "Degé Edition",
        subtitle: "Definitive reference · xylograph",
        lane: "editions",
        from: { year: 1733 },
        rank: 100,
        starred: true,
        style: { color: GOLD },
    },
    {
        id: "lhasa",
        title: "Lhasa (Zhol)",
        subtitle: "Zhol blockprint edition",
        lane: "editions",
        from: { year: 1934 },
        rank: 80,
        style: { color: GOLD },
    },
];

// ─────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────
export function TimelineBaseTemplate01() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<Timeline | null>(null);
    const { resolvedTheme } = useTheme();

    // ── Initialize the timeline once on mount ──────────
    useEffect(() => {
        if (!containerRef.current) return;

        // Prevent duplicate canvases on HMR / StrictMode double-invocation
        containerRef.current.innerHTML = "";

        const isDark = resolvedTheme === "dark-mode";

        // Lazy-import to ensure we never run on the server
        import("histropediajs").then(({ Timeline }) => {
            if (!containerRef.current) return;

            const tl = new Timeline(containerRef.current, {
                width: containerRef.current.offsetWidth || 900,
                height: containerRef.current.offsetHeight || 500,
                initialDate: { year: 1550 },
                zoom: { initial: 18, minimum: 10, maximum: 45 },
                style: buildStyleOptions(isDark),
                article: {
                    defaultCardLayout: "landscape",
                    defaultStyle: buildArticleDefaultStyle(isDark),
                    defaultHoverStyle: {
                        border: { color: isDark ? GOLD : BURGUNDY, width: 2 },
                        shadow: { x: 0, y: 6, amount: 18, color: "rgba(0,0,0,0.2)" },
                    },
                    defaultActiveStyle: {
                        border: { color: isDark ? GOLD : BURGUNDY, width: 2 },
                    },
                    autoStacking: { active: true, rowSpacing: 28 },
                    collectOngoing: true,
                },
                lane: {
                    visible: true,
                    gap: 8,
                    axisGap: 20,
                    data: buildLanes(isDark),
                },
            });

            tl.load(KANGYUR_ARTICLES);

            // Fit to show the full span of Kangyur history
            tl.fitDateRange(
                { year: 1300 },
                { year: 1960 },
            );

            timelineRef.current = tl;
        });

        // Cleanup: remove DOM canvas on unmount
        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
            timelineRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── Sync canvas styles with theme changes ──────────
    useEffect(() => {
        const tl = timelineRef.current;
        if (!tl || !resolvedTheme) return;

        const isDark = resolvedTheme === "dark-mode";

        tl.setOption("style", buildStyleOptions(isDark));
        tl.setOption("article.defaultStyle", buildArticleDefaultStyle(isDark));
        tl.setOption("article.defaultHoverStyle", {
            border: { color: isDark ? GOLD : BURGUNDY, width: 2 },
        });

        // Rebuild lanes with new colors
        tl.loadLanes(buildLanes(isDark));
        tl.requestRedraw();
    }, [resolvedTheme]);

    // ── Responsive canvas resize ───────────────────────
    useEffect(() => {
        const tl = timelineRef.current;
        const container = containerRef.current;
        if (!tl || !container) return;

        const onResize = () => {
            const w = container.offsetWidth;
            const h = container.offsetHeight;
            if (w > 0 && h > 0) {
                tl.setSize(w, h);
                tl.requestRedraw();
            }
        };

        const ro = new ResizeObserver(onResize);
        ro.observe(container);
        return () => ro.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            id="kangyur-timeline"
            aria-label="Interactive timeline of major Kangyur editions and recensions"
            style={{
                width: "100%",
                height: "520px",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        />
    );
}
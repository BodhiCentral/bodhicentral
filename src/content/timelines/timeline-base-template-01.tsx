"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import type { Timeline, LaneData, ArticleData, TimelineOptions, TimeBandData } from "histropediajs";
import { PRECISION_YEAR } from "histropediajs";

// ─────────────────────────────────────────────────────────
// Palette constants (matches Bodhi Central brand)
// ─────────────────────────────────────────────────────────
const PERIODS_LIGHT = "oklch(0.545 0.069 77.21)"; // color-brand-700
const PERIODS_DARK = "oklch(0.545 0.069 77.21)"; // color-brand-700
const PERIOD_LIGHT_BG = "oklch(0.966 0.008 73.73)"; // color-brand-25
const PERIOD_DARK_BG = "oklch(0.973 0.007 88.55)"; //color-brand-25
const PERIOD_DARK_BG_TITLE = "oklch(0.966 0.008 73.73)"; //color-brand-50
const PERIOD_LIGHT_BG_TITLE = "oklch(0.973 0.007 88.55)"; // color-brand-50
const PEOPLE_LIGHT = "oklch(0.545 0.069 77.21)"; // color-brand-700
const PEOPLE_DARK = "oklch(0.545 0.069 77.21)"; // color-brand-700
const PEOPLE_LIGHT_BG = "oklch(0.966 0.008 73.73)"; // color-brand-25
const PEOPLE_DARK_BG = "oklch(0.973 0.007 88.55)"; //color-brand-25
const PEOPLE_DARK_BG_TITLE = "oklch(0.966 0.008 73.73)"; //color-brand-50
const PEOPLE_LIGHT_BG_TITLE = "oklch(0.973 0.007 88.55)"; // color-brand-50
const EDITIONS_LIGHT = "oklch(0.545 0.069 77.21)"; // color-brand-700
const EDITIONS_DARK = "oklch(0.545 0.069 77.21)"; // color-brand-700
const MARKER_LIGHT = "oklch(0.724 0.07 78.26)"; // color-brand-500
const MARKER_DARK = "oklch(0.545 0.069 77.21)"; // color-brand-700
const ARTICLE_HEADER_LIGHT = "#323512";
const ARTICLE_HEADER_DARK = "#fff";
const FONT_BASE = "var(--font-sans)";

// ─────────────────────────────────────────────────────────
// Theme-specific timeline style configurations
// ─────────────────────────────────────────────────────────
const buildStyleOptions = (isDark: boolean): TimelineOptions["style"] => ({
    mainLine: {
        visible: true,
        size: 16,
    },
    marker: {
        minor: { height: 20, color: isDark ? MARKER_DARK : MARKER_LIGHT, futureColor: "#4b5563" },
        major: { height: 32, color: isDark ? MARKER_DARK : MARKER_LIGHT, futureColor: "#9ca3af" },
    },
    dateLabel: {
        minor: {
            font: `normal 10px ${FONT_BASE}`,
            color: isDark ? MARKER_DARK : MARKER_LIGHT,
            futureColor: "#6b7280",
        },
        major: {
            font: `600 16px ${FONT_BASE}`,
            color: isDark ? MARKER_DARK : MARKER_LIGHT,
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
    width: 220,
    height: 200,
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    borderRadius: 8,
    distanceToBaseline: {
        value: 40,
    },
    border: {
        color: isDark ? "#444" : "#eee",
        width: 1,
    },
    shadow: {
        x: 0, y: 2, amount: 8,
        color: isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.04)",
    },
    connectorLine: {
        visible: true,
        thickness: 1,
    },
    header: {
        text: {
            font: '700 14px Nunito',
            color: isDark ? ARTICLE_HEADER_DARK : ARTICLE_HEADER_LIGHT,
            align: "left" as const,
            numberOfLines: 2,
            lineHeight: 20,
            margin: 10,
        },
    },
    subheader: {
        color: isDark ? "#0f172a" : "#f1f5f9",
        height: 140,
        numberOfLines: 6,
        text: {
            font: '400 12px Nunito',
            color: isDark ? "#64748b" : "#475569",
            align: "left" as const,
        },
    },
});

// ─────────────────────────────────────────────────────────
// Lane definitions (PEOPLE + KANGYUR EDITIONS)
// ─────────────────────────────────────────────────────────
const buildLanes = (isDark: boolean): LaneData[] => [
    {
        id: "people",
        title: "PEOPLE",
        layout: { heightWeight: 1 },
        style: {
            header: {
                backgroundColor: isDark
                    ? PEOPLE_DARK_BG_TITLE
                    : PEOPLE_LIGHT_BG_TITLE,
            },
            body: {
                backgroundColor: isDark
                    ? PEOPLE_DARK_BG
                    : PEOPLE_LIGHT_BG,
                borderColor: isDark ? "rgba(37,37,37,0.30)" : "rgba(37,37,37,0.12)",
                borderWidth: 1,
                borderRadius: 0,
            },
            title: {
                color: isDark ? PEOPLE_DARK : PEOPLE_LIGHT,
                font: `600 14px ${FONT_BASE}`,
            },
        },
        article: {
            defaultCardLayout: "landscape",
            defaultStyle: {
                color: PEOPLE_DARK,
                connectorLine: { thickness: 1 },
            },
            autoStacking: { active: true, rowSpacing: 24 },
        },
    },

    {
        id: "editions",
        title: "SCRIPTURE EDITIONS",
        layout: { heightWeight: 1 },
        style: {
            header: {
                backgroundColor: isDark
                    ? PEOPLE_DARK_BG_TITLE
                    : PEOPLE_LIGHT_BG_TITLE,
            },
            body: {
                backgroundColor: isDark
                    ? PEOPLE_DARK_BG
                    : PEOPLE_LIGHT_BG,
                borderColor: isDark ? "rgba(204,164,59,0.30)" : "rgba(204,164,59,0.15)",
                borderWidth: 1,
                borderRadius: 0,
            },
            title: {
                color: isDark ? EDITIONS_DARK : EDITIONS_LIGHT,
                font: `600 14px ${FONT_BASE}`,
            },
        },
        article: {
            defaultCardLayout: "landscape",
            defaultStyle: {
                color: EDITIONS_DARK,
                connectorLine: { thickness: 1.5 },
            },
            autoStacking: { active: true, rowSpacing: 24 },
        },
    },
];

// ─────────────────────────────────────────────────────────
// Article data — Major Kangyur Editions
// ─────────────────────────────────────────────────────────
const KANGYUR_ARTICLES: ArticleData[] = [

    // ── People ──────────────────────────────
    {
        id: "songtsen-gampo",
        title: "King Songtsen Gampo (d. c. 650)",
        subtitle: "First king traditionally credited with bringing Buddhism to Tibet in the 7th century CE",
        lane: "people",
        from: { year: 650 },
        to: { year: 650 },
        rank: 100,
        style: { color: PEOPLE_DARK },
    },
    {
        id: "trisong-detsen",
        title: "King Trisong Detsen (r. 755-circa 797)",
        subtitle: "During Trisong Detsen's reign, Tibet imperial power reached its peak, and Buddhism was established as the state religion.",
        lane: "people",
        from: { year: 755 },
        to: { year: 797 },
        rank: 90,
        style: { color: PEOPLE_DARK },
    },
    {
        id: "yeshe-od",
        title: "King of Purang, Yeshe-od",
        subtitle: "Yeshe-os's major act was to send a group of followers to Kashmir to collect Buddhist texts.",
        lane: "people",
        from: { year: 940 },
        to: { year: 940 },
        rank: 90,
        style: { color: PEOPLE_DARK },
    },
    {
        id: "rinchen-zangpo",
        title: "Rinchen Zangpo (958–1055)",
        subtitle: "He is credited with the translation of more than 600 Buddhist texts into Tibetan, including the Prajnaparamita.",
        lane: "people",
        from: { year: 958 },
        to: { year: 1055 },
        rank: 90,
        style: { color: PEOPLE_DARK },
    },
    {
        id: "atisha",
        title: "Atiśa Dīpaṁkara Śrījñāna (982–1054 CE)",
        subtitle: "Atiśa’s arrival in Tibet marked a turning point in the development of Tibetan Buddhism, initiating a period of cultural and intellectual renaissance.",
        lane: "people",
        from: { year: 982 },
        to: { year: 1054 },
        rank: 90,
        style: { color: PEOPLE_DARK },
    },
    {
        id: "gampopa",
        title: "Gampopa Sönam Rinchen (1079–1153)",
        subtitle: "Gampopa was a student of Milarepa. Gampopa's combination of Kadam monastic discipline and Mahāmudrā meditation formed the basis for a new school, the Kagyü (the Followers of the Trasnmitted Command)",
        lane: "people",
        from: { year: 1079 },
        to: { year: 1153 },
        rank: 90,
        style: { color: PEOPLE_DARK },
    },
    {
        id: "ratna-lingpa",
        title: "Ratna Lingpa (1403-1478)",
        subtitle: "Ratna Lingpa collected the Nyingma texts when available in a work called the Nyingma Gyundbum, or 100,000 Nyingma Tantras.",
        lane: "people",
        from: { year: 1403 },
        to: { year: 1478 },
        rank: 90,
        style: { color: PEOPLE_DARK },
    },

    // ── Canonical Editions ───────────────────────────────
    {
        id: "mahavyupatti",
        title: "Mahāvyupatti (circa 780)",
        subtitle: "First Sanskrit-Tibetan-Chinese Lexicon started by King TRisong Detsen.",
        lane: "editions",
        from: { year: 780 },
        rank: 50,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "yongle",
        title: "Yongle Edition (1410)",
        subtitle: "First printed Kangyur · Beijing",
        lane: "editions",
        from: { year: 1410 },
        rank: 100,
        starred: true,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "lithang",
        title: "Lithang Edition (1614)",
        subtitle: "Xylograph blockprint",
        lane: "editions",
        from: { year: 1609 },
        to: { year: 1614 },
        rank: 85,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "ulaanbaatar",
        title: "Ulaanbaatar",
        subtitle: "Thempangma manuscript tradition",
        lane: "editions",
        from: { year: 1671 },
        rank: 75,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "berlin",
        title: "Berlin Manuscript",
        subtitle: "Tshalpa tradition · manuscript",
        lane: "editions",
        from: { year: 1680 },
        rank: 70,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "london-shelkar",
        title: "London (Shelkar)",
        subtitle: "Thempangma manuscript",
        lane: "editions",
        from: { year: 1712 },
        rank: 70,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "stok-palace",
        title: "Stok Palace",
        subtitle: "Thempangma manuscript",
        lane: "editions",
        from: { year: 1729 },
        rank: 70,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "narthang",
        title: "Narthang Edition",
        subtitle: "Conflated recension · xylograph",
        lane: "editions",
        from: { year: 1730 },
        rank: 90,
        starred: false,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "dege",
        title: "Degé Edition",
        subtitle: "Definitive reference · xylograph",
        lane: "editions",
        from: { year: 1733 },
        rank: 100,
        starred: true,
        style: { color: EDITIONS_DARK },
    },
    {
        id: "lhasa",
        title: "Lhasa (Zhol)",
        subtitle: "Zhol blockprint edition",
        lane: "editions",
        from: { year: 1934 },
        rank: 80,
        style: { color: EDITIONS_DARK },
    },
];

// ─────────────────────────────────────────────────────────
// TimeBand definitions (HISTORICAL PERIODS)
// ─────────────────────────────────────────────────────────
const buildTimeBands = (isDark: boolean): TimeBandData[] => [
    {
        id: "first-propagation",
        title: "First Propagation",
        from: {
            year: 700,
            precision: PRECISION_YEAR,
        },
        to: {
            year: 840,
            precision: PRECISION_YEAR,
        },
        style: {
            backgroundColor: "rgba(255, 241, 235, 0.8)",
            text: {
                color: "#7C2D12"
            },
        },
    },
    {
        id: "dark-period",
        title: "Dark Period",
        from: {
            year: 840,
            precision: PRECISION_YEAR,
        },
        to: {
            year: 930,
            precision: PRECISION_YEAR,
        },
        style: {
            backgroundColor: "rgba(255, 249, 196, 0.8)",
            text: {
                color: "#713F12"
            },
        },
    },
    {
        id: "second-propagation",
        title: "Second Propagation",
        from: { year: 930, precision: PRECISION_YEAR },
        to: { year: 1200, precision: PRECISION_YEAR },
        style: {
            backgroundColor: "rgba(222, 247, 236, 0.8)",
            text: {
                color: "#065f46"

            },
        },
    },
    {
        id: "period-of-consolidation",
        title: "Period of Consolidation",
        from: { year: 1200, precision: PRECISION_YEAR },
        to: { year: 1600, precision: PRECISION_YEAR },
        style: {
            backgroundColor: "rgba(222, 247, 236, 0.8)",
            text: {
                color: "#065f46"

            },
        },
    },
];

// ─────────────────────────────────────────────────────────
// Shared TimeBand default style (overridden per-theme below)
// ─────────────────────────────────────────────────────────
const buildTimeBandDefaultStyle = (isDark: boolean) => ({
    border: {
        color: isDark ? PERIODS_DARK : PERIODS_LIGHT,
        width: 1,
    },
    text: {
        font: "bold 14px Crimson Pro",
        color: isDark ? PERIODS_DARK : PERIODS_LIGHT,
        align: "left",
        margin: 10,
        offsetY: 4,
        verticalAlign: "bottom",
        baseline: "bottom"

    },
});

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
                width: containerRef.current.offsetWidth || 1280,
                height: containerRef.current.offsetHeight || 640,
                initialDate: { year: 600 },
                zoom: { initial: 30, minimum: 20, maximum: 50 },
                style: buildStyleOptions(isDark),
                article: {
                    defaultCardLayout: "landscape",
                    defaultStyle: buildArticleDefaultStyle(isDark),
                    defaultHoverStyle: {
                        border: { color: isDark ? EDITIONS_DARK : EDITIONS_LIGHT, width: 1 },
                        shadow: { x: 0, y: 4, amount: 12, color: "rgba(0,0,0,0.1)" },
                    },
                    defaultActiveStyle: {
                        border: { color: isDark ? "#999999" : "#ededed", width: 1 },
                    },
                    autoStacking: { active: true, rowSpacing: 32 },
                    collectOngoing: true,
                },
                lane: {
                    visible: true,
                    gap: 0,
                    axisGap: 20,
                    data: buildLanes(isDark),
                },
                // Time Band defaultStyle
                timeBand: {
                    visible: true,
                    reserveSpace: true,
                    reserveSpacePixels: 30,
                    area: {
                        up: 0,
                        down: "edge",
                    },
                    defaultStyle: buildTimeBandDefaultStyle(isDark),
                    data: buildTimeBands(isDark),
                },

            });

            tl.load(KANGYUR_ARTICLES);

            // Fit to show the full span of Kangyur history
            tl.fitDateRange(
                { year: 600 },
                { year: 1800 },
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
            border: { color: isDark ? "#555555" : "#333333", width: 2 },
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
        <div className="px-8"
            ref={containerRef}
            id="kangyur-timeline"
            aria-label="Interactive timeline of major Kangyur editions and recensions"
            style={{
                width: "100%",
                height: "720px",
                borderRadius: "0px",
                overflow: "hidden",
            }}
        />
    );
}
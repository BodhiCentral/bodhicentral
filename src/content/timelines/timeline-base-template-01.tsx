"use client";

import { useEffect, useRef } from "react";
import type { Timeline, LaneData, LaneLayout, ArticleData, TimelineOptions, TimeBandData, TimeBandStyle } from "histropediajs";
import { PRECISION_YEAR } from "histropediajs";
import { Select, type SelectItemType } from "@/components/base/select/select";
import "@/styles/timelines.css";

// ─────────────────────────────────────────────────────────
// Palette constants (matches Bodhi Central brand)
// ─────────────────────────────────────────────────────────
const LANE_HEADER_BG = "rgba(255, 255, 255, 0.75)"; // color-white
const LANE_BODY_BG = "rgba(255, 255, 255, 0.70)"; // color-white
const LANE_HEADER_TITLE = "oklch(0.411 0.051 77.18)"; // color-brand-800
const ARTICLE_THEME_COLOR = "rgba(0, 0, 0, 0.2)"; // color-gray
const MANUSCRIPT_STYLE_COLOR = "oklch(69.6% 0.17 162.48)"; // color-emerald-500
const XYLOGRAPHS_STYLE_COLOR = "oklch(70.5% 0.213 47.604)"; // color-orange-500
const EDITIONS_COLOR = "oklch(0.545 0.069 77.21)"; // color-brand-700
const MARKER_COLOR = "oklch(0.724 0.07 78.26)"; // color-brand-500
const ARTICLE_BORDER_LIGHT = "oklch(92.2% 0 0)"; // color-neutral-200
const ARTICLE_HEADER_LIGHT = "#333333";
const FONT_BASE = "var(--font-sans)";

// ─────────────────────────────────────────────────────────
// Timeline style configurations (Light theme only)
// ─────────────────────────────────────────────────────────
const buildStyleOptions = (): TimelineOptions["style"] => ({
    mainLine: {
        visible: true,
        size: 16,
    },
    marker: {
        minor: { height: 18, color: MARKER_COLOR, futureColor: "#4b5563" },
        major: { height: 32, color: MARKER_COLOR, futureColor: "#9ca3af" },
    },
    dateLabel: {
        minor: {
            font: `normal 10px ${FONT_BASE}`,
            color: MARKER_COLOR,
            futureColor: "#6b7280",
        },
        major: {
            font: `600 16px ${FONT_BASE}`,
            color: MARKER_COLOR,
            futureColor: "#9ca3af",
        },
    },
    draggingHighlight: {
        color: "rgba(241, 245, 249, 0.5)",
    },
});

// ─────────────────────────────────────────────────────────
// Shared article style
// ─────────────────────────────────────────────────────────
const buildArticleDefaultStyle = () => ({
    width: 220,
    height: 200,
    topRadius: 16,
    bottomRadius: 8,
    backgroundColor: "#ffffff",
    distanceToBaseline: {
        value: 40,
    },
    border: {
        color: ARTICLE_BORDER_LIGHT,
        width: 1,
    },
    shadow: {
        x: 0, y: 2, amount: 8,
        color: "rgba(0,0,0,0.04)",
    },
    connectorLine: {
        visible: true,
        thickness: 1,
        offsetY: 1,
        arrow: {
            width: 8,
            height: 10,
        }
    },
    header: {
        height: 60,
        text: {
            font: '700 14px Nunito',
            color: ARTICLE_HEADER_LIGHT,
            align: "left" as const,
            numberOfLines: 2,
            lineHeight: 20,
            margin: 10,
        },
    },
    subheader: {
        color: "#f1f5f9",
        height: 60,
        numberOfLines: 6,
        text: {
            font: '400 12px Nunito',
            color: "#475569",
            align: "left" as const,
        },
    },
});

// ─────────────────────────────────────────────────────────
// Lane definitions (PEOPLE + KANGYUR EDITIONS)
// ─────────────────────────────────────────────────────────
const buildLanes = (): LaneData[] => [
    {
        id: "people",
        title: "PEOPLE",
        layout: {
            heightWeight: 1,
            header: {
                height: 36,
            }
        },
        style: {
            header: {
                backgroundColor: LANE_HEADER_BG,
            },
            body: {
                backgroundColor: LANE_BODY_BG,
                borderColor: "rgba(37,37,37,0.12)",
            },
            title: {
                color: LANE_HEADER_TITLE,
                font: `700 18px Crimson Pro`,
            },
        },
        article: {
            defaultCardLayout: "portrait",
            defaultStyle: {
                color: ARTICLE_THEME_COLOR,
                connectorLine: { thickness: 1 },
            },
            autoStacking: { active: true, rowSpacing: 40 },
        },
    },

    {
        id: "editions",
        title: "KANGYUR EDITIONS",
        layout: {
            heightWeight: 1,
            header: {
                height: 36,
            }
        },
        style: {
            header: {
                backgroundColor: LANE_HEADER_BG,
            },
            body: {
                backgroundColor: LANE_BODY_BG,
                borderWidth: 0,
                borderRadius: 0,
            },
            title: {
                color: LANE_HEADER_TITLE,
                font: `700 18px Crimson Pro`,
            },
        },
        article: {
            defaultCardLayout: "portrait",
            defaultStyle: {
                color: ARTICLE_THEME_COLOR,
                connectorLine: { thickness: 1.5 },
            },
            autoStacking: { active: true, rowSpacing: 40 },
        },
    },
];

// ─────────────────────────────────────────────────────────
// Article data — Major Kangyur Editions
// ─────────────────────────────────────────────────────────
const LANE_ARTICLES: ArticleData[] = [

    // ── People ──────────────────────────────
    {
        id: "songtsen-gampo",
        title: "King Songtsen Gampo",
        subtitle: "r. c. 618–650 CE",
        lane: "people",
        from: { year: 650 },
        to: { year: 650 },
        rank: 100,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "trisong-detsen",
        title: "King Trisong Detsen",
        subtitle: "r. 755-circa 797",
        lane: "people",
        from: { year: 755 },
        to: { year: 797 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "yeshe-od",
        title: "King of Purang, Yeshe-od",
        subtitle: "c. 940 CE",
        lane: "people",
        from: { year: 940 },
        to: { year: 940 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "rinchen-zangpo",
        title: "Rinchen Zangpo",
        subtitle: "958-1055",
        lane: "people",
        from: { year: 958 },
        to: { year: 1055 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "atisha",
        title: "Atiśa Dīpaṃkara Śrījñāna",
        subtitle: "982–d.1055?",
        lane: "people",
        from: { year: 982 },
        to: { year: 1054 },
        rank: 90,
        imageUrl: "/people/timeline-thumbnails/atisha.jpg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "gampopa",
        title: "Gampopa Sönam Rinchen",
        subtitle: "1079–1153",
        lane: "people",
        from: { year: 1079 },
        to: { year: 1153 },
        rank: 90,
        imageUrl: "/people/timeline-thumbnails/gampopa.jpg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "chomden-rikpai-raldri",
        title: "Chomden Rikpai Raldri",
        subtitle: "circa 1270",
        lane: "people",
        from: { year: 1270 },
        to: { year: 1280 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "buton-rinchen-drup",
        title: "Butön Rinchen Drup",
        subtitle: "1290-1364",
        lane: "people",
        from: { year: 1290 },
        to: { year: 1364 },
        rank: 90,
        imageUrl: "/people/timeline-thumbnails/buton-rinchen_thumb.jpg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "tsongkhapa",
        title: "Tsongkhapa",
        subtitle: "1357-1419",
        lane: "people",
        from: { year: 1357 },
        to: { year: 1419 },
        rank: 90,
        imageUrl: "/people/timeline-thumbnails/buton-rinchen_thumb.jpg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "ratna-lingpa",
        title: "Ratna Lingpa",
        subtitle: "1403-1478 CE",
        lane: "people",
        from: { year: 1403 },
        to: { year: 1478 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "situ-panchen-chokyi-jungne",
        title: "Situ Panchen Chökyi Jungne",
        subtitle: "1700–1774 CE",
        lane: "people",
        from: { year: 1700 },
        to: { year: 1774 },
        rank: 90,
        imageUrl: "/people/timeline-thumbnails/situ-panchen-chokyi-jungne.webp",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "gene-smith",
        title: "Gene Smith",
        subtitle: "1936-2010",
        lane: "people",
        from: { year: 1936 },
        to: { year: 2010 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },

    // ── Canonical Editions ───────────────────────────────
    {
        id: "mahavyupatti",
        title: "Mahāvyupatti",
        subtitle: "Circa 780 CE",
        lane: "editions",
        from: { year: 780 },
        rank: 50,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "denkarma",
        title: "Denkarma Imperial Catalog",
        subtitle: "Circa 812 CE",
        lane: "editions",
        from: { year: 812 },
        rank: 50,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "phangthangma",
        title: "Phangthangma Imperial Catalog",
        subtitle: "Circa 822 CE",
        lane: "editions",
        from: { year: 822 },
        rank: 50,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "butons-compilation",
        title: "Büton's Scriptural Compilation",
        subtitle: "1322-1323",
        lane: "editions",
        from: { year: 1322 },
        to: { year: 1323 },
        rank: 50,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "thsal-gungthang",
        title: "Thal Gungthang",
        subtitle: "1347-1351",
        lane: "editions",
        from: { year: 1347 },
        to: { year: 1351 },
        rank: 50,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "yongle-kangyur",
        title: "Yongle Kangyur, Peking (xylographs)",
        subtitle: "1410 CE",
        lane: "editions",
        from: { year: 1410 },
        rank: 100,
        imageUrl: "/pecha-images/yong-le-wood-carved-kangyur--180px.webp",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "gyantse-kangyur",
        title: "Gyantsé Kangyur (manuscript)",
        subtitle: "1431 CE",
        lane: "editions",
        from: { year: 1431 },
        rank: 100,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: MANUSCRIPT_STYLE_COLOR },
    },
    {
        id: "nyingma-gyuldbum",
        title: "Nyingma Gyuldum, Tantra Collection",
        subtitle: "c. 1450–1460 CE",
        lane: "editions",
        from: { year: 1450 },
        to: { year: 1460 },
        rank: 10,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "lithang-kangyur",
        title: "Lithang Kangyur (xylographs)",
        subtitle: "1609-1614 CE",
        lane: "editions",
        from: { year: 1609 },
        to: { year: 1614 },
        rank: 85,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "ulaanbaatar-kangyur",
        title: "Ulaanbaatar Kangyur (manuscript)",
        subtitle: "1671 CE",
        lane: "editions",
        from: { year: 1671 },
        rank: 75,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: MANUSCRIPT_STYLE_COLOR },
    },
    {
        id: "cone-kangyur",
        title: "Coné Kangyur (xylographs)",
        subtitle: "1721-1731 CE",
        lane: "editions",
        from: { year: 1721 },
        to: { year: 1731 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "berlin-kangyur",
        title: "Berlin Kangyur (manuscript)",
        subtitle: "1680 CE",
        lane: "editions",
        from: { year: 1680 },
        rank: 70,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: MANUSCRIPT_STYLE_COLOR },
    },
    {
        id: "london-shelkar",
        title: "London, Shelkar (manuscript)",
        subtitle: "c. 1712 CE",
        lane: "editions",
        from: { year: 1712 },
        rank: 70,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: MANUSCRIPT_STYLE_COLOR },
    },
    {
        id: "stok-palace-kangyur",
        title: "Stok Palace Kangyur (manuscript)",
        subtitle: "1729 CE",
        lane: "editions",
        from: { year: 1729 },
        rank: 70,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: MANUSCRIPT_STYLE_COLOR },
    },
    {
        id: "narthang-kangyur",
        title: "Narthang Kangyur (xylographs)",
        subtitle: "1730-1733 CE",
        lane: "editions",
        from: { year: 1730 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "dege-kangyur",
        title: "Degé Kangyur (xylographs)",
        subtitle: "1729-1733 CE",
        lane: "editions",
        from: { year: 1729 },
        to: { year: 1733 },
        rank: 100,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "quianlong-kangyur",
        title: "Qianlong Kangyur (xylographs)",
        subtitle: "1737 CE",
        lane: "editions",
        from: { year: 1737 },
        rank: 95,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "toyo-bunko",
        title: "Tōyō Bunko, Tokio (manuscript)",
        subtitle: "1858-1878 CE",
        lane: "editions",
        from: { year: 1858 },
        to: { year: 1878 },
        rank: 90,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: MANUSCRIPT_STYLE_COLOR },
    },
    {
        id: "urga-kangyur",
        title: "Urga Kangyur (xylographs)",
        subtitle: "1908-1910 CE",
        lane: "editions",
        from: { year: 1908 },
        to: { year: 1910 },
        rank: 85,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "lhasa-kangyur",
        title: "Lhasa Kangyur, Zhol (xylographs)",
        subtitle: "1934 CE",
        lane: "editions",
        from: { year: 1934 },
        rank: 80,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: XYLOGRAPHS_STYLE_COLOR },
    },
    {
        id: "bdrc",
        title: "Buddhist Digital Research Center",
        subtitle: "1999-present",
        lane: "editions",
        from: { year: 1999 },
        to: { year: 2026 },
        rank: 80,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "adarshah-library",
        title: "Adarshah Library",
        subtitle: "2005-present",
        lane: "editions",
        from: { year: 2005 },
        to: { year: 2026 },
        rank: 80,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
    {
        id: "84000",
        title: "84000 Project",
        subtitle: "2009-present",
        lane: "editions",
        from: { year: 2009 },
        to: { year: 2026 },
        rank: 80,
        imageUrl: "/placeholder-image-landscape.svg",
        style: { color: ARTICLE_THEME_COLOR },
    },
];

// ─────────────────────────────────────────────────────────
// TimeBand definitions (HISTORICAL PERIODS)
// ─────────────────────────────────────────────────────────
const buildTimeBands = (): TimeBandData[] => [
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
        title: "Period of Consolidation (Thalpa and Tempangma traditions)",
        from: { year: 1200, precision: PRECISION_YEAR },
        to: { year: 1650, precision: PRECISION_YEAR },
        style: {
            backgroundColor: "rgba(219, 234, 254, 0.8)",
            text: {
                color: "#1d4ed8"

            },
        },
    },
    {
        id: "period-of-conflations",
        title: "Period of Conflations",
        from: { year: 1650, precision: PRECISION_YEAR },
        to: { year: 1850, precision: PRECISION_YEAR },
        style: {
            backgroundColor: "rgba(219, 234, 254, 0.8)",
            text: {
                color: "#1d4ed8"

            },
        },
    },
    {
        id: "buddhism-comes-to-the-west",
        title: "Spread to the West",
        from: { year: 1850, precision: PRECISION_YEAR },
        to: { year: 1980, precision: PRECISION_YEAR },
        style: {
            backgroundColor: "rgba(219, 234, 254, 0.8)",
            text: {
                color: "#1d4ed8"

            },
        },
    },
    {
        id: "digital-era",
        title: "Digital Era",
        from: { year: 1980, precision: PRECISION_YEAR },
        to: { year: 2026, precision: PRECISION_YEAR },
        style: {
            backgroundColor: "rgba(219, 234, 254, 0.8)",
            text: {
                color: "#1d4ed8"

            },
        },
    },
];

// ─────────────────────────────────────────────────────────
// Shared TimeBand default style
// ─────────────────────────────────────────────────────────
const buildTimeBandDefaultStyle = (): TimeBandStyle => (
    {
        backgroundColor: LANE_HEADER_BG,
        border: {
            width: 1,
        },
        text: {
            font: "normal 18px Crimson Pro",
            align: "left",
            margin: 8,
            offsetY: 2,
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

    // ── Initialize the timeline once on mount ──────────
    useEffect(() => {
        if (!containerRef.current) return;

        // Prevent duplicate canvases on HMR / StrictMode double-invocation
        containerRef.current.innerHTML = "";

        // Lazy-import to ensure we never run on the server
        import("histropediajs").then(({ Timeline }) => {
            if (!containerRef.current) return;

            const tl = new Timeline(containerRef.current, {
                width: containerRef.current.offsetWidth || 1280,
                height: containerRef.current.offsetHeight || 760,
                initialDate: { year: 600 },
                zoom: { initial: 30, minimum: 20, maximum: 50 },
                style: buildStyleOptions(),
                article: {
                    defaultCardLayout: "portrait",
                    defaultStyle: buildArticleDefaultStyle(),
                    defaultHoverStyle: {
                        border: { color: EDITIONS_COLOR, width: 1 },
                        shadow: { x: 0, y: 4, amount: 12, color: "rgba(0,0,0,0.1)" },
                    },
                    defaultActiveStyle: {
                        border: { color: "#ededed", width: 1 },
                    },
                    autoStacking: { active: true, rowSpacing: 64 },
                    collectOngoing: true,
                },
                lane: {
                    visible: true,
                    gap: 0,
                    axisGap: 0,
                    data: buildLanes(),
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
                    data: buildTimeBands(),
                    defaultStyle: buildTimeBandDefaultStyle(),
                },
            });

            tl.load(LANE_ARTICLES);

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

    const item_articles: SelectItemType[] = LANE_ARTICLES.map((article) => ({
        id: String(article.id),
        label: article.title,
        supportingText: article.subtitle,
        title: article.title,
        subtitle: article.subtitle,
        lane: article.lane !== undefined ? String(article.lane) : undefined,
    }));



    const items: SelectItemType[] = [
        {
            id: "all",
            label: "All",
            supportingText: "",
        },
        {
            id: "manuscripts",
            label: "Manuscripts",
            supportingText: "",
        },
        {
            id: "block-prints",
            label: "Block prints",
            supportingText: "",
        },
        {
            id: "digital-sources",
            label: "Digital",
            supportingText: "Tibetan",
        },
        {
            id: "digital-translations",
            label: "Digital",
            supportingText: "Translations",
        },
    ];

    const kangyur_traditions: SelectItemType[] = [
        {
            id: "early-inventories",
            label: "Early Inventories",
            supportingText: "Cataloging",
        },
        {
            id: "thalpa-kangyur",
            label: "Thalpa Kangyur",
            supportingText: "Blockprints mostly",
        },
        {
            id: "thempangma-kangyur",
            label: "Tempangma Kangyur",
            supportingText: "Manuscripts mostly",
        },
        {
            id: "conflations",
            label: "Conflations",
            supportingText: "Later Kangyurs",
        },
    ];

    return (
        <div className="h-[calc(100vh-100px)]">
            <div className="mx-auto w-full flex flex-col justify-between gap-6">
                <div className="w-full flex flex-row justify-items-start gap-12">
                    <Select.ComboBox className="w-[350px]" size="sm" label="Search the timeline" tooltip="Search scriptures and people of the timeline" placeholder="Search scripture and people..." items={item_articles}>
                        {(item) => (
                            <Select.Item id={item.id} supportingText={item.supportingText}>
                                {item.label}
                            </Select.Item>
                        )}
                    </Select.ComboBox>
                    <Select className="w-[200px]"
                        size="sm"
                        label="Edition Types"
                        tooltip="Filter by edition type (manuscripts, block-prints, digital, etc.)"
                        placeholder="Select edition type"
                        items={items}
                    >
                        {(item) => (
                            <Select.Item id={item.id} supportingText={item.supportingText}>
                                {item.label}
                            </Select.Item>
                        )}
                    </Select>
                    <Select className="w-[260px]"
                        size="sm"
                        label="Kangyur Traditions"
                        tooltip="Filter by tradition (Tshalpa Kangyur, Thempangma Kangyur.)"
                        placeholder="Select Kangyur tradition..."
                        items={kangyur_traditions}
                    >
                        {(item) => (
                            <Select.Item id={item.id} supportingText={item.supportingText}>
                                {item.label}
                            </Select.Item>
                        )}
                    </Select>

                </div>
                <div className="bg-tertiary border border-secondary drop-shadow-xl max-h-auto"
                    ref={containerRef}
                    id="kangyur-timeline"
                    aria-label="Interactive timeline of major Kangyur editions and recensions"
                    style={{
                        width: "100%",
                        minHeight: "760px",
                        borderRadius: "8px",
                        overflow: "hidden",
                    }}
                />
            </div>
        </div>
    );
}
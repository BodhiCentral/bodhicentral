"use client";

import { useMemo, useState } from "react";
import { parseDate } from "@internationalized/date";
import {
    BarChartSquare02,
    CheckDone01,
    ClockFastForward,
    DownloadCloud02,
    FilterLines,
    Grid03,
    HomeLine,
    LineChartUp03,
    NotificationBox,
    PieChart03,
    Plus,
    Rows01,
    SearchLg,
    Settings03,
    Star01,
    UserSquare,
    Users01,
} from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { PaginationCardDefault, PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { Table, TableCard } from "@/components/application/table/table";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

// Helper functions for formatting
const formatCurrency = (amount: number): string => amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatDate = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const texts = [
    {
        id_uuid: "DN 1",
        english_title: "The Divine Net",
        pali_title: "Brahmajālasutta",
        text_id: "DN 1",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "In progress",
        author: {
            name: "Olivia Rhye",
            email: "olivia@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            initials: "OR",
        },
    },
    {
        id_uuid: "DN 2",
        english_title: "MTCH SELL",
        pali_title: "Match Group, Inc,",
        text_id: "DN 2",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "success",
        author: {
            name: "Phoenix Baker",
            email: "phoenix@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
            initials: "PB",
        },
    },
    {
        id_uuid: "DN 3",
        english_title: "DDOG BUY",
        pali_title: "Datadog Inc",
        text_id: "DN 3",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "success",
        author: { name: "Lana Steiner", email: "lana@untitledui.com", avatarUrl: "", initials: "LS" },
    },
    {
        id_uuid: "DN 4",
        english_title: "ARKG BUY",
        pali_title: "ARK Genomic Revolution ETF",
        text_id: "DN 4",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "declined",
        author: { name: "Demi Wilkinson", email: "demi@untitledui.com", avatarUrl: "", initials: "DW" },
    },
    {
        id_uuid: "DN 5",
        english_title: "SQ BUY",
        pali_title: "Square, Inc.",
        text_id: "DN 5",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "success",
        author: {
            name: "Candice Wu",
            email: "candice@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
            initials: "CW",
        },
    },
    {
        id_uuid: "DN 6",
        english_title: "MSTR SELL",
        pali_title: "MicroStrategy Inc.",
        text_id: "DN 6",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "success",
        author: { name: "Natali Craig", email: "natali@untitledui.com", avatarUrl: "", initials: "NC" },
    },
    {
        id_uuid: "DN 7",
        english_title: "TSLA BUY",
        pali_title: "Tesla, Inc.",
        text_id: "DN 7",
        pitaka_section_english: "The Chapter on the Entire Spectrum of Ethics",
        pitaka_section_pali: "Sīlakkhandhavagga",
        status: "success",
        author: {
            name: "Candice Wu",
            email: "candice@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
            initials: "NC",
        },
    },
];

export const Informational02 = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "deliveryDate",
        direction: "descending",
    });

    const sortedItems = useMemo(() => {
        if (!sortDescriptor) return texts;

        return texts.toSorted((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Handle numbers
            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "ascending" ? first - second : second - first;
            }

            // Handle strings
            if (typeof first === "string" && typeof second === "string") {
                const result = first.localeCompare(second);
                return sortDescriptor.direction === "ascending" ? result : -result;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <div className="flex flex-col lg:flex-row">
            <SidebarNavigationSlim
                activeUrl="/dashboard/trade-history"
                items={[
                    {
                        label: "Reader",
                        href: "/reader",
                        icon: HomeLine,
                    },
                    {
                        label: "Canon Navigation",
                        href: "/canon-navigation",
                        icon: BarChartSquare02,
                        items: [
                            { label: "Theravāda Tradition", href: "/scripture/theravada-tradition", icon: Grid03 },
                            { label: "Vinaya Pitaka", href: "/scripture/theravada-tradition", icon: NotificationBox, badge: 10 },
                            { label: "Sutta Pitaka", href: "/dashboard/analytics", icon: LineChartUp03 },
                            { label: "Abhidhamma Pitaka", href: "/dashboard/saved-texts", icon: Star01 },
                            { label: "Tibetan Canons", href: "/scripture/tibetan-canons", icon: ClockFastForward },
                            { label: "The Kangyur", href: "/scripture/kangyur", icon: UserSquare },
                            { label: "The Tengyur", href: "/scripture/tengyur", icon: Settings03 },
                        ],
                    },
                    {
                        label: "My Spaces",
                        href: "/my-spaces",
                        icon: Rows01,
                    },
                    {
                        label: "My Bookmarks",
                        href: "/my-bookmarks",
                        icon: CheckDone01,
                    },
                    {
                        label: "My Notes",
                        href: "/my-notes",
                        icon: PieChart03,
                    },
                    {
                        label: "Users",
                        href: "/users",
                        icon: Users01,
                    },
                ]}
            />
            <main className="min-w-0 flex-1 bg-secondary_subtle pt-8 pb-12 shadow-none lg:bg-primary">
                <div className="mx-auto mb-8 flex max-w-container flex-col gap-5 px-4 lg:px-8">
                    {/* Page header simple */}
                    <div className="relative flex flex-col gap-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                            <div className="flex flex-col gap-0.5 md:gap-1">
                                <p className="text-xl font-semibold text-primary md:text-display-xs">Pali Canon / Suttas / Long Discourses</p>
                                <p className="text-md text-tertiary">Explore the state-of-the-art Buddhist readership and learning.</p>
                            </div>
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex items-start gap-3">
                                    <Button iconLeading={DownloadCloud02} color="secondary" size="md">
                                        Download PDF
                                    </Button>
                                    <Button iconLeading={Plus} size="md">
                                        Add to Library
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ButtonGroup size="md">
                        <ButtonGroupItem isSelected>Long Discourses</ButtonGroupItem>
                        <ButtonGroupItem>Middle Discourses</ButtonGroupItem>
                        <ButtonGroupItem>Linked Discourses</ButtonGroupItem>
                        <ButtonGroupItem>Numbered Discourses</ButtonGroupItem>
                        <ButtonGroupItem>Minor Collection</ButtonGroupItem>
                    </ButtonGroup>
                </div>
                <div className="mx-auto flex max-w-container flex-col px-4 lg:gap-6 lg:px-8">
                    <div className="lg:rounded-xl lg:bg-secondary lg:px-4 lg:py-3">
                        <div className="relative flex flex-wrap items-center justify-between gap-x-3 gap-y-4 pb-6 after:pointer-events-none after:absolute after:inset-0 after:border-b after:border-secondary lg:flex-nowrap lg:px-0 lg:pb-0 lg:after:border-b-0">
                            <Input shortcut className="lg:max-w-100" size="sm" placeholder="Search for Sutta discourses" icon={SearchLg} />
                            <div className="flex gap-3">
                                <DateRangePicker
                                    defaultValue={{
                                        start: parseDate("2026-01-10"),
                                        end: parseDate("2026-03-10"),
                                    }}
                                />
                                <Button iconLeading={FilterLines} size="md" color="secondary" className="hidden lg:inline-flex">
                                    Filters
                                </Button>
                                <Button iconLeading={FilterLines} size="md" color="secondary" className="inline-flex lg:hidden" />
                            </div>
                        </div>
                    </div>
                    <TableCard.Root className="-mx-4 rounded-none shadow-xs lg:mx-0 lg:rounded-xl">
                        <Table
                            aria-label="Texts"
                            selectionMode="multiple"
                            sortDescriptor={sortDescriptor}
                            onSortChange={setSortDescriptor}
                            className="bg-primary"
                        >
                            <Table.Header className="bg-transparent">
                                <Table.Head id="trade" isRowHeader label="Text" className="w-full" />
                                <Table.Head id="amount" label="Text ID" />
                                <Table.Head id="deliveryDate" label="Pitaka Section" allowsSorting />
                                <Table.Head id="status" label="Status" />
                                <Table.Head id="author" label="Translator" />
                                <Table.Head id="actions" />
                            </Table.Header>
                            <Table.Body items={sortedItems}>
                                {(text) => (
                                    <Table.Row id={text.id_uuid}>
                                        <Table.Cell>
                                            <div>
                                                <p className="text-sm font-medium whitespace-nowrap text-primary">{text.english_title}</p>
                                                <p className="text-sm whitespace-nowrap text-tertiary">{text.pali_title}</p>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>{text.text_id}</Table.Cell>
                                        <Table.Cell>
                                            <div>
                                                <p className="text-sm font-medium whitespace-nowrap text-primary">{text.pitaka_section_english}</p>
                                                <p className="text-sm whitespace-nowrap text-tertiary">{text.pitaka_section_pali}</p>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <BadgeWithDot
                                                color={
                                                    text.status === "success"
                                                        ? "success"
                                                        : text.status === "processing"
                                                            ? "gray"
                                                            : text.status === "declined"
                                                                ? "error"
                                                                : "gray"
                                                }
                                                size="sm"
                                                type="modern"
                                                className="capitalize"
                                            >
                                                {text.status}
                                            </BadgeWithDot>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="group flex items-center gap-3 outline-hidden">
                                                <Avatar src={text.author.avatarUrl} alt={text.author.name} size="sm" initials={text.author.initials} />
                                                <div>
                                                    <p className="text-sm font-medium text-primary">{text.author.name}</p>
                                                    <p className="text-sm text-tertiary">{text.author.email}</p>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Button size="sm" color="link-color">
                                                Open
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                        <div className="max-lg:hidden">
                            <PaginationCardDefault />
                        </div>
                    </TableCard.Root>
                    <div className="lg:hidden">
                        <PaginationPageMinimalCenter page={1} total={10} className="mt-6" />
                    </div>
                </div>
            </main>
        </div>
    );
};

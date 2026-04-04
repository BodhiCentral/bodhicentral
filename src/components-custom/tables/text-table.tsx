import { useMemo, useState } from "react";
import { Trash01, Eye } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { Table, TableCard } from "@/components/application/table/table";
import textListing from "@/components-custom/tables/text-listing.json";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeTypes } from "@/components/base/badges/badge-types";
import { Badge, type BadgeColor, BadgeWithDot } from "@/components/base/badges/badges";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";

export const TextTableAlternatingFills = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "textId",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return textListing.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Texts in your selection"
                badge="13 texts"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label="Texts" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header className="bg-primary">
                    <Table.Head key="textId" id="textId" label="Text ID" className="min-w-16 max-w-20" allowsSorting />
                    <Table.Head key="englishTitle" id="englishTitle" label="Text / Discourse" isRowHeader allowsSorting />
                    <Table.Head key="shortDescription" id="shortDescription" label="Description" className="max-w-100" tooltip="This is a tooltip" />
                    <Table.Head key="translator" id="translator" label="Translator" allowsSorting />
                    <Table.Head key="section" id="section" label="In Section" className="md:hidden xl:table-cell" />
                    <Table.Head key="topics" id="topics" label="Topics" className="hidden" />
                    <Table.Head key="status" id="status" label="Status" className="max-w-24" allowsSorting />
                    <Table.Head key="actions" id="actions" className="max-w-24" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.textId} className="odd:bg-secondary">
                            <Table.Cell>{item.textId}</Table.Cell>
                            <Table.Cell>
                                <div className="whitespace-nowrap max-w-100">
                                    <p className="text-sm font-medium text-primary">{item.englishTitle}</p>
                                    <p className="text-sm text-tertiary">{item.paliTitle}</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="min-w-70 max-w-140">
                                    <p className="text-xs text-primary">{item.shortDescription}</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.englishTitle} size="sm" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.translator}</p>
                                        <p className="text-sm text-tertiary">{item.translationGroup}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.section}</Table.Cell>
                            <Table.Cell className="hidden">
                                <div className="flex gap-1">
                                    {item.topics.slice(0, 2).map((topic) => (
                                        <Badge key={topic.name} color={topic.color as BadgeColor<BadgeTypes>} size="sm">
                                            {topic.name}
                                        </Badge>
                                    ))}
                                    {item.topics.length > 2 && (
                                        <Badge color="gray" size="sm">
                                            +{item.topics.length - 2}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "published" ? "success" : "gray"} type="modern">
                                    {item.status === "published" ? "Published" : "In Progress"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex justify-end gap-0.5">
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Eye} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

import { useMemo, useState } from "react";
import { Edit01, Trash01 } from "@untitledui/icons";
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
                badge="10 texts found"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label="Texts" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header className="bg-primary">
                    <Table.Head id="textId" label="Text ID" allowsSorting />
                    <Table.Head id="englishTitle" label="Text Titles (English / Pali)" isRowHeader allowsSorting className="w-full max-w-1/4" />
                    <Table.Head id="paliTitle" label="Status" allowsSorting />
                    <Table.Head id="division" label="Division" allowsSorting tooltip="This is a tooltip" />
                    <Table.Head id="section" label="Section" allowsSorting className="md:hidden xl:table-cell" />
                    <Table.Head id="topics" label="Topics" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.textId} className="odd:bg-secondary">
                            <Table.Cell>{item.textId}</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.englishTitle} size="sm" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.englishTitle}</p>
                                        <p className="text-sm text-tertiary">{item.paliTitle}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "published" ? "success" : "gray"} type="modern">
                                    {item.status === "published" ? "Published" : "Draft"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.division}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.section}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-1">
                                    {item.topics.slice(0, 3).map((topic) => (
                                        <Badge key={topic.name} color={topic.color as BadgeColor<BadgeTypes>} size="sm">
                                            {topic.name}
                                        </Badge>
                                    ))}

                                    {item.topics.length > 3 && (
                                        <Badge color="gray" size="sm">
                                            +{item.topics.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex justify-end gap-0.5">
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} />
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

import { useState } from "react";
import { FilterLines, SearchLg } from "@untitledui/icons";
import type { Key } from "react-aria-components";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { cx } from "@/utils/cx";
import { FilterBar } from "@/components/application/filter-bar/filter-bar";

const viewTabs = [
    { id: "all", label: "View all" },
    { id: "published", label: "Published" },
    { id: "in-progress", label: "In Progress" },
];

export const TextTableFilter = () => {
    const [selectedTab, setSelectedTab] = useState<Key>("all");

    return (


        <FilterBar.Root>
            <Input
                icon={SearchLg}
                placeholder="Search"
                aria-label="Search"
                className="w-md"
            />

        </FilterBar.Root>

    );
};
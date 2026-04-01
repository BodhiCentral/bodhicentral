import { useState } from "react";
import type { Selection } from "react-aria-components";
import { MultiSelect } from "@/components/base/select/multi-select";
import { type SelectItemType } from "@/components/base/select/select";
const teamItems: SelectItemType[] = [
    { id: "vinaya", label: "Vinaya Pitaka", supportingText: "36 scriptures" },
    { id: "sutta", label: "Sutta Pitaka", supportingText: "840 discourses" },
    { id: "abhidhamma", label: "Abhidhamma Pitaka", supportingText: "7 Books" },
    { id: "dege-kangyur", label: "Degé Kangyur", supportingText: "900 scriptures" },
    { id: "dege-tengyur", label: "Degé Tengyur", supportingText: "3332 commentaries" },
    { id: "nyingma", label: "Nyingma Studies", supportingText: "13 treatises" },
    { id: "kagyu", label: "Kagyu Studies", supportingText: "8 treatises" },
    { id: "sakya", label: "Sakya Studies", supportingText: "18 treatises" },
    { id: "gelug", label: "Gelug Studies", supportingText: "15 treatises" },
    { id: "jonang", label: "Jonang Studies", supportingText: "15 treatises" },
    { id: "shampa-kagyu", label: "Shampa Kagyu Studies", supportingText: "9 treatises" },
    { id: "tok", label: "Treasury of Knowledge", supportingText: "10 volumes" },
];

const getSelectedUserCount = (selectedKeys: Selection) => {
    if (selectedKeys === "all") return teamItems.reduce((sum, t) => sum + parseInt(t.supportingText?.split(" ")[0] || "0"), 0);
    const selected = teamItems.filter((t) => (selectedKeys as Set<string | number>).has(t.id));
    return selected.reduce((sum, t) => sum + parseInt(t.supportingText?.split(" ")[0] || "0"), 0);
};

export const CanonMultiSelectSm = () => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["vinaya", "sutta", "abhidhamma"]));

    return (
        <MultiSelect
            isRequired
            size="sm"
            label="Select your Collections and/or Canons."
            tooltip="Select the Collections and/or Canons you want to browse."
            hint=""
            placeholder="Select Collections and Canons..."
            items={teamItems}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            supportingText={`${getSelectedUserCount(selectedKeys)} texts`}
            onReset={() => setSelectedKeys(new Set())}
            onSelectAll={() => setSelectedKeys(new Set(teamItems.map((t) => t.id)))}
        >
            {(item) => (
                <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    );
};
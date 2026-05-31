import { CornerDownRight } from "@untitledui/icons";
import { Collection, useTreeData } from "react-aria-components";
import { TreeView } from "@/components/application/tree-view/tree-view";
import { CanonMultiSelectSm } from "@/components-custom/multi-select/canon-multi-select-sm";

export interface TreeItemData {
    id: string;
    name: string;
    icon?: any;
    children?: TreeItemData[];
}

const KangyurTree = ({ size }: { size: "sm" | "md" }) => {
    const tree = useTreeData<TreeItemData>({ initialItems, getChildren: (item) => item.children ?? [] });

    return (
        <>
            <div className="flex flex-col gap-0 overflow-y-auto scrollbar-hide">
                <div className="flex flex-col gap-4 pb-4">
                    <CanonMultiSelectSm />
                </div>
                <TreeView
                    size={size}
                    selectionMode="multiple"
                    showConnectors
                    draggable
                    aria-label="Organization"
                    items={tree.items}
                    defaultExpandedKeys={["vinaya-pitaka", "sutta-pitaka", "abhidhamma-pitaka"]}
                    defaultSelectedKeys={[]}
                    onReorder={(e) => {
                        if (e.target.dropPosition === "before") {
                            tree.moveBefore(e.target.key as string, e.keys as Set<string>);
                        } else if (e.target.dropPosition === "after") {
                            tree.moveAfter(e.target.key as string, e.keys as Set<string>);
                        }
                    }}
                    onMove={(e) => {
                        if (e.target.dropPosition === "on") {
                            const targetNode = tree.getItem(e.target.key as string);
                            if (targetNode) {
                                const idx = targetNode.children ? targetNode.children.length : 0;
                                for (const key of e.keys) {
                                    tree.move(key as string, e.target.key as string, idx);
                                }
                            }
                        }
                    }}
                >
                    {(item: (typeof tree.items)[number]) => (
                        <TreeView.Item id={item.key} textValue={item.value.name}>
                            <TreeView.ItemContent icon={item.value.icon}>{item.value.name}</TreeView.ItemContent>
                            <Collection items={item.children ?? []}>
                                {(child) => (
                                    <TreeView.Item id={child.key} textValue={child.value.name}>
                                        <TreeView.ItemContent icon={child.value.icon}>{child.value.name}</TreeView.ItemContent>
                                        <Collection items={child.children ?? []}>
                                            {(grandchild) => (
                                                <TreeView.Item id={grandchild.key} textValue={grandchild.value.name}>
                                                    <TreeView.ItemContent icon={grandchild.value.icon}>{grandchild.value.name}</TreeView.ItemContent>
                                                    <Collection items={grandchild.children ?? []}>
                                                        {(greatGrandchild) => (
                                                            <TreeView.Item id={greatGrandchild.key} textValue={greatGrandchild.value.name}>
                                                                <TreeView.ItemContent icon={greatGrandchild.value.icon}>
                                                                    {greatGrandchild.value.name}
                                                                </TreeView.ItemContent>
                                                            </TreeView.Item>
                                                        )}
                                                    </Collection>
                                                </TreeView.Item>
                                            )}
                                        </Collection>
                                    </TreeView.Item>
                                )}
                            </Collection>
                        </TreeView.Item>
                    )}
                </TreeView>
            </div>

        </>

    );
};

const initialItems: TreeItemData[] = [
    {
        id: "vinaya",
        name: "VINAYA",
        children: [
            {
                id: "vinayavastu",
                name: "Vinayavastu (Toh 1)",
                children: [
                ],
            },
            {
                id: "vinayavibhanga",
                name: "Vinayavibhanga (Toh 2-5)",
                children: [
                ],
            },
            {
                id: "vinayaksudrakavastu",
                name: "Vinayaksudrakavastu (Toh 6)",
                children: [
                ],
            },
            {
                id: "vinayottaragrantha",
                name: "Vinayottaragrantha (Toh 7)",
                children: [
                ],
            },
        ],
    },
    {
        id: "sutras",
        name: "SŪTRAS",
        children: [
            {
                id: "perfection-of-wisdom",
                name: "The Perfection of Wisdom",
                children: [
                    {
                        id: "the-six-mothers",
                        name: "The Six Mothers",
                        children: [
                        ],
                    },
                    {
                        id: "the-eleven-children",
                        name: "The Eleven Children",
                        children: [
                        ],
                    },
                    {
                        id: "six-short-perfection-of-wisdom-texts",
                        name: "The Six Short Perfection of Wisdom Texts",
                        children: [
                        ],
                    },
                ],
            },
            {
                id: "mn", name: "The Thirteen Late-Translated Sūtras", children: [

                ]
            },
            {
                id: "sn", name: "Linked Discourses", children: [
                    { id: "sn-1-11", name: "Discourses with Verses", children: [] },
                    { id: "sn-12-21", name: "Discourses Beginning with Causation", children: [] },
                    { id: "sn-22-34", name: "Discourses Beginning with the Aggregates", children: [] },
                    { id: "sn-35-44", name: "Discourses Beginning with the Six Senses Fields", children: [] },
                    { id: "sn-45-56", name: "Discourses Beginning with the Path", children: [] },
                ]
            },
            {
                id: "an", name: "Numbered Discourses", children: [
                    { id: "an-1", name: "The Books of the Ones", children: [] },
                    { id: "an-2", name: "The Books of the Twos", children: [] },
                    { id: "an-3", name: "The Books of the Threes", children: [] },
                    { id: "an-4", name: "The Books of the Fours", children: [] },
                    { id: "an-5", name: "The Books of the Fives", children: [] },
                    { id: "an-6", name: "The Books of the Sixes", children: [] },
                    { id: "an-7", name: "The Books of the Sevens", children: [] },
                    { id: "an-8", name: "The Books of the Eights", children: [] },
                    { id: "an-9", name: "The Books of the Nines", children: [] },
                    { id: "an-10", name: "The Books of the Tens", children: [] },
                    { id: "an-11", name: "The Books of the Elevens", children: [] },
                ]
            },
            {
                id: "kn", name: "Minor Collections", children: [
                    { id: "kp-1", name: "Minor Readings", icon: CornerDownRight, children: [] },
                    { id: "dhp-1-423", name: "Sayings of the Dhamma", icon: CornerDownRight, children: [] },
                    { id: "ud-1-8", name: "Heartfelt Saying", icon: CornerDownRight, children: [] },
                    { id: "iti-1-112", name: "So It Was Said", icon: CornerDownRight, children: [] },
                ]
            },
        ],
    },
    {
        id: "abhidhamma-pitaka",
        name: "ABHIDHAMMA PITAKA",
        children: [
            { id: "dhammasangani", name: "Compendium of Phenomena", icon: CornerDownRight, children: [] },
            { id: "vibhanga", name: "Book of Analysis", icon: CornerDownRight, children: [] },
            { id: "dhatukatha", name: "Discussion of Elements", icon: CornerDownRight, children: [] },
            { id: "puggala-pannatti", name: "Description of Personality Types", icon: CornerDownRight, children: [] },
            { id: "kathavattu", name: "Points of Controversy", icon: CornerDownRight, children: [] },
            { id: "yamaka", name: "The Pairs", icon: CornerDownRight, children: [] },
            { id: "patthana", name: "Conditional Relations", icon: CornerDownRight, children: [] },
        ],
    },
];

export const KangyurTreeViewSM = () => <KangyurTree size="sm" />;
import { CornerDownRight, Minus } from "@untitledui/icons";
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
                    defaultExpandedKeys={["sutras", "perfection-of-wisdom", "general-sutra-section", "tantra", "tantra-collection"]}
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
                name: "Vinayavastu (Toh 1)", icon: Minus,
                children: [
                ],
            },
            {
                id: "vinayavibhanga",
                name: "Vinayavibhanga (Toh 2-5)", icon: Minus,
                children: [
                ],
            },
            {
                id: "vinayaksudrakavastu",
                name: "Vinayaksudrakavastu (Toh 6)", icon: Minus,
                children: [
                ],
            },
            {
                id: "vinayottaragrantha",
                name: "Vinayottaragrantha (Toh 7)", icon: Minus,
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
                        name: "The Six Mothers", icon: Minus,
                        children: [
                        ],
                    },
                    {
                        id: "the-eleven-children",
                        name: "The Eleven Children", icon: Minus,
                        children: [
                        ],
                    },
                    {
                        id: "six-short-perfection-of-wisdom-texts",
                        name: "The Six Short Perfection of Wisdom Texts", icon: Minus,
                        children: [
                        ],
                    },
                ],
            },
            {
                id: "the-thirteen-late-translated-sutras", name: "The Thirteen Late-Translated Sūtras", icon: Minus, children: [

                ]
            },
            {
                id: "a-multitude-of-buddhas", name: "A Multitude of Buddhas", icon: Minus, children: [

                ]
            },
            {
                id: "heap-of-jewels", name: "Heap of Jewels", icon: Minus, children: [

                ]
            },
            {
                id: "general-sutra-section", name: "General Sūtra Section", children: [
                    { id: "mahayana-sutras", name: "Mahāyāna Sūtras", icon: Minus, children: [] },
                    { id: "sravakayana-sutras", name: "Sravakayana Sūtras", icon: Minus, children: [] },
                ]
            },
        ],
    },
    {
        id: "tantra",
        name: "TANTRA",
        children: [
            {
                id: "tantra-collection", name: "Tantra Collection", children: [
                    {
                        id: "anuttarayoga-tantras", name: "Anuttarayoga Tantras", children: [
                            { id: "non-dual-tantras", name: "Non-dual Tantras", icon: Minus, children: [] },
                            { id: "mother-tantras", name: "76 Mother Tantras", icon: Minus, children: [] },
                            { id: "father-tantras", name: "37 Father Tantras", icon: Minus, children: [] },
                        ]
                    },
                    {
                        id: "yoga-tantras", name: "Yoga Tantras", children: [
                            { id: "skilful-means-tantras", name: "8 Tantras of Skilful Means", icon: Minus, children: [] },
                            { id: "wisdom-tantras", name: "7 Tantras of Wisdom", icon: Minus, children: [] },
                            { id: "others", name: "Others", icon: Minus, children: [] },
                        ]
                    },
                    {
                        id: "carya-tantras", name: "Carya Tantras", children: [
                            { id: "tathagata-family", name: "Tathāgata Family", icon: Minus, children: [] },
                            { id: "vajra-family", name: "Vajra Family", icon: Minus, children: [] },
                        ]
                    },
                    { id: "action-tantras", name: "Action Tantras", icon: Minus, children: [] },
                    { id: "dedications", name: "Dedications", icon: Minus, children: [] },
                ]
            },
            {
                id: "old-tantras", name: "Old Tantras", children: [
                    { id: "atiyoga", name: "Atiyoga", icon: Minus, children: [] },
                    { id: "anuyoga", name: "Anuyoga", icon: Minus, children: [] },
                    { id: "mahayoga", name: "Mahayoga", icon: Minus, children: [] },
                ]
            },
            { id: "wheel-of-time-commentary", name: "Wheel of Time Commentary", children: [] },
        ],
    },
    {
        id: "dharini",
        name: "DHARANI",
        children: [
            {
                id: "dharani-collection",
                name: "Dharani Collection", icon: Minus,
                children: [
                ],
            },
            {
                id: "aspirations-and-dedications",
                name: "Aspirations and Dedications", icon: Minus,
                children: [
                ],
            },
        ],
    },
    {
        id: "kangyur-catalogs",
        name: "KANGYUR CATALOG", icon: Minus,
        children: [],
    },
];

export const KangyurTreeViewSM = () => <KangyurTree size="sm" />;
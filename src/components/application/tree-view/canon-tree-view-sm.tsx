import { Attachment01, File04, Folder, BookOpen01 } from "@untitledui/icons";
import { Collection, useTreeData } from "react-aria-components";
import { TreeView } from "@/components/application/tree-view/tree-view";
import { CanonMultiSelectSm } from "@/components-custom/multi-select/canon-multi-select-sm";

export interface TreeItemData {
    id: string;
    name: string;
    icon?: any;
    children?: TreeItemData[];
}

const CanonTree = ({ size }: { size: "sm" | "md" }) => {
    const tree = useTreeData<TreeItemData>({ initialItems, getChildren: (item) => item.children ?? [] });

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-display-xs font-medium text-brand-primary">Canon Navigation</h2>
                    <CanonMultiSelectSm />
                </div>
                <TreeView
                    size={size}
                    selectionMode="multiple"
                    showConnectors
                    draggable
                    aria-label="Organization"
                    items={tree.items}
                    defaultExpandedKeys={["sutta-pitaka", "sn", "abhidhamma-pitaka"]}
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
        id: "vinaya-pitaka",
        name: "VINAYA PITAKA",
        children: [
            {
                id: "su-vb",
                name: "Rules and Their Analysis",
                children: [
                    {
                        id: "bu-vb", name: "Analysis of Rules for Monks", children: [
                            { id: "heavy-offenses", name: "Heavy Offenses", children: [] },
                            { id: "light-offenses", name: "Light Offenses", children: [] },
                        ]
                    },
                    { id: "bi-vb", name: "Analysis of Rules for Nuns", children: [] },
                ],
            },
            {
                id: "kd",
                name: "Chapters on Legal Topics",
                children: [
                    {
                        id: "kd-1-10", name: "The Great Division", children: [
                            { id: "kd-1", name: "Discourse 1", icon: BookOpen01, children: [] },
                            { id: "kd-2", name: "Discourse 2", icon: BookOpen01, children: [] },
                            { id: "kd-3", name: "Discourse 3", icon: BookOpen01, children: [] },
                            { id: "kd-4", name: "Discourse 4", icon: BookOpen01, children: [] },
                            { id: "kd-5", name: "Discourse 5", icon: BookOpen01, children: [] },
                            { id: "kd-6", name: "Discourse 6", icon: BookOpen01, children: [] },
                            { id: "kd-7", name: "Discourse 7", icon: BookOpen01, children: [] },
                            { id: "kd-8", name: "Discourse 8", icon: BookOpen01, children: [] },
                            { id: "kd-9", name: "Discourse 9", icon: BookOpen01, children: [] },
                            { id: "kd-10", name: "Discourse 10", icon: BookOpen01, children: [] },
                        ]
                    },
                    {
                        id: "kd-11-22", name: "The Lesser Division", children: [
                            { id: "kd-11", name: "Discourse 11", icon: BookOpen01, children: [] },
                            { id: "kd-12", name: "Discourse 12", icon: BookOpen01, children: [] },
                            { id: "kd-13", name: "Discourse 13", icon: BookOpen01, children: [] },
                            { id: "kd-14", name: "Discourse 14", icon: BookOpen01, children: [] },
                            { id: "kd-15", name: "Discourse 15", icon: BookOpen01, children: [] },
                            { id: "kd-16", name: "Discourse 16", icon: BookOpen01, children: [] },
                            { id: "kd-17", name: "Discourse 17", icon: BookOpen01, children: [] },
                            { id: "kd-18", name: "Discourse 18", icon: BookOpen01, children: [] },
                            { id: "kd-19", name: "Discourse 19", icon: BookOpen01, children: [] },
                            { id: "kd-20", name: "Discourse 20", icon: BookOpen01, children: [] },
                            { id: "kd-21", name: "Discourse 21", icon: BookOpen01, children: [] },
                            { id: "kd-22", name: "Discourse 22", icon: BookOpen01, children: [] },
                        ]
                    },
                ],
            },
            {
                id: "pvr",
                name: "The Compendium",
                children: [
                    { id: "pvr-1", name: "Discourse 1", icon: BookOpen01, children: [] },
                    { id: "pvr-2", name: "Discourse 2", icon: BookOpen01, children: [] },
                    { id: "pvr-3", name: "Discourse 3", icon: BookOpen01, children: [] },
                    { id: "pvr-4", name: "Discourse 4", icon: BookOpen01, children: [] },
                    { id: "pvr-5", name: "Discourse 5", icon: BookOpen01, children: [] },
                    { id: "pvr-6", name: "Discourse 6", icon: BookOpen01, children: [] },
                    { id: "pvr-7", name: "Discourse 7", icon: BookOpen01, children: [] },
                    { id: "pvr-8", name: "Discourse 8", icon: BookOpen01, children: [] },
                    { id: "pvr-9", name: "Discourse 9", icon: BookOpen01, children: [] },
                    { id: "pvr-10", name: "Discourse 10", icon: BookOpen01, children: [] },
                    { id: "pvr-11", name: "Discourse 11", icon: BookOpen01, children: [] },
                    { id: "pvr-12", name: "Discourse 12", icon: BookOpen01, children: [] },
                    { id: "pvr-13", name: "Discourse 13", icon: BookOpen01, children: [] },
                    { id: "pvr-14", name: "Discourse 14", icon: BookOpen01, children: [] },
                    { id: "pvr-15", name: "Discourse 15", icon: BookOpen01, children: [] },
                    { id: "pvr-16", name: "Discourse 16", icon: BookOpen01, children: [] },
                    { id: "pvr-17", name: "Discourse 17", icon: BookOpen01, children: [] },
                    { id: "pvr-18", name: "Discourse 18", icon: BookOpen01, children: [] },
                    { id: "pvr-19", name: "Discourse 19", icon: BookOpen01, children: [] },
                    { id: "pvr-20", name: "Discourse 20", icon: BookOpen01, children: [] },
                    { id: "pvr-21", name: "Discourse 21", icon: BookOpen01, children: [] },
                ],
            },
        ],
    },
    {
        id: "sutta-pitaka",
        name: "SUTTA PITAKA",
        children: [
            {
                id: "dn",
                name: "Long Discourses",
                children: [
                    {
                        id: "dn-1-13",
                        name: "The Chapter on the Entire Spectrum of Ethics",
                        children: [
                            { id: "dn-1", name: "Discourse 1", icon: BookOpen01, children: [] },
                            { id: "dn-2", name: "Discourse 2", icon: BookOpen01, children: [] },
                            { id: "dn-3", name: "Discourse 3", icon: BookOpen01, children: [] },
                            { id: "dn-4", name: "Discourse 4", icon: BookOpen01, children: [] },
                            { id: "dn-5", name: "Discourse 5", icon: BookOpen01, children: [] },
                            { id: "dn-6", name: "Discourse 6", icon: BookOpen01, children: [] },
                            { id: "dn-7", name: "Discourse 7", icon: BookOpen01, children: [] },
                            { id: "dn-8", name: "Discourse 8", icon: BookOpen01, children: [] },
                            { id: "dn-9", name: "Discourse 9", icon: BookOpen01, children: [] },
                            { id: "dn-10", name: "Discourse 10", icon: BookOpen01, children: [] },
                            { id: "dn-11", name: "Discourse 11", icon: BookOpen01, children: [] },
                            { id: "dn-12", name: "Discourse 12", icon: BookOpen01, children: [] },
                            { id: "dn-13", name: "Discourse 13", icon: BookOpen01, children: [] },
                        ],
                    },
                    {
                        id: "dn-14-23",
                        name: "The Great Chapter",
                        children: [
                            { id: "dn-14", name: "Discourse 14", icon: BookOpen01, children: [] },
                            { id: "dn-15", name: "Discourse 15", icon: BookOpen01, children: [] },
                            { id: "dn-16", name: "Discourse 16", icon: BookOpen01, children: [] },
                            { id: "dn-17", name: "Discourse 17", icon: BookOpen01, children: [] },
                            { id: "dn-18", name: "Discourse 18", icon: BookOpen01, children: [] },
                            { id: "dn-19", name: "Discourse 19", icon: BookOpen01, children: [] },
                            { id: "dn-20", name: "Discourse 20", icon: BookOpen01, children: [] },
                            { id: "dn-21", name: "Discourse 21", icon: BookOpen01, children: [] },
                            { id: "dn-22", name: "Discourse 22", icon: BookOpen01, children: [] },
                            { id: "dn-23", name: "Discourse 23", icon: BookOpen01, children: [] },
                        ],
                    },
                    {
                        id: "dn-24-34",
                        name: "The Chapter with Pāṭikaputta",
                        children: [
                            { id: "dn-24", name: "Discourse 24", icon: BookOpen01, children: [] },
                            { id: "dn-25", name: "Discourse 25", icon: BookOpen01, children: [] },
                            { id: "dn-26", name: "Discourse 26", icon: BookOpen01, children: [] },
                            { id: "dn-27", name: "Discourse 27", icon: BookOpen01, children: [] },
                            { id: "dn-28", name: "Discourse 28", icon: BookOpen01, children: [] },
                            { id: "dn-29", name: "Discourse 29", icon: BookOpen01, children: [] },
                            { id: "dn-30", name: "Discourse 30", icon: BookOpen01, children: [] },
                            { id: "dn-31", name: "Discourse 31", icon: BookOpen01, children: [] },
                            { id: "dn-32", name: "Discourse 32", icon: BookOpen01, children: [] },
                            { id: "dn-33", name: "Discourse 33", icon: BookOpen01, children: [] },
                            { id: "dn-34", name: "Discourse 34", icon: BookOpen01, children: [] },
                        ],
                    },
                ],
            },
            {
                id: "mn", name: "Middle Discourses", children: [
                    { id: "mn-1-50", name: "The First Fifty", children: [] },
                    { id: "mn-51-100", name: "The Middle Fifty", children: [] },
                    { id: "mn-101-152", name: "The Final Fifty", children: [] },
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
            { id: "kn", name: "Minor Collections", children: [] },
        ],
    },
    {
        id: "abhidhamma-pitaka",
        name: "ABHIDHAMMA PITAKA",
        children: [
            { id: "dhammasangani", name: "Compendium of Phenomena", icon: BookOpen01, children: [] },
            { id: "vibhanga", name: "Book of Analysis", icon: BookOpen01, children: [] },
            { id: "dhatukatha", name: "Discussion of Elements", icon: BookOpen01, children: [] },
            { id: "puggala-pannatti", name: "Description of Personality Types", icon: BookOpen01, children: [] },
            { id: "kathavattu", name: "Points of Controversy", icon: BookOpen01, children: [] },
            { id: "yamaka", name: "The Pairs", icon: BookOpen01, children: [] },
            { id: "patthana", name: "Conditional Relations", icon: BookOpen01, children: [] },
        ],
    },
];

export const CanonTreeViewSM = () => <CanonTree size="sm" />;
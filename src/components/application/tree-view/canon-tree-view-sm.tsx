import { Attachment01, File04, Folder, BookOpen01, ArrowRight, CornerDownRight } from "@untitledui/icons";
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
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-6">
                    <CanonMultiSelectSm />
                    <h2 className="text-display-xs font-medium text-brand-primary">Canon Navigation</h2>
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
        id: "vinaya-pitaka",
        name: "VINAYA PITAKA",
        children: [
            {
                id: "su-vb",
                name: "Rules and Their Analysis",
                children: [
                    {
                        id: "bu-vb", name: "Monks' Rules and Their Analysis", children: [
                            { id: "bu-pj-1-4", name: "Expulsion", icon: CornerDownRight, children: [] },
                            { id: "bu-ss-1-13", name: "Suspension", icon: CornerDownRight, children: [] },
                            { id: "bu-ay-1-2", name: "Undetermined", icon: CornerDownRight, children: [] },
                            { id: "bu-np-1-30h", name: "Relinquisment with Confession", icon: CornerDownRight, children: [] },
                            { id: "bu-pc-1-92", name: "Confession", icon: CornerDownRight, children: [] },
                            { id: "bu-pd-1-4", name: "Acknowledgement", icon: CornerDownRight, children: [] },
                            { id: "bu-sk-1-75", name: "Rules of Training", icon: CornerDownRight, children: [] },
                            { id: "bu-as-1-7", name: "Setting Legal Issues", icon: CornerDownRight, children: [] },
                        ]
                    },
                    {
                        id: "bi-vb", name: "Nuns' Rules and Their Analysis", children: [
                            { id: "bi-pj-1-4", name: "Expulsion", icon: CornerDownRight, children: [] },
                            { id: "bi-ss-1-17", name: "Suspension", icon: CornerDownRight, children: [] },
                            { id: "bi-np-1-30h", name: "Relinquisment with Confession", icon: CornerDownRight, children: [] },
                            { id: "bi-pc-1-92", name: "Confession", icon: CornerDownRight, children: [] },
                            { id: "bi-pd-1-4", name: "Acknowledgement", icon: CornerDownRight, children: [] },
                            { id: "bi-sk-1-75", name: "Rules of Training", icon: CornerDownRight, children: [] },
                            { id: "setting-legal-issues", name: "Setting Legal Issues", icon: CornerDownRight, children: [] },
                        ]
                    },
                ],
            },
            {
                id: "kd",
                name: "Chapters on Legal Topics",
                children: [
                    {
                        id: "kd-1-10", name: "The Great Chapter", children: [
                            { id: "kd-1", name: "Going Forth", icon: CornerDownRight, children: [] },
                            { id: "kd-2", name: "Sabbath", icon: CornerDownRight, children: [] },
                            { id: "kd-3", name: "Rain Season", icon: CornerDownRight, children: [] },
                            { id: "kd-4", name: "Invitation", icon: CornerDownRight, children: [] },
                            { id: "kd-5", name: "Leather", icon: CornerDownRight, children: [] },
                            { id: "kd-6", name: "Medicine", icon: CornerDownRight, children: [] },
                            { id: "kd-7", name: "Robe-Making Season", icon: CornerDownRight, children: [] },
                            { id: "kd-8", name: "Robes", icon: CornerDownRight, children: [] },
                            { id: "kd-9", name: "At Campa", icon: CornerDownRight, children: [] },
                            { id: "kd-10", name: "At Kosambi", icon: CornerDownRight, children: [] },
                        ]
                    },
                    {
                        id: "kd-11-22", name: "The Lesser Chapter", children: [
                            { id: "kd-11", name: "Saṅgha Procedures", icon: CornerDownRight, children: [] },
                            { id: "kd-12", name: "Probation", icon: CornerDownRight, children: [] },
                            { id: "kd-13", name: "Collected Procedures", icon: CornerDownRight, children: [] },
                            { id: "kd-14", name: "Settlement of Disputes", icon: CornerDownRight, children: [] },
                            { id: "kd-15", name: "Minor Matters", icon: CornerDownRight, children: [] },
                            { id: "kd-16", name: "Lodgings", icon: CornerDownRight, children: [] },
                            { id: "kd-17", name: "Schism in the Saṅgha", icon: CornerDownRight, children: [] },
                            { id: "kd-18", name: "Duties", icon: CornerDownRight, children: [] },
                            { id: "kd-19", name: "Setting Aside the Sabbath", icon: CornerDownRight, children: [] },
                            { id: "kd-20", name: "Nuns", icon: CornerDownRight, children: [] },
                            { id: "kd-21", name: "Council of the Five Hundred", icon: CornerDownRight, children: [] },
                            { id: "kd-22", name: "Council of the Seven Hundred", icon: CornerDownRight, children: [] },
                        ]
                    },
                ],
            },
            {
                id: "pvr",
                name: "The Compendium",
                children: [
                    { id: "pvr-1", name: "Laying-Down-Where? (Part 1)", icon: CornerDownRight, children: [] },
                    { id: "pvr-2", name: "Laying-Down-Where? (Part 2)", icon: CornerDownRight, children: [] },
                    { id: "pvr-3", name: "Summary Of Origins", icon: CornerDownRight, children: [] },
                    { id: "pvr-4", name: "Consecutive Repetitions", icon: CornerDownRight, children: [] },
                    { id: "pvr-5", name: "Synopsis of Settlements", icon: CornerDownRight, children: [] },
                    { id: "pvr-6", name: "Questions on the Khandhakas", icon: CornerDownRight, children: [] },
                    { id: "pvr-7", name: "Numbered Sections", icon: CornerDownRight, children: [] },
                    { id: "pvr-8", name: "Questions on the Beginning of Sabbath", icon: CornerDownRight, children: [] },
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
                        ],
                    },
                    {
                        id: "dn-14-23",
                        name: "The Great Chapter",
                        children: [
                        ],
                    },
                    {
                        id: "dn-24-34",
                        name: "The Chapter with Pāṭikaputta",
                        children: [
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

export const CanonTreeViewSM = () => <CanonTree size="sm" />;
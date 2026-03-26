"use client";

import { useState, useEffect } from "react";
import {
    BarChartSquare02,
    Calendar,
    CheckDone01,
    ChevronRight,
    Code02,
    File05,
    PieChart03,
    Rows01,
    SearchLg,
    Settings01 as Settings01Icon,
    LifeBuoy01,
    Bookmark,
} from "@untitledui/icons";
import { SidebarNavigationSectionsSubheadings } from "@/components/application/app-navigation/sidebar-navigation/sidebar-sections-subheadings";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

import { AppearanceTab } from "./settings-tabs/appearance-tab";
import { DetailsTab } from "./settings-tabs/details-tab";
import { ProfileTab } from "./settings-tabs/profile-tab";
import { PasswordTab } from "./settings-tabs/password-tab";
import { PlansTab } from "./settings-tabs/plans-tab";
import { BillingTab } from "./settings-tabs/billing-tab";
import { EmailTab } from "./settings-tabs/email-tab";
import { NotificationsTab } from "./settings-tabs/notifications-tab";

const tabs = [
    { id: "details", label: "My details" },
    { id: "profile", label: "Profile" },
    { id: "password", label: "Password" },
    { id: "appearance", label: "Appearance" },
    { id: "plans", label: "Plans" },
    { id: "billing", label: "Billing" },
    { id: "email", label: "Email" },
    { id: "notifications", label: "Notifications", badge: 2 },
];

export const Settings06 = () => {
    const [selectedTab, setSelectedTab] = useState<string>("details");
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const supabase = createClient();

        // Initial fetch
        supabase.auth.getUser().then(({ data: { user } }) => {
            console.log("Settings06 - Initial user fetch:", user);
            setUser(user);
        });

        // Listen for changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Settings06 - Auth state change:", event, session?.user);
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <SidebarNavigationSectionsSubheadings
                activeUrl="/settings"
                user={user}
                items={[
                    {
                        label: "General",
                        items: [
                            {
                                label: "Dashboard",
                                href: "/dashboard",
                                icon: BarChartSquare02,
                            },
                            {
                                label: "Settings",
                                href: "/settings",
                                icon: Settings01Icon,
                            },
                            {
                                label: "Support & Help",
                                href: "/support",
                                icon: LifeBuoy01,
                            },
                            {
                                label: "Documentation",
                                href: "https://bodhi-central-docs.vercel.app/",
                                icon: File05,
                            }
                        ],
                    },
                    {
                        label: "My Desk",
                        items: [
                            {
                                label: "Spaces",
                                href: "#",
                                icon: () => <Avatar src="/collections_thumbnails_kagyu.jpg" className="mr-2 size-5" />,
                                badge: (
                                    <div className="flex items-center gap-3">
                                        <Badge size="sm" type="modern">
                                            ⌘1
                                        </Badge>
                                        <ChevronRight size={16} className="text-fg-quaternary" />
                                    </div>
                                ),
                            },
                            {
                                label: "Texts",
                                href: "#",
                                icon: () => <Avatar src="/collections_thumbnails_kagyu.jpg" className="mr-2 size-5" />,
                                badge: (
                                    <div className="flex items-center gap-3">
                                        <Badge size="sm" type="modern">
                                            ⌘2
                                        </Badge>
                                        <ChevronRight size={16} className="text-fg-quaternary" />
                                    </div>
                                ),
                            },
                            {
                                label: "Study Paths",
                                href: "#",
                                icon: () => <Avatar src="/collections_thumbnails_kagyu.jpg" className="mr-2 size-5" />,
                                badge: (
                                    <div className="flex items-center gap-3">
                                        <Badge size="sm" type="modern">
                                            ⌘3
                                        </Badge>
                                        <ChevronRight size={16} className="text-fg-quaternary" />
                                    </div>
                                ),
                            },
                            {
                                label: "Practice Paths",
                                href: "#",
                                icon: () => <Avatar src="/collections_thumbnails_kagyu.jpg" className="mr-2 size-5" />,
                                badge: (
                                    <div className="flex items-center gap-3">
                                        <Badge size="sm" type="modern">
                                            ⌘4
                                        </Badge>
                                        <ChevronRight size={16} className="text-fg-quaternary" />
                                    </div>
                                ),
                            },
                        ],
                    },
                    {
                        label: "Quick Access",
                        items: [
                            {
                                label: "Bookmarks",
                                href: "/bookmarks",
                                icon: Bookmark,
                            },
                            {
                                label: "Notes",
                                href: "/notes",
                                icon: File05,
                                badge: (
                                    <Badge size="sm" type="modern">
                                        8
                                    </Badge>
                                ),
                            },
                            {
                                label: "Saved Searches",
                                href: "/saved-searches",
                                icon: SearchLg,
                            },
                        ],
                    },

                ]}
            />

            {/* Settings Panel Main section */}
            <main className="min-w-0 flex-1 bg-olive-50 dark:bg-olive-800 pt-8 pb-12">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5 px-4 lg:px-8">
                        {/* Page header simple with search */}
                        <div className="relative flex flex-col gap-5">
                            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                                <div className="flex flex-col gap-0.5 lg:gap-1">
                                    <h1 className="text-xl font-semibold text-brand-800 dark:text-brand-200 lg:text-display-md">Settings</h1>
                                </div>
                                <div className="flex flex-col gap-4 lg:flex-row">
                                    <Input className="lg:w-80" size="sm" shortcut aria-label="Search" placeholder="Search" icon={SearchLg} />
                                </div>
                            </div>
                        </div>

                        <NativeSelect
                            aria-label="Page tabs"
                            className="md:hidden"
                            value={selectedTab}
                            onChange={(event) => setSelectedTab(event.target.value)}
                            options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                        />

                        <div className="-mx-4 -my-1 scrollbar-hide flex overflow-auto px-4 py-1 lg:-mx-8 lg:px-8">
                            <Tabs
                                className="flex w-max items-start max-md:hidden"
                                selectedKey={selectedTab}
                                onSelectionChange={(value) => setSelectedTab(value as string)}
                            >
                                <TabList type="button-border" className="w-full" items={tabs} />
                            </Tabs>
                        </div>
                    </div>
                    {selectedTab === "details" && <DetailsTab user={user} />}
                    {selectedTab === "profile" && <ProfileTab user={user} />}
                    {selectedTab === "password" && <PasswordTab />}
                    {selectedTab === "appearance" && <AppearanceTab />}
                    {selectedTab === "plans" && <PlansTab />}
                    {selectedTab === "billing" && <BillingTab />}
                    {selectedTab === "email" && <EmailTab user={user} />}
                    {selectedTab === "notifications" && <NotificationsTab user={user} />}
                </div>
            </main>
        </div>
    );
};

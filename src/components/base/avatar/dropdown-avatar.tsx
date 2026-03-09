"use client";

import { HelpCircle, LayersTwo01, LogOut01, Settings01, User01 } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";
import { signOut } from "@/app/(marketing)/(login)/actions";
import { User } from "@supabase/supabase-js";

interface DropdownAvatarProps {
    user: User;
}

export const DropdownAvatar = ({ user }: DropdownAvatarProps) => {
    // Get the name from metadata or split the email
    const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "User";
    const userEmail = user.email || "";
    const avatarUrl = user.user_metadata?.avatar_url || "https://www.gravatar.com/avatar?d=mp";

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocusVisible }) =>
                    cx(
                        "group relative inline-flex cursor-pointer rounded-full outline-focus-ring drop-shadow-lg",
                        (isPressed || isFocusVisible) && "outline-2 outline-offset-2",
                    )
                }
            >
                <Avatar alt={displayName} src={avatarUrl} size="md" />
            </AriaButton>

            <Dropdown.Popover>
                <div className="flex gap-3 border-b border-secondary p-3">
                    <AvatarLabelGroup
                        size="md"
                        src={avatarUrl}
                        status="online"
                        title={displayName}
                        subtitle={userEmail}
                    />
                </div>
                <Dropdown.Menu>
                    <Dropdown.Section>
                        <Dropdown.Item addon="⌘K->P" icon={User01} href="/settings">
                            View profile
                        </Dropdown.Item>
                        <Dropdown.Item addon="⌘S" icon={Settings01} href="/settings">
                            Settings
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Separator />
                    <Dropdown.Section>
                        <Dropdown.Item icon={LayersTwo01}>My Desk Preferences</Dropdown.Item>
                        <Dropdown.Item icon={HelpCircle}>Help and FAQ</Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Separator />
                    <Dropdown.Section>
                        <Dropdown.Item
                            addon="⌥⇧Q"
                            icon={LogOut01}
                            onClick={() => signOut()}
                        >
                            Log out
                        </Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

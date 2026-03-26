import { useEffect, useState } from "react";
import { Mail01, Clock } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

const timezones = [
    { id: "pac", label: "Pacific Standard Time (PST)" },
    { id: "est", label: "Eastern Standard Time (EST)" },
    { id: "utc", label: "Coordinated Universal Time (UTC)" },
    { id: "gmt", label: "Greenwich Mean Time (GMT)" },
    { id: "cet", label: "Central European Time (CET)" },
];

export const DetailsTab = ({ user }: { user: User | null }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        job_title: "",
        timezone: "pac"
    });

    const supabase = createClient();

    // Fetch the user's profile from the database
    useEffect(() => {
        if (!user) return;

        const getProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("first_name, last_name, job_title, timezone")
                .eq("id", user.id)
                .single();

            if (data) {
                setProfile({
                    first_name: data.first_name || "",
                    last_name: data.last_name || "",
                    job_title: data.job_title || "",
                    timezone: data.timezone || "pac"
                });
            }
            setIsLoading(false);
        };

        getProfile();
    }, [user]);

    if (!user || isLoading) {
        return <div className="px-4 lg:px-8 py-8 animate-pulse text-sm text-secondary">Loading profile data...</div>;
    }

    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={async (e) => {
                e.preventDefault();
                setIsSaving(true);
                const data = Object.fromEntries(new FormData(e.currentTarget));
                
                // 1. Update Profile fields
                const { error: profileError } = await supabase
                    .from('profiles')
                    .update({
                        first_name: data.firstName,
                        last_name: data.lastName,
                        job_title: data.jobTitle,
                        timezone: data.timezone,
                        updated_at: new Date().toISOString(),
                    })
                    .eq('id', user.id);

                if (profileError) {
                    console.error("Error updating profile:", profileError);
                    alert("Failed to update profile.");
                } else {
                    // Update the local state so it stays perfectly synced
                    setProfile({
                        first_name: data.firstName as string,
                        last_name: data.lastName as string,
                        job_title: data.jobTitle as string,
                        timezone: data.timezone as string,
                    });
                    alert("Profile saved successfully!");
                }

                setIsSaving(false);
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Personal info</SectionHeader.Heading>
                        <SectionHeader.Subheading>Update your personal details here.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Name" description="Your legal given and family name." />

                    <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
                        <Input name="firstName" aria-label="First name" size="sm" placeholder="First name" defaultValue={profile.first_name} />
                        <Input name="lastName" aria-label="Last name" size="sm" placeholder="Last name" defaultValue={profile.last_name} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Email Address (View only in this tab, handled via Supabase Auth separately usually, but we display the logged-in user's email) */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Email address" description="This email is used for your account sign-in." />

                    <div className="w-full max-w-md">
                         <Input name="email" type="email" aria-label="Email address" size="sm" defaultValue={user.email} isDisabled icon={Mail01} />
                    </div>
                </div>



                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Job Title */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Job title" description="What you do at your company." />

                    <div className="w-full max-w-md">
                         <Input name="jobTitle" aria-label="Job title" size="sm" placeholder="e.g. Product Designer" defaultValue={profile.job_title} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Timezone */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Timezone" description="Used to format dates and times correctly across your dashboard." />

                    <div className="w-full max-w-md">
                        <Select
                            name="timezone"
                            aria-label="Timezone"
                            size="sm"
                            defaultSelectedKey={profile.timezone}
                            items={timezones}
                        >
                            {(item) => (
                                <Select.Item id={item.id} textValue={item.label}>
                                    <div className="flex items-center gap-2">
                                        <Clock className="size-4 text-fg-quaternary" />
                                        <span>{item.label}</span>
                                    </div>
                                </Select.Item>
                            )}
                        </Select>
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Danger Zone: Account Deletion */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Account management" description="Permanently delete your account and all of your content." />

                    <div className="flex items-start">
                        <Button color="primary-destructive" size="sm" type="button">
                            Delete account
                        </Button>
                    </div>
                </div>
            </div>

            <SectionFooter.Root>
                <Button size="md" color="link-gray" type="button" onClick={() => window.location.reload()}>
                    Reset <span className="max-lg:hidden"> to current</span>
                </Button>
                <SectionFooter.Actions>
                    <Button color="secondary" size="md" type="button" onClick={() => window.location.reload()}>
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" size="md" isLoading={isSaving} isDisabled={isSaving}>
                        {isSaving ? "Saving..." : "Save changes"}
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};

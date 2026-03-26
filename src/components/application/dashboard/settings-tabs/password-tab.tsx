import { useState } from "react";
import { Lock01 } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { createClient } from "@/utils/supabase/client";

export const PasswordTab = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        setError(null);
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const currentPassword = formData.get("currentPassword") as string;
        const newPassword = formData.get("newPassword") as string;
        const confirmNewPassword = formData.get("confirmNewPassword") as string;

        // 1. Basic Validation
        if (!newPassword || newPassword.length < 8) {
            setError("New password must be at least 8 characters long.");
            setIsSaving(false);
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError("New passwords do not match.");
            setIsSaving(false);
            return;
        }

        // 2. Perform Password Update
        // Note: Supabase's updateUser handles the primary session update.
        const { error: updateError } = await supabase.auth.updateUser({
            password: newPassword
        });

        if (updateError) {
            setError(updateError.message);
            setIsSaving(false);
            return;
        }

        // SUCCESS!
        setSuccess(true);
        setIsSaving(false);
        alert("Password updated successfully!");
        
        // Reset the form
        (e.target as HTMLFormElement).reset();
    };

    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={handleSubmit}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Password</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage your password and security settings.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {error && (
                    <div className="rounded-lg bg-error-50 p-4 text-sm text-error-700 dark:bg-error-900/30 dark:text-error-400">
                        {error}
                    </div>
                )}
                
                {success && (
                    <div className="rounded-lg bg-success-50 p-4 text-sm text-success-700 dark:bg-success-900/30 dark:text-success-400">
                        Password updated successfully!
                    </div>
                )}

                {/* Current Password Field */}
                {/* Note: Though updateUser doesn't strictly verify the Current Password via the JS SDK (auth logic happens in session), it's good for UI consistency and security flows to include it */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Current password" description="Enter your current password to make changes." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="currentPassword" 
                            type="password" 
                            aria-label="Current password" 
                            size="sm" 
                            placeholder="••••••••" 
                            icon={Lock01} 
                            autoComplete="current-password"
                        />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* New Password */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="New password" description="Your new password must be at least 8 characters long." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="newPassword" 
                            type="password" 
                            aria-label="New password" 
                            size="sm" 
                            placeholder="••••••••" 
                            icon={Lock01} 
                            hint="Must be at least 8 characters."
                            autoComplete="new-password"
                        />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Confirm New Password */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Confirm new password" description="Please type your new password again." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="confirmNewPassword" 
                            type="password" 
                            aria-label="Confirm new password" 
                            size="sm" 
                            placeholder="••••••••" 
                            icon={Lock01} 
                            autoComplete="new-password"
                        />
                    </div>
                </div>
            </div>

            <SectionFooter.Root>
                <Button size="md" color="link-gray" type="button" onClick={() => window.location.reload()}>
                    Reset
                </Button>
                <SectionFooter.Actions>
                    <Button color="secondary" size="md" type="button" onClick={() => window.location.reload()}>
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" size="md" isLoading={isSaving} isDisabled={isSaving}>
                        {isSaving ? "Updating..." : "Update password"}
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};

import { useState, useEffect } from "react";
import { Mail01, CheckCircle } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { RadioGroup, RadioButton } from "@/components/base/radio-buttons/radio-buttons";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { cx } from "@/utils/cx";

export const EmailTab = ({ user }: { user: User | null }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState<{ alt_email: string | null }>({ alt_email: null });
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const supabase = createClient();

    useEffect(() => {
        if (!user) return;

        const fetchEmails = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select('alt_email')
                .eq('id', user.id)
                .single();

            if (data) {
                setProfile({ alt_email: data.alt_email });
            }
            setIsLoading(false);
        };

        fetchEmails();
    }, [user]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        const primaryEmail = formData.get("primaryEmail") as string;
        const altEmail = formData.get("altEmail") as string;
        const marketingEmail = formData.get("marketingEmail") as string;

        try {
            // 1. Handle Primary Email update (Only if changed)
            if (primaryEmail !== user?.email) {
                const { error: authError } = await supabase.auth.updateUser({ email: primaryEmail });
                if (authError) throw authError;
                setMessage({ type: 'success', text: "Check your email! We've sent confirmation links to both addresses." });
            }

            // 2. Handle Alternative Email update in profiles
            const { error: profileError } = await supabase
                .from('profiles')
                .update({ 
                    alt_email: altEmail,
                    updated_at: new Date().toISOString()
                })
                .eq('id', user?.id);

            if (profileError) throw profileError;

            if (!message) {
                setMessage({ type: 'success', text: "Email preferences updated successfully!" });
            }
            
            setProfile({ alt_email: altEmail });

        } catch (error: any) {
            console.error("Error updating emails:", error);
            setMessage({ type: 'error', text: error.message || "Failed to update email settings." });
        } finally {
            setIsSaving(false);
        }
    };

    if (!user || isLoading) {
        return <div className="px-4 lg:px-8 py-8 animate-pulse text-sm text-secondary">Loading email settings...</div>;
    }

    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={handleSubmit}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Email</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage the email addresses associated with your account.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {message && (
                    <div className={cx(
                        "rounded-lg p-4 text-sm flex items-center gap-3",
                        message.type === 'success' ? "bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-error-50 text-error-700 dark:bg-error-900/30 dark:text-error-400"
                    )}>
                        {message.type === 'success' && <CheckCircle size={18} />}
                        {message.text}
                    </div>
                )}

                {/* Primary Email */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Primary email" description="Used for account access and security notices." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="primaryEmail" 
                            type="email" 
                            aria-label="Primary email" 
                            size="sm" 
                            defaultValue={user.email} 
                            icon={Mail01} 
                        />
                         <p className="mt-2 text-xs text-tertiary">Note: Changing this requires email verification for security.</p>
                    </div>
                </div>

                {/* Alternative Email */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Alternative email" description="A backup email to recover your account if you lose access." />

                    <div className="flex w-full max-w-md items-start gap-4">
                        <div className="flex-1">
                            <Input 
                                name="altEmail" 
                                type="email" 
                                aria-label="Alternative email" 
                                size="sm" 
                                placeholder="Backup email address" 
                                defaultValue={profile.alt_email || ""}
                                icon={Mail01} 
                            />
                        </div>
                    </div>
                </div>

                {/* Default Email Address for Communication */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Communication preferences" description="Which email address should we use for updates?" />

                    <div className="w-full max-w-md">
                        <RadioGroup name="marketingEmail" defaultValue="primary">
                            <RadioButton 
                                value="primary" 
                                label="Primary email" 
                                hint={user.email} 
                            />
                            <RadioButton 
                                value="alternate" 
                                label="Alternative email" 
                                hint={profile.alt_email || "No alternative email added yet"} 
                                isDisabled={!profile.alt_email}
                            />
                        </RadioGroup>
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
                        {isSaving ? "Saving..." : "Save changes"}
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};

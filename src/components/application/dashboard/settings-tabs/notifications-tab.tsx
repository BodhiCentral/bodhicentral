import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Toggle } from "@/components/base/toggle/toggle";
import { User } from "@supabase/supabase-js";

export const NotificationsTab = ({ user }: { user: User | null }) => {
    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Saving customized notifications for user:", user?.id, data);
                alert("Community notification preferences saved!");
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Notifications</SectionHeader.Heading>
                        <SectionHeader.Subheading>Stay updated with our community and your personal study.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Email Notifications */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Email updates" description="Receive emails about your account and the community." />

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                        <Toggle 
                            name="communication_emails" 
                            size="sm" 
                            label="Account activity" 
                            hint="Stay informed about security alerts, billing notices, and significant account updates." 
                            defaultSelected 
                        />
                        <Toggle 
                            name="discourse_updates" 
                            size="sm" 
                            label="Community community updates" 
                            hint="Receive daily or weekly highlights and mentions from the Bodhi Central Discourse group." 
                            defaultSelected
                        />
                        <Toggle 
                            name="marketing_emails" 
                            size="sm" 
                            label="New reading paths" 
                            hint="Be the first to know when we publish new Buddhist study materials and reading paths." 
                        />
                    </div>
                </div>

                {/* Browser & Push Notifications */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Real-time alerts" description="Get notified instantly via browser push notifications." />

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                         <Toggle 
                            name="study_reminders" 
                            size="sm" 
                            label="Personal study reminders" 
                            hint="Receive gentle daily nudges to help you stay consistent with your reading goals." 
                            defaultSelected 
                        />
                        <Toggle 
                            name="discourse_mentions" 
                            size="sm" 
                            label="Community mentions & replies" 
                            hint="Get an instant alert when someone replies to your question or mentions you in the community." 
                            defaultSelected 
                        />
                    </div>
                </div>

                {/* Do Not Disturb */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Quiet hours" description="Pause all non-essential alerts during your concentration or rest time." />

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                        <Toggle 
                            name="do_not_disturb" 
                            size="sm" 
                            label="Enable quiet mode" 
                            hint="Mute all community and marketing alerts. Critical security alerts will still be sent." 
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
                    <Button type="submit" color="primary" size="md">
                        Save changes
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};

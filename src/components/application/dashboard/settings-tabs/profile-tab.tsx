import { useState, useEffect } from "react";
import { User01, Globe01 } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { FileTrigger } from "@/components/base/file-upload-trigger/file-upload-trigger";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

// Helper function: Resizes and compresses an image natively on the user's browser
const compressImage = async (file: File, maxWidthOrHeight: number = 400): Promise<File> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;
            
            img.onload = () => {
                const canvas = document.createElement("canvas");
                let width = img.width;
                let height = img.height;

                // Scale down if it's too large, preserving aspect ratio
                if (width > height) {
                    if (width > maxWidthOrHeight) {
                        height = Math.round((height * maxWidthOrHeight) / width);
                        width = maxWidthOrHeight;
                    }
                } else {
                    if (height > maxWidthOrHeight) {
                        width = Math.round((width * maxWidthOrHeight) / height);
                        height = maxWidthOrHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                
                if (!ctx) {
                    reject(new Error("Browser does not support canvas scaling"));
                    return;
                }
                
                // Draw the scaled-down image
                ctx.drawImage(img, 0, 0, width, height);
                
                // Convert to a tiny WebP format blob (quality 0.8 / 80%)
                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            // Convert the Blob back to a File to match the Supabase API
                            const compressedFile = new File([blob], file.name.split('.')[0] + '.webp', {
                                type: "image/webp",
                                lastModified: Date.now(),
                            });
                            resolve(compressedFile);
                        } else {
                            reject(new Error("Canvas format export failed"));
                        }
                    },
                    "image/webp",
                    0.8 
                );
            };
            img.onerror = (err) => reject(err);
        };
        reader.onerror = (err) => reject(err);
    });
};

export const ProfileTab = ({ user }: { user: User | null }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedAvatar, setUploadedAvatar] = useState<string | undefined>("https://www.untitledui.com/logos/images/ContrastAI.jpg");
    
    const [profile, setProfile] = useState({
        username: "",
        website: "",
        bio: "",
    });

    const supabase = createClient();

    useEffect(() => {
        if (!user) return;

        const getProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("username, website, bio, avatar_url")
                .eq("id", user.id)
                .single();

            if (data) {
                setProfile({
                    username: data.username || "",
                    website: data.website || "",
                    bio: data.bio || "",
                });
                
                // If they have an avatar saved, display it!
                if (data.avatar_url) {
                    setUploadedAvatar(data.avatar_url);
                }
            }
            setIsLoading(false);
        };

        getProfile();
    }, [user]);

    const handleAvatarUpload = async (files: FileList | null) => {
        if (!user || !files || files.length === 0) return;
        
        setIsUploading(true);

        try {
            // Compress and convert the file to WebP (guarantees massive file size reduction)
            const file = files[0];
            const optimizedFile = await compressImage(file, 400);

            // Create a perfectly unique file name with the new .webp extension
            const fileName = `${user.id}-${Math.random()}.webp`;
            
            // 1. Upload the tiny version to the 'avatars' bucket
            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(fileName, optimizedFile);

            if (uploadError) throw uploadError;

            // 2. Get the public URL for the newly uploaded optimized image
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(fileName);

            // 3. Update the profiles table to link this new avatar securely
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ avatar_url: publicUrl })
                .eq('id', user.id);

            if (updateError) throw updateError;

            // 4. Update the UI exactly as before!
            setUploadedAvatar(publicUrl);
            alert("Avatar optimized, converted, and uploaded successfully!");

        } catch (error) {
            console.error('Error uploading avatar:', error);
            alert("Error uploading avatar. Please check your storage bucket.");
        } finally {
            setIsUploading(false);
        }
    };

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
                
                const { error: profileError } = await supabase
                    .from('profiles')
                    .update({
                        username: data.username,
                        website: data.website,
                        bio: data.bio,
                        updated_at: new Date().toISOString(),
                    })
                    .eq('id', user.id);

                if (profileError) {
                    console.error("Error updating profile:", profileError);
                    alert("Failed to update profile.");
                } else {
                    alert("Profile saved successfully!");
                }
                
                setIsSaving(false);
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Profile</SectionHeader.Heading>
                        <SectionHeader.Subheading>Update your public profile information.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Public Profile Picture */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Profile picture" description="This will be displayed on your profile." />

                    <div className="flex items-center gap-5">
                        <img
                            src={uploadedAvatar}
                            alt="Profile Avatar"
                            className="size-16 rounded-full object-cover ring-1 ring-avatar-contrast-border ring-inset"
                        />

                        <div className="flex gap-4">
                            <FileTrigger acceptedFileTypes={["image/*"]} onSelect={handleAvatarUpload}>
                                <Button size="sm" color="secondary" isLoading={isUploading} isDisabled={isUploading}>
                                    {isUploading ? "Uploading..." : "Replace avatar"}
                                </Button>
                            </FileTrigger>
                        </div>
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Username */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Username" description="Your unique identifier on the platform." />

                    <div className="w-full max-w-md">
                         <Input name="username" aria-label="Username" size="sm" placeholder="username" icon={User01} defaultValue={profile.username} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                 {/* Website */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Website / Portfolio" description="A link to your personal site or portfolio." />

                    <div className="w-full max-w-md">
                         <Input name="website" aria-label="Website" size="sm" placeholder="https://example.com" icon={Globe01} defaultValue={profile.website} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                 {/* Bio */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Bio" description="Write a short introduction." />

                    <div className="flex w-full max-w-2xl flex-col gap-2">
                         <TextArea name="bio" aria-label="Bio" placeholder="Tell us a little bit about yourself..." rows={4} defaultValue={profile.bio} />
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

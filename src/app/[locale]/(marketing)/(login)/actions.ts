"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { getPostHogClient } from "@/lib/posthog-server";

export async function signIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    const posthog = getPostHogClient();

    if (error) {
        posthog?.capture({ distinctId: email, event: "sign_in_failed", properties: { error: error.message } });
        await posthog?.flush();
        return redirect("/sign-in?error=" + encodeURIComponent(error.message));
    }

    const userId = data.user?.id ?? email;
    posthog?.identify({ distinctId: userId, properties: { email } });
    posthog?.capture({ distinctId: userId, event: "sign_in_completed", properties: { method: "email" } });
    await posthog?.flush();

    return redirect("/settings");
}

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    const posthog = getPostHogClient();

    if (error) {
        posthog?.capture({ distinctId: email, event: "sign_up_failed", properties: { error: error.message } });
        await posthog?.flush();
        return redirect("/sign-up?error=" + encodeURIComponent(error.message));
    }

    const userId = data.user?.id ?? email;
    posthog?.identify({ distinctId: userId, properties: { email } });
    posthog?.capture({ distinctId: userId, event: "sign_up_completed", properties: { method: "email" } });
    await posthog?.flush();

    return redirect("/sign-up?message=Check your email to confirm your account");
}

export async function signInWithGoogle() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `http://localhost:3000/auth/callback`, // For local testing
        },
    });

    if (error) {
        return redirect("/sign-in?error=" + encodeURIComponent(error.message));
    }

    if (data.url) {
        return redirect(data.url);
    }
}

export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/");
}

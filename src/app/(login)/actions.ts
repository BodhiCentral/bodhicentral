"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return redirect("/sign-in?error=" + encodeURIComponent(error.message));
    }

    return redirect("/my-desk");
}

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return redirect("/sign-up?error=" + encodeURIComponent(error.message));
    }

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

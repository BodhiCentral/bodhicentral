import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: 'No code provided' }, { status: 400 });
    }

    try {
        const supabase = await createClient();

        // Get currently logged in Supabase user
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
            return NextResponse.json({ error: 'Log in to connect Patreon' }, { status: 401 });
        }

        // 1. Exchange the code for an access token from Patreon
        const response = await fetch('https://www.patreon.com/api/oauth2/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code: code,
                grant_type: 'authorization_code',
                client_id: process.env.PATREON_CLIENT_ID!,
                client_secret: process.env.PATREON_CLIENT_SECRET!,
                redirect_uri: new URL('/api/auth/patreon/callback', request.url).toString(),
            }),
        });

        const data = await response.json();

        if (data.error) {
            return NextResponse.json({ error: data.error_description || 'Token exchange failed' }, { status: 400 });
        }

        // 2. Use the access token to get user info and membership details
        const userResponse = await fetch('https://www.patreon.com/api/oauth2/v2/identity?include=memberships&fields%5Buser%5D=full_name,email&fields%5Bmember%5D=patron_status,currently_entitled_amount_cents', {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
            },
        });

        const userData = await userResponse.json();
        const patreonId = userData.data.id;

        // Check if user has an active, paid membership (e.g. status='active_patron' and paying something)
        let patreonStatus = 'none';
        let planType = 'free';

        if (userData.included && userData.included.length > 0) {
            const membership = userData.included[0].attributes;
            patreonStatus = membership.patron_status; // e.g. "active_patron"

            // If paying at least $2 (200 cents), update to full access
            if (patreonStatus === 'active_patron' && membership.currently_entitled_amount_cents >= 200) {
                planType = 'full_access';
            }
        }

        // 3. Update Supabase profile
        const { error: updateError } = await supabase
            .from('profiles')
            .update({
                patreon_id: patreonId,
                patreon_status: patreonStatus,
                plan_type: planType
            })
            .eq('id', user.id);

        if (updateError) {
            console.error("Supabase Update Error:", updateError);
            return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
        }

        console.log(`Saved Patreon info for user ${user.id}: Status=${patreonStatus}, Plan=${planType}`);

        // Redirect back to settings with success message
        return NextResponse.redirect(new URL('/settings?patreon=connected', request.url));

    } catch (error) {
        console.error("Patreon Auth Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

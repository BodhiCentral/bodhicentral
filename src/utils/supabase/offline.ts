import type { SupabaseClient } from "@supabase/supabase-js";

// The prototype was disconnected from Supabase on 23 Oct 2026: its URL and
// publishable key were removed from Vercel, because the database behind them is
// bodhicentral-dev's Production database. The prototype remains a visual
// reference, so instead of throwing ("supabaseUrl is required") on every page,
// the client helpers return this inert client when the variables are absent.
export const isSupabaseConfigured = () =>
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY);

const DISCONNECTED = { message: "This prototype is disconnected from Supabase; sign-in is unavailable." };

// Any query chain (`from().select().eq().order()`, `rpc()`, `storage…`) returns
// itself, and awaiting it resolves to an empty result.
const emptyQuery: unknown = new Proxy(function () {}, {
    get(_target, prop) {
        if (typeof prop === "symbol") return undefined;
        if (prop === "then") {
            return (resolve: (value: unknown) => void) => resolve({ data: [], error: null, count: 0 });
        }
        return emptyQuery;
    },
    apply() {
        return emptyQuery;
    },
});

const auth = new Proxy(
    {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
        signOut: async () => ({ error: null }),
    },
    {
        // Sign-in, sign-up, password updates and the like fail clearly rather
        // than appearing to succeed.
        get(target, prop) {
            if (typeof prop === "symbol" || prop === "then") return undefined;
            if (prop in target) return target[prop as keyof typeof target];
            return async () => ({ data: { user: null, session: null }, error: DISCONNECTED });
        },
    },
);

export const createOfflineClient = () =>
    new Proxy(
        { auth },
        {
            get(target, prop) {
                // Not awaitable itself: an async createClient() resolving to an
                // object with a `then` would treat the client as a promise and hang.
                if (typeof prop === "symbol" || prop === "then") return undefined;
                if (prop === "auth") return target.auth;
                return emptyQuery;
            },
        },
    ) as unknown as SupabaseClient;

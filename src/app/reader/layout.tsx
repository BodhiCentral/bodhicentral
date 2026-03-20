import { Header } from "@/components/marketing/header-navigation/header";
import { createClient } from "@/utils/supabase/server";

export default async function ReaderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <>
            <div className="reader-root h-screen overflow-y-auto bg-olive-200 dark:bg-olive-800">
                <Header user={user} />
                {children}
            </div>
        </>
    );
}

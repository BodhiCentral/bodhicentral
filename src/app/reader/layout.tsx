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
            <div className="reader-root  bg-olive-200 dark:bg-gray-800 pb-2">
                <Header user={user} />
                {children}
            </div>
        </>
    );
}

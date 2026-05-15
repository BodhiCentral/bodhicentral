
import { SidebarReaderWrapper } from "@/components-custom/sidebars/sidebar-reader-wrapper";
import "@/styles/typography-reader.css";

export default async function ReaderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="relative -mt-3">
                <SidebarReaderWrapper />
                {/* Main Content */}
                {children}
            </div>
        </>
    );
}

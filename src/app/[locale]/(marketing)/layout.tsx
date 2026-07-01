import { FooterLarge10 } from "@/components/marketing/footers/footer-large-10";

export default async function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>

            {children}
            <FooterLarge10 />
        </>
    );
}

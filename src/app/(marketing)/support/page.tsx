import { ContactFormAndImage01 } from "@/components/marketing/contact/contact-form-and-image-01";
import { FAQAccordion01 } from "@/components/marketing/faq/faq-accordion-01";
import Image from "next/image";

export default function SupportPage() {
    return (
        <div className="relative bg-primary">
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Plans background" className="hidden lg:block absolute top-4 right-4 opacity-16 dark:opacity-25" />
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Plans background" className="hidden lg:block absolute top-4 left-4 scale-x-[-1] opacity-16 dark:opacity-25" />
            <FAQAccordion01 />
            <ContactFormAndImage01 />
        </div>
    );
}

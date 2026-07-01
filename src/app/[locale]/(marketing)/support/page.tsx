import { ContactFormAndImage01 } from "@/components/marketing/contact/contact-form-and-image-01";
import { FAQAccordionSimple } from "@/components/marketing/faq/faq-accordion-simple";
import Image from "next/image";

export default function SupportPage() {
    return (
        <div className="relative bg-warm-off-300 dark:bg-warm-off-950 overflow-clip pt-16">
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Plans background" className="hidden lg:block absolute top-20 right-4 opacity-16 dark:opacity-25" />
            <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={264.3} alt="Plans background" className="hidden lg:block absolute top-20 left-4 scale-x-[-1] opacity-16 dark:opacity-25" />
            <FAQAccordionSimple />
            <section id="contact-us" className="relative">
                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="/patterns/light-accent.webp"
                    className="absolute z-0 left-40 -top-30 max-w-160 opacity-80 mix-blend-multiple md:left-100 md:-top-100 md:max-w-7xl mask-b-from-90% mask-b-to-100% mask-t-from-10% mask-t-to-100% scale-x-[-1.8]"
                />
                <ContactFormAndImage01 />
            </section>

        </div>
    );
}

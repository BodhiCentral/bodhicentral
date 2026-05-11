import { ContactFormAndImage01 } from "@/components/marketing/contact/contact-form-and-image-01";
import { CreditCardRefresh, File05, Heart, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const faqs = [
    {
        question: "What is included in the Standard plan?",
        answer: "The Standard plan gives you access to all features we offer, including the advanced tools in our state-of-the-art readers and learning experiences, the ability to save your work, build your library of sūtras and commentaries, and create your personalized workspaces.",
        icon: Heart,
    },
    {
        question: "Why you offer a paid subscription?",
        answer: "In consonance with the Dana tradition, we believe that Buddhist texts and teachings should always be freely accessible to everyone. That is our unconditional commitment. The affordable Standard subscription helps us to continue our work building great tools for students and practitioners. It also allows us to financially maintain the platform and provide free access to teachings and resources for those who cannot afford expensive programs or lack access to the Dhamma.",
        icon: SlashCircle01,
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course! Our affordable Standard and Patron plans scale with your financial needs. You can cancel your plan at any time from your account settings. You can also upgrade or downgrade to a different tier at the Settings Plans in your dashboard.",
        icon: SwitchHorizontal01,
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "At the moment, the only way to add additional information to invoices is to add the information to the payment method in the Account Settings, under the 'Billing' setion .",
        icon: File05,
    },
    {
        question: "How does billing work?",
        answer: "You can manage the monthly and annual billing options of the Standard and Patron subscription at your account settings, under the 'Billing' section.",
        icon: CreditCardRefresh,
    },
    {
        question: "Can I chang my email address?",
        answer: "You can change the email address associated with your account by going to your account settings, under the 'Email' section.",
        icon: Mail01,
    },
];

export default function SupportPage() {
    return (
        <div>
            <section id="faq" className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h1 className="text-display-md font-light text-brand-800 dark:text-brand-500 md:text-display-lg">Frequently asked questions</h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about Bodhi Central plans and services. </p>
                    </div>

                    <div className="mt-12 md:mt-16">
                        <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                            {faqs.map((item) => (
                                <div key={item.question}>
                                    <div className="flex max-w-sm flex-col items-center text-center">
                                        <FeaturedIcon color="brand" theme="light" className="md:hidden" size="md" icon={item.icon} />
                                        <FeaturedIcon color="brand" theme="light" className="hidden md:flex" size="xl" icon={item.icon} />

                                        <dt className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">{item.question}</dt>
                                        <dd className="mt-1 text-md text-tertiary md:mt-2">{item.answer}</dd>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-tertiary border border-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:px-8 md:py-8 md:pb-10">
                        <div className="flex items-end -space-x-4">
                            <Avatar
                                src="/placeholder-image-landscape.svg"
                                alt="placeholder"
                                size="lg"
                                className="ring-[1.5px] ring-fg-white"
                            />
                            <Avatar
                                src="/placeholder-image-landscape.svg"
                                alt="placeholder"
                                size="xl"
                                className="z-10 ring-[1.5px] ring-fg-white"
                            />
                            <Avatar
                                src="/placeholder-image-landscape.svg"
                                alt="placeholder"
                                size="lg"
                                className="ring-[1.5px] ring-fg-white"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                            <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactFormAndImage01 />
        </div>
    );
}

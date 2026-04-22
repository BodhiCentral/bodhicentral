import Image from "next/image";
import { CTACenteredPlansSignupFeaturedBgImage } from "@/components-custom/sections/cta-centered-plans-signup-featured-bg-image";

export default function AboutPage() {
    return (
        <main className="relative flex flex-col max-w-full mx-auto gap-8">
            {/* Decorative pattern at the bottom of the article */}
            <div className="absolute z-100 h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat dark:drop-shadow-black/50 opacity-30 dark:opacity-40">
            </div>
            <section className="relative mx-auto w-full bg-primary py-12 md:py-16">
                <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={260} alt="Plans background" className="hidden  lg:block absolute top-4 right-4 opacity-16 dark:opacity-25" />
                <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={260} alt="Plans background" className="hidden lg:block absolute top-4 left-4 scale-x-[-1] opacity-16 dark:opacity-25" />
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h1 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-xl text-center">About Us</h1>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Beliefs</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We believe the teachings of the Dharma are a complete and self-validating response to human suffering — not because we say so, but because sincere practitioners across 2,500 years have found them to be so.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central exists to remove the distance between a serious seeker and the most important words ever spoken about the nature of mind. Our tools don't replace practice or transmission — they clear the path toward them.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">What We Are Building</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        A unified reading and study environment spanning the Pali Canon, the Tibetan Buddhist canon, and the Chinese Buddhist canon — in both original languages and modern translations. Our tools are built for everyone: from first encounters with the Dhammapada to deep study of the Tibetan commentarial tradition.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central is non-denominational by design. We don't privilege one tradition over another. We trust the seeker to find their own resonance — and we build the infrastructure to make that possible.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Mission</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The suttas speak for themselves — when a reader can see how they connect to each other, where they sit in the tradition, and how they are lived today. That connective tissue is what we build.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Our mission is to offer free access to this world of wisdom in multiple languages — in the spirit of the dana tradition and the Bodhisattva ideal of benefit for all beings.
                    </p>
                </div>

            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Business Model — Leading with the Right Foot</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Access to the Buddhist texts will always be free on Bodhi Central. So will core study features like side-by-side version comparison and interactive timelines. That commitment is unconditional.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        For practitioners who want to go deeper, a low-cost subscription unlocks note-taking, personalised workspaces, and advanced tools built to support long-term study. Your subscription is what allows us to keep building — and to keep the platform free for everyone else.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We are a for-profit company, run by people who believe that financial sustainability and genuine service to the Dharma are not in conflict.
                    </p>
                </div>

            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Legal Compliance</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Our current library includes a broad selection of significant Buddhist texts that are in the public domain or made available under open licensing. As we expand, copyrighted works will only be featured with express permission and full attribution.
                    </p>
                </div>

            </section>
            <section className="mx-auto w-3xl px-4 md:px-8 pb-20">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Data Privacy</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        As part of our commitment to users, we actively uphold strict standards and protocols to protect our data and infrastructure. For more details about the measures we take to protect your privacy, your data, your rights and the intellectual property we feature on our website, please see our <a href="/terms-of-use" className="text-brand-tertiary hover:text-brand-tertiary-hover">Terms of Use</a> & <a href="/privacy-policy" className="text-brand-tertiary hover:text-brand-tertiary-hover">Privacy Policy</a>.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Thank you for your interest in Bodhi Central. We look forward to providing you with groundbreaking features to enrich your Buddhist study and help you through a lifelong journey of learning and discovery. Please subscribe to our YouTube channel and sign up for a free account on our site to get early access to new features. If you have any questions or feedback, feel free to <a href="/contact" className="text-brand-tertiary hover:text-brand-tertiary-hover">contact us</a>.
                    </p>
                </div>

            </section>
            <section>
                <CTACenteredPlansSignupFeaturedBgImage />
            </section>
        </main>
    );
}

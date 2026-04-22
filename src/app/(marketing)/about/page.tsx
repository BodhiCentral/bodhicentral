import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="relative flex flex-col max-w-full mx-auto gap-8 pb-32">
            {/* Decorative pattern at the bottom of the article */}
            <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat dark:drop-shadow-black/50 opacity-30 dark:opacity-40">
            </div>
            <section className="relative mx-auto w-full bg-primary py-12 md:py-16">
                <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={260} alt="Plans background" className="hidden  lg:block absolute top-4 right-4 opacity-16 dark:opacity-25" />
                <Image src="/ornaments/endless-knot-corner-gold.png" width={260} height={260} alt="Plans background" className="hidden lg:block absolute top-4 left-4 scale-x-[-1] opacity-16 dark:opacity-25" />
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h1 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-xl text-center">About Us</h1>
                </div>
            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Beliefs</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central's mission is to foster a deeper connection with the authentic Buddhist teachings by providing interactive, web-based Buddhist software that offers user-friendly experiences for beginners and advanced students. We believe the teachings of the Dharma (dhamma in Pali) are a genuine remedy to human suffering, standing on their own authority and self-validating. Our software serves as a supplement to the study and practice of these teachings, and it is designed to enhance direct engagement with the words of the Buddha across the world, supporting the living transmissions of Buddhism today.
                    </p>
                </div>
            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Offering</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central is developing a variety of custom study tools in a format that is intuitive and accessible for users at all skill levels. Our reading and learning tools are designed to break down language barriers, unlocking deeper meaning in the Dharma through the study of modern translations and educational materials that are relevant and authoritative. We are building tools to empower users to explore the rich and beneficial heritage of the Dharma and its teachings with a practical approach, including clear expositions of the profound Pali Canon and the elaborated Tibetan commentarial tradition.
                    </p>
                </div>
            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Buddhist Canon Versions</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        In addition to Buddhist texts in multiple international translations, Bodhi Central will provide scholarly editions of the Buddhist texts in its original languages: the Pali Canon, the Tibetan Buddhist canon, and the Chinese Buddhist canon. Our historically significant Buddhist texts offer deep insights into the textual tradition of early Buddhism and its evolution through the centuries. As a non-denominational platform, Bodhi Central will allow users to customize their Buddhist study experience in accordance with their own beliefs and traditions, favoring their preferred Buddhist texts. Our platform does not favor or prioritize any particular Buddhist texts by default.
                    </p>
                </div>

            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Mission</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We believe that the teachings of the Buddha speak for themselves when users are able to connect the dots between the intent of the suttas, how they relate to each other, and the context in which they are transmitted. This is a key design principle behind our software. We believe that when the modern Buddhist offerings are viewed through the lens of the original intent of the words of the Buddha, the natural, beneficial results are revealed. Our mission is to offer free access to this world of wisdom in multiple languages, in accordance with the Dana (generosity) tradition and the Bodhisattva ideal.
                    </p>
                </div>

            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Our Business Model</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Unlike many other Buddhist platforms, Bodhi Central is a for-profit business supported by users who find value in our tools. Access to the Buddhist texts will always remain free on our platform—and so will several of our core study features, like side-by-side version comparison and our interactive timelines.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        For users who want to take their study further, we offer additional premium tools through a low-cost subscription. Features like note taking and personalized workspaces are designed to enrich the Buddhist study experience.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Your subscription not only unlocks these advanced tools—it helps us continue building a platform that empowers people around the world to study genuine Buddhist teachings with clarity and confidence.
                    </p>
                </div>

            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-400 md:text-display-lg">Legal Compliance</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Our current library includes a broad selection of [0000]+ significant Buddhist texts that are not subject to copyright restrictions. As we continue to expand our library, we will only feature copyrighted works with express permission, ensuring full compliance with licensing and attribution requirements. We are committed to upholding the intellectual property rights of publishers.
                    </p>
                </div>

            </section>
            <section className="mx-auto max-w-container px-4 md:px-8">
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
        </main>
    );
}

"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { Check, Copy01, Link01, Dataflow01, Film02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { KangyurDivisionsSection } from '@/components/marketing/collection-sections/kangyur-divisions-section';
import Image from 'next/image';
import { ArticleHeaderSection } from "@/components-custom/blog/article-header-section"
import { TimelineKangyurEditions } from '@/content/timelines/timeline-kangyur-editions';
import { openKangyurNavigator } from "@/components-custom/navigation/canon-navigation/kangyur-navigation-modal-wrapper";

const ArticleOverview = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="relative bg-primary">
            {/* Decorative pattern at the bottom of the article */}
            <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat dark:drop-shadow-black/50 opacity-30 dark:opacity-40">
            </div>
            {/* Article Header */}
            <ArticleHeaderSection
                badge_addon_text="Tibetan Kangyur"
                badge_text="15 min read"
                article_headline="Understanding the Kangyur:"
                article_headline_span="The Canonical Heart of the Tibetan Tradition"
                article_subheadline="The Kangyur is the principal collection of the Buddhist scriptures in Tibetan. It contains some 900 works in over 100 volumes, all translations into Tibetan of the Indian texts considered to record the words of the Buddha."
                author_name="Bodhi Central Team"
                author_caption="List of sources below"
                author_image="/placeholder-image-landscape.svg"
                author_image_alt="Bodhi Central image"
                article_image="/tibetan-buddhist-library-01.jpg"
                article_image_alt="Golden Buddha faces"
                article_ornament_image="/ornaments/golden-wheel.png"
                article_ornament_image_alt="Article Ornament"
            />

            {/* Article Main Content */}
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    {/* Table of contents */}
                    <div className="sticky top-30 hidden h-fit w-80 self-start flex-col gap-8 md:flex">
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold text-brand-secondary">Table of contents</p>
                            <ul className="flex flex-col gap-3.5">
                                {[
                                    { title: "Defining the Word of the Buddha", href: "#defining-the-word-of-the-buddha", indent: "ml-0" },
                                    { title: "The Origins and Translation Process", href: "#origins", indent: "ml-0" },
                                    { title: "Scope and Structural Classification", href: "#scope-and-structural-classification", indent: "ml-0" },
                                    { title: "The Evolution of the Canon: Lineages and Traditions", href: "#evolution-of-the-canon", indent: "ml-0" },
                                    { title: "Major Editions and Recensions", href: "#major-editions-and-recensions", indent: "ml-0" },
                                    { title: "The Living Tradition: Usage and Significance", href: "#living-traditions", indent: "ml-0" },
                                    { title: "Sources, References and Further Reading", href: "#sources-references-and-further-reading", indent: "ml-0" },
                                    { title: "Navigate the Kangyur Divisions", href: "#kangyur-divisions", indent: "ml-0" },
                                    { title: "An Interactive Kangyur Timeline", href: "#kangyur-timeline", indent: "ml-0" },
                                ].map((item) => (
                                    <li key={item.title} className={item.indent}>
                                        <a href={item.href} >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-t border-secondary" />
                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Link01} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                    {/* Article content */}
                    <div className="max-w-prose md:max-w-full">
                        <div className="mx-auto prose md:prose-lg">
                            <p className="lead first-letter:float-left first-letter:text-7xl first-letter:leading-12 first-letter:mr-2 first-letter:font-serif first-letter:font-extralight first-letter:text-brand-800 dark:first-letter:text-brand-200">
                                The Kangyur and Tengyur constitute the fundamental scriptural and philosophical canon of the Tibetan Buddhist tradition. Translated primarily from ancient Indic languages into Classical Tibetan between the eighth and thirteenth centuries, these collections serve as the authoritative root for all Tibetan Buddhist lineages.
                            </p>
                            <hr />
                            <h2 id="defining-the-word-of-the-buddha">1. Defining the Word of the Buddha</h2>
                            <p>
                                The Kangyur (bka' 'gyur) stands as the primary scriptural authority within the Tibetan Buddhist tradition, serving as the foundational repository of the "Word of the Buddha." Etymologically, the term derives from the Classical Tibetan roots bka' (the Word or edict) and 'gyur (translated). This collection comprises the Tibetan translations of Indian texts that record the teachings of the historical Buddha and other enlightened beings, originally transmitted in various ancient Indic languages.
                            </p>
                            <p>
                                The Kangyur exists in a profoundly interwoven and intertextual relationship with its sister collection, the Tengyur (bstan 'gyur), or "Translated Treatises." While the Kangyur contains the seminal scriptural source material, the Tengyur provides a systematic framework of commentaries, manuals, and doctrinal expositions composed by Indian masters to elucidate those primary words. Together, these two corpora form the indispensable root of all Tibetan Buddhist lineages, providing the definitive basis for spiritual training and philosophical inquiry.
                            </p>
                            <h2 id="origins">2. The Origins and Translation Process</h2>
                            <p>
                                The formation of the Tibetan canon was a rigorous, state-sponsored philological program that unfolded across centuries. During the "Early Propagation" (snga dar) of the 8th and 9th centuries, the Tibetan kings, Trisong Detsen, Senalek, and Ralpachen provided the patronage for an unprecedented translation effort. This era was defined by a highly standardized methodology characterized by a collaborative lexicographical program involving:

                            </p>
                            <ul>
                                <li><strong>Paṇḍitas</strong>: Learned Indian masters who provided the Indic source texts and linguistic expertise.</li>
                                <li><strong>Lotsāwas</strong>: Professionally trained Tibetan translators who rendered complex Sanskrit and other Indic idioms into the developing Tibetan literary language.</li>
                                <li><strong>Zhu chen</strong>: Chief editors who performed a final redaction to ensure technical accuracy and consistency with imperial translation norms.</li>
                            </ul>
                            <p>
                                Crucial to this systematization were early descriptive inventories such as the 9th-century Denkarma (ldan kar ma) and the slightly later Pangthangma ('phang thang ma). These catalogs recorded titles and categorized translated works, bridging the gap between the initial translations and the later formalization of the canon.
                            </p>
                            <p>
                                Following a brief hiatus after the collapse of the Tibetan Empire, the "Later Propagation" (phyi dar) began in the 10th century. This second wave saw the arrival of new tantric materials from India. Notably, while the Kangyur contains many of these "New" translations, many tantras from the early period were eventually preserved in a separate collection known as the Nyingma Gyubum (rnying ma'i rgyud 'bum), influencing the eventual taxonomy of the Kangyur's Tantra section.
                            </p>


                            <h2 id="scope-and-structural-classification">3. Scope and Structural Classification</h2>
                            <p>
                                The Kangyur is a vast repository encompassing approximately 900 individual works, typically spanning over 100 volumes. While the internal arrangement can vary between different versions, the Degè Kangyur is traditionally organized into four primary divisions, and a concluding catalog:
                            </p>
                            <ul>
                                <li><strong>Vinaya (Discipline)</strong>: Canonical texts concerning monastic ethics and the regulation of the sangha.</li>
                                <li><strong>Sūtra (Discourses)</strong>: The public sermons and teachings attributed to the Buddha. This section is often further organized into several sub-divisions that are grouped together for modern cataloging clarity.</li>
                                <li><strong>Tantra</strong>: Specialized esoteric teachings and ritual methodologies. In the Degè Kangyur, the Tantra section is also organized into several subdivisions. See below for a detailed outline.</li>
                                <li><strong>Dhāraṇī</strong>: A specific collection of incantations and ritualistic protective texts.</li>
                            </ul>
                            {/* Kangyur Divisions */}
                            <figure>
                                <div className="flex flex-col bg-secondary p-6 gap-4 rounded-3xl drop-shadow-sm">
                                    <div className="flex flex-row items-center justify-between gap-4">
                                        <h4 className="not-prose text-display-xs text-brand-700 dark:text-brand-700/80">Degé Kangyur Divisions</h4>
                                        <div className="flex flex-col gap-3 md:justify-center pb-1">
                                            <Button color="secondary" size="sm" iconTrailing={Dataflow01} onClick={() => openKangyurNavigator()}>
                                                Outline
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-start justify-center gap-2">
                                        <div className="mx-auto grow-4 h-full flex  flex-col items-center justify-center gap-0 bg-emerald-100/60 dark:bg-emerald-950/80 px-2 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">འདུལ་བ།</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Vinaya</p>
                                        </div>
                                        <div className="mx-auto grow-4 h-full flex  flex-col items-center justify-center gap-0 bg-cyan-100/60 dark:bg-cyan-950/80 px-2 py-4 rounded-2xl border border-cyan-200 dark:border-cyan-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">མདོ།</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Sūtra</p>
                                        </div>
                                        <div className="mx-auto grow-4 h-full flex  flex-col items-center justify-center gap-0 bg-blue-100/60 dark:bg-blue-950/80 px-2 py-4 rounded-2xl border border-blue-200 dark:border-blue-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">རྒྱུད།</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Tantra</p>
                                        </div>
                                        <div className="mx-auto grow-4 h-full flex flex-col items-center justify-center gap-0 bg-violet-100/60 dark:bg-violet-950/80 px-2 py-4 rounded-2xl border border-violet-200 dark:border-violet-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">གཟུངས་འབུམ།</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Dhāraṇī</p>
                                        </div>
                                        <div className="mx-auto grow-6  h-auto flex flex-col items-center justify-center gap-0 bg-fuchsia-100/60 dark:bg-fuchsia-950/80 px-2 py-4 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">བཀའ་འགྱུར་དཀར་ཆག

                                            </p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Kangyur Catalog</p>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <h2 id="evolution-of-the-canon">4. The Evolution of the Canon: Lineages and Traditions</h2>
                            <p>
                                The Kangyur was never a single, immutable volume but rather an evolving collection of recensions. In the 14th century, scholars such as Chomden Rigpai Raltri at Narthang and Butön Rinchen Drup at Zhalu performed critical work in collecting, inventorying, and editing these materials. This scholarship birthed two primary lineages of transmission:
                            </p>
                            <ul>
                                <li><strong>The Tshalpa Tradition</strong>: Originating from the Tshal Gungthang version (1347–1351), this lineage is largely preserved through xylograph (woodblock) editions.</li>
                                <li><strong>The Thempangma Tradition</strong>: Originating from the 1431 Gyantsé manuscript, this tradition likely possesses roots in the earlier taxonomies and rearranged versions developed by Butön Rinchen Drup at Zhalu. It is primarily characterized by its manuscript-based transmission.</li>
                            </ul>
                            <p>
                                Most versions of the canon utilized today are "conflations"—complex hybrids that integrate the text-critical variants and structural classifications of both traditions. The most prominent examples of these conflated recensions are the Narthang (1730) and Degé (1733) editions.
                            </p>
                            <figure>
                                <Image className="h-76 md:h-100 bg-cover" src="/content/kangyur-timeline-evolution-1280px.webp" alt="Timeline showing the evolution of the Kangyur canon." width={400} height={400} />
                                <figcaption>
                                    Infographic by Bodhi Central Content team. Report mistakes at <a
                                        href="/support#contact-us"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >Contact Us.</a>
                                </figcaption>
                            </figure>

                            <h2 id="major-editions-and-recensions">5. Major Editions and Recensions</h2>
                            <p>
                                The production of new Kangyur editions was historically regarded as an act of immense spiritual merit. These versions are classified by their physical medium:
                            </p>
                            <ul>
                                <li><strong>Xylographs (Blockprints)</strong>: Includes the Yongle (the first printed edition, Beijing, 1410), the Lithang (1609–1614), the Narthang (1730), the Degé (1733), and the Lhasa (or Zhol, 1934)..</li>
                                <li><strong>Manuscripts</strong>: Notable examples include the Ulaanbaatar (1671), the London (Shelkar, c. 1712), and the Stok Palace (1729). A notable anomaly is the Berlin manuscript (1680); although a manuscript, it is philologically aligned with the Tshalpa (woodblock) tradition.</li>
                            </ul>
                            <p>
                                The Degé Kangyur remains the paramount reference point for modern scholars and serves as the basis for the Tōhoku catalog, the standard numbering system for the identification of canonical texts.
                            </p>
                            <h2 id="living-traditions">6. The Living Tradition: Usage and Significance</h2>
                            <p>
                                In the context of Tibetan intellectual life, the Kangyur is far more than a historical artifact; it is a living body of wisdom that remains the ultimate point of reference. To refer to and cite its statements is the indispensable basis for any newly composed text or teaching within the tradition.
                            </p>
                            <p>
                                Each of these schools would have preserved a scriptural collection. Today we have only a small selection of these. Nevertheless, though much is lost, we do have enough to get a reasonable idea of the similarities and differences. Note that, unlike the Vinaya texts, it is sometimes difficult to determine the school affiliation of a sutta collection.
                            </p>
                            <p>
                                Monks, scholars, and lay practitioners engage with these scriptures through rigorous study, memorization, and ritual recitation. The collection serves as the exhaustive guide for the path to awakening, offering the essential frameworks for ethics, philosophy, and meditation. Ultimately, the Kangyur provides the transformative means through which followers achieve insight, understanding, and liberation from suffering.
                            </p>
                            <figure>
                                <blockquote>
                                    <p>
                                        The Kangyur and Tengyur are not merely historical archives; they are active components of a living spiritual tradition. The intertextual relationship between the scriptures (Kangyur) and the commentaries (Tengyur) allows practitioners to engage with the philosophy and practice side-by-side. Both corpora combined are the basis of our educational foundation, transformative practice, and the luminous path to awakening.
                                    </p>
                                </blockquote>
                                <figcaption className="not-prose mt-6 flex gap-3 text-md md:mt-8">
                                    <Image
                                        src="/placeholder-image-landscape.svg"
                                        className="size-12 rounded-full object-cover"
                                        alt="Bodhi Central Team image"
                                        width={800} height={800} />
                                    <div>
                                        <p className="text-md font-semibold text-primary">Bhodi Central</p>
                                        <cite className="text-md text-tertiary not-italic">Editorial Team</cite>
                                    </div>
                                </figcaption>
                            </figure>
                            <div className="my-12 rounded-3xl bg-tertiary px-5 py-2 text-lg text-tertiary md:pt-1 md:pb-4 md:px-8 [&>p+p]:mt-4.5">
                                <h2 id="sources-references-and-further-reading">Sources, References, and Further Reading</h2>
                                <ul>
                                    <li>Canti, John; <i>The Kangyur: An introduction to the Kangyur</i>, 84000 project. Canti's work is available in the 84000 Reading Room, and can be found <a href="https://brand.84000.co/post/an-overview-of-the-kangyur">here</a></li>
                                    <li><i>A Complete Catalogue of the Tibetan Buddhist Canons</i>. 1934: Sendai, Japan. Tōhoku Imperial University.</li>

                                </ul>
                            </div>

                        </div>

                        <div className="mt-6 flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:hidden">

                            <div className="flex gap-3 md:hidden">
                                <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

interface RoundButtonProps extends ComponentPropsWithRef<"button"> {
    icon?: FC<{ className?: string }>;
}

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const BlogPost05 = () => {
    return (
        <div className="bg-primary pt-16">

            <ArticleOverview />

            <KangyurDivisionsSection />

            <div className="mx-auto w-full flex flex-col gap-8 px-8 pt-8 pb-20 md:py-12 bg-linear-to-b from-brand-50 from-0% via-brand-100 via-30% to-brand-200 to-100% dark:bg-linear-to-b dark:from-brand-800/50 dark:from-0% dark:via-brand-800/30 dark:via-30% dark:to-brand-900/90">
                {/* <!-- Kangyur Timeline Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg">Kangyur Timeline</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-balance">
                            Explore the historical development of the scriptural collections that form the Kangyur across different periods and the people who preserved, transmitted, and translated them for us.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button color="secondary" size="md" iconTrailing={Film02} onClick={() => openKangyurNavigator()} >
                            Explore more timelines
                        </Button>
                    </div>
                </div>
                <TimelineKangyurEditions />
            </div>

        </div>
    );
};

export default BlogPost05;

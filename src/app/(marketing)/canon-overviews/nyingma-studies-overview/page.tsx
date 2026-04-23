"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { Check, Copy01, Link01, Dataflow01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { GalleryNyingmaStudies } from "@/components-custom/galleries/gallery-nyingma-studies";
import { ArticleHeaderSection } from "@/components-custom/blog/article-header-section"
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";




const ArticleOverview = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="relative bg-primary">
            {/* Decorative pattern at the bottom of the article */}
            <div className="absolute h-6 bottom-0 left-0 right-0 mx-auto bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat dark:drop-shadow-black/50 opacity-30 dark:opacity-40">
            </div>
            {/* Article Header */}
            <ArticleHeaderSection
                badge_addon_text="Nyingma Studies"
                badge_text="18 min read"
                article_headline="The Thirteen Great Texts:"
                article_headline_span="A Gateway to the Nyingma Studies"
                article_subheadline="The Thirteen Great Texts are a collection of thirteen Buddhist texts that are studied in the Nyingma tradition of Tibetan Buddhism. They are considered to be the most influential texts in the commentarial schools of this tradition."
                author_name="Adam Pearcy"
                author_caption="Article courtesy of Lotsawa House"
                author_image="/collections-nyingma-circle-510px.jpg"
                author_image_alt="Adam Pearcey"
                article_image="/collections-nyingma-circle-510px.jpg"
                article_image_alt="Nyingma Studies"
                article_ornament_image="/ornaments/golden-wheel.png"
                article_ornament_image_alt="Article Ornament"
            />

            {/* Main content */}
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    {/* Table of contents */}
                    <div className="sticky top-[120px] hidden h-fit w-80 self-start flex-col gap-8 md:flex">
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold text-brand-secondary">Table of contents</p>
                            <ul className="flex flex-col gap-3.5">
                                {[
                                    { title: "Title", href: "#overview-title", indent: "ml-0" },
                                    { title: "Introduction", href: "#introduction", indent: "ml-0" },
                                    { title: "Commentaries", href: "#commentaries", indent: "ml-0" },
                                    { title: "Arrangement", href: "#arrangement", indent: "ml-0" },
                                    { title: "Omissions and Alternative Systems", href: "#omissions-and-alternative-systems", indent: "ml-0" },
                                    { title: "Further Reading", href: "#further-reading", indent: "ml-0" },
                                ].map((item) => (
                                    <li key={item.title} className={item.indent}>
                                        <a href={item.href}>
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
                                The Thirteen Major Treatises (<em>gzhung chen po bcu gsum</em>) formed the core of the curriculum in many scriptural colleges or commentarial schools (<em>bshad grwa</em>) of eastern Tibet, especially Śrī Siṃha college at Dzogchen Monastery.
                            </p>
                            <hr />
                            <h2 id="introduction">Introduction</h2>
                            <p>
                                [TODO: Extend this introduction to generate a good engagement starting point to the article. ]]
                            </p>
                            <p>
                                The thirteen major texts (<em>gzhung chen po bcu gsum</em>) formed the core of the curriculum in many scriptural colleges or commentarial schools (<em>bshad grwa</em>) of eastern Tibet, especially Śrī Siṃha college at Dzogchen Monastery. They are:
                            </p>

                            <p>
                                [TODO: Insert an interacitve table of the thirteen treatises of the Nyingma studies. Include the Tibetan title, the Sanskrit title, the author, and a brief description of the text. Also include a link to the text in the Reader, if available. The table should be sortable by title and author.]
                            </p>
                            <h2 id="commentaries">Commentaries</h2>
                            <p>
                                Khenpo Shenpen Nangwa, also known as Shenga (1871–1927), wrote famous annotational, interlinear or 'gloss' commentaries (<em>mchan 'grel</em>) on these texts in the early twentieth century. These were not original compositions, but rather extracts from Indian commentaries, selected by Shenga and inserted into the root texts.
                            </p>
                            <p>
                                Khenpo Shenga composed many of his commentaries for the thirteen texts at the behest of Situ Pema Wangchok Gyalpo (<em>si tu padma dbang mchog rgyal po</em>, 1886–1952) during his time at Palpung (dpal spungs) Monastery between 1910 and 1918. Nevertheless, it is likely that he based these commentaries on explanations he had given earlier in his teaching career, during his tenure at Dzogchen Śrī Siṃha. And these, in turn, were likely based on the explanations of his own teacher, Orgyen Tenzin Norbu (<em>o rgyan bstan ’dzin nor bu</em>, 1841–1900), and may represent a tradition going back to Gyalsé Shenpen Thayé (1800–1855) or even earlier. The fact that Orgyen Tenzin Norbu's writings are unavailable makes a proper assessment difficult.
                            </p>
                            <p>
                                The texts would have originally been in a Prākrit, that is, a dialect of Middle Indo-Aryan closely related to Sanskrit. The exact form of Prākrit is unknown, and indeed it may not have been entirely standardized, since monastics from the earliest times were using different dialects. Indications in the Pali texts suggest that they were derived from an earlier version in Māgadhī, that is, the language of the kingdom of Magadha. It appears that they were standardized in later centuries to a dialect similar to that used widely across central India for inscriptions, with a partial Sanskritization. Nevertheless, these languages differ mostly in phonology, and apart from a few edge cases, changes from one form to another do not affect the meaning.
                            </p>
                            <p>
                                The annotational commentaries were later adopted as the core of the curriculum at Kham-jé (<em>khams bye</em>) shedra at Dzongsar (<em>rdzong gsar</em>), which Shenga founded in 1918. This institution produced a number of celebrated scholars, several of whom founded shedras of their own, contributing to a revival of scholarship within the Sakya school, and further promoting the centrality of the thirteen texts.
                            </p>
                            <p>
                                Meanwhile, Jamgön Mipham Rinpoche (1846–1912) and other leading scholars of the Nyingma school produced commentaries on many of the thirteen treatises as part of a revival of Nyingma scholasticism. Mipham's goal was not to present summaries of Indian interpretations but to clarify what he saw as the distinctive Nyingma approach to philosophy. This role is evident in his commentary on the ninth chapter of the <em>Bodhicaryāvatāra</em> and other works, including some compiled posthumously from lecture notes taken by his disciples.
                            </p>

                            <h2 id="arrangement">Arrangement</h2>
                            <p>
                                Editions of Khenpo Shenga's commentaries present the texts in a sequence based on the traditional division into Vinaya, Sūtra and Abhidharma. Here, the Sūtra category is further divided into the two traditions of Profound View (<em>lta ba zab mo</em>) and Vast Conduct (<em>rgya chen spyod pa</em>) and positioned after the Abhidharma. This sequence reflects another traditional division, the progression through the Three Turnings of the Wheel of Dharma, in which the Vinaya and Abhidharma represent the first turning, the four treatises of the Profound View belong to the intermediate turning, and the Five Treatises of Maitreya (<em>byams chos sde lnga</em>) correspond to both the intermediate and final turnings.
                            </p>

                            {/* Nyingma Studies Diagram */}
                            <figure>
                                <div className="flex flex-col bg-secondary px-6 py-4 gap-3 rounded-2xl drop-shadow-sm">
                                    <div className="flex flex-row items-center justify-between gap-4">
                                        <h4 className="not-prose text-display-xs text-brand-700 dark:text-brand-700/80">Nyingma Treatises Arrangement </h4>
                                        <div className="flex flex-col gap-3 md:justify-center pb-1">
                                            <Button color="secondary" size="sm" iconTrailing={Dataflow01} onClick={() => openCanonNavigator()}>
                                                Outline
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-start justify-start gap-2 rounded-2xl">
                                        <div className="mx-auto w-full h-full flex flex-col-reverse items-center justify-start gap-0 bg-emerald-100/60 dark:bg-emerald-950/80 px-2 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Prātimokṣa Sūtra, Vinayasūtra</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Vinaya</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col-reverse items-center justify-start gap-0 bg-cyan-100/60 dark:bg-cyan-950/80 px-2 py-4 rounded-2xl border border-cyan-200 dark:border-cyan-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Abhidharmakośa, Abhidharma-samuccaya</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Abhidharma</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col-reverse items-center justify-start gap-0 bg-blue-100/60 dark:bg-blue-950/80 px-2 py-4 rounded-2xl border border-blue-200 dark:border-blue-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Mūlamadhyamaka-kārikā, Madhyamakāvatāra, Catuḥśataka, Bodhicaryāvatāra</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary"><span className="block">Sūtra</span><span className="block">Profound View</span></p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col-reverse items-center justify-start gap-0 bg-violet-100/60 dark:bg-violet-950/80 px-2 py-4 rounded-2xl border border-violet-200 dark:border-violet-800">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Abhisamayālaṃkāra, Mahāyānasūtrālaṅkāra, Madhyāntavibhāga, Dharmadharmatāvibhāga, Uttaratantra</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary"><span className="block">Sūtra</span><span className="block">Vast Conduct </span></p>
                                        </div>
                                    </div>
                                </div>
                            </figure>


                            <h2 id="omissions-and-alternative-systems">Omissions and Alternative Systems</h2>
                            <p>
                                Georges Dreyfus misidentified the thirteen texts in his The Sound of Two Hands Clapping: The Education of a Tibetan Buddhist Monk by excluding the <em>Bodhicaryāvatāra</em> and replacing it with Dharmakīrti's <em>Pramāṇavārttika</em>. Although recent editions of the thirteen texts include no fewer than eighteen root texts, the <em>Pramāṇavārttika</em> is not among them, nor did Khenpo Shenga write a commentary on it.
                            </p>
                            <p>
                                The <em>Pramāṇavārttika</em> is included in the list of eighteen major texts which form the basis of the curriculum in the Sakya school, the so-called "eighteen texts of great renown" (<em>gzhung grags chen bco brgyad</em>), a list that includes the following in addition to the thirteen discussed above:
                            </p>
                            <ol>
                                <li><strong><em>Pramāṇa-samuccaya</em></strong> by Dignāga</li>
                                <li><strong><em>Pramāṇavārttika</em></strong> by Dharmakīrti</li>
                                <li><strong><em>Pramāṇaviniścaya</em></strong> by Dharmakīrti</li>
                                <li><strong><em>Treasury of Logic and Epistemology</em></strong> (<em>tshad ma rigs gter</em>) by Sakya Paṇḍita</li>
                                <li><strong><em>Clear Differentiation of the Three Sets of Vows</em></strong> (<em>sdom gsum rab dbye</em>) by Sakya Paṇḍita</li>
                            </ol>

                            <div className="my-12 rounded-3xl bg-white px-5 py-2 text-lg text-tertiary md:pt-1 md:pb-4 md:px-8 [&>p+p]:mt-4.5 border border-secondary">
                                <h2 id="further-reading">Further Reading</h2>
                                <ul>
                                    <li>Dreyfus, Georges. <i>The Sound of Two Hands Clapping: The Education of a Tibetan Buddhist Monk</i>. Berkeley: University of California Press, 2003.</li>
                                    <li>______. “Where Do Commentarial Schools Come From? Reflections on the History of Tibetan Scholasticism” in <em>Journal of the International Association of Buddhist Studies</em> (Vol. 28, No. 2), 2005, pp. 273–297</li>
                                    <li>Jackson, David, P. “A Reviver of Sa-skya-pa Scriptural Studies” in <em>Les Habitants du toit du monde. Études recueillies en hommage à Alexander W. Macdonald</em>. Samten Karmay and Philippe Sagant ed. Nanterre: Societé d’Ethnologie, 1997, pp. 139–153</li>
                                    <li>Pearcey, Adam S. “The Curricula of Tibetan Buddhist Commentarial Schools (<em>bshad grwa</em>): Traditional Models and Some Recent Adaptations” in <em>Contemporary Buddhism</em> Vol. 16, 2, 2015, pp. 451–461</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">

                            <div className="flex gap-3 md:hidden">
                                <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                            </div>
                        </div>
                    </div>
                </div >

            </div >

        </div >
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
        <div className="bg-primary">

            <ArticleOverview />

            <GalleryNyingmaStudies />

        </div>
    );
};

export default BlogPost05;

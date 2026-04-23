"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy01, Link01, Dataflow01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { GalleryAbhidhammaPitakaDivisions } from "@/components-custom/galleries/gallery-abhidhamma-pitaka-divisions";
import Image from 'next/image';
import { ArticleHeaderSection } from "@/components-custom/blog/article-header-section"




const ContentSplitImage01 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            {/* Article Header */}
            <ArticleHeaderSection
                badge_addon_text="Abhidhamma Piṭaka"
                badge_text="18 min read"
                article_headline="Abhidhamma:"
                article_headline_span="A Systematic Analysis of the Doctrine"
                article_subheadline="The third basket of the Pali Canon, containing the higher teachings and philosophical analysis."
                author_name="Bhikkhu Sujato"
                author_caption="Article courtesy of SuttaCentral"
                author_image="/people/bhikku-sujato-close-up.jpg"
                author_image_alt="Bhikkhu Sujato"
                article_image="/tibetan-buddhist-library-01.jpg"
                article_image_alt="Tibetan Buddhist Library"
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
                                    { title: "Introduction", href: "#introduction", indent: "ml-0" },
                                    { title: "Origins", href: "#origins", indent: "ml-0" },
                                    { title: "The Books of the Theravāda Abhidhamma", href: "#the-books-of-the-theravada-abhidhamma", indent: "ml-0" },
                                    { title: "Dhammasaṅgaṇī", href: "#dhammasangani", indent: "ml-6" },
                                    { title: "Vibhaṅga", href: "#vibhanga", indent: "ml-6" },
                                    { title: "Dhātukathā", href: "#dhatukatha", indent: "ml-6" },
                                    { title: "Puggalapaññatti", href: "#puggalapannatti", indent: "ml-6" },
                                    { title: "Kathāvatthu", href: "#kathavatthu", indent: "ml-6" },
                                    { title: "Yamaka", href: "#yamaka", indent: "ml-6" },
                                    { title: "Paṭṭhāna", href: "#patthana", indent: "ml-6" },
                                    { title: "The Books of the Sarvāstivāda Abhidhamma", href: "#the-books-of-the-sarvastivada-abhidhamma", indent: "ml-0" },
                                    { title: "The Dharmaguptaka Śāripūtrābhidharma", href: "#the-dharmaguptaka-sariputrabhidharma", indent: "ml-0" },
                                    { title: "Abhidhamma in Buddhist Traditions", href: "#abhidhamma-in-buddhist-traditions", indent: "ml-0" },
                                    { title: "Criticism", href: "#criticism", indent: "ml-0" },
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
                                The Abhidhamma Piṭaka is the last of the three piṭakas (or “baskets”) in the canons of the early Buddhist schools. It takes the terms and ideas found in the Discourses, and organizes and analyzes them systematically.
                            </p>
                            <hr />
                            <h2 id="introduction">Introduction</h2>
                            <p>
                                There is a complete set of seven canonical Abhidhamma books in Pali, belonging to the Theravāda school. In addition, there is a complete set of seven (different) canonical texts of the Sarvāstivāda school preserved in Chinese translation, a major treatise of the Dharmaguptaka school in Chinese, and some smaller Sanskrit portions. As is the case with the Discourses, the Pali texts have received the most study and attention.
                            </p>
                            <p>
                                Unlike the Suttas and Vinaya, the Abhidhamma texts of the different schools are not closely related. It seems likely, in fact, that these were some of the formative texts in establishing the different schools. Nevertheless, Erich Frauwallner in his Studies in Abhidharma Literature and the Origins of Buddhist Philosophical Systems (1996) has identified certain core features of Abhidhamma that are common between the traditions. This notably includes the Pali Vibhaṅga, the Sarvāstivāda Dharmaskandha, and the Dharmaguptaka Śāripūtrābhidharmaśastra. These texts all include a common core, which is ultimately derived from the Saṁyutta Nikāya.
                            </p>
                            <p>
                                Despite their differences, however, it would be a mistake to see the canonical Abhidhamma texts as presenting strongly sectarian positions. Apart from the polemical works such as the Kathāvatthu, for the most part, they focus on presenting the central ideas of the Dhamma in different ways.
                            </p>
                            <h2 id="origins">Origins</h2>
                            <p>
                                The word abhidhamma is found occasionally in the early texts, usually alongside the parallel term abhivinaya. There is, of course, no body of texts called the abhivinaya, and these early uses of abhidhamma don’t refer to settled texts such as exist today. Rather, in this kind of context the prefix abhi- is comparable to the English “meta-” in the sense of “about the Dhamma, about the Vinaya”, and refers to discussions and conversations about the teachings. Such conversations would have, over time, been remembered and shared, and evolved gradually into the formalistic treatises of the Abhidhammapiṭaka.
                            </p>
                            <p>
                                The traditions vary in how they see the origin of the Abhidhamma. The Chinese and Tibetan traditions typically ascribe each Abhidhamma book to a disciple of the Buddha. However, certain of the Vinaya accounts of the First Council include the Abhidhamma, and thus assume that it was present at the time of the Buddha’s passing. The Theravāda tradition also holds that the texts (with the exception of the Kathāvatthu) were spoken by the Buddha. This is mentioned in the late canononical Parivāra (sabbasattuttamo sīho, piṭake tīṇi desayi, Pvr 3#5) and the paracanonical Milindapañha (tepiṭakaṁ buddhavacanaṁ, Mil 2#55), which both date from about three to four hundred years after the Buddha passed away. The Theravādin commentaries were later to claim that the Buddha taught the seven books of the Abhidhamma Piṭaka to the deities in the Tāvatiṁsa heaven, headed by his mother. Venerable Sāriputta subsequently learned them and conveyed them to his students.
                            </p>
                            <p>
                                The long-standing consensus among historical scholars is that the books of the Abhidhamma were compiled in the centuries after the Buddha. It is not possible to determine definite dates. However, it is likely that the common core of the Vibhaṅga/Dharmaskandha/Śāripūtrābhidharmaśastra predates the separation between these traditions, which happened around the time of King Ashoka in about 250 BCE, less than two centuries after the Buddha’s death. But the bulk of the content must have been developed after this time. A number of details, such as the fact that the works were accepted as canonical in the Milinda, around 100 BCE, suggests that they were completed before this time. So a range of 300 BCE–100 BCE for the composition of the canonical Abhidhamma texts seems reasonable.
                            </p>
                            <p>
                                While the belief that the books were composed by immediate students of the Buddha is untenable, it does point to something in how they might have developed. The major disciples would have established teaching lineages, or styles of learning, that reflected the specialties of the different masters. Over time, the explanations of various teachers became systematized and codified. The actual books as they exist today, however, are the products of schools, composed under the guidance of leading monks.
                            </p>
                            <figure>
                                <Image className="h-60 md:h-120" src="/jetavanaramaya-scene-01.jpg" alt="Jetavanaramaya virtual scene" width={400} height={400} />
                                <figcaption>
                                    Image courtesy of Rafael Ortet via{" "}
                                    <a
                                        href="https://artlist.io/"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        ArtList
                                    </a>
                                </figcaption>
                            </figure>

                            <h2 id="the-books-of-the-theravada-abhidhamma">The Books of the Theravāda Abhidhamma</h2>
                            <p>
                                For the most part, the long and complex texts of the Theravāda Abhidhamma are concerned with analyzing and classifying material, not with explaining it. Presumably they would have been taught by experienced teachers in monasteries, who would have drawn out, explained, and illustrated the abstruse texts. Eventually such explanations were codified and recorded in the Pali commentaries.
                            </p>
                            <p>
                                While they introduced a number of new terms and methods, the canonical Abhidhamma texts are doctrinally conservative. Many of the concepts familiar from later Abhidhamma are not found—ultimate vs. conventional truth, mind moments, kalāpas, the idea that each phenomena is defined by its sabhāva or “individual essence”. While some new terms are found, for the most part they seem to have been introduced in order to clarify and disambiguate the terminology, and weren’t intended to convey specific new concepts. That is not to say that there are no new ideas, just that they play a fairly minor role overall.
                            </p>
                            {/* Abhidhamma Piṭaka */}
                            <figure>
                                <div className="flex flex-col bg-secondary px-6 py-4 gap-2 rounded-4xl drop-shadow-sm">
                                    <div className="flex flex-row items-center justify-between gap-4">
                                        <h4 className="not-prose text-display-xs text-brand-700 dark:text-brand-700/80">The Seven Books of the Theravāda Abhidhamma</h4>
                                        <div className="flex flex-col gap-3 md:justify-center pb-1">
                                            <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                                Outline
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-2 rounded-3xl">
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Dhammasaṅgaṇi</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Compendium of Phenomena</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Vibhaṅga</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Book of Analysis</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Dhātukathā</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Discussion of Elements</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Puggalapaññatti</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Description of Personality Types</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Kathāvatthu</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Points of Controversy</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Yamaka</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">The Pairs</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Paṭṭhāna</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Conditional Relations</p>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <h3 id="dhammasangani">Dhammasaṅgaṇī</h3>
                            <p>
                                The Dhammasaṅgaṇī (Enumeration of Phenomena) is built on the idea of a mātikā, a list of contents or matrix. A mātikā acts as a simple instance of a template that is applied and transformed in ever more complex forms throughout the work. The Dhammasaṅgaṇī mātikās list sets of phenomena (dhammas). Most of these are doctrinal terms familiar from the suttas, although some are specialized Abhidhamma terms. The Dhammasaṅgaṇī starts with three mātikās. The first classifies dhammas into 22 sets of three (tika), and the next two use sets of two (duka), 100 pairs for Abhidhamma terms, and 42 for Sutta terms.
                            </p>
                            <p>
                                The first of the triple sets is the momentous group: wholesome, unwholesome, and undetermined. This serves as a framework for classifying all the various phenomena. While it seems simple enough, even this detail was controversial, as some schools rejected the existence of the undetermined, or morally neutral, category.
                            </p>
                            <h3 id="vibhanga">Vibhaṅga</h3>
                            <p>
                                The Vibhaṅga (Book of Analysis) consists of 18 chapters arranged by topic. The list of topics is closely related to the Saṁyutta Nikāya—aggregates, senses, dependent origination, etc. Most of the chapters have a threefold structure.
                            </p>
                            <ol>
                                <li>
                                    Analysis according to the suttas: this quotes a key passage from the suttas on the relevant topic and offers a modest analysis.
                                </li>
                                <li>
                                    Analysis according to the Abhidhamma: applies the sets of synonyms and terms as developed in the Dhammasaṅgaṇī.
                                </li>
                                <li>
                                    Catechism: tests the student’s knowledge with systematic questioning.
                                </li>
                            </ol>
                            <p>
                                A few sections, such as Vb 18 Dhammahadaya, do not fit this system. They may have originated as independent treatises.
                            </p>
                            <h3 id="dhatukatha">Dhātukathā</h3>
                            <p>
                                The Dhātukathā (Discussion of Elements) shows how the Dhammasaṅgaṇī mātikās relate to the 5 aggregates, 12 bases and 18 elements. It is organized according to fourteen methods.
                            </p>
                            <h3 id="puggalapannatti">Puggalapaññatti</h3>
                            <p>
                                The Puggalapaññatti (Designation of Persons) departs from the strictly phenomenological approach of most Abhidhamma texts to present a compendium of passages relating to different kinds of individual. These are set out in a mātikā that lists kinds of individuals numerically organized from one to ten. As suggested by the numerical arrangement, these terms are mostly derived from the Aṅguttara Nikāya, with modest changes in wording. The main concern is to classify personal or psychological tendencies as they relate to the development of the Buddhist path.
                            </p>
                            <h3 id="kathavatthu">Kathāvatthu</h3>
                            <p>
                                The Kathāvatthu (Points of Controversy) is a collection of over 200 discussions on points of interpretation of Buddhist doctrine. These consist of a debate between unnamed protagonists. Each relies either on logic or quotations from the suttas to support their arguments. Some of the discussions concern central problems in Buddhist philosophy, such as the nature of not-self, or the problem of continuity and impermanence. Many, however, are very minor.
                            </p>
                            <p>
                                While the text does not identify the points of view, most of them may be identified with the doctrines held by various Buddhist schools. Note that none of the controverted points deal with Brahmanical, Jaina, or other non-Buddhist views. Nor are there any significant differences in the suttas referred to; each debater assumes that they share a common sutta basis.
                            </p>
                            <p>
                                The Kathāvatthu is the only book of the Abhidhamma ascribed by the Theravāda to a specific author, Moggaliputtatissa, a senior monk at the time of King Ashoka. The core of the work probably formed then, but it grew substantially over time. One or two of the core discussions appear to share a common basis with the Vijñānakāya.
                            </p>
                            <h3 id="yamaka">Yamaka</h3>
                            <p>
                                The Yamaka (Pairs) consists of ten chapters on different topics, starting with the roots of wholesome or unwholesome conduct. It applies a series of pairs of questions, with the object of fully determining the scope of application of terms. For example, are all instances of rūpa (form, physical phenomena) included in the aggregate of form (rūpakkhandha)? No, because there are idiomatic uses of rūpa such as evarūpa (“of such a sort”). But are all instances of the aggregate of form included in rūpa? Yes.
                            </p>
                            <h3 id="patthana">Paṭṭhāna</h3>
                            <p>
                                Paṭṭhāna (Conditional Relations) sets out a simple mātikā listing 24 kinds of condition. The first is the “root condition” (hetupaccayo), dealing with how acts are caused by the unwholesome roots of greed, hate, and delusion, or their opposites. This mātikā is then applied to the mātikās of Dhammasaṅgaṇī, creating a bewildering complexity of possible combinations. The Paṭṭhāna is always heavily abbreviated, but if it were to be fully spelled out, it would probably be the largest book ever created, with many billions of combinations.
                            </p>
                            <p>
                                The Dhammasaṅgaṇī and the Paṭṭhāna bookend the Abhidhamma collection, the first dealing with phenomena, the latter with their relations. While method and the details have expanded considerably, the approach can be seen as a detailed application of the underlying principles of dependent origination.
                            </p>
                            <h2 id="the-books-of-the-sarvastivada-abhidhamma">The Books of the Sarvāstivāda Abhidhamma</h2>
                            <p>
                                While many, perhaps all, of the “eighteen” early schools would have had Abhidhamma texts of some sort, none were as famous as the Sarvāstivāda. The canonical texts mentioned here were supplemented or supplanted by the massively influential treatise Mahāvibhāṣa, which established the Sarvāstivāda as the Abhidhamma school par excellence. Even when later works such as Vasubandhu’s Abhidharmakoṣa or Nāgārjuna’s Mūlamadhyamakakārikā critiqued the Sarvāstivādin philosophy, they were still working with the framework of ideas and terms established by the school, and based originally on these canonical texts. Accordingly, while the Abhidhamma texts of most schools have disappeared, these texts were taken to China and preserved there in translation. In addition, there are some passages found in Sanskrit fragments and Tibetan texts.
                            </p>
                            <p>
                                The originals of all these Sarvāstivāda works were in Sanskrit.
                            </p>
                            <h3 id="sangitiparyaya">Saṅgītiparyāya</h3>
                            <p>
                                Regarded as one of the earliest of the Abhidhamma books, this is essentially a commentary on the Sarvāstivādin version of the Saṅgīti Sutta (DN 33). It was composed by Mahākausthila (according to the Sanskrit and Tibetan sources) or Śāriputra (according to the Chinese sources). The Chinese recension was translated by Xuanzang.
                            </p>
                            <h3 id="dharmaskandha">Dharmaskandha</h3>
                            <p>
                                As noted above, this text appears to share a common origin with the Vibhaṅga of the Pali tradition. It is maintained today in a complete Chinese and partial Sanskrit version. Compared to the Vibhaṅga, the method appears to be less formalized and more discursive, quoting a range of sutta passages. It was composed by Śāriputra (according to the Sanskrit and Tibetan sources) or Maudgalyāyana (according to Chinese sources). The Chinese edition was translated by Xuanzang.
                            </p>
                            <h3 id="prajnapati-shastra">Prajñaptiśāstra</h3>
                            <p>
                                This consists of a series of questions and answers on points of doctrine based on a mātikā, supported by sutta quotes. It was said to be composed by either Maudgalyāyana or Mahākatyāyana. The Chinese translation is by Dharmarakṣita.
                            </p>
                            <h3 id="dhatukaya">Dhātukāya</h3>
                            <p>
                                Composed by Purna (according to Sanskrit and Tibetan sources), or Vasumitra (according to Chinese sources). It was translated into Chinese by Xuanzang. The Dhātukāya bears some similarity to the Pali Dhātukathā, although it uses a different mātikā.
                            </p>
                            <h3 id="vijnanakaya">Vijñānakāya</h3>
                            <p>
                                This is a counterpart of the Pali Kathāvatthu, and may share a common historical basis. The text mentions the Theravādin Moggaliputtatissa, author of the Kathāvatthu, as an opponent in the debate on the key Sarvāstivāda doctrine that all phenomena exist in the past, future, and present. The text discusses far fewer points than the Kathāvatthu, however. It was composed by Devasarman and translated into Chinese by Xuanzang.
                            </p>
                            <h3 id="prakaranapada">Prakaraṇapāda</h3>
                            <p>
                                Composed by Vasumitra, and translated by Xuanzang (T 1542), with another partial translation by Gunabhadra and Bodhiyasa at T 1541. This was a central Abhidharma treatise, which influenced even non-Sarvāstivādin texts such as the Mahāprajñapāramītopadeśa.
                            </p>
                            <h3 id="jnanaprasthana">Jñānaprasthāna</h3>
                            <p>
                                Composed by Kātyāyanīputra and translated into Chinese by Xuanzang at T 1544. It also appears translated by Saṅghadeva and Zhu-fo-nian under the name 阿毘曇八犍度論 at T 1543. The largest of the Sarvāstivādin Abhidhamma books, this formed the basis for the later Sarvāstivāda treatises, and hence the modern study of Abhidharma especially in Tibetan Buddhism.
                            </p>

                            <h2 id="the-dharmaguptaka-sariputrabhidharma">The Dharmaguptaka Śāripūtrābhidharma</h2>
                            <p>
                                The only extant work of the Dharmaguptaka Abhidhamma, this was translated into Chinese by Dharmayaśas and Dharmagupta. It shares some content with the Vibhaṅga and Dharmaskandha, and other details with other texts. Whereas the other schools maintained multiple Abhidhamma texts, this single text covers much of the same ground, and seems to contain the entire Abhidhamma system of the Dharmaguptakas.
                            </p>
                            <h2 id="abhidhamma-in-buddhist-traditions">Abhidhamma in Buddhist Traditions</h2>
                            <p>
                                Throughout the years, the study of Abhidhamma has been held in high esteem by the Buddhist traditions. The Theravāda tradition developed a series of commentaries and treatises explaining the ideas of the Abhidhamma and extending them further. This is a living tradition, which boasts an unbroken series of publications down to modern times. Today, Abhidhamma study is specially emphasized in Burmese Buddhism, although it remains active in all Theravāda regions. Tibetan Buddhism likewise strongly emphasizes study of the Abhidharma, based mostly on Sarvāstivādin sources. In all regions, however, contemporary Abhidhamma study primarily relies on later treatises, and the canonical texts are usually not directly studied in depth.
                            </p>
                            <p>
                                As well as study, Abhidhamma has been a formative influence on several modern schools of meditation. In particular, the Burmese meditation schools, including Mahasi, Goenka, and Pa Auk, all rely closely on Abhidhamma concepts.
                            </p>
                            <p>
                                Perhaps unexpectedly, Abhidhamma is not restricted to monastic or scholarly circles. It is frequently taught to or by lay people, and is popular throughout Southeast Asia. In addition, Abhidhamma mātikās may form the basis for ceremonial recitation. In Thailand, the Dhammasaṅgaṇī tikamātikā and the 24 conditions of the Paṭṭhāna are used as funeral chants.
                            </p>

                            <h2 id="criticism">Criticism</h2>
                            <p>
                                The Abhidhamma itself is a critical system, developed to clarify understanding of fundamental concepts and relations. Underlying this project is the assumption that such clarification is needed, which implies that not everyone understands things the same way. This critical aspect comes to the fore in works such as the Kathāvatthu, which showcases the rational methods of clarifying doctrines.
                            </p>
                            <p>
                                Some, such as the historical Sautrāntikas, criticized the Abhidhamma project itself, claiming it deviated from the suttas. It is not clear whether all early schools actually had an Abhidhamma Piṭaka. However, they all must have had some comparable works of analysis and explanation.
                            </p>
                            <p>
                                Criticism of Abhidhamma was a foundation of the Mahāyāna. Mahāyāna sutras criticize both specific details of Abhidhamma doctrines—such as the notion that each phenomenon is defined by its individual essence—and the overall direction of the Abhidhamma schools, alleging that its followers waste time debating trivia rather than understanding the profundity of the teaching. Nevertheless, Mahāyāna texts developed their own forms of Abhidhamma, and study of Abhidhamma is a core part of many Mahāyāna curricula to this day.
                            </p>
                            <p>
                                Criticism is also found in the Theravāda commentaries, which record challenges of the authenticity of the Abhidhamma. However, most of the debate in the schools concerns the interpretation of Abhidhamma, not the validity of the project itself.
                            </p>
                            <p>
                                This critical tradition continues in the present day. Within the Tibetan Buddhist education system, Abhidharma texts and concepts are studied, and considered in light of the critiques by the Sautrāntikas and Mahāyānists. And while some Theravādins maintain that it is essential to study Abhidhamma, others claim that key Abhidhamma ideas depart from the suttas, and that study of the Abhidhamma is unnecessary.
                            </p>
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
        <div className="bg-primary">

            <ContentSplitImage01 />

            <SectionDivider className="hidden pt-16 md:pt-24" />

            <GalleryAbhidhammaPitakaDivisions />

        </div>
    );
};

export default BlogPost05;

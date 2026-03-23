"use client";

import { Close01, Type02, Columns01, Menu02, Building08, HomeLine, Rows01, BookOpen01, Eye, EyeOff, Headphones01, Image01, VideoRecorder, InfoCircle, AlignLeft01, AlignRight01, Link01, Dataflow01, Check, Copy01, ArrowRight, Settings03, SearchLg, Download01, GraduationHat02, Bookmark } from "@untitledui/icons";
import { Breadcrumbs } from "@/components/application/breadcrumbs/breadcrumbs";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim-reader";
import { SidebarNavigationSlimRight } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim-reader-right";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import Image from "next/image";
import Link from "next/link";
import { BodhicentralLogoMinimal } from "@/components/foundations/logo/bodhicentral-logo-minimal";
import { ThemeToggle } from "@/components/application/theme-toggle";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { NavItemButton } from "@/components/application/app-navigation/base-components/nav-item-button";


export const TableOfContents = () => {
    return (
        <div className="sticky top-14 w-90 flex flex-col items-start gap-6 px-8 py-4">
            <div className="flex flex-col gap-4">
                <h2 className="text-display-xs text-brand-primary">Table of contents</h2>
                <ul className="flex flex-col gap-2">
                    {[
                        { title: "Origin", href: "#origins", indent: "ml-0" },
                        { title: "Textual Transmission and the Schools", href: "#textual-transmission-and-the-schools", indent: "ml-0" },
                        { title: "Content", href: "#content", indent: "ml-0" },
                        { title: "Suttavibhaṅga", href: "#suttavibhaṅga", indent: "ml-6" },
                        { title: "Khandhakas", href: "#khandhakas", indent: "ml-6" },
                        { title: "Other Texts", href: "#other-texts", indent: "ml-6" },
                        { title: "Modern Perspectives", href: "#modern-perspectives", indent: "ml-0" },
                        { title: "Commentaries", href: "#commentaries", indent: "ml-0" },
                        { title: "References and Further Reading", href: "#references-and-further-reading", indent: "ml-0" },
                    ].map((item) => (
                        <li key={item.title} className={item.indent}>
                            <Button href={item.href} size="md" color="link-gray">
                                {item.title}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full border-t border-secondary" />
            <div className="flex gap-3">
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Link01} />
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
            </div>
        </div>
    );
};

export const TextCanvasSingle = () => {
    return (
        <div className="mx-auto prose pt-6">
            <div className="mx-auto w-full py-4">
                <section className="relative overflow-hidden py-2 md:pb-6">
                    <div className="mx-auto grid max-w-container grid-cols-1 items-center justify-items-center gap-8 lg:grid-cols-[1.4fr_3fr] lg:justify-items-start">
                        <div className="relative lg:h-full lg:min-h-80">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Text Cover"
                                className="inset-0 h-auto w-full cols- object-cover dark:hidden md:h-70 md:w-auto lg:h-80 lg:object-cover"
                                src="/textCovers/buddha-sakyamuni-600.jpg"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Text Cover"
                                className="inset-0 h-auto w-full max-w-none object-cover not-dark:hidden md:h-70 md:w-auto lg:h-80 lg:object-cover"
                                src="/textCovers/buddha-sakyamuni-600.jpg"
                            />
                        </div>
                        <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">
                            <a href="#" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                <BadgeGroup className="hidden md:flex" size="lg" addonText="Categories" iconTrailing={ArrowRight} theme="light" color="brand">
                                    Topics
                                </BadgeGroup>
                                <BadgeGroup className="md:hidden" size="md" addonText="Categories" iconTrailing={ArrowRight} theme="light" color="brand">
                                    Topics
                                </BadgeGroup>
                            </a>

                            <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                                Beautiful Sutta to inspire and grow wisdom
                            </h1>
                            <p className="mt-4 max-w-lg text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                                The Vinaya is the code of conduct for Buddhist monks and nuns. It is a collection of rules and regulations that govern the lives of monastics, and it is an essential part of the Buddhist tradition.
                            </p>
                        </div>
                    </div>
                </section>
                <p className="lead first-letter:float-left first-letter:text-6xl first-letter:leading-10 first-letter:mr-2 first-letter:font-serif first-letter:font-extralight first-letter:text-brand-800 dark:first-letter:text-brand-200">
                    The Monastic Law is available in more recensions than any other part of the Tipiṭaka. There is a full version in Pali, and four complete versions extant in Chinese translation, all belonging to different schools of early Buddhism: Mahāsāṅghika, Dharmaguptaka, Mahīśāsaka, and Sarvāstivāda. The Chinese Tipiṭaka also preserves other Vinaya related texts, such as an independent <i>bhikkhu pātimokkha</i> of the Kāśyapīya School and several more or less school-specific Vinaya texts. The Vinaya of the Mūlasarvāstivāda school exists in three versions: a complete text in Tibetan translation, a mostly complete version in Chinese, and substantial portions in Sanskrit. There are also several Vinaya texts, as well as a large number of fragments, in Sanskrit and other Indic languages, mostly of Mahāsāṅghika, Sarvāstivāda, and Mūlasarvāstivāda provenance.
                </p>
                <hr />
                <h2 id="origins">Origins</h2>
                <p>
                    The word <i>vinaya</i>, here translated as “Monastic Law,” originally probably meant “training,” as can be seen from its usage in the Sutta Piṭaka, “the Basket of Discourses.” In this sense it complements the Dhamma, the doctrine or teaching, which provides the instructions on how the training is to be achieved. The compound <i>dhamma-vinaya</i> is a common one in the earliest literature and might be rendered as “theory and practice.” Gradually the meaning shifted to refer to the rules of conduct instead, thus referring to the training in a narrower sense. Although the former usage is more common in the suttas, it is this latter usage of vinaya which has become the dominant one and which has prevailed to the present day.
                </p>
                <p>
                    The Monastic Law developed over a period of several centuries after the Buddha’s passing away. Yet given the close agreement on some of the most fundamental aspects of the Vinaya across all surviving scriptures, it seems likely that the earliest parts originated in the lifetime of the Buddha. This includes the rules of conduct binding on all monastics, known as the <i>pātimokkha</i>, and several of the most important procedures that regulate the proper functioning of the monastic communities. It is only these parts of the Vinaya that are part of the Early Buddhist Texts in the strictest sense.
                </p>
                <p>
                    Around this kernel the Vinaya gradually expanded. Over time, the pātimokkha rules gained a canonical commentary that included origin stories, word analyses, detailed permutation series on the applicability of the rules, non-offense clauses, and case studies. For the rest of the Vinaya, known as the Khandhakas, the expansion was less structured, with minor rules, stories, and procedures apparently being added as the need arose. It has been shown by Frauwallner (1956) that, despite a significant common core, many of the details of this part of the Vinaya vary between the schools.
                </p>
                <p>
                    The exact cut-off point after which no new material was added to the Canonical Vinaya is impossible to pin down and it would have varied from school to school. On linguistic grounds, it seems likely that the majority of additions to the Pali Vinaya, with the exception of the Parivāra, were done prior to its arrival in Sri Lanka in the third century BCE. After this point new material was added to the commentarial literature, which, despite its likely origin in the mainland, was greatly expanded and developed in Sri Lanka.
                </p>
                <figure>
                    <Image className="h-60 md:h-120" src="/content/jambudipa-c-500-bce-1600px.jpg" alt="Jambudipa Map c. 500 BCE" width={400} height={400} />
                    <figcaption>
                        Map of Jambudīpa is courtesy of Jonas David Mitja Lang via {" "}
                        <a
                            href="https://suttacentral.net/"
                            className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            SuttaCentral
                        </a>
                    </figcaption>
                </figure>
                <figure>
                    <blockquote>
                        <p>
                            The Vinaya was not established as part of an overall plan to provide the monastic community with a legal structure, but was laid down rule by rule in response to problems as they arose in the Sangha. It is the Dhamma, the teaching, that guided the laying down of the Vinaya, and the Vinaya is subsidiary to and bound up with the broader concerns of the proper practice of the Buddhist path. A large number of rules were laid down in response to the lay people’s criticism of the Sangha.
                        </p>
                    </blockquote>
                    <figcaption className="not-prose mt-6 flex gap-3 text-md md:mt-8">
                        <Image
                            src="/people/bhikku-sujato-close-up.jpg"
                            className="size-12 rounded-full object-cover"
                            alt="Bhikkhu Sujato"
                            width={800} height={800} />
                        <div>
                            <p className="text-md font-semibold text-primary">Bhikkhu Sujato</p>
                            <cite className="text-md text-tertiary not-italic">Co-founder of SuttaCentral</cite>
                        </div>
                    </figcaption>
                </figure>
                <h2 id="textual-transmission-and-the-schools">Textual Transmission and the Schools</h2>
                <p>
                    The number of extant Vinaya texts is quite large and the process of transmission and translation into various Indic languages and especially into Chinese and Tibetan is quite complex. In what follows I give an outline of how the main Vinaya texts were transmitted to China and Tibet.
                </p>
                <p>
                    The first split in the Sangha occurred between the Mahāsāṅghikas and the Sthaviras, very roughly around 200 BCE. Each of these branches subsequently split into a number of sub-schools. Of the six complete Vinayas still extant, only one belongs to the Mahāsāṅghika group and the remaining five to sub-schools of the Sthaviras. We should therefore expect to find shared qualities between the Vinayas of the Sthavira schools that are lacking in the Mahāsāṅghika Vinaya. Indeed, the Khandhakas of the Mahāsāṅghika Vinaya are structured differently from those of all the other Vinayas.
                </p>
                <p>
                    The sub-schools of the Sthavira branch for which we still have complete Vinayas fall into two sub-groups: the Sarvāstivāda and the Mūlasarvāstivāda on the one hand, and the Dharmaguptaka, the Mahīśāsaka, and the Theravāda on the other. First the Sarvāstivādins split from the rest of the Sthaviras. Over time the Mūlasarvāstivāda emerged as a sub-school of the Sarvāstivāda, and for this reason the Vinayas of these two schools share certain characteristics (Frauwallner, 1956: 194). After the Sarvāstivādin split, the remainder of the Sthaviras divided further, including into the Dharmaguptaka, the Mahīśāsaka, and the Theravāda. Yet these three schools were probably no more than regional variations of each other (Sujato, 2012: 102) and consequently their Vinayas have much in common (Frauwallner, 1956: 181).
                </p>
                <p>
                    Apart from the Theravāda Vinaya, the following are the main Canonical Vinayas still extant:
                </p>
                <ul>
                    <li>A complete Mahāsāṅghika Vinaya, found in the Chinese Tipiṭaka at T 1425, was translated into Chinese by Faxian and Buddhabhadra in 416-418 CE. Although its section of Khandhakas is structured differently from that of the other schools, the content appears to largely overlap. Further study is required to clarify the degree of divergence. Substantial parts of this Vinaya has also been preserved in Buddhist Hybrid Sanskrit, including the Mahāvastu, a large work mostly concerned with the biography of the Buddha, as well as the Suttavibhaṅga for the nuns and the monks’ pātimokkha.</li>
                    <li>A complete Sarvāstivāda Vinaya is preserved in Chinese at T 1435, translated by Kumārajīva in 404-409 CE. There are also a number of surviving fragments in Sanskrit.</li>
                    <li>A full translation of the Mūlasarvāstivāda Vinaya into Tibetan, found in the Kanjur at D 1-7/P 1030-1036, was completed in the first decade of 9th century CE by Jinamitra of Kashmir and various others. There is a version of this Vinaya in Chinese at T 1441-1457, largely translated by Yijing in 703-710 CE. This translation is incomplete and full of gaps (Frauwallner, 1956: 195). In addition to this, approximately 80 percent of the Khandhakas exist in Sanskrit (Clarke, 2015: 75).</li>
                    <li>Apart from a few fragments in Sanskrit and Gāndhārī, a full Dharmaguptaka Vinaya is only preserved in Chinese at T 1428, translated by Buddhayaśas and Zhu Fonian in 410-412 CE. Of all the extant Vinayas, this is the one normally regarded as closest to the Theravāda Vinaya (Clarke, 2015: 69).</li>
                    <li>The Mahīśāsaka Vinaya is only extant in Chinese at T 1421, translated by Buddhajīva from Kashmir and others in 423-424 CE from a manuscript brought from Sri Lanka by Faxian. According to Frauwallner (1956: 183-84), this Vinaya is full of gaps. It is closely related to the Dharmaguptaka Vinaya (Frauwallner, 1956: 181).</li>
                    <li>Apart from the full Vinayas listed above, there are a variety of Canonical Vinaya texts and fragments in different languages. One significant text is the monks’ pātimokkha of the Kāśyapīya School, available at T 1460 and translated into Chinese by Gautama Prajñāruci in 543 CE.</li>
                </ul>
                <h2 id="content">Content</h2>
                <p>
                    The Vinaya Piṭaka is divided into two main parts: the Suttavibhaṅga, “The Analysis of the Rules,” and The Khandhakas, “the Chapters.” The individual schools sometimes have additional texts, such as the Parivāra, “The Compendium,” belonging to the Theravāda tradition, and the Uttaragrantha belonging to the Mūlasarvāstivādins.
                </p>
                {/* Vinaya Piṭaka */}
                <div className="flex flex-col bg-secondary px-6 py-4 gap-2 rounded-4xl drop-shadow-sm">
                    <div className="flex flex-row items-center justify-between gap-4">
                        <h4 className="text-display-xs text-brand-700 dark:text-brand-700/80">Vinaya Piṭaka</h4>
                        <div className="flex flex-col gap-3 md:justify-center pb-1">
                            <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                Outline
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-2 rounded-3xl">
                        <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-red-100/60 dark:bg-red-950/80 px-2 py-4 rounded-2xl border border-red-200 dark:border-red-800">
                            <p className="not-prose text-md font-light text-primary/70 text-center">Suttavibhaṅga</p>
                            <p className="not-prose text-md font-bold text-center text-secondary">Rules and Their Analysis</p>
                        </div>
                        <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-orange-100/60 dark:bg-orange-950/80 px-2 py-4 rounded-2xl border border-orange-200 dark:border-orange-800">
                            <p className="not-prose text-md font-light text-primary/70 text-center">Khandhakas</p>
                            <p className="not-prose text-md font-bold text-center text-secondary">Chapters on Legal Topics</p>
                        </div>
                        <div className="mx-auto w-full flex flex-col items-center justify-center gap-0 bg-yellow-100/60 dark:bg-yellow-950/80 px-2 py-4 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                            <p className="not-prose text-md font-light text-primary/70 text-center">Parivāra</p>
                            <p className="not-prose text-md font-bold text-center text-secondary">The Compendium</p>
                        </div>
                    </div>
                </div>
                <h3 id="suttavibhaṅga">Suttavibhaṅga</h3>
                <p>
                    Suttavibhaṅga means “Analysis of the sutta.” Sutta here does not refer to the discourses, but rather to the pātimokkha rules as a complete set.
                </p>
                <p>
                    The Suttavibhaṅga consists of the pātimokkha rules embedded in a commentary that analyses each rule in detail. The Suttavibhaṅga is divided into two parts, the 227 rules for the monks and the 311 rules for the nuns. The majority of rules are the same for the two Orders, but 130 rules are specific to the nuns and 46 specific to the monks. The greater number of rules for the nuns is in large part due to the subdivision of individual monks’ rules into multiple rules for the nuns and to the fact that the nuns have rules in their pātimokkha that the monks have in the Khandhakas.
                </p>
                <Button href="#" color="link-gray" iconTrailing={<ArrowRight />} size="sm">
                    <span>Read more</span>
                </Button>
                <h3 id="khandhakas">Khandhakas</h3>
                <p>
                    The other main part of the Vinaya, the Khandhakas, is a group of sections that each discuss a major area of monastic law, such as a section on ordination, several sections on allowable requisites, and a number of sections that deal with technical matters. The Theravāda Khandhakas are a set of 22 sections, all of which are matched by equivalent sections in the other existing Vinaya recensions, with the partial exception of the Mahāsāṅghikas. The Khandhakas of the Mahāsāṅghikas, although containing much of the same material as the other Vinaya recensions, are structured differently. There is as yet no scholarly consensus as to why this is the case and what might be the implications for the historical evolution of the Khandhakas.
                </p>
                <p>
                    The Khandhakas lack the close unifying principle found in the Suttavibhaṅga, which, as we have seen, is organized as a commentary and analysis of the pātimokkha rules. This makes the Khandhakas less integrated and more diverse than the Suttavibhaṅga.

                </p>
                <Button href="#" color="link-gray" iconTrailing={<ArrowRight />} size="sm">
                    <span>Read more</span>
                </Button>
                <h3 id="other-texts">Other Texts</h3>
                <p>
                    The Theravāda tradition includes the Parivāra in its Vinaya Piṭaka. Oskar von Hinüber (2000: 22) suggests it was completed no later than the first century AD. The Parivāra is an analytical summary of the first two parts of the Vinaya. In style and method it is sometimes compared to the Abhidhamma.
                </p>
                <p>
                    Other schools, too, have Vinaya summaries and addenda that may or may not share material with the Parivāra. Because of a lack of research, not much is known about these texts. It seems clear, however, that none of them is part of the Early Buddhist Texts.

                </p>
                <h2 id="modern-perspectives">Modern Perspectives</h2>
                <p>
                    Most of the early schools of Buddhism have long since disappeared, but three Vinaya traditions are still alive: the Dharmaguptaka, practiced in East Asia, including China and Korea; the Mūlasarvāstivāda, practiced in Tibet and Mongolia; and the Theravāda, practiced in South and Southeast Asia.
                </p>
                <p>
                    In practice, it is rare for monastics to follow all the stipulations of their chosen Vinaya lineage. For instance, although the use of money is prohibited by the <i>pātimokkha</i> rules of all schools, it is nevertheless used by the vast majority of monastics. The extent to which the rules are followed varies enormously, but most monastics do at least follow the most important rules, that is, the rules entailing expulsion and those entailing suspension. A similar situation holds for the procedures that govern the Orders. Sometimes they are practiced to the letter, such as most ordination ceremonies in the Theravāda tradition. At other times the procedures are misinterpreted or simply disregarded, such as the procedures for choosing the officials of the Order.
                </p>
                <p>
                    Over the course of Buddhist history, there have been periodic reform movements and irregular attempts at purifying the Sangha. Typically the Order gradually degenerates until a charismatic leader starts a reform movement aimed at the proper practice of the Buddhist path, including the Vinaya. These reform movement sometimes manifest as “forest traditions,” whereby monastics establish forest monasteries in conformity with the ideals of early Buddhism. Over the last three decades, one controversial and ongoing reform has been the reestablishment of an Order of nuns, <i>bhikkhunīs</i>, in the Theravāda tradition.
                </p>
                <h2 id="commentaries">Commentaries</h2>
                <p>
                    Another important component of the monastic Vinaya is the vast commentarial literature that has gradually evolved over the centuries and millennia, and continues to do so to the present day. All three of the living Vinaya traditions have such a commentarial literature.
                </p>
                <p>
                    The commentarial literature begins with the Suttavibhaṅga, which, although it is now part of the Canon, is an early commentary on the <i>pātimokkha</i> rules. Next we have other Canonical commentaries or summaries, such as the Parivāra of the Theravādins. Beyond these, we come to the commentaries proper, the <i>aṭṭhakathās</i>, “The Discussion on Meaning.”
                </p>
                <p>
                    The most important non-canonical commentary on the Theravādin Vinaya Piṭaka is the Samantapāsādikā, composed in Sri Lanka by Buddhaghosa in the fifth century CE based on pre-existing commentaries that probably originated in India. There is also another important commentary from this period, the Kaṅkhāvitaraṇī, also composed by Buddhaghosa. The next layer of commentaries are the <i>ṭīkās</i>, the sub-commentaries, of which there are over a dozen, including highly specialized literature, such as handbooks on monastery boundaries (<i>sīmās</i>). <i>Ṭīkās</i> continue to be composed to the present day. The extent to which the Canonical Vinaya needs to be interpreted in line with this commentarial tradition is typically controversial, and practices vary widely.
                </p>
                <p>
                    To navigate this vast literature, many Theravāda monasteries rely on modern summaries for their practice of the Vinaya. Examples include the Vinayamukha in Thai and Ajahn Ṭhānissaro’s The Buddhist Monastic Code in English.
                </p>
                <p>
                    In addition to the above, most Theravāda monasteries follow a number of rules that are more informal in nature. These include rules used to distinguish individual sects (<i>nikāyas</i>), such as rules on the style of robes and on the manner of wearing them. Then there are rules that pertain to particular teacher traditions, such as those that often form around especially charismatic and famous teachers. The final set of rules are those laid down at individual monasteries. These regulate the daily schedule and other aspects of monastic life that are monastery specific. Although all these rules are sometimes called Vinaya and therefore assumed to stem from the Vinaya Piṭaka or at least the commentaries, in reality, few of them have any Canonical basis.
                </p>
                <div className="my-8 rounded-3xl bg-tertiary border border-primary px-5 py-2 text-lg text-tertiary md:pt-1 md:pb-2 md:px-6 [&>p+p]:mt-4.5">
                    <h2 id="references-and-further-reading">References and Further Reading</h2>
                    <ul>
                        <li>Clarke, Shayne; <i> Vinaya Mātṛikā – Mother of the Monastic Codes, or just Another Set of Lists?</i>; Indo-Iranian Journal 47: 77–120, 2004</li>
                        <li>Clarke, Shayne; <i>Vinayas</i>; in Brill’s Encyclopaedia of Buddhism; Leiden, 2015; vol. I, pp. 60-87.</li>
                        <li>Frauwallner, Erich; <i>The Earliest Vinaya and the Beginnings of Buddhist Literature</i>; Rome, 1956</li>
                        <li>Apart from a few fragments in Sanskrit and Gāndhārī, a full Dharmaguptaka Vinaya is only preserved in Chinese at T 1428, translated by Buddhayaśas and Zhu Fonian in 410-412 CE. Of all the extant Vinayas, this is the one normally regarded as closest to the Theravāda Vinaya (Clarke, 2015: 69).</li>
                        <li>v. Hinüber, Oskar; <i>A Handbook of Pāli Literature</i>; Walter de Gruyter, Berlin, 2000</li>
                        <li>Kabilsingh, Chatsumarn (trans.); <i>The Bhikkhunī Patimokkha of the Six Schools</i>; Bangkok, 1991</li>
                        <li>Norman, K.R.; <i>Pāli Literature</i>; Otto Harrassowitz, Wiesbaden, 1983</li>
                        <li>Ñāṇatusita, Bhikkhu; <i>A Translation and Analysis of the Pātimokkha</i>; Kandy, 2008</li>
                        <li>Pachow, W; <i>A Comparative Study of the Prātimokṣa</i>; Motilal Banarsidass, Delhi, 2000</li>
                        <li>Sujato, Bhikkhu; <i>Sects and Sectarianism</i>; Santipada, 2012</li>
                        <li>Sujato, Bhikkhu; <i>Bhikkhunī Vinaya Studies</i>; Santipada, 2009</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const AuxiliaryPanel = () => {
    return (
        <div className="sticky top-12 mx-auto z-45 flex-1">
            <div className="prose flex flex-col w-full bg-olive-100 dark:bg-gray-800/30 px-6 py-4 rounded-tr-3xl rounded-br-lg h-[calc(100dvh-48px)]">
                <h2 className="text-xl text-primary">Auxiliary Panel Specs</h2>
                <p className="text-sm text-tertiary">The Auxiliary Panel displays information related to the text being read. Types of peripheral content are selected from the tools in on the right side of this panel.</p>
                <p className="text-sm text-tertiary">Features being considered for the Auxiliary Panel include:</p>
                <ul className="text-sm text-tertiary">
                    <li>Listings of connections and parallels with other texts and/or sections of the canons.</li>
                    <li>Commentaries and sub-commentaries associated with the active text.</li>
                    <li>Overviews related to the active text.</li>
                    <li>Recommended reading.</li>
                    <li>Bookmarks</li>

                </ul>
                <p className="text-sm text-tertiary pb-4">This panel and related features are a work in progress and will be reported on our <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/tech/features-roadmap" target="_blank">Technical Documentation</a>. Stay tuned!</p>
                <div className="w-full border-t border-secondary mt-auto">
                    <h2 className="text-xl font-bold text-primary">Other Features</h2>
                    <ul className="text-sm text-tertiary">
                        <li>Downloadable versions of the texts.</li>
                        <li>Guides and Tips.</li>
                    </ul>
                    <p className="text-sm text-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};





export default function ReaderPage() {
    return (
        <>
            {/* TODO: Create a dynamic Modal for canonical navigation */}
            <div className="hidden absolute top-22 left-4 bottom-4 w-96 z-50 bg-white dark:bg-gray-900 rounded-2xl p-8 drop-shadow-md">
                <div className="prose flex flex-col w-full">
                    <h2 className="text-xl font-bold text-primary">Canonical Navigation Specs</h2>
                    <p className="text-sm text-tertiary">The Canonical Navigation is a hierarchical structure of the Buddhist Pali and Tibetan canons, organized by the respective divisions, sections, and sub-sections of each canon.</p>
                    <p className="text-sm text-tertiary">This component is a work in progress. It will be used to navigate the Buddhist canons and their parallels.</p>
                    <p className="text-sm text-tertiary">Built on a modal, this composable and reusable component will be opened and closed by the user from contextually relevant locations.</p>
                    <p className="text-sm text-tertiary">A significant research effort has been undertaken to ensure the accuracy and completeness of the Canonical Navigation's functionality and structure. The result is an intuitive and holistic experience (including drag and drop functionality) that will be of great benefit to scholars and practitioners of Buddhism, and will be a cornerstone of the Bodhi Central platform.</p>
                    <p className="text-sm text-tertiary">As an example of the ongoing research and development of the Canonical Navigation, please check out the article dealing with the subject of canonical organization, <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/research/pali-canon/connections-and-parallels" target="_blank">Numbering the Sutta Piṭaka</a>. Many more articles are planned to be published on the subject of canonical organization.</p>
                    <p className="text-sm text-tertiary">On the technical side, for a reference on the developement of tre Canonical Navigation, please check out the <a className="text-brand-700 dark:text-brand-300" href="https://headless-tree.lukasbach.com" target="_blank">Headless Tree</a> component.</p>
                </div>
            </div>



            {/* The MAIN Reader wrapper */}
            <main className="mx-auto w-full bg-olive-200 dark:bg-gray-950">

                {/* LEFT PLACEHOLDER - Sidebar Tools for the Text Navigation */}
                <SidebarNavigationSlim
                    hideRightBorder
                    activeUrl=""
                    items={[
                        {
                            label: "Canon Navigation",
                            href: "",
                            icon: Building08,
                        },
                        {
                            label: "Title Information",
                            href: "",
                            icon: InfoCircle,
                        },
                        {
                            label: "Table of Contents",
                            href: "",
                            icon: Menu02,
                        },
                        {
                            label: "Front Matter",
                            href: "",
                            icon: AlignLeft01,
                        },
                        {
                            label: "Main Body Outline",
                            href: "",
                            icon: BookOpen01,
                        },
                        {
                            label: "Back Matter",
                            href: "",
                            icon: AlignRight01,
                        },
                    ]}
                    footerItems={[
                        {
                            label: "Learning Paths",
                            href: "",
                            icon: GraduationHat02,
                        },
                        {
                            label: "Video Carousel",
                            href: "",
                            icon: VideoRecorder,
                        },
                        {
                            label: "Illustrations Carousel",
                            href: "",
                            icon: Image01,
                        },
                        {
                            label: "Audio Carousel",
                            href: "",
                            icon: Headphones01,
                        },
                    ]}
                />

                <div className="fixed z-45 top-12 left-14 right-14 h-6 rounded-t-2xl bg-linear-to-b bg-olive-50 dark:bg-gray-900">
                </div>
                <div className="fixed z-40 top-12 left-14 w-6 h-6 bg-olive-200 dark:bg-gray-950">
                </div>
                <div className="fixed z-40 top-12 right-14 w-6 h-6 bg-olive-200 dark:bg-gray-950">
                </div>

                {/* TEXT READER CANVAS */}
                <div className="w-full px-14">
                    <div className="relative flex flex-nowrap w-full bg-olive-50 dark:bg-gray-900">

                        <div className="sticky top-0 w-[20%]">
                            <TableOfContents />
                        </div>
                        {/* Reader Canvas wrapper */}
                        <div className="w-[55%]">
                            <TextCanvasSingle />
                        </div>
                        <div className="w-[30%]">
                            <AuxiliaryPanel />
                        </div>
                    </div></div>


                {/* RIGHT - Sidebar Tools for the Text Navigation */}
                <SidebarNavigationSlimRight
                    hideRightBorder
                    activeUrl=""
                    items={[
                        {
                            label: "Connections & Parallels",
                            href: "",
                            icon: Link01,
                        },
                        {
                            label: "Overviews & Recommended Reading",
                            href: "",
                            icon: BookOpen01,
                        },
                        {
                            label: "Bookmarks",
                            href: "",
                            icon: Bookmark,
                        },

                    ]}
                    footerItems={[
                        {
                            label: "Preferences & Settings",
                            href: "",
                            icon: Settings03,
                        },
                        {
                            label: "Downloads",
                            href: "",
                            icon: Download01,
                        },
                    ]}
                />

            </main>
        </>
    );
}

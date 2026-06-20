"use client";

import { useState } from "react";
import {
    BookOpen01, Link01, Dataflow01, ArrowRight, ArrowLeft, Download01, Bookmark,
    Edit01, Mark, CursorBox, FileSearch01, Settings01, Type01, X as XIcon
} from "@untitledui/icons";
import { FileIcon } from "@untitledui/file-icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import Image from "next/image";
import Link from "next/link";
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";


export const TableOfContents = () => {
    return (
        <div className="sticky flex flex-col top-12 px-6 py-4 mx-auto z-0 border-x border-secondary max-h-full">
            <div className="py-2">
                <h5 className="text-display-xs text-brand-primary">Table of Contents</h5>
            </div>
            <div className="flex flex-col w-full py-4 overflow-y-auto scrollbar-hide h-[calc(100vh-4rem)]">
                <ul className="flex flex-col gap-2">
                    {[
                        { title: "Text Title", href: "#title-page", indent: "ml-0" },
                        { title: "A Word of Welcome", href: "#introduction-to-the-reader", indent: "ml-0" },
                        { title: "Auspicious Introduction to Vinaya", href: "#auspicious-sample-text", indent: "ml-0" },
                        { title: "Textual Transmission and the Schools", href: "#textual-transmission-and-the-schools", indent: "ml-0" },
                        { title: "Content of the Vinaya Pitaka", href: "#content", indent: "ml-0" },
                        { title: "Suttavibhaṅga", href: "#suttavibhaṅga", indent: "ml-6" },
                        { title: "Khandhakas", href: "#khandhakas", indent: "ml-6" },
                        { title: "Other Texts", href: "#other-texts", indent: "ml-6" },
                        { title: "Modern Perspectives", href: "#modern-perspectives", indent: "ml-0" },
                        { title: "Commentaries", href: "#commentaries", indent: "ml-0" },
                        { title: "References and Further Reading", href: "#references-and-further-reading", indent: "ml-0" },
                    ].map((item) => (
                        <li key={item.title} className={item.indent}>
                            <Button href={item.href} size="md" color="link-gray" className="whitespace-normal">
                                {item.title}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden px-6 py-2 border-t border-secondary">
                <h5 className=" text-tertiary text-center">[TOC utilities]</h5>
            </div>
        </div>
    );
};

export const TextCanvasSingle = () => {
    return (
        <div className="mx-auto prose-reader flex flex-col px-2">
            
            <div className="flex justify-between pt-6 pb-6">
                <Button iconLeading={ArrowLeft} color="secondary" size="sm" >Previous</Button>
                <Button iconTrailing={ArrowRight} color="secondary" size="sm" >Next</Button>
            </div>
            <div className="pb-6 overflow-y-auto scrollbar-hide h-[calc(100dvh-6rem)]">

                <section className="relative mx-auto">
                    <div className="mx-auto grid max-w-container grid-cols-1 items-center justify-items-center gap-8 lg:grid-cols-[1.4fr_3fr] lg:justify-items-start">
                        <div className="relative lg:w-full lg:h-auto lg:min-h-70">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Text Cover"
                                className="inset-0 h-auto w-full cols- object-top dark:hidden md:h-60 md:w-auto lg:h-70 lg:object-cover"
                                src="/textCovers/buddha-sakyamuni-600px.jpg"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Text Cover"
                                className="inset-0 h-auto w-full max-w-none object-cover not-dark:hidden md:h-65 md:w-auto lg:h-75 lg:object-cover"
                                src="/textCovers/buddha-sakyamuni-600px.jpg"
                            />
                        </div>
                        <div id="title-page" className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">

                            <h1 className="mt-2 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                                Welcome to Bodhi Central <br />Readership and Learning
                            </h1>
                            <p className="description mt-2 max-w-3xl text-lg text-tertiary md:mt-3 md:text-xl">
                                We are delighted to introduce this space of humanity-centered interations, offering you a treasure trove of texts and teachings to support your study and practice.
                            </p>
                            <Button color="primary" size="sm" className="mt-2" onClick={() => openCanonNavigator()}>
                                Find another text
                            </Button>
                        </div>
                    </div>
                </section>
                <h2 id="introduction-to-the-reader">A Word of Welcome</h2>
                <p className="lead first-letter:float-left first-letter:text-7xl first-letter:leading-12 first-letter:mr-1 first-letter:font-serif first-letter:font-extralight first-letter:text-brand-400 dark:first-letter:text-brand-200">
                    The Bodhi Central experience is a sanctuary of sources of wisdom, paths to awakening, and tools to support your journey, open to everyone, and without the financial pressures of our modern spiritual industry. The platform's mission is to expose you to authentic Buddha's words and transmissions from the living traditions. We believe the teachings of the Dharma are a complete and self-validating response to human suffering — not because we say so, but because sincere practitioners across 2,500 years have found them to be so.
                </p>
                <p className="lead">
                    Bodhi Central exists to remove the distance between a serious seeker and the most important words ever spoken about the nature of mind. Our tools don't replace practice or transmission — they clear the path toward them.
                </p>
                <p className="lead">
                    Whether you are beginning your journey or deepening your understanding and realizations, may this space of readership and learning inspire you and bring a positive difference to everyone.
                </p>
                <hr />
                <h2 id="auspicious-sample-text">Auspicious Introduction to Vinaya</h2>
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
                <div className="flex flex-col bg-secondary px-4 pb-4 gap-2 rounded-3xl border border-secondary drop-shadow-sm">
                    <div className="flex flex-row items-center justify-between gap-4">
                        <h3 className="text-display-xs text-brand-700 dark:text-brand-700/80">Vinaya Piṭaka</h3>
                        <div className="flex flex-col gap-3 md:justify-center pb-1">
                            <Button color="secondary" size="sm" iconLeading={Dataflow01} onClick={() => openCanonNavigator()}>
                                Outline
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-start justify-center gap-2 rounded-3xl">
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

// ─── Subscription plan tiers ───────────────────────────────────────────────
type SubscriptionPlan = "free" | "standard" | "premium";

// ─── Tab definitions ────────────────────────────────────────────────────────
type TabId =
    | "segment"
    | "notes"
    | "bookmarks"
    | "highlights"
    | "cross-references"
    | "apparatus"
    | "lexicon"
    | "downloads"
    | "settings";

interface AncillaryTab {
    id: TabId;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    /** Minimum plan required to access this tab */
    requiredPlan: SubscriptionPlan;
    tooltip: string;
}

const ANCILLARY_TABS: AncillaryTab[] = [
    {
        id: "segment",
        label: "Selected Text Segment",
        icon: CursorBox,
        requiredPlan: "free",
        tooltip: "Selected Segment — details for the currently selected passage",
    },
    {
        id: "notes",
        label: "Marginal Notes",
        icon: Edit01,
        requiredPlan: "free",
        tooltip: "Notes — personal study notes for this text (Standard+)",
    },
    {
        id: "bookmarks",
        label: "Bookmarks",
        icon: Bookmark,
        requiredPlan: "free",
        tooltip: "Bookmarks — save and revisit passages (Standard+)",
    },
    {
        id: "highlights",
        label: "Highlights",
        icon: Mark,
        requiredPlan: "free",
        tooltip: "Highlights — colour-code and annotate passages (Standard+)",
    },
    {
        id: "cross-references",
        label: "Cross-References",
        icon: Dataflow01,
        requiredPlan: "free",
        tooltip: "Cross-References — parallels and connections across the canon",
    },
    {
        id: "apparatus",
        label: "Textual Apparatus",
        icon: FileSearch01,
        requiredPlan: "free",
        tooltip: "Textual Apparatus — variant readings and manuscript notes (Premium)",
    },
    {
        id: "lexicon",
        label: "Lexicon",
        icon: BookOpen01,
        requiredPlan: "free",
        tooltip: "Lexicon — look up terms in the canonical dictionary",
    },
    {
        id: "downloads",
        label: "Downloads",
        icon: Download01,
        requiredPlan: "free",
        tooltip: "Downloads — export this text as PDF, TXT, or HTML",
    },
    {
        id: "settings",
        label: "Reader Preferences",
        icon: Settings01,
        requiredPlan: "free",
        tooltip: "Settings — reader display preferences",
    },
];

/** Map plan → numeric rank so comparisons are simple */
const PLAN_RANK: Record<SubscriptionPlan, number> = { free: 0, standard: 1, premium: 2 };

function canAccess(userPlan: SubscriptionPlan, requiredPlan: SubscriptionPlan) {
    return PLAN_RANK[userPlan] >= PLAN_RANK[requiredPlan];
}

// ─── Tab content panels (stubs — replace with real components) ────────────
const TabContent: Record<TabId, React.FC> = {
    segment: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">
                Select a passage in the reader to inspect its metadata, segment ID, and other available translations.
            </p>
        </div>
    ),
    notes: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">Your personal study notes for this text will appear here.</p>
            <textarea
                rows={6}
                placeholder="Write your notes…"
                className="w-full resize-none rounded-lg border border-secondary bg-primary px-3 py-2 text-sm text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
        </div>
    ),
    bookmarks: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">Passages you have bookmarked in this text will appear here.</p>
        </div>
    ),
    highlights: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">Your highlighted passages and annotations will appear here.</p>
        </div>
    ),
    "cross-references": () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">
                Parallels and connections with other texts and canon sections. See our{" "}
                <Link
                    href="https://bodhicentral-docs.vercel.app/research/pali-canon/sutta-numbering-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-link-primary underline"
                >
                    Documentation
                </Link>{" "}
                for details on parallel types.
            </p>
        </div>
    ),
    apparatus: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">Variant readings and manuscript notes for the selected segment.</p>
        </div>
    ),
    lexicon: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">Select a word in the text to look it up in the canonical dictionary.</p>
        </div>
    ),
    downloads: () => (
        <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-primary">Export this text</h4>
            <div className="flex gap-3 dark:opacity-90">
                <Button color="secondary" size="sm" iconLeading={<FileIcon type="pdf" variant="gray" aria-label="Download PDF" />} />
                <Button color="secondary" size="sm" iconLeading={<FileIcon type="txt" variant="gray" aria-label="Download TXT" />} />
                <Button color="secondary" size="sm" iconLeading={<FileIcon type="html" variant="gray" aria-label="Download HTML" />} />
            </div>
            <div className="border-t border-secondary pt-4">
                <h5 className="text-xs font-semibold text-tertiary pb-2">Share</h5>
                <div className="flex gap-3">
                    <Button color="secondary" size="sm" className="text-fg-quaternary" iconLeading={Link01} aria-label="Copy link" />
                    <Button color="secondary" size="sm" className="text-fg-quaternary" iconLeading={X} aria-label="Share on X" />
                    <Button color="secondary" size="sm" className="text-fg-quaternary" iconLeading={Facebook} aria-label="Share on Facebook" />
                    <Button color="secondary" size="sm" className="text-fg-quaternary" iconLeading={LinkedIn} aria-label="Share on LinkedIn" />
                </div>
            </div>
        </div>
    ),
    settings: () => (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary">Display preferences for the reader will appear here.</p>
            <h4 className="text-md font-semibold text-primary flex items-center gap-2">
                Reader Settings
            </h4>
        </div>
    ),
};

// ─── AncillaryPanel ──────────────────────────────────────────────────────────
interface AncillaryPanelProps {
    /** Called when the user clicks the close button */
    onClose: () => void;
    /**
     * The active subscription plan of the current user.
     * Tabs requiring a higher plan will be rendered as disabled with a tooltip.
     * Swap this for a real auth/subscription hook when available.
     */
    userPlan?: SubscriptionPlan;
}

export const AncillaryPanel = ({
    onClose,
    userPlan = "free",
}: AncillaryPanelProps) => {
    const [activeTab, setActiveTab] = useState<TabId>("segment");

    const ActiveContent = TabContent[activeTab];

    return (
        <div className="flex flex-col h-full max-h-full bg-secondary border-l border-secondary overflow-hidden">

            {/* ── Tab rail ────────────────────────────────────────── */}
            <div className="flex flex-row items-center justify-between border-b border-secondary px-2 py-2">
                <div
                    role="tablist"
                    aria-label="Ancillary panel tabs"
                    className="flex flex-row items-center gap-0.5"
                >
                    {ANCILLARY_TABS.map((tab) => {
                        const accessible = canAccess(userPlan, tab.requiredPlan);
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                id={`ancillary-tab-${tab.id}`}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`ancillary-panel-${tab.id}`}
                                aria-label={tab.label}
                                title={tab.tooltip}
                                disabled={!accessible}
                                onClick={() => accessible && setActiveTab(tab.id)}
                                className={[
                                    "relative flex items-center justify-center rounded-md p-2 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
                                    isActive
                                        ? "bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300"
                                        : accessible
                                            ? "text-fg-quaternary hover:bg-tertiary hover:text-secondary"
                                            : "cursor-not-allowed text-disabled opacity-40",
                                ].join(" ")}
                            >
                                <Icon size={16} />
                                {/* Active indicator */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-brand-500" />
                                )}
                                {/* Lock badge for gated tabs */}
                                {!accessible && (
                                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-warning-400 text-[7px] font-bold text-white">$</span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Close button */}
                <button
                    id="ancillary-panel-close"
                    onClick={onClose}
                    aria-label="Close ancillary panel"
                    title="Close panel"
                    className="flex items-center justify-center rounded-md p-2 text-fg-quaternary transition-colors hover:bg-tertiary hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                    <XIcon size={16} />
                </button>
            </div>

            {/* ── Tab label ───────────────────────────────────────── */}
            <div className="border-b border-secondary px-4 py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-tertiary">
                    {ANCILLARY_TABS.find((t) => t.id === activeTab)?.label}
                </p>
            </div>

            {/* ── Active panel content ─────────────────────────────── */}
            <div
                id={`ancillary-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`ancillary-tab-${activeTab}`}
                className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4"
            >
                {canAccess(userPlan, ANCILLARY_TABS.find((t) => t.id === activeTab)!.requiredPlan) ? (
                    <ActiveContent />
                ) : (
                    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning-100 dark:bg-warning-900/30">
                            <Settings01 size={18} className="text-warning-600 dark:text-warning-400" />
                        </div>
                        <p className="text-sm font-medium text-primary">Upgrade required</p>
                        <p className="max-w-[18ch] text-xs text-tertiary">
                            This feature requires a higher subscription plan.
                        </p>
                        <Button color="primary" size="sm">Upgrade plan</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function ReaderPage() {
    const [ancillaryOpen, setAncillaryOpen] = useState(true);

    return (
        <>
            {/* The MAIN Reader wrapper */}
            <main className="fixed top-16 bottom-0 w-full pl-13 bg-tertiary">

                {/* TEXT READER CANVAS */}
                <div
                    className={[
                        "relative top-0 bottom-0 mx-auto grid grid-rows-1 w-full h-full overflow-hidden transition-[grid-template-columns] duration-300",
                        ancillaryOpen
                            ? "grid-cols-[20%_1fr_27%]"
                            : "grid-cols-[20%_1fr_0px]",
                    ].join(" ")}
                >
                    {/* Left Sidebar: Table of Contents */}
                    <div className="hidden md:block max-h-auto bg-secondary">
                        <TableOfContents />
                    </div>

                    {/* Central Reader Canvas */}
                    <div className="relative top-0 bottom-0 mx-auto w-full px-2 md:px-4 lg:px-6 xl:px-16 min-w-96 max-w-full bg-primary max-h-auto">
                        <TextCanvasSingle />
                    </div>

                    {/* Right Ancillary Panel */}
                    <div
                        className={[
                            "hidden lg:block max-h-auto bg-secondary overflow-hidden transition-all duration-300",
                            ancillaryOpen ? "opacity-100" : "opacity-0 pointer-events-none",
                        ].join(" ")}
                    >
                        {ancillaryOpen && (
                            <AncillaryPanel
                                onClose={() => setAncillaryOpen(false)}
                                userPlan="free"
                            />
                        )}
                    </div>
                </div>

                {/* Re-open button shown when panel is closed */}
                {!ancillaryOpen && (
                    <button
                        id="ancillary-panel-reopen"
                        onClick={() => setAncillaryOpen(true)}
                        aria-label="Open ancillary panel"
                        title="Open ancillary panel"
                        className="fixed bottom-6 right-4 z-50 flex items-center justify-center rounded-full bg-brand-600 p-2.5 text-white shadow-lg transition-all hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                    >
                        <BookOpen01 size={16} />
                    </button>
                )}
            </main>
        </>
    );
}

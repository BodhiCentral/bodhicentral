"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy01, Link01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ThreePitakasDiagram } from "@/components/marketing/sections/three-pitakas-diagram";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    author: {
        href: string;
        name: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

const articles: Article[] = [
    {
        id: "article-1",
        title: "Sutta Piṭaka Overview",
        summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        href: "#",
        category: { name: "Sutta", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
        publishedAt: "20 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Bikkhu Sujato", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Presentation", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Migrating to Linear 101",
        summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",

        publishedAt: "19 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Phoenix Baker", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "blue-light", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3",
        title: "Building your API stack",
        summary: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        href: "#",
        category: { name: "Software Engineering", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Lana Steiner", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
        tags: [
            { name: "Software Development", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3.5",
        title: "PM mental models",
        summary: "Mental models are simple expressions of complex processes or relationships.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "17 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Demi Wilkinson", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
        tags: [
            { name: "Leadership", color: "brand", href: "#" },
            { name: "Management", color: "gray-blue", href: "#" },
        ],
    },
    {
        id: "article-4",
        title: "PM mental models",
        summary: "Mental models are simple expressions of complex processes or relationships.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/brainstorming.webp",
        publishedAt: "16 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Demi Wilkinson", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "blue-light", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Frameworks", color: "orange", href: "#" },
        ],
    },
    {
        id: "article-5",
        title: "What is Wireframing?",
        summary: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-4.webp",
        publishedAt: "15 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Candice Wu", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-6",
        title: "How collaboration makes us better designers",
        summary: "Collaboration can make our teams stronger, and our individual designs better.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/collaboration.webp",
        publishedAt: "14 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Natali Craig", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-7",
        title: "Our top 10 Javascript frameworks to use",
        summary: "JavaScript frameworks make development easy with extensive features and functionalities.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/man-and-laptop-2.webp",
        publishedAt: "13 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Drew Cano", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80" },
        tags: [
            { name: "Software development", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-8",
        title: "Podcast: Creating a better CX Community",
        summary: "Starting a community doesn't need to be complicated, but how do you get started?",
        href: "#",
        category: { name: "Customer Success", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/podcast-girl-2.webp",
        publishedAt: "12 Jan 2025",
        readingTime: "8 min read",
        author: { name: "Orlando Diggs", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Customer success", color: "gray-blue", href: "#" },
        ],
    },
];

const ContentSplitImage01 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="relative mx-auto flex max-w-container flex-col items-center px-4 py-16 md:flex-row md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-180 flex-col items-start md:absolute">
                    <BadgeGroup size="md" addonText="Vinaya" color="brand" theme="light" className="pr-3" iconTrailing={null}>
                        10 min read
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-xl">The Monastic Law: how monastic communities should live</h1>
                    <p className="mt-4 max-w-140 text-lg text-tertiary md:mt-6 md:text-xl">
                        The Vinaya Piṭaka, the “Basket of Monastic Law”, contains the rules that are binding on monastics and the regulations that apply to monastic communities.
                    </p>

                    <div className="mt-8 flex items-center gap-3 md:mt-12">
                        <img
                            src="/collections_thumbnails_sakya.jpg"
                            className="size-12 rounded-full object-cover"
                            alt="Natali Craig"
                        />
                        <div>
                            <p className="text-md font-semibold text-primary">Bikkhu Sujato</p>
                            <p className="text-md text-tertiary">Published by Sutta Central</p>
                        </div>
                    </div>
                </div>

                <img
                    className="mt-16 h-100 w-full object-cover object-top rounded-3xl md:mt-0 md:ml-auto md:h-180 md:w-140 md:max-w-[50vw]"
                    src="/textCovers/buddha-sakyamuni-600.jpg"
                    alt="How collaboration makes us better designers - two people collaborating"
                />
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    <div className="hidden w-80 flex-col gap-8 md:flex">
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold text-brand-secondary">Table of contents</p>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Origin", href: "#origin" },
                                    { title: "Textual Transmission and the Schools", href: "#textual-transmission-and-the-schools" },
                                    { title: "Content", href: "#content" },
                                    { title: "Modern Perspectives", href: "#modern-perspectives" },
                                    { title: "Commentaries", href: "#commentaries" },
                                    { title: "References and Further Reading", href: "#references-and-further-reading" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} size="lg" color="link-gray">
                                            {item.title}
                                        </Button>
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
                    <div className="max-w-prose md:max-w-full">
                        <div className="mx-auto prose md:prose-lg">
                            <p className="lead">
                                The Monastic Law is available in more recensions than any other part of the Tipiṭaka. There is a full version in Pali, and four complete versions extant in Chinese translation, all belonging to different schools of early Buddhism: Mahāsāṅghika, Dharmaguptaka, Mahīśāsaka, and Sarvāstivāda. The Chinese Tipiṭaka also preserves other Vinaya related texts, such as an independent <i>bhikkhu pātimokkha</i> of the Kāśyapīya School and several more or less school-specific Vinaya texts. The Vinaya of the Mūlasarvāstivāda school exists in three versions: a complete text in Tibetan translation, a mostly complete version in Chinese, and substantial portions in Sanskrit. There are also several Vinaya texts, as well as a large number of fragments, in Sanskrit and other Indic languages, mostly of Mahāsāṅghika, Sarvāstivāda, and Mūlasarvāstivāda provenance.
                            </p>
                            <hr />
                            <h2 id="origin">Origin</h2>
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
                                <img className="h-60 md:h-120" src="/jetavanaramaya-scenery-01.jpg" alt="Woman working at computer" />
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
                            <figure>
                                <blockquote>
                                    <p>
                                        The Vinaya was not established as part of an overall plan to provide the monastic community with a legal structure, but was laid down rule by rule in response to problems as they arose in the Sangha. It is the Dhamma, the teaching, that guided the laying down of the Vinaya, and the Vinaya is subsidiary to and bound up with the broader concerns of the proper practice of the Buddhist path. A large number of rules were laid down in response to the lay people’s criticism of the Sangha.
                                    </p>
                                </blockquote>
                                <figcaption className="not-prose mt-6 flex gap-3 text-md md:mt-8">
                                    <img
                                        src="/collections_thumbnails_sakya.jpg"
                                        className="size-12 rounded-full object-cover"
                                        alt="Olivia Rhye"
                                    />
                                    <div>
                                        <p className="text-md font-semibold text-primary">Bikkhu Sujato</p>
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
                            <ThreePitakasDiagram />
                            <h3>Suttavibhaṅga</h3>
                            <p>
                                Suttavibhaṅga means “Analysis of the sutta.” Sutta here does not refer to the discourses, but rather to the pātimokkha rules as a complete set.
                            </p>
                            <p>
                                The Suttavibhaṅga consists of the pātimokkha rules embedded in a commentary that analyses each rule in detail. The Suttavibhaṅga is divided into two parts, the 227 rules for the monks and the 311 rules for the nuns. The majority of rules are the same for the two Orders, but 130 rules are specific to the nuns and 46 specific to the monks. The greater number of rules for the nuns is in large part due to the subdivision of individual monks’ rules into multiple rules for the nuns and to the fact that the nuns have rules in their pātimokkha that the monks have in the Khandhakas.
                            </p>
                            <p>
                                The rules are categorized according to the penalty incurred for breaching them. The heaviest penalty, expulsion from the Sangha, is incurred only for conduct that is fundamentally opposed to monastic life, such as sexual intercourse or murder. There are 4 such rules for the monks and 8 for the nuns. The second heaviest penalty consists of a period of suspension and probation during which time one is not a full member of the Sangha. There are 13 such rules for the monks and 17 for the nuns. The vast majority of offenses, however, are cleared simply by confession. These rules are subdivided into a number of categories dependent on factors such as the severity of the breach, the sort of confession that is required, and additional requirements such as relinquishment of wrongly acquired requisites. The last seven rules of the Suttavibhaṅga are principles for resolving “legal” issues. Most of the material connected with these principles is now found in the Khandhakas.
                            </p>
                            <p>
                                Within the Suttavibhaṅga, each rule is largely self-contained and forms its own subsection. These sections begin with one or more origin stories that relate the incident that led the Buddha to lay down a particular rule. Many of these are no more than brief accounts of a stereotypical monk or nun who is simply stated to have done something inappropriate. A few are elaborate narratives that may include sub-rules or important procedures for the Sangha, and occasionally even sutta-type material or Jātaka-type stories. The majority of origin stories fall somewhere in between these two extremes.
                            </p>
                            <div className="my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
                                <h2 id="references-and-further-reading" className="mb-4 text-display-xs font-semibold text-primary">References and Further Reading</h2>
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

                        <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">
                            <div className="flex gap-2">
                                <Badge color="brand" size="md">
                                    Theravāda
                                </Badge>
                                <Badge color="indigo" size="md">
                                    Monastics
                                </Badge>
                            </div>
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

const Simple04Vertical = ({ article, imageClassName, className }: { article: Article; imageClassName?: string; className?: string }) => (
    <article className={cx("flex flex-col gap-4", className)}>
        <div className="relative">
            <a href={article.href} className="w-full" tabIndex={-1}>
                <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
            </a>
            <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-linear-to-b from-transparent to-black/40">
                <div className="relative flex items-start justify-between bg-alpha-white/30 p-4 backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:p-5">
                    <div>
                        <a
                            href={article.author.href}
                            className="block rounded-xs text-sm font-semibold text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            {article.author.name}
                        </a>
                        <time className="block text-sm text-white">{article.publishedAt}</time>
                    </div>
                    <a
                        href={article.category.href}
                        className="rounded-xs text-sm font-semibold text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.category.name}
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-1">
                <a
                    href={article.category.href}
                    className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    {article.title}
                </a>
                <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
            </div>

            <Button href={article.href} color="link-color" size="lg" iconTrailing={ArrowUpRight}>
                Read post
            </Button>
        </div>
    </article>
);

const BlogSectionCarouselLayout01 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Canon Overviews</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">The Theravāda Pali Canon</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">A comprehensive overview of the Tipitaka sections and subsections: Vinaya, Sutta, and Abhidhamma.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="xl">View all Pali canon sections</Button>
                    </div>
                </div>

                <CollectionGalleryVinayaPitaka />
                <Carousel.Root className="hidden mt-12 md:mt-16" opts={{ align: "start" }}>
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {articles.map((article) => (
                            <Carousel.Item key={article.id} className="max-w-xs md:max-w-96">
                                <Simple04Vertical article={article} />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="flex gap-4 md:mt-8 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const BlogPost05 = () => {
    return (
        <div className="bg-primary">

            <ContentSplitImage01 />

            <SectionDivider className="pt-16 md:pt-24" />

            <CollectionGalleryVinayaPitaka />

        </div>
    );
};

export default BlogPost05;

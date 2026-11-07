import Image from "next/image";
import { CTACenteredPlansSignupFeaturedBgImage } from "@/components-custom/sections/cta-centered-plans-signup-featured-bg-image";
import { Button } from "@/components/base/buttons/button";

export default function AboutPage() {
    return (
        <main className="relative mx-auto flex max-w-full flex-col gap-8 pt-16">
            {/* Decorative pattern at the bottom of the article */}
            <div className="absolute right-0 bottom-0 left-0 z-100 mx-auto h-6 bg-[url(/patterns/detailed-endless-band-gold-140px.png)] bg-contain bg-repeat opacity-30 dark:opacity-40 dark:drop-shadow-black/50"></div>
            <section className="relative mx-auto w-full bg-primary py-12 md:py-16">
                <Image
                    src="/ornaments/endless-knot-corner-gold.png"
                    width={260}
                    height={260}
                    alt="Plans background"
                    className="absolute top-4 right-4 hidden opacity-16 lg:block dark:opacity-25"
                />
                <Image
                    src="/ornaments/endless-knot-corner-gold.png"
                    width={260}
                    height={260}
                    alt="Plans background"
                    className="absolute top-4 left-4 hidden scale-x-[-1] opacity-16 lg:block dark:opacity-25"
                />
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About Us</span>
                    <h1 className="text-center text-display-md font-extralight text-brand-800 md:text-display-xl dark:text-brand-400">
                        Open to read.
                        <br /> Held by the living traditions.
                    </h1>
                    <p className="mt-2 text-lg text-tertiary md:mt-8 md:text-xl">
                        Bodhi Central is a study platform for the Buddhist canon: the Pali Canon with its modern translations, and the Tibetan Kangyur and
                        Tengyur in Tibetan, with translations joining them as they are reviewed and cleared. Everything we publish is free to read. Nothing here
                        replaces a teacher, a practice or a lineage.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Why we're building this</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The Kangyur gathers the words of the Buddha as they were translated into Tibetan; the Tengyur, the treatises of the Indian masters who
                        explained them. The Pali Canon preserves the teachings as the Theravada tradition has received them. Each reached us through people.
                        Indian paṇḍitas and Tibetan translators worked side by side over centuries; scribes, carvers and printers kept the texts legible; and
                        teachers have passed them on, generation after generation, in recitation, transmission and explanation. That work is still going on
                        today.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        These texts have always been received through a teacher, and that has not changed. What has changed is how hard it can be to reach the
                        texts themselves. Much of the canon sits in languages few readers know, in editions few readers can obtain, indexed by catalogues few
                        readers can navigate.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        That is the part we work on, and only that part. We build what sits around the texts — the alignments, the cross-references, the notes,
                        the search — so that a student can find the passage their teacher is explaining, see where it sits, and come back to it afterwards.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">What we are building</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        One reading environment for the Buddhist canon, with each text in its canonical language beside the modern translations that exist for
                        it.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        At our first public release that means <strong>the Pali Canon, and the Tibetan Kangyur and Tengyur in the Degé edition</strong> — the
                        edition most widely used in academic study. Beginning with one edition is not a judgement between editions, and other editions, the
                        Lhasa Kangyur among them, are not in our near plans. Translations of the Tibetan texts join them as they are reviewed and cleared for
                        publication, so many works will open in Tibetan first. The Chinese Canon is designed into the same structure, and it is a horizon of
                        years rather than months.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Around the texts sits what close study needs: alignment between a root text and its translations, passage by passage; footnotes and
                        variant readings carried with the text rather than flattened out of it; cross-references between parallel passages; catalogue
                        identifiers mapped between the schemes scholars actually cite; and recordings synchronised to the text wherever one exists.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        For students of the Tibetan traditions, Tibetan Studies presents the core curricula of the Nyingma, Sakya, Kagyu and Gelug schools, each
                        in that school's own order, with every root text linked to its place in the canon and to its commentaries. Learning Paths, written by
                        our editorial team, are introductions for readers who are new to the material — not a curriculum, and not a substitute for one.
                        Timelines place teachers, texts and traditions in relation to one another, and every date carries its source.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The interface runs in English, Spanish, Traditional Chinese, Tibetan, and Thai. Translating the canon itself is a separate and far
                        slower undertaking, done by named translators, and we keep the two clearly apart.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">
                        Texts that are received, not only read
                    </h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Some of what the canon holds is traditionally received rather than simply read. In the traditions that hold them, the tantras and much
                        of their commentary are studied only after empowerment, reading transmission and explanation from a qualified teacher, and some teachers
                        hold that the detailed monastic discipline is for the ordained.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        A web page cannot give any of these, and we do not pretend otherwise. Reading a text here is not receiving it. A recording synchronised
                        to a text is not a transmission, and nothing on Bodhi Central is permission to practise.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Texts traditionally received through transmission, chiefly the tantras, are marked as such where they open. The sections that hold them
                        carry a shorter note.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">
                        Respectful of every tradition, affiliated with none
                    </h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central is not affiliated with any tradition, lineage or school, and it is built so that it cannot quietly become so. That is not
                        distance from the traditions. It is how we try to serve each of them on its own terms.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        It shows in structure rather than sentiment. Where traditions read a passage differently, the readings are set beside one another on the
                        page, never split into separate versions of the canon for separate audiences. Where several translations of a work exist, we present
                        them side by side, each with its provenance, and appoint no official one. Where a rendering is reviewed for doctrinal accuracy, it is
                        reviewed by qualified scholars of the tradition concerned, who are named and credited for that work.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Respect is kept or lost in small places — which canon opens first, which translation sits at the top of a page, whether a word is
                        spelled <em>sutta</em>, <em>sūtra</em> or <em>sutra</em>. We treat those as decisions with consequences, taken once and applied
                        consistently, rather than as defaults nobody chose.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">What we give back</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The canon here is shared, never enclosed. Every organisation that studies on Bodhi Central reads the same canon, and it is never divided
                        up, never held as a private copy for one organisation, and never resold.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Our licence covers only our own work. The teachings belong to no one, and we claim nothing over them. What we publish under CC-BY is
                        what we made — our translations, notes, alignments and cross-references — and anyone may build on it, provided the translators and
                        reviewers who made it are credited. Much of this scholarship is offered unpaid or well below its worth, and their names should travel
                        with it.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We are one of several organisations doing this work, and the others have been at it longer. Our own research has taken us to a canonical
                        transmission and into conversations with teachers and students, and we are still learning from both. Wherever we can give something back
                        to the field on terms nobody has to negotiate, we do.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">
                        You should be able to tell what you are reading
                    </h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        When the Buddha's words were first translated into Tibetan, translators worked to an approved terminology, and earlier translations were
                        revised to match it. We hold ourselves to the same principle: you should be able to tell who made what you are reading, and who stood
                        behind it.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Every text we publish carries two records. A <strong>rights record</strong>: what the source is, under what licence, and what we are
                        permitted to do with it. And a <strong>provenance record</strong>: who made this rendering and from what, by what method, who edited it,
                        who reviewed it for doctrinal accuracy, and who put their name to publishing it. Not a team, not a role — a person.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Machine assistance helps a canon this size reach readers who would otherwise have nothing in their language, and we would rather show it
                        than hide it. Every rendering carries a mark you can see. At the top are translations made by qualified human translators and reviewed
                        by scholars of the tradition concerned. At the bottom are machine drafts of texts no one has yet translated: reading aids, not
                        scholarship, labelled as drafts and never cited as authoritative.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We claim only the rights we have actually earned. Where a rendering is substantially machine-produced, we say so, and we assert no
                        ownership of it. Nothing is published until both records are complete.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">How this is paid for</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central is a for-profit company, and it charges for some things. You should know which, and why.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The organisations that have carried this work — SuttaCentral, 84000, the translation projects and the digital archives — have done it on
                        donation, and done it well. We have taken a different route to the same end, and it rests on a single rule:{" "}
                        <strong>texts free, tools paid.</strong>
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Everything we publish is free to read — the canon, its translations, footnotes, cross-references, essays, timelines and Learning Paths —
                        and every recording is free to play. A subscription pays for the tools you study <em>with</em>: notes and highlights, categorised
                        bookmarks, a personal library and workspaces, advanced search, and multimedia synchronised to the text wherever a recording or asset
                        exists. Prices are published, they are the same for everyone in a region, and they are set to what people in that region can actually
                        pay rather than to what a market will bear.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Supporting the work of translation has a long and honoured place in Buddhist history, and Patron is offered in that spirit. It pays for
                        translation and editorial work on a canon that stays free for everyone. It unlocks no study tool that Standard does not already have,
                        and once a year we publish a written account of what it funded.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">What we will not do</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We have three lines of revenue and they are exhaustive: subscriptions from readers, subscriptions from organisations running their own
                        study environments, and services to those organisations. There is no fourth.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We carry no advertising. We do not sell, broker or otherwise hand on any record of what you read — not as a policy that might quietly
                        lapse, but as a limit on what this business is permitted to become. A record of how people read religious texts is unusually sensitive,
                        and for some readers it is a matter of personal safety. Its commercial value is exactly what this rule gives up, which is why we have
                        written it down now, rather than when someone is in a position to be tempted.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        And the canon is never forked, never private to one organisation, and never resold.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Who this is for</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Students who study with a teacher and want the text in front of them, during a teaching and afterwards. Teachers preparing a class from
                        the primary texts. Readers meeting these texts for the first time. Most of what is here needs no account at all, and the part that does
                        — keeping your place, saving what you are reading — is free.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        It will also be for the organisations that teach: monasteries, dharma centres, Buddhist universities and colleges, retreat centres,
                        translation projects and lay study groups, each able to run its own study environment on one shared canon. We run our own site as the
                        first of them, which keeps us honest — anything we would offer a partner, we have already had to live with ourselves.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 pb-20 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Where to begin</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        If you study with a teacher, begin where your teacher points you. If you are new, the curricula of the traditions and our Learning Paths
                        show how others have entered this material, and when you want to go further, look for a teacher. Reading needs no account, no trial and
                        no card.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch py-10 md:mt-8 md:flex-row md:self-center">
                        <Button href="/reader" size="lg">
                            Start reading
                        </Button>
                        <Button href="/plans" size="lg">
                            What a subscription includes
                        </Button>
                    </div>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        How we handle your data and the material we serve is set out in our{" "}
                        <a href="/terms-of-use" className="hover:text-brand-tertiary-hover text-brand-tertiary">
                            Terms of Use
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="hover:text-brand-tertiary-hover text-brand-tertiary">
                            Privacy Policy
                        </a>
                        . The projects, translators and reviewers whose work is here are named in our{" "}
                        <a href="/privacy-policy" className="hover:text-brand-tertiary-hover text-brand-tertiary">
                            Acknowledgements
                        </a>{" "}
                        .
                    </p>
                </div>
            </section>
            <section>
                <CTACenteredPlansSignupFeaturedBgImage />
            </section>
        </main>
    );
}

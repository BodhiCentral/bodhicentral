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
                        Open to everyone. Enclosed by no one.
                    </h1>
                    <p className="mt-2 text-lg text-tertiary md:mt-8 md:text-xl">
                        Bodhi Central is a study platform for the Buddhist canon — the Pali Canon and the Tibetan Kangyur and Tengyur, in their own languages
                        and in modern translation, with the tools that serious reading asks for. Everything we publish is free to read.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Why we're building this</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The texts have survived. Across two and a half thousand years — through oral recitation, palm leaf, woodblock, print and now the network
                        — communities have carried this material forward at real cost. Copying it, translating it, disputing it, correcting it, and keeping it
                        legible for whoever came next. That is an extraordinary act of collective care, and it is still going on today.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        What has not always survived is the way in. Much of the canon sits in languages few readers know, in editions few readers can reach,
                        indexed by catalogues few readers can navigate. The teaching is public. The path to it often is not.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central exists to shorten that path, and to do nothing else. We add nothing to the tradition and we stand between no one and it.
                        What we build is the connective tissue — the alignments, the cross-references, the notes, the search — that lets a reader find what they
                        are looking for, see where it sits, and read it properly.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">What we are building</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        One reading environment for the Buddhist canon, with the texts in their own languages beside modern translations.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        At our first public release that means <strong>the Pali Canon and the Tibetan Canon — the Degé Kangyur and Tengyur</strong>. The Chinese
                        Canon is designed into the same structure, and it is a horizon of years rather than months. We would rather say so plainly than let a
                        roadmap read as a promise.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Around the texts sits everything that makes close reading possible: alignment between a root text and its translations, passage by
                        passage; footnotes and variant readings carried with the text rather than flattened out of it; cross-references between parallel
                        passages across canons; catalogue identifiers mapped between the schemes scholars actually cite; and multimedia synchronised to the text
                        wherever a recording or asset exists.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The interface runs in English, Spanish, Traditional Chinese, Tibetan, and Thai. Translating the canon itself is a separate and far
                        slower undertaking, done by named translators rather than by interface tooling — and we keep the two clearly apart.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Alongside the reader are Learning Paths, curated routes through the material for readers who do not yet know where to begin, and
                        timelines that place teachers, texts and traditions in relation to one another.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Non-denominational by design</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central belongs to no tradition, lineage or school, and it is built so that it cannot quietly come to belong to one.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        That shows up as structure rather than as sentiment. Where traditions read a passage differently, the difference appears on the page —
                        variant readings and competing renderings set beside one another — never as separate versions of the corpus for separate audiences.
                        Where several translations of a work exist, we present them as peers, each with its provenance attached, and we do not appoint an
                        official one. Where a rendering is reviewed for doctrinal accuracy, it is reviewed by a panel drawn from the tradition concerned, and
                        that panel is named and credited. When a panel declines a rendering, that decision is recorded too: knowing what was turned down is part
                        of what makes the rest worth trusting.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Neutrality is lost in small places — which canon opens first, which translation sits at the top of a page, whether a word is spelled{" "}
                        <em>sutta</em>, <em>sūtra</em> or <em>sutra</em>. We treat those as editorial decisions with consequences, taken once and applied
                        consistently, rather than as defaults that nobody chose.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">In service of living traditions</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Nothing here replaces practice, a teacher or a lineage, and nothing here is offered as a substitute for one. A platform can put a text
                        in front of you and tell you what is known about it. The rest happens where it has always happened.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        So we build to give back rather than to enclose. The corpus is shared infrastructure: never forked, never held as a private copy for one
                        customer, never resold. Our own translations and editorial work are published under CC-BY — one step from the CC0 that SuttaCentral
                        uses, close enough to interoperate with the rest of the field, asking only that credit travels with the work. Translators and reviewers
                        are named on what they produced. That matters in a field where a great deal of this scholarship is done unpaid or well below rate, and
                        where a tradition is entitled to see who stood behind a rendering.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We are one of several organisations doing this work, and the others have been at it longer. Wherever we can give something back to the
                        field on terms nobody has to negotiate, we do.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">
                        You should be able to tell what you are reading
                    </h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        A digital canon is only as good as what it can tell you about itself.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Every text we publish carries two records. A <strong>rights record</strong>: what the source is, under what licence, and what we are
                        permitted to do with it. And a <strong>provenance record</strong>: who made this rendering and from what, by what method, who edited it,
                        who reviewed it for doctrinal accuracy, and who put their name to publishing it. Not a team, not a role — a person.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Machine assistance is part of how a canon this size reaches the readers who need it, and we would far rather show you that than hide it.
                        Every rendering carries a tier you can see. At the top are translations made by qualified human translators and reviewed by a panel from
                        the tradition concerned. At the bottom are drafts that make a never-translated commentary readable for the first time — genuinely
                        useful, plainly labelled as drafts, never presented as scholarship and never cited as authoritative.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We also claim only the rights we have actually earned. Where a rendering is substantially machine-produced, we say so, and we assert no
                        ownership of it. Nothing enters the corpus until both records are complete: an incomplete record stops publication rather than raising a
                        warning.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex w-full flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">How this is paid for</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Bodhi Central is a for-profit company doing work the Buddhist world has almost always funded by donation. That deserves an explanation
                        rather than a footnote.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The organisations that have carried this work — SuttaCentral, 84000, the translation projects and the digital archives — have done it on
                        donation, and done it well. We have taken a different route to the same end. A corpus meant to be here in twenty years is hard to
                        promise on an annual appeal; and a company that earns its keep from the people it serves answers to them continuously, rather than to a
                        funder periodically. That a livelihood can be both profitable and ethical is not a modern accommodation. It is Right Livelihood, held in
                        common by every tradition this platform serves, and we would rather be judged by it than invoke it.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        So the boundary is a single rule: <strong>texts free, tools paid.</strong>
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Everything we publish is free to read — the canon, its translations, footnotes, cross-references, essays, timelines and Learning Paths.
                        A subscription pays for the tools you study <em>with</em>: notes and highlights, categorised bookmarks, a personal library and
                        workspaces, advanced search, and synchronised reading where a recording exists. Prices are published, they are the same for everyone in
                        a region, and they are set to what people in that region can actually pay rather than to what a market will bear.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Patron is a supporter tier and we sell it as one. It pays for translation and editorial work on a corpus that stays free for everyone.
                        It unlocks no study tool that Standard does not already have, and once a year we publish a written account of what it funded. A company
                        asking for support above the price of its own product owes that account.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">What we will not do</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        TWe have three lines of revenue and they are exhaustive: subscriptions from readers, subscriptions from organisations running their own
                        study environments, and services to those organisations. There is no fourth.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        We carry no advertising. We do not sell, broker or otherwise hand on any record of what you read — not as a policy that might quietly
                        lapse, but as a limit on what this business is permitted to become. A platform holding a record of how people read religious texts holds
                        unusually sensitive material, and the commercial value of that record is exactly what this rule gives up. Which is the point of writing
                        it down now, rather than when someone is in a position to be tempted.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        And the canon is never forked, never private to one customer, and never resold.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Who this is for</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        Anyone who wants to read and learn. Most of what is here needs no account at all, and the part that does — keeping your place, saving
                        what you are reading — is free.
                    </p>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        It is also for the organisations that teach: monasteries, dharma centres, Buddhist universities and colleges, retreat centres,
                        translation projects and lay study groups. Bodhi Central is built so that those organisations can run their own study environments on
                        it, sharing one canon rather than each rebuilding it. We run our own site as the first of them, which is what keeps us honest — anything
                        we would offer a partner, we have already had to live with ourselves.
                    </p>
                </div>
            </section>
            <section className="mx-auto w-3xl px-4 pb-20 md:px-8">
                <div className="mx-auto flex flex-col">
                    <h2 className="text-display-md font-extralight text-brand-800 md:text-display-lg dark:text-brand-400">Begin anywhere</h2>
                    <p className="mt-4 max-w-2xl text-md text-tertiary md:mt-6 md:text-lg">
                        The canon is open and most of it needs nothing from you — no account, no trial, no card. Make an account when you want your place kept
                        and your library saved. Everything else can wait until you have read something.
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
                        &{" "}
                        <a href="/privacy-policy" className="hover:text-brand-tertiary-hover text-brand-tertiary">
                            Privacy Policy
                        </a>
                        . The projects, translators and reviewers whose work is here are named in our{" "}
                        <a href="/privacy-policy" className="hover:text-brand-tertiary-hover text-brand-tertiary">
                            Acknowledgements
                        </a>{" "}
                        page.
                    </p>
                </div>
            </section>
            <section>
                <CTACenteredPlansSignupFeaturedBgImage />
            </section>
        </main>
    );
}

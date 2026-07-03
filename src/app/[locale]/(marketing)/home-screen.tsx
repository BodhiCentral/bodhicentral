"use client";


import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { FeaturesThreePillars } from "@/components-custom/sections/features-three-pillars";
import { CTACenteredPlansSignupFeaturedBgImage } from "@/components-custom/sections/cta-centered-plans-signup-featured-bg-image";
import { AttributionsAffiliationsBanner } from "@/components-custom/sections/attributions-affiliations-banner";
import Image from 'next/image';
import "@/styles/home-hero.css";

export const HomeScreen = () => {
    const clipboard = useClipboard();

    return (
        <main className="relative overflow-hidden">

            {/* Hero Section */}
            <section className="hero relative flex flex-col items-center justify-center w-full pt-16 pb-28 h-[calc(100vh)] bg-brand-700/70 bg-radial-[at_68%_50%] from-ink-800/20 via-brand-900/40 via-15% to-brand-950 dark:bg-linear-to-b dark:bg-radial-[at_68%_50%] dark:from-brand-950/95 dark:via-brand-900/90 dark:via-20% dark:to-black/15">
                <div className="hero-bg-grad"></div>
                <div className="hero-grain"></div>
                <div className="hero-rule"></div>

                {/* Brackground Large Mandala */}
                <svg className="hero-section-mandala" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="196" stroke="#B08D57" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="170" stroke="#B08D57" strokeWidth="0.3" />
                    <circle cx="200" cy="200" r="140" stroke="#B08D57" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="100" stroke="#B08D57" strokeWidth="0.3" />
                    <circle cx="200" cy="200" r="60" stroke="#B08D57" strokeWidth="0.5" />
                    {/* petals x8 */}
                    <g stroke="#B08D57" strokeWidth="0.4" fill="none">
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(0 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(45 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(90 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(135 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(180 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(225 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(270 200 200)" />
                        <ellipse cx="200" cy="130" rx="18" ry="46" transform="rotate(315 200 200)" />
                    </g>
                    {/* outer petal ring x16 */}
                    <g stroke="#B08D57" strokeWidth="0.25" fill="none">
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(0 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(22.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(45 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(67.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(90 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(112.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(135 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(157.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(180 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(202.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(225 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(247.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(270 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(292.5 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(315 200 200)" />
                        <ellipse cx="200" cy="60" rx="9" ry="28" transform="rotate(337.5 200 200)" />
                    </g>
                    {/* dot ring */}
                    <g fill="#B08D57">
                        <circle cx="200" cy="4" r="1.5" transform="rotate(0 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(45 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(90 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(135 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(180 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(225 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(270 200 200)" />
                        <circle cx="200" cy="4" r="1.5" transform="rotate(315 200 200)" />
                    </g>
                </svg>

                <div className="hero-inner relative grid grid-cols-[1fr_1fr] items-center gap-12 z-10 px-14 pt-16 mx-auto max-w-container">
                    {/* Hero Left */}
                    <div className="hero-left">
                        <div className="eyebrow">
                            <div className="eyebrow-line"></div>
                            <div className="eyebrow-text">Buddhist Paths & Scriptures</div>
                        </div>
                        <h1 className="hero-headline text-display-lg md:text-display-xl lg:text-display-3xl font-extralight text-white text-shadow-md text-shadow-gray-900 dark:text-shadow-gray-950">
                            Gateways to <br /> the <span className="text-brand-500 lg:text-display-5xl font-extralight italic">Awakening</span>
                        </h1>
                        <p className="hero-sub mt-4 max-w-xs sm:max-w-sm md:max-w-xl text-md text-balance text-brand-200 dark:text-brand-100 md:mt-6 md:text-lg">
                            Buddha's message to humanity have illuminated the nature of mind for 2,500 years. Now, its most essential mainstream teachings — scriptures, paths, and transmissions — are gathered in one place, for every sincere seeker.
                        </p>
                        <div className="hero-ctas mt-8 flex w-full gap-3 md:mt-12 md:flex-row lg:items-start">
                            <Button className="cta-primary" size="md" href="/reader">Open Reader</Button>
                            <Button className="cta-secondary" color="tertiary" size="md" href="/learning-paths" iconTrailing={ArrowRight}>
                                Discover the Paths
                            </Button>

                        </div>
                    </div>
                    <div className="hero-right pt-10 lg:pt-16">
                        <div className="medallion-wrap">
                            <svg className="medallion-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Rings */}
                                <circle cx="200" cy="200" r="195" stroke="#B08D57" strokeWidth="0.6" strokeDasharray="4 6" />
                                <circle cx="200" cy="200" r="178" stroke="#B08D57" strokeWidth="0.3" />
                                <circle cx="200" cy="200" r="155" stroke="#B08D57" strokeWidth="0.8" />
                                <circle cx="200" cy="200" r="120" stroke="#B08D57" strokeWidth="0.3" />
                                <circle cx="200" cy="200" r="90" stroke="#B08D57" strokeWidth="0.6" />
                                {/* Dharma petals x8 */}
                                <g stroke="#B08D57" strokeWidth="0.6" fill="none" opacity="0.7">
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(0 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(45 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(90 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(135 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(180 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(225 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(270 200 200)" />
                                    <ellipse cx="200" cy="112" rx="22" ry="56" transform="rotate(315 200 200)" />
                                </g>
                                {/* Outer geometric star TODO: Experimatental radial background */}
                                <g stroke="#B08D57" strokeWidth="0.4" fill="rgb(203, 180, 144,0.1)" opacity="0.45">
                                    <polygon points="200,12 230,168 380,200 230,232 200,388 170,232 20,200 170,168" />
                                </g>
                                {/* Inner circle fill */}
                                <circle cx="200" cy="200" r="88" fill="rgba(26,23,20,0.35)" stroke="#B08D57" strokeWidth="0.5" />
                                {/* Spoke lines */}
                                <g stroke="#B08D57" strokeWidth="0.35" opacity="0.3">
                                    <line x1="200" y1="112" x2="200" y2="88" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(45 200 200)" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(90 200 200)" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(135 200 200)" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(180 200 200)" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(225 200 200)" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(270 200 200)" />
                                    <line x1="200" y1="112" x2="200" y2="88" transform="rotate(315 200 200)" />
                                </g>
                                {/* dot accents on outer ring */}
                                <g fill="#B08D57" opacity="0.5">
                                    <circle cx="200" cy="5" r="2" transform="rotate(0 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(45 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(90 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(135 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(180 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(225 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(270 200 200)" />
                                    <circle cx="200" cy="5" r="2" transform="rotate(315 200 200)" />
                                </g>
                            </svg>
                            {/* Center symbol */}
                            <div className="medallion-inner bg-radial from-white from-0% via-brand-400 via-57%  to-brand-50/75 to-76%">
                                <Image src="/ornaments/golden-wheel-280px.webp" style={{ width: "290px", height: "290px" }} alt="Medallion Inner" width={290} height={290} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Right */}

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-num">3</span>
                        <span className="stat-label">Canonical Traditions</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">6+</span>
                        <span className="stat-label">Paths of Study & Practice</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">∞</span>
                        <span className="stat-label">Open to Seekers</span>
                    </div>
                </div>
                {/* Scroll cue */}
                <div className="scroll-cue">
                    <span className="scroll-cue-text">Explore</span>
                    <div className="scroll-cue-line"></div>
                </div>
            </section>
            <FeaturesThreePillars />
            <CTACenteredPlansSignupFeaturedBgImage />
            <AttributionsAffiliationsBanner />
        </main >


    );
};

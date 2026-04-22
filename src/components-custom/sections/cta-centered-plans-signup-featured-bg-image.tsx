"use client"

import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";

export const CTACenteredPlansSignupFeaturedBgImage = () => {
    return (
        <section className="relative bg-brand-section py-16 md:py-24 overflow-hidden bg-[url('/people-seating-on-lake-and-mountains.webp')] bg-cover bg-center h-[78vh]">

            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="hero-bg-grad"></div>
                <div className="hero-grain"></div>
                {/* Brackground Large Mandala */}
                <svg className="hero-mandala-right absolute -right-15 top-[50%] w-165 h-165 opacity-60" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="flex flex-col justify-center text-center max-w-3xl mx-auto">
                    <h2 className="text-display-md font-light text-white text-shadow-sm text-shadow-gray-800 md:text-display-3xl">Start reading, reflecting, and growing, together.</h2>
                    <p className="mt-4 text-lg font-medium text-tertiary_on-brand md:mt-5 md:text-xl text-shadow-xs text-shadow-neutral-950">Explore multiple Buddhist sutras and shastras from all traditions, highlight what matters, take personal notes -- all in one unified environment.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button href="/reader" iconTrailing={ArrowRight} size="lg">Get started - it's free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

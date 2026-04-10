import { Button } from "@/components/base/buttons/button";

export const CTACenteredPlansSignup = () => {
    return (
        <section className="relative bg-brand-section py-16 md:py-24 overflow-hidden">

            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="hero-bg-grad"></div>
                <div className="hero-grain"></div>
                {/* Brackground Large Mandala */}
                <svg className="hero-mandala-left absolute -left-15 top-[50%] w-165 h-165 opacity-20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-md font-extralight text-primary_on-brand md:text-display-lg">Sign up for a free account</h2>
                    <p className="mt-4 text-lg font-light text-tertiary_on-brand md:mt-5 md:text-xl">Join thousands of people using Bodhi Central.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button href="/plans" color="secondary" size="lg" className="shadow-xs ring-0">
                            PLANS
                        </Button>
                        <Button href="/sign-up" size="lg">SIGN UP</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

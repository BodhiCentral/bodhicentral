import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";

export const StillHaveQuestions = () => {

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-primary border border-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:px-8 md:py-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="/placeholder-image-landscape.svg"
                            alt="placeholder"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="/placeholder-image-landscape.svg"
                            alt="placeholder"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="/placeholder-image-landscape.svg"
                            alt="placeholder"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="md">Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

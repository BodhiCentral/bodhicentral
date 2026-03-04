"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { BodhicentralLogoMinimal } from "@/components/foundations/logo/bodhicentral-logo-minimal";
import { signUp, signInWithGoogle } from "@/app/(login)/actions";

export const SignupCardCombined = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");
    const message = searchParams.get("message");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        await signUp(formData);
        setIsLoading(false);
    };

    return (
        <section className="min-h-screen bg-primary px-4 py-12 sm:bg-secondary md:px-8 md:pt-24 md:pb-[270px]">
            <div className="flex w-full flex-col gap-6 bg-primary sm:mx-auto sm:max-w-110 sm:rounded-2xl sm:px-10 sm:py-8 sm:shadow-sm">
                <div className="flex flex-col items-center gap-6 text-center">
                    <BodhicentralLogoMinimal className="size-12 max-md:hidden" />
                    <BodhicentralLogoMinimal className="size-10 md:hidden" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary">Create an account</h1>
                        <p className="text-md text-tertiary">Sign up to get started at Bodhi Central.</p>
                    </div>
                </div>

                {error && (
                    <div className="p-3 text-sm font-medium text-red-600 bg-red-50 rounded-lg border border-red-200">
                        {error}
                    </div>
                )}

                {message && (
                    <div className="p-3 text-sm font-medium text-green-600 bg-green-50 rounded-lg border border-green-200">
                        {message}
                    </div>
                )}

                <Form
                    onSubmit={handleSignup}
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-5">
                        <Input isRequired name="name" placeholder="Enter your name" size="md" />
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="md" />
                        <Input
                            isRequired
                            type="password"
                            name="password"
                            size="md"
                            placeholder="Create a password"
                            hint="Must be at least 8 characters."
                            minLength={8}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Get started"}
                        </Button>
                        <SocialButton
                            social="google"
                            theme="color"
                            type="button"
                            className="w-full"
                            onClick={() => signInWithGoogle()}
                        >
                            Sign up with Google
                        </SocialButton>
                    </div>
                </Form>

                <div className="flex justify-center gap-1 text-center">
                    <span className="text-sm text-tertiary">Already have an account?</span>
                    <Button href="/sign-in" color="link-color" size="md">
                        Log in
                    </Button>
                </div>
            </div>
        </section>
    );
};

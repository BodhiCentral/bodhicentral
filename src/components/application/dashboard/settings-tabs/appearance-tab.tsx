"use client";

import { useTheme } from "next-themes";
import { Radio, RadioGroup } from "react-aria-components";
import { Dark, Light, System } from "@/components/application/modals/base-components/appearances";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { RadioButtonBase } from "@/components/base/radio-buttons/radio-buttons";
import { cx } from "@/utils/cx";

const themes = [
    {
        value: "system",
        label: "System preference",
        component: System,
    },
    {
        value: "light",
        label: "Light mode",
        component: Light,
    },
    {
        value: "dark",
        label: "Dark mode",
        component: Dark,
    },
];

export const AppearanceTab = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={(e) => {
                e.preventDefault();
                // Persist the theme locally in the browser via next-thems (this happens automatically when setTheme is called)
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Appearance</SectionHeader.Heading>
                        <SectionHeader.Subheading>Select your preferred display theme for the dashbord.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            {/* Display preference */}
            <div className="flex flex-col gap-5 pt-4">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8 border-b border-secondary pb-8">
                    <SectionLabel.Root size="sm" title="Display preference" description="Toggle between light and dark modes instantly." />

                    <div className="-m-4 w-screen overflow-auto p-4 lg:w-[calc(100%+48px)]">
                        <RadioGroup 
                            aria-label="Display preference" 
                            value={theme || 'system'} 
                            onChange={(value) => setTheme(value)} 
                            className="flex gap-5"
                        >
                            {themes.map((themeItem) => (
                                <Radio
                                    key={themeItem.value}
                                    value={themeItem.value}
                                    aria-label={themeItem.label}
                                    className="flex cursor-pointer flex-col gap-3"
                                >
                                    {({ isSelected, isFocusVisible }) => (
                                        <>
                                            <section
                                                className={cx(
                                                    "relative h-33 w-50 rounded-[10px] bg-utility-gray-100",
                                                    isSelected && "outline-3 outline-offset-2 outline-focus-ring ring-4 ring-brand-500/10",
                                                )}
                                            >
                                                <themeItem.component className="size-full" />

                                                {isSelected && (
                                                    <RadioButtonBase
                                                        size="md"
                                                        isSelected={isSelected}
                                                        isFocusVisible={isFocusVisible}
                                                        className="absolute bottom-2 left-2"
                                                    />
                                                )}
                                            </section>
                                            <section className="w-full text-center">
                                                <p className="text-sm font-semibold text-primary">{themeItem.label}</p>
                                            </section>
                                        </>
                                    )}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
            </div>

            <SectionFooter.Root>
                <Button size="md" color="link-gray" type="button" onClick={() => setTheme('system')}>
                    Reset <span className="max-lg:hidden"> to system</span>
                </Button>
                <SectionFooter.Actions>
                    <Button color="secondary" size="md" type="button" onClick={() => window.location.reload()}>
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" size="md">
                        Save changes
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};

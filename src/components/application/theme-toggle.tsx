"use client";

import { useEffect, useState } from "react";
import { Monitor01, Moon01, Sun } from "@untitledui/icons";
import { useTheme } from "next-themes";
import { Button as AriaButton } from "react-aria-components";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";

export const ThemeToggle = ({ className }: { className?: string }) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const Icon = !mounted || theme === "system" ? Monitor01 : resolvedTheme === "dark" ? Moon01 : Sun;
    const isReady = mounted;

    return (
        <Dropdown.Root>
            <AriaButton
                aria-label="Toggle theme"
                isDisabled={!isReady}
                className={({ isHovered, isFocusVisible, isPressed }) =>
                    cx(
                        "group flex size-10 cursor-pointer items-center justify-center rounded-lg text-fg-quaternary transition duration-100 ease-linear focus:outline-hidden",
                        isHovered && "bg-primary_hover text-fg-quaternary_hover",
                        isPressed && "bg-primary_hover text-fg-quaternary_hover",
                        isFocusVisible && "outline-2 outline-offset-2 outline-brand",
                        className,
                    )
                }
            >
                <Icon className="size-5" />
            </AriaButton>
            <Dropdown.Popover placement="bottom right" offset={8} className="w-36">
                <Dropdown.Menu onAction={(key) => setTheme(key as string)} selectedKeys={[theme || "system"]}>
                    <Dropdown.Item id="light" label="Light" icon={Sun} />
                    <Dropdown.Item id="dark" label="Dark" icon={Moon01} />
                    <Dropdown.Item id="system" label="System" icon={Monitor01} />
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

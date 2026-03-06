"use client";

import type { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { RouterProvider, I18nProvider } from "react-aria-components";

declare module "react-aria-components" {
    interface RouterConfig {
        routerOptions: {
            scroll?: boolean;
        };
    }
}

export const RouteProvider = ({ children }: PropsWithChildren) => {
    const router = useRouter();

    return (
        <RouterProvider navigate={router.push}>
            <I18nProvider locale="en-US">{children}</I18nProvider>
        </RouterProvider>
    );
};

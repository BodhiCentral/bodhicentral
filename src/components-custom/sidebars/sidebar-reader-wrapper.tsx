"use client";

import { Menu02, Building08, BookOpen01, Headphones01, Image01, VideoRecorder, GraduationHat02, HelpOctagon } from "@untitledui/icons";
import { SidebarReaderLeft } from "@/components-custom/sidebars/sidebar-reader-left";
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";

export const SidebarReaderWrapper = () => {
    return (
        <>
            <SidebarReaderLeft
                activeUrl=""
                items={[
                    {
                        label: "Canon Navigation",
                        href: "",
                        icon: Building08,
                        onClick: openCanonNavigator,
                    },
                    {
                        label: "Table of Contents",
                        href: "",
                        icon: Menu02,
                    },
                    {
                        label: "Main Body Outline",
                        href: "",
                        icon: BookOpen01,
                    },
                ]}
                footerItems={[
                    {
                        label: "Learning Paths",
                        href: "",
                        icon: GraduationHat02,
                    },
                    {
                        label: "Video Carousel",
                        href: "",
                        icon: VideoRecorder,
                    },
                    {
                        label: "Illustrations Carousel",
                        href: "",
                        icon: Image01,
                    },
                    {
                        label: "Quizzes",
                        href: "",
                        icon: HelpOctagon,
                    },
                    {
                        label: "Audio Carousel",
                        href: "",
                        icon: Headphones01,
                    },
                ]}
            />
        </>
    );
}
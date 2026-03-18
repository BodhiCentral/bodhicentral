"use client";
import { BodhicentralLogoMinimal } from "@/components/foundations/logo/bodhicentral-logo-minimal";


export default function ReaderPage() {
    return (
        <>
            <div className="bg-olive-100 dark:bg-olive-800 h-screen">
                <nav className="fixed z-100 top-0 mx-auto flex w-full h-12 bg-white dark:bg-white p-4 items-center justify-between drop-shadow-sm">
                    <div className="flex items-center gap-2">
                        <BodhicentralLogoMinimal />
                        <h2 className="text-lg font-bold">READER</h2>
                    </div>
                    <h2>Section / Text on display</h2>
                    <h2>Nav</h2>
                </nav>
                <div className="relative mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-[2.25fr_0.75fr] gap-2 pt-12 overflow-hidden">
                    <div id="reader-nav-container" className="absolute top-16 left-4 bottom-4 w-96 z-50 bg-white dark:bg-white rounded-xl p-8">
                        <div id="reader-nav" className="flex w-full h-full bg-white dark:bg-white items-center justify-center">
                            <h2>Canonical Navigation</h2>
                        </div>
                    </div>
                    <div id="reader-content-container" className="w-full h-full">
                        <div id="reader-content" className="flex w-full h-full p-4 items-center justify-center">
                            <h2>Text Header</h2>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <div id="reader-auxiliary" className="flex w-full h-full bg-white dark:bg-white p-4 items-center justify-center">
                            <h2>Auxiliary</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

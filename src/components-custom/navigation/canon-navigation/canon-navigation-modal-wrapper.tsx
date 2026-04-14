"use client";

import { useEffect, useState } from "react";
import { HelpCircle } from "@untitledui/icons";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/canon-modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { CanonTreeViewSM } from "@/components/application/tree-view/canon-tree-view-sm";
import { Heading as AriaHeading } from "react-aria-components";
import { TextTableFilter } from "@/components-custom/filters/text-table-filter";
import { TextTableAlternatingFills } from "@/components-custom/tables/text-table";

export const openCanonNavigator = () => {
    if (typeof window !== "undefined") {
        setTimeout(() => {
            window.dispatchEvent(new CustomEvent("open-canon-navigation"));
        }, 10);
    }
};

export const closeCanonNavigator = () => {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("close-canon-navigation"));
    }
};

/**
 * This is a utility hook that handles the open/close state of the calendar modal.
 * It listens to window events to open/close from anywhere.
 */
export const useModalState = (defaultValue: boolean = false) => {
    const [isOpen, setIsOpen] = useState(defaultValue);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        const handleClose = () => setIsOpen(false);

        window.addEventListener("open-canon-navigation", handleOpen);
        window.addEventListener("close-canon-navigation", handleClose);

        return () => {
            window.removeEventListener("open-canon-navigation", handleOpen);
            window.removeEventListener("close-canon-navigation", handleClose);
        };
    }, []);

    return [isOpen, setIsOpen] as const;
};

export const CanonNavigationModal = () => {
    const [isOpen, setIsOpen] = useModalState();

    return (
        <ModalOverlay isOpen={isOpen} onOpenChange={setIsOpen} isDismissable={true}>
            <Modal>
                <Dialog>
                    <div className="flex flex-row gap-0 w-full h-full shadow-2xl rounded-xl">
                        {/* Canon Navigator */}
                        <div className="relative w-140 sm:min-w-110 flex flex-col overflow-hidden rounded-l-2xl bg-secondary border-r border-secondary">
                            {/* Header */}
                            <div className="h-auto flex flex-col gap-0.5 px-4 pt-4 sm:px-6 sm:py-4 bg-tertiary dark:bg-neutral-900 border-b border-secondary">
                                <AriaHeading slot="title" className="text-display-xs font-light text-brand-primary">
                                    Canon Navigation
                                </AriaHeading>
                            </div>
                            {/* Body */}
                            <div className="mx-auto w-full overflow-y-auto max-h-full scrollbar-hide flex flex-col flex-1 gap-0.5 px-4 py-6 sm:px-6 sm:py-6">
                                <CanonTreeViewSM />
                            </div>
                            {/* Footer */}
                            <div className="z-10 flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pt-4 sm:pb-4 bg-tertiary dark:bg-neutral-900 border-t border-secondary">
                                <Button color="secondary" size="sm">
                                    Reset session
                                </Button>
                                <Button color="primary" size="sm" onClick={() => setIsOpen(false)}>
                                    Save this selection
                                </Button>
                            </div>
                        </div>
                        {/* Text Listing from Canon Navigator Selections */}
                        <div className="relative w-full flex flex-col  overflow-hidden rounded-r-3xl bg-secondary">
                            <CloseButton onClick={() => setIsOpen(false)} theme="light" size="sm" className="absolute top-3 right-3 sm:top-4 sm:right-4" />
                            <div className="h-auto flex flex-row gap-6 items-center justify-between pl-4 pr-20 pt-4 sm:pl-6 sm:pt-7 bg-secondary">

                                <TextTableFilter />
                            </div>
                            <div className="mx-auto w-full overflow-y-auto max-h-full scrollbar-hide flex flex-col flex-1 gap-0.5 px-4 sm:px-6 sm:pt-6">
                                <TextTableAlternatingFills />
                            </div>
                        </div>
                    </div>


                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};

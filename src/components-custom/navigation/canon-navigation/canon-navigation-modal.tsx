"use client";

import { useEffect, useState } from "react";
import { HelpCircle } from "@untitledui/icons";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { CanonTreeViewSM } from "@/components/application/tree-view/canon-tree-view-sm";
import { Heading as AriaHeading } from "react-aria-components";

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
                    <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-120">
                        <CloseButton onClick={() => setIsOpen(false)} theme="light" size="sm" className="absolute top-3 right-3 sm:top-4 sm:right-4" />
                        <div className="flex flex-col gap-0.5 px-4 pt-4 sm:px-6 sm:py-4 bg-tertiary border-b border-secondary">
                            <AriaHeading slot="title" className="text-display-xs font-semibold text-brand-primary">
                                Canon Navigation
                            </AriaHeading>
                            <p className="text-md text-tertiary">Navigate texts in all collections.</p>
                        </div>
                        <div className="mx-auto w-full overflow-y-auto h-148 scrollbar-hide flex flex-col gap-0.5 px-4 py-6 sm:px-6 sm:py-6">
                            <CanonTreeViewSM />
                        </div>
                        <div className="z-10 flex flex-1 flex-col-reverse gap-3 p-4 pt-4 sm:flex-row sm:items-center sm:justify-end sm:px-6 sm:pt-6 sm:pb-6 bg-tertiary border-t border-secondary">
                            <Button onPress={() => setIsOpen(false)} size="md" color="link-gray" iconLeading={HelpCircle} className="mr-auto max-sm:hidden">
                                Need help?
                            </Button>
                            <Button color="secondary" size="md">
                                Reset
                            </Button>
                            <Button color="primary" size="md" onClick={() => setIsOpen(false)}>
                                Save this navigation
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};

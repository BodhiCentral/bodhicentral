"use client";

import type { DialogProps as AriaDialogProps, ModalOverlayProps as AriaModalOverlayProps } from "react-aria-components";
import { Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Modal as AriaModal, ModalOverlay as AriaModalOverlay } from "react-aria-components";
import { cx } from "@/utils/cx";

export const DialogTrigger = AriaDialogTrigger;

export const ModalOverlay = (props: AriaModalOverlayProps) => {
    return (
        <AriaModalOverlay
            {...props}
            className={(state) =>
                cx(
                    "fixed inset-0 z-100 flex w-full h-full bg-overlay/20 px-13 pt-20 outline-hidden",
                    state.isEntering && "duration-400 ease-out animate-in fade-in",
                    state.isExiting && "duration-400 ease-in animate-out fade-out",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        />
    );
};

export const Modal = (props: AriaModalOverlayProps) => (
    <AriaModal
        {...props}
        className={(state) =>
            cx(
                "flex max-h-full w-full outline-hidden border border-secondary rounded-t-xl",
                state.isEntering && "duration-400 ease-out animate-in slide-in-from-bottom",
                state.isExiting && "duration-400 ease-in animate-out slide-out-to-bottom",
                typeof props.className === "function" ? props.className(state) : props.className,
            )
        }
    />
);

export const Dialog = (props: AriaDialogProps) => (
    <AriaDialog {...props} className={cx("flex w-full outline-hidden", props.className)} />
);

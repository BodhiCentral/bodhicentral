"use client";

import { Button } from "@/components/base/buttons/button";
import { Plus } from "@untitledui/icons";

export default function MyDeskPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Desk Spaces</h1>
            <h2 className="text-2xl font-semibold">Create your own desk space</h2>
            <p className="text-lg text-tertiary">Organize your study space with your own desk space</p>

            <Button href="/my-desk/create" color="secondary" size="lg" iconLeading={Plus}>
                Create Desk Space
            </Button>
        </div>
    );
}
"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/action";
import { useUser, SignInButton } from "@clerk/nextjs";

function NewDocumentButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { isSignedIn } = useUser();

    const handleCreateNewDocument = () => {
        if (!isSignedIn) return; // Prevent request if not signed in

        startTransition(async () => {
            const { docId } = await createNewDocument();
            if (docId) {
                router.push(`/doc/${docId}`);
            }
        });
    };

    return (
        <>
            {!isSignedIn ? (
                <SignInButton mode="modal">
                    <Button>Sign in to Create</Button>
                </SignInButton>
            ) : (
                <Button onClick={handleCreateNewDocument} disabled={isPending}>
                    {isPending ? "Creating..." : "New Document"}
                </Button>
            )}
        </>
    );
}

export default NewDocumentButton;

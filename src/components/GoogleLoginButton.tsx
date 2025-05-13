"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function GoogleLoginButton() {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div>
            {session ? (
                <>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
            ) : (
                <button onClick={() => signIn("google")}>Sign in with Google</button>
            )}
        </div>
    );
}
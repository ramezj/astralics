'use client'
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

export function GoogleSignIn() {
    return (
        <>
        <Button variant="outline" className="w-full" onClick={(() => {signIn("google", { callbackUrl: "/overview", redirect:true })})}>
              Continue with Google
            </Button>
        </>
    )
}
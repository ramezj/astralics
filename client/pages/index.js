import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "@/components/navbar"

export default function Component() {
  const { data: session } = useSession()
  return (
    <>
    <Navbar session={session}/>
    </>
  )
}
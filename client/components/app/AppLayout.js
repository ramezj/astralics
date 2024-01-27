import { useSession, signIn, signOut } from "next-auth/react"
import AppNavbar from "./AppNavbar"
import Header from "../NewNav/Header"
import Sidebar from "./Sidebar"

export default function AppLayout(props) {
    const { data: session } = useSession()
    return (
        <div className='bg-white dark:bg-zinc-950 h-full min-h-screen bg-bottom bg-no-repeat w-full'>
        <Header session={session} />
        {/* <Sidebar /> */}
        {props.children}
        </div>
    )
}
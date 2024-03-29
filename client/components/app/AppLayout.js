import { useSession, signIn, signOut } from "next-auth/react"
import AppNavbar from "./AppNavbar"
import Navbar from "../navbar"
import Sidebar from "./Sidebar"

export default function AppLayout(props) {
    const { data: session } = useSession()
    return (
        <div className='bg-white dark:bg-black h-full min-h-screen bg-bottom bg-no-repeat w-full'>
        <Navbar session={session}/>
        {/* <Sidebar /> */}
        {props.children}
        </div>
    )
}
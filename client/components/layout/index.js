import Navbar from "../navbar";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout(props) {
    const { data: session } = useSession()
    return (
        // background3
        <div className='background3 h-full min-h-screen bg-bottom bg-no-repeat w-full'>
            {/* bg-[#05050a] */}
        <Navbar session={session}/>
        {props.children}
        </div>
    )
}
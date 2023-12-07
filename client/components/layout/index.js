import Navbar from "../navbar";
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "../Nav";

export default function Layout(props) {
    const { data: session } = useSession()
    return (
        <div className='backgroundColor h-full min-h-screen bg-bottom bg-no-repeat w-full'>
            {/* bg-[#05050a] */}
        <Nav session={session}/>
        {props.children}
        </div>
    )
}
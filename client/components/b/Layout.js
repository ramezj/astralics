import Navbar from "../navbar";
import { useSession, signIn, signOut } from "next-auth/react"

export default function BoardLayout(props) {
    const { data: session } = useSession()
    return (
        <div className='bg-neutral-900 h-full min-h-screen bg-bottom bg-no-repeat w-full'>
            {/* bg-[#05050a] */}
        {/* <Navbar session={session}/> */}
        {props.children}
        </div>
    )
}
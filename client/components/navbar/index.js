import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Navbar(props) {
    const { data: session } = useSession()
    const signUserIn = async () => {
        signIn('google');
    }
    return (
        <>
        <div className="navbar bg-transparent">
  <div className="flex-1 mt-4 ml-4">
        <Link className="btn btn-ghost font-extrabold normal-case text-xl" href='/'>BlitzFeedback</Link>
  </div>
  <div className="flex-none">
    {
        session 
        ? 
        <>
        <div className="dropdown dropdown-end mr-4 mt-4">
        <Link href="/app">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={session.user.image}/>
        </div>
        </label>
        </Link>
        </div>
        </>
        : 
        <>
        <button className="btn mr-4 mt-4 normal-case text-white" onClick={signUserIn}>Get Started</button>
        </>
    }
  </div>
</div>
        </>
    )
}
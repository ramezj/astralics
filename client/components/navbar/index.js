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
  <div className="navbar-start mt-2 ml-2">
  <Link className="btn btn-ghost font-extrabold normal-case text-xl" href='/'>Blitz</Link>
  </div>
  <div className="navbar-end mt-2 mr-2 sm:gap-1">
    <Link className='btn btn-ghost normal-case' href='/pricing'>Pricing</Link>
    <Link className='btn btn-ghost normal-case' href='/documentation'>Docs</Link>
    { 
    session 
    ? 
    <>
    <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn bg-transparent border-none hover:bg-gray-950">
    <div className='flex items-center gap-2'>
            <img className='w-8 rounded-full' src={session.user.image}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
    </div>        
  </label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-[#0d041e] w-52">
    <li><Link href='/settings'>Account Settings</Link></li>
    <li><Link href='/app'>Dashboard</Link></li>
    <li><a onClick={(() => {signOut()})}>Log out</a></li>
  </ul>
</div>
    </>
    : 
    <>
    <button className="btn normal-case text-white bg-[#210a4d] border-none hover:bg-[#2c0e63]" onClick={signUserIn}>Get Started, It's free</button>
    </>
    }
  </div>
</div>
        </>
    )
}
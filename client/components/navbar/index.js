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
  <Link className="btn btn-ghost font-extrabold normal-case text-xl" href='/'>BlitzFeedback</Link>
  </div>
  {/* <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Pricing</a>
  </div> */}
  <div className="navbar-end mt-2 mr-2">
    { 
    session 
    ? 
    <>
    <button className="btn btn-ghost">
      <div className="indicator">
      <div className='flex items-center gap-2'>
            <img className='w-8 rounded-full' src={session.user.image}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
      </div>
    </button>
    </>
    : 
    <>
    <button className="btn normal-case text-white" onClick={signUserIn}>Get Started</button>
    </>
    }
  </div>
</div>
        </>
    )
}
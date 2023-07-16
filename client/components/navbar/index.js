import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar(props) {
    const signUserIn = async () => {
        signIn('google');
    }
    return (
        <>
        <div className="navbar bg-gray-950">
  <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">BlitzFeedback</a>
  </div>
  <div className="flex-none">
    {
        props.session 
        ? 
        <>
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={props.session.user.image}/>
        </div>
        </label>
        </div>
        </>
        : 
        <>
        <button className="btn" onClick={signUserIn}>Sign In</button>
        </>
    }
  </div>
</div>
        </>
    )
}
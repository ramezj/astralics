import { useSession, signIn, signOut } from "next-auth/react"
import { GoogleSVG } from "./GoogleSVG";
import { GithubSVG } from "./GithubSVG";

export default function AuthModal() {
    const signUserIn = () => {
        signIn("google");
    }
    return (
        <>
        <div className="bg-white border border-white/10 rounded-lg">
        <center>
            <br/>
                  <h1 className="-mt-1 font-bold text-xl text-black">Sign in to your account</h1>
                  <button className='mt-4 outline-none w-4/5 py-2 bg-zinc-950 text-white rounded-lg font-medium flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  <GoogleSVG className=''/>
                  Continue with Google</button>
                  <br />
        </center>
        </div>
        </>
    )
}
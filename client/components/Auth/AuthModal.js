import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthModal() {
    const signUserIn = () => {
        signIn("google");
    }
    return (
        <>
        <div className="bg-white border border-white/10 rounded-lg">
        <center>
            <br/>
                  <h1 className="-mt-1 font-bold text-lg text-black">Authentication</h1>
                  <button className='mt-4 outline-none w-4/5 py-2 bg-zinc-950 text-white rounded-lg font-medium flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Continue with Google</button> 
                  <p className="text-xs mt-4 -mb-4 text-black font-medium">powered by lunarfeed</p>
                  <br />
        </center>
        </div>
        </>
    )
}
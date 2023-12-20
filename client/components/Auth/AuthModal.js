import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthModal() {
    return (
        <>
        <div className="backgroundColor">
        <center>
            <br/>
                  <h1 className="-mt-1 font-bold text-lg">Sign In</h1>
                  <button className='mt-4 outline-none px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signIn}>
                  Sign in with Google</button> 
                  <button className='mt-2 outline-none px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signIn}>
                  Sign in with Github</button> 
                  <p className="text-xs mt-4 -mb-4">powered by lunarfeed</p>
                  <br />
        </center>
        </div>
        </>
    )
}
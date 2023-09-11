import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react"

export default function LogOut() {
    const signUserOut = async () => {
        signOut();
      }
    return (
        <>
        <a onClick={signUserOut}
         className='
         px-3 py-2 
         bg-black bg-opacity-60 hover:bg-opacity-70
         rounded-lg 
         font-bold flex gap-2 content-center justify-center items-center
         duration-300
         cursor-pointer
         '>
        <ArrowLeftOnRectangleIcon className='text-white' width={25} height={24}/>
        </a>
        </>
    )
}
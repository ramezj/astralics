import Link from "next/link"
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function Settings() {
    return (
        <>
         <Link href='/settings' 
         className='
         px-3 py-2 
         bg-zinc-950 hover:bg-neutral-900 
         rounded-xl 
         font-bold flex gap-2 content-center justify-center items-center
         duration-300
         '>
        <AdjustmentsHorizontalIcon className='text-white' width={24} height={24}/>
        </Link>
        </>
    )
}
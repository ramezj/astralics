import Link from "next/link"
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function Settings() {
    return (
        <>
         <Link href='/settings' 
         className='
         px-3 py-2 
        bg-white 
        text-[#05050a] 
         rounded-lg 
         font-bold flex gap-2 content-center justify-center items-center
         hover:bg-gray-200
         duration-300
         '>
        <AdjustmentsHorizontalIcon className='text-black' width={24} height={24}/>
        </Link>
        </>
    )
}
import { CreditCard } from "lucide-react"
import { BanknotesIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Billing(props) {
    return (
        <>
         <Link href='/billing' className='px-5 py-2 bg-white text-black hover:bg-gray-200 rounded-xl font-bold flex justify-center items-center gap-2 duration-200'>
                <BanknotesIcon width={17} /> Billing
        </Link>
        </>
    )
}
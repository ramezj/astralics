import Link from 'next/link'

export default function Dashboard() {
    return (
        <>
        <Link href='/app' className='w-[9rem] py-2 bg-white text-black hover:bg-gray-200 rounded-lg flex gap-2 content-center justify-center items-center duration-200'>
        Dashboard 
        </Link>
        </>
    )
}
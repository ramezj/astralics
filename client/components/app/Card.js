import Link from 'next/link'
import { AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

export default function Card(props) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }
    return (
    <div className='duration-300'>
    <Link className="card w-96 bg-gray-200 dark:bg-zinc-900 cursor-pointer duration-300 outline-none rounded-lg" href={props.href}>
    <div className="card-body">
    <h2 className="card-title font-extrabold drop-shadow-lg text-black dark:text-white">{props.title}</h2>
    <br />
    <h1 className="font-medium -mb-3 duration-150 drop-shadow-lg text-black dark:text-white">{props.website}</h1>
    <div className="card-actions justify-end flex gap-6">
    {/* <span onClick={(() => {navigator.clipboard.writeText(props.href)})} className='-mt-8 -mr-2 w-14 h-10 rounded-lg justify-center items-center float-right flex bg-white dark:bg-zinc-800 duration-200 shadow-sm'>
      Copy 
    </span> */}
    <span className='-mt-8 -mr-2 w-12 h-10 rounded-lg justify-center items-center float-right flex bg-white dark:bg-zinc-800 duration-200 shadow-sm'>
    <Link href={`${props.settings}`} className='drop-shadow-lg float-right flex justify-center'>
    <AdjustmentsHorizontalIcon className='text-black dark:text-white' width={22} height={23} strokeWidth={'2'}/>
    </Link>
    </span>
    </div>
  </div>
</Link>
        </div>
    )
}
import Link from 'next/link'
import { AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { Button } from '../ui/button';

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
    <Link className="card border border-black/10 dark:border-white/10 w-96 bg-white hover:border-black/10 hover:bg-gray-200 dark:bg-zinc-950 hover:dark:bg-zinc-900 cursor-pointer duration-200 outline-none rounded-lg" href={props.href}>
    <div className="card-body items-center">
    <h2 className="card-title font-extrabold text-black dark:text-white">{props.title}</h2>
    <h1 className="font-medium  duration-150 text-black dark:text-white">{props.website}</h1>
    <div className="card-actions justify-end flex gap-6 mb-6 mt-4">
      <div className='flex flex-wrap gap-4 -mb-6'>
        <Link href={`${props.settings}`} className=''>
          <Button>
          Settings
          </Button>
        </Link>
        <Button className=''>
          Share
        </Button>
      </div>
    {/* <span className='-mt-8 -mr-2 w-12 h-10 rounded-lg justify-center items-center float-right flex bg-white dark:bg-zinc-800 duration-200 shadow-sm'>
    <Link href={`${props.settings}`} className='drop-shadow-lg float-right flex justify-center'>
    <AdjustmentsHorizontalIcon className='text-black dark:text-white' width={22} height={23} strokeWidth={'2'}/>
    </Link>
    </span> */}
    </div>
  </div>
</Link>
        </div>
    )
}
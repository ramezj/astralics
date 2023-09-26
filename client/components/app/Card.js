import Link from 'next/link'
import { AdjustmentsHorizontalIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
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
    <Link className="card w-96 shadow-lg bg-black bg-opacity-80 cursor-pointer duration-300 outline-none rounded-xl drop-shadow-2xl" href={props.href}>
    <div className="card-body">
    <h2 className="card-title font-extrabold drop-shadow-lg">{props.title}</h2>
    <br />
    <h1 className="font-medium -mb-3 duration-150 drop-shadow-lg">{props.website}</h1>
    <div className="card-actions justify-end flex gap-6">
    <span className='-mt-6 -mr-2 w-10 h-8 rounded-lg justify-center items-center float-right flex backgroundColor hover:scale-[1.18] duration-300'>
    <Link href={`${props.code}`} className='drop-shadow-lg float-right flex justify-center'>
    <CodeBracketIcon className='text-white' width={24} height={24} strokeWidth={'2'}/>
    </Link>
    </span>
    <span className='-mt-6 -mr-2 w-10 h-8 rounded-lg justify-center items-center float-right flex backgroundColor hover:scale-[1.18] duration-300'>
    <Link href={`${props.settings}`} className='drop-shadow-lg float-right flex justify-center'>
    <AdjustmentsHorizontalIcon className='text-white' width={24} height={24} strokeWidth={'2'}/>
    </Link>
    </span>
    </div>
  </div>
</Link>
        </div>
    )
}
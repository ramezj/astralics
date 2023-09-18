import React, { useState } from 'react';
import { Fragment } from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

export default function codeButton(props) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }

    function openModal() {
      setIsOpen(true)
    }
    return (
        <>
        <span className='-mt-6 -mr-2 w-10 h-8 rounded-lg justify-center items-center float-right flex backgroundColor'>
        <button className='drop-shadow-lg float-right shadow-lg flex justify-center' href='/test' >
        <CodeBracketIcon className='text-white' width={24} height={24} strokeWidth={'2'}/>
        </button>
    </span>
        </>
    )
}
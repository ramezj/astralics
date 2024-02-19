import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { Fragment, useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import toast, { Toaster } from 'react-hot-toast';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'


export default function FeedbackDemo(props) {
    const [ upvotes, setUpvotes ] = useState(props.upvotes);
    const [ title, setTitle ] = useState(props.title);
    const [ test, setTest ] = useState(props.isUpvoted)
    return (
        <>
        <div key={props.id} className="w-full flex bg-gray-200 dark:bg-zinc-900 rounded-lg items-center cursor-pointer duration-300">
        <div className="m-8 flex flex-col items-start text-left">
        <p className='text-lg font-bold text-left text-black dark:text-white'>
        {
            title.length > 100 ? `${title.substring(0,50)}...` : `${title}`
        }       
        </p>
        <p className='text-sm font-regular text-left text-black dark:text-white'>
          {props.description.length > 50 ? `${props.description.substring(0,50)}...` : `${props.description}`}
        </p>
        <div className="mt-3 -mb-2">
        {
            props.type === "bug_report"
            ? 
            <>
            <span className="mt-2 -mb-1 bg-indigo-600 text-white text-xs font-medium me-2 px-2 py-[0.2rem] rounded-sm">🐛 Bug Report</span>
            </>
            : <></>
        }
        {
            props.type === "feature_request"
            ? 
            <>
            <span className="mt-2 -mb-1 bg-yellow-600 text-white text-xs font-medium me-2 px-2 py-[0.2rem] rounded-sm">💡 Feature Request</span>
            </>
            : <></>
        }
        {
            props.type === "feedback"
            ? 
            <>
            <span className="mt-2 -mb-1 bg-green-600 text-white text-xs font-medium me-2 px-2 py-[0.2rem] rounded-sm">📝 Feedback</span>
            </>
            : <></>
        }
        </div>
        </div>
        <div className="m-6 ml-auto">
        <button
        className={`border border-black/20 dark:border-white/20 group hover:bg-blue-700 duration-300 w-[4.5rem] h-12 rounded-lg items-center flex justify-center 
        ${test ? 'bg-blue-700 hover:bg-blue-700 ' : 'bg-transparent'}`}>
        <h1 
        className={`m-1 font-bold group-hover:text-white ${test ? 'text-white dark:text-white' : 'text-black dark:text-white'}`}>
        {upvotes}</h1>
        <ChevronUpIcon 
        strokeWidth={2.5}
        className={`w-6 h-6 group-hover:text-white strokeWidth={2} ${test ? 'text-white dark:text-white' : 'text-black dark:text-white'}`}/>
        </button>
        </div>
        </div>
        </>
    )
}
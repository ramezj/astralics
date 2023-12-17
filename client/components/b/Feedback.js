import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { Fragment, useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import toast, { Toaster } from 'react-hot-toast';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

export default function Feedback(props) {
    const [ upvotes, setUpvotes ] = useState(props.upvotes);
    const [ title, setTitle ] = useState(props.title);
    const [ test, setTest ] = useState(props.isUpvoted)
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }
    const signUserIn = async () => {
        signIn('google');
    }
    const signUserOut = async () => {
      signOut();
    }
    const upvoteFeedback = async (e) => {
        const res = await fetch(`/api/feedback/upvote/${props.id}`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
        });
        const resp = await res.json();
        console.log(resp);
        if(resp.ok == true && resp.response == "Upvoted") {
          setTest(true);
          setUpvotes(upvotes+ 1);
        } else if (resp.ok == true && resp.response == "Downvoted") {
          setTest(false);
          setUpvotes(upvotes-1);
        }
        if(resp.ok == true) {
          toast.success(resp.response, {
            style: {
            borderRadius: '10px',
            },
        })
        }
        if(resp.ok == false) {
            toast.error(resp.response);
            setUpvotes(upvotes-1);
        }
    }
    return (
        <>
        <Toaster
        position="bottom-right"
        reverseOrder={true}
        />
        <div key={props.id} className="w-full flex bg-white rounded-2xl items-center cursor-pointer duration-300">
        <div className="m-8 flex flex-col items-start text-left">
        <p className='text-lg font-bold text-left text-black'>
        {
            title.length > 100 ? `${title.substring(0,50)}...` : `${title}`
        }       
        </p>
        <p className='text-xs text-left text-black'>{props.description}</p>
        {
            props.type == "🐛 Bug Report"
            ? 
            <>
            <span class="border border-white/10 mt-2 -mb-1 bg-indigo-900 text-indigo-100 text-xs font-medium me-2 px-2.5 py-[0.3rem] rounded-md dark:bg-indigo-900 dark:text-indigo-300">{props.type}</span>
            </>
            : <></>
        }
        {
            props.type == "💡 Feature Request"
            ? 
            <>
            <span class="border border-white/10 mt-2 -mb-1 bg-yellow-900 text-yellow-100 text-xs font-medium me-2 px-2.5 py-[0.3rem] rounded-md dark:bg-indigo-900 dark:text-indigo-300">{props.type}</span>
            </>
            : <></>
        }
        {
            props.type == "📝 Feedback"
            ? 
            <>
            <span class="border border-white/10 mt-2 -mb-1 bg-green-900 text-green-100 text-xs font-medium me-2 px-2.5 py-[0.3rem] rounded-md dark:bg-indigo-900 dark:text-indigo-300">{props.type}</span>
            </>
            : <></>
        }
        </div>
        <div className="m-8 ml-auto">
        <button onClick={(() => {
            {
                props.session 
                ? upvoteFeedback()
                : setIsOpen(true)
            }
        })}
        className={`group hover:bg-blue-700 duration-300 w-[4.5rem] h-12 shadow-sm border-2 border-blue-700 rounded-xl items-center flex justify-center 
        ${test ? 'bg-gradient-to-t from-blue-800 to-blue-700 border-none hover:bg-blue-700' : 'bg-white'}`}>
        <h1 
        className={`m-1 font-bold group-hover:text-white ${test ? 'text-white' : 'text-blue-700'}`}>
        {upvotes}</h1>
        <ChevronUpIcon 
        strokeWidth={2.5}
        className={`w-6 h-6 group-hover:text-white strokeWidth={2} ${test ? 'text-white' : 'text-blue-700'}`}/>
        </button>
        </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden rounded-2xl bg-transparent align-middle transition-all">
                  <center>
                  <button className='outline-none px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Sign in with Google</button>  
                  </center>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
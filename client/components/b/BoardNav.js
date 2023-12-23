import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  XMarkIcon,
  CreditCardIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'
import AuthModal from '../Auth/AuthModal'

const products = [
  { name: 'Feedback Widget', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BoardNav(props) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-transparent">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 outline-none">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto outline-none" src="/Logo.jpg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
        {
              props.session 
              ? <> 
                <button className='rounded-md px-7 py-2 bg-white hover:bg-gray-200 text-black flex gap-2 content-center justify-center items-center duration-200'>
                {props.session.user.name}
                </button></>
              : <> 
                <button className='rounded-md px-7 py-2 bg-white hover:bg-gray-200 text-black flex gap-2 content-center justify-center items-center duration-200' onClick={openModal}>
                Sign In
                </button>
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
            <div className="fixed inset-0 backdrop-blur-[1px]" />
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
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
                </>
            }
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          <a className="text-sm font-bold leading-6 text-white flex gap-3">
            {
              props.session 
              ? <> 
                <button className='rounded-md px-7 py-2 bg-white hover:bg-gray-200 text-black flex gap-2 content-center justify-center items-center duration-200'>
                {props.session.user.name}
                </button></>
              : <> 
                <button className='px-8 py-2 bg-white text-black hover:bg-gray-200 rounded-md flex justify-center items-center gap-2 duration-200' onClick={openModal}>
                Sign In
                </button>
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
            <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden bg-transparent align-middle transition-all">
                  <AuthModal />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
                </>
            }
          </a>
        </div>
      </nav>
    </header>
  )
}

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
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'
import Create from './Create'
import Billing from './Billing'
import Dashboard from '../navbar/Dashboard'
import { Profile } from '../navbar/Avatar'
import { Toggle } from '../navbar/Toggle'

export default function AppNavbar(props) {
    let [isOpen, setIsOpen] = useState(false)
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-transparent">
      <nav className="mx-auto max-w-[75rem] flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5 outline-none font-medium italic">
            lunar
          </Link>
        </div>
        <div className="flex lg:hidden gap-2">
          <Toggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 hover:outline-none active:outline-none outline-none text-white" aria-hidden="true"/>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          <a className="text-sm font-bold leading-6 text-white flex gap-2">
          <Toggle />
            {
              props.session 
              ? <> 
              <Profile image={props.session.user.image}/>
              {/* <Dashboard /> */}
              </>
              : <> 
                <button className='px-8 py-2 bg-white text-black hover:bg-gray-200 rounded-md flex justify-center items-center gap-2 duration-200' onClick={openModal}>
                try lunar
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
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden rounded-2xl align-middle transition-all">
                  <center>
                  <button className='outline-none px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Sign in with Google</button> 
                  <br />
                  <button className='outline-none px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Sign in with Github</button> 
                  </center>
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
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto background3 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5 outline-none font-medium italic">
          
          </Link>
            <button
              type="button"
              className="-m-2.5 rounded-xl p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link href="/b/lunar" className="drop-shadow-md -mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:text-gray-200 flex justify-center items-center gap-2 duration-500">
                {/* <BoltIcon width='20' className='flex' /> */}
                  Why?
                </Link>
              <Link href="/b/lunar" className="drop-shadow-md -mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:text-gray-200 flex justify-center items-center gap-2 duration-500">
                {/* <BoltIcon width='20' className='flex' /> */}
                  Demo
                </Link>
                <Link href="/pricing" className="drop-shadow-md -mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:text-gray-200 flex justify-center items-center gap-2 duration-500">
                {/* <CreditCardIcon width='20' className='flex' /> */}
                  Pricing
                </Link>
              </div>
              <div className="py-6">
                {
                  props.session 
                  ? <>
                  {/* <a onClick={signUserOut} className="px-8 py-2 rounded-lg font-bold flex justify-center cursor-pointer"> Log Out </a> */}
                  </>
                  : 
                  <></>
                }
                <a
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white cursor-pointer"
                >
               {
              props.session 
              ? <> 
              <Link href='/app' className='text-black -mt-2 px-8 py-2 bg-white hover:bg-gray-200  duration-300 rounded-xl font-bold flex justify-center gap-2'>
                dashboard
                </Link></>
              : <><Link onClick={signUserIn} href='/' className='text-black -mt-2 px-8 py-2 bg-white hover:bg-gray-200 rounded-xl font-bold flex justify-center gap-2 duration-200'>
              try lunar 
              </Link></>
              }
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

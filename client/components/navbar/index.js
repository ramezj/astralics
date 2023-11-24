import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ArrowRightIcon,
  ArrowSmallRightIcon,
  PencilSquareIcon,
  CreditCardIcon,
  BoltIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'
import Settings from './Settings'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Feedback Widget', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 outline-none">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto outline-none" src="/Logo.jpg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 hover:outline-none active:outline-none outline-none" aria-hidden="true"/>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex gap-2">
        <Link href="/pricing" className="text-sm font-bold leading-6 text-white flex justify-center items-center gap-2 hover:bg-black hover:bg-opacity-80 px-6 py-2 rounded-xl duration-500">
            <BoltIcon width='20' className='flex' />
            Demo
          </Link>
          <Link href="/pricing" className="text-sm font-bold leading-6 text-white flex justify-center items-center gap-2 hover:bg-black hover:bg-opacity-80 px-6 py-2 rounded-xl duration-500">
            <CreditCardIcon width='20' className='flex' />
            Pricing
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">

          <a className="text-sm font-bold leading-6 text-white flex gap-3">
            {
              props.session 
              ? <> 
              {/* <LogOut /> */}
              <Settings />
              <Link href='/app' className='rounded-xl px-7 py-2 bg-zinc-950 hover:bg-zinc-950  text-white font-bold flex gap-2 content-center justify-center items-center duration-300'>
                {/* <Squares2X2Icon className='text-white' width={22} height={22}/> */}
                Dashboard 
                </Link></>
              : <> 
                <button className='px-8 py-2 bg-zinc-950 hover:bg-zinc-950 rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={openModal}>
                Get Started
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
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden rounded-2xl bg-transparent align-middle transition-all">
                  <center>
                  <button className='px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Sign in with Google</button>  
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto backgroundColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 outline-none">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto outline-none"
                src="/Logo.jpg"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-xl p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link href="/pricing" className="-mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:bg-black hover:bg-opacity-80 flex justify-center items-center gap-2 duration-500">
                <BoltIcon width='20' className='flex' />
                  Demo
                </Link>
                <Link href="/pricing" className="-mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:bg-black hover:bg-opacity-80 flex justify-center items-center gap-2 duration-500">
                <CreditCardIcon width='20' className='flex' />
                  Pricing
                </Link>
              </div>
              <div className="py-6">
                {
                  props.session 
                  ? <>
                  {/* <a onClick={signUserOut} className="px-8 py-2 rounded-lg font-bold flex justify-center cursor-pointer"> Log Out </a> */}
                  </>
                  : <></>
                }
                <a
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white cursor-pointer"
                >
               {
              props.session 
              ? <> 
              <Link href='/settings' className='px-8 py-2 bg-zinc-950 hover:bg-zinc-950  duration-300 rounded-xl font-bold flex justify-center gap-2'>
                Settings 
                </Link>
              <Link href='/app' className='mt-3 px-8 py-2 bg-zinc-950 hover:bg-zinc-950  duration-300 rounded-xl font-bold flex justify-center gap-2'>
                Dashboard
                </Link></>
              : <><Link onClick={signUserIn} href='/' className='px-8 py-2 bg-zinc-950 hover:bg-zinc-950  rounded-xl font-bold flex justify-center gap-2 duration-300'>
              Try Lunar 
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

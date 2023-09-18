import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Feedback from './Feedback'
import LogOut from './LogOut'
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

export default function Navbar() {
  const { data: session } = useSession()
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
          <Feedback />
          <Link href="/pricing" className="text-sm font-bold leading-6 text-white flex justify-center items-center gap-2 hover:bg-black hover:bg-opacity-80 px-6 py-2 rounded-xl duration-500">
            <CreditCardIcon width='20' className='flex' />
            Pricing
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          {/* {
            session 
            ? 
            <>
            <a onClick={signUserOut} className="text-sm font-bold leading-6 text-white cursor-pointer flex px-8 py-2">Log Out</a>
            </>
            : <></>
          } */}
          <a className="text-sm font-bold leading-6 text-white flex gap-3">
            {
              session 
              ? <> 
              <LogOut />
              <Settings />
              <Link href='/app' className='rounded-xl px-7 py-2 bg-black bg-opacity-80 hover:bg-opacity-90 text-white font-bold flex gap-2 content-center justify-center items-center duration-300'>
                <Squares2X2Icon className='text-white' width={22} height={22}/>
                Dashboard 
                </Link></>
              : <> <button className='px-8 py-2 bg-black bg-opacity-80 hover:bg-opacity-90 rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                Get Started, It's Free
                {/* <ArrowSmallRightIcon width={20} className='flex content-center align-middle'/> */}
                </button></>
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
                <Feedback />
                <Link href="/pricing" className="-mx-3 rounded-xl px-3 py-2 text-base font-bold leading-7 text-white hover:bg-black hover:bg-opacity-80 flex justify-center items-center gap-2 duration-500">
                <CreditCardIcon width='20' className='flex' />
                  Pricing
                </Link>
              </div>
              <div className="py-6">
                {
                  session 
                  ? <><a onClick={signUserOut} className="px-8 py-2 rounded-lg font-bold flex justify-center cursor-pointer"> Log Out </a></>
                  : <></>
                }
                <a
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white cursor-pointer"
                >
               {
              session 
              ? <> 
              <Link href='/settings' className='px-8 py-2 bg-black bg-opacity-80 hover:bg-opacity-90 duration-300 rounded-xl font-bold flex justify-center gap-2'>
                Settings 
                </Link>
              <Link href='/app' className='mt-3 px-8 py-2 bg-black bg-opacity-80 hover:bg-opacity-90 duration-300 rounded-xl font-bold flex justify-center gap-2'>
                Dashboard 
                </Link></>
              : <><Link onClick={signUserIn} href='/' className='px-8 py-2 bg-black bg-opacity-60 hover:bg-opacity-70 rounded-xl font-bold flex justify-center gap-2 duration-300'>
              Get Started, It's Free 
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

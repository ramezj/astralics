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
  CreditCardIcon
} from '@heroicons/react/24/outline'
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
            <img className="h-8 w-auto outline-none" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 hover:outline-none active:outline-none outline-none" aria-hidden="true"/>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/documentation" className="text-sm font-bold leading-6 text-white flex justify-center items-center gap-2">
            <PencilSquareIcon width='20' className='flex'/>
            Documentation
          </Link>
          <Link href="/pricing" className="text-sm font-bold leading-6 text-white flex justify-center items-center gap-2">
            <CreditCardIcon width='20' className='flex' />
            Pricing
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          {
            session 
            ? 
            <>
            <a onClick={signUserOut} className="text-sm font-bold leading-6 text-white cursor-pointer flex px-8 py-2">Log Out</a>
            </>
            : <></>
          }
          <a className="text-sm font-bold leading-6 text-white">
            {
              session 
              ? <> <Link href='/app' className='px-8 py-2 bg-white text-[#05050a] rounded-lg font-bold flex gap-2 content-center justify-center items-center'>
                Dashboard 
                <ArrowSmallRightIcon width={20} className='flex content-center align-middle'/>
                </Link></>
              : <> <button className='px-8 py-2 bg-white text-[#05050a] rounded-lg font-bold flex justify-center items-center gap-2' onClick={signUserIn}>
                Get Started 
                <ArrowSmallRightIcon width={20} className='flex content-center align-middle'/>
                </button></>
            }
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#05050a] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 outline-none">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto outline-none"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/documentation" className="-mx-3 rounded-lg px-3 py-2 text-base font-bold leading-7 text-white hover:bg-gray-950 flex justify-center items-center gap-2">
                <PencilSquareIcon width='20' className='flex'/>
                  Documentation
                </Link>
                <Link href="/pricing" className="-mx-3 rounded-lg px-3 py-2 text-base font-bold leading-7 text-white hover:bg-gray-950 flex justify-center items-center gap-2">
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
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white hover:bg-gray-950 cursor-pointer"
                >
               {
              session 
              ? <> <Link href='/app' className='px-8 py-2 bg-white text-[#05050a] rounded-lg font-bold flex justify-center gap-2'>
                Dashboard 
                <ArrowSmallRightIcon width={20} className='flex content-center align-middle'/>
                </Link></>
              : <> <button className='px-8 py-2 bg-white text-[#05050a] rounded-lg font-bold flex justify-center' onClick={signUserIn}>Get Started </button></>
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

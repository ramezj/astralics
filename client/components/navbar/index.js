import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthModal from '../Auth/AuthModal'
import { motion } from 'framer-motion'
import Dashboard from './Dashboard'
import { Profile } from './Avatar'
import { Toggle } from './Toggle'
import { TryForFree } from './TryForFree'
import Create from '../app/Create'

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
    <header className="bg-transparent sticky top-0 z-10">
      <nav className="h-14 mx-auto max-w-full flex items-center justify-between p-6 lg:px-3 border-b border-border/70 bg-white dark:bg-black  backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="p-1.5 outline-none font-bold text-black dark:text-white text-lg">
          astralics
          </Link>
        </div>
        <div className="flex lg:hidden gap-3 -m-2.5 items-center">
        <Toggle />
          {
            props.session
            ? 
            <>
            <Profile session={props.session} />
            </>
            : 
            <>
            <button type="button"
            className="inline-flex items-center justify-center rounded-xl text-black dark:text-white outline-none"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 hover:outline-none active:outline-none outline-none text-black dark:text-white" aria-hidden="true"/>
          </button>
            </>
          }
        </div>
        <Popover.Group className="hidden lg:flex">
        <Link href="/astralics" className="drop-shadow-sm text-md font-bold leading-6 text-black dark:text-gray-100 flex justify-center items-center hover:bg-gray-200 dark:hover:bg-zinc-800 px-5 py-2 rounded-lg duration-200">
          Demo
          </Link>
        <Link href="/pricing" className="drop-shadow-sm text-md font-bold leading-6 text-black dark:text-gray-100 flex justify-center items-center hover:bg-gray-200 dark:hover:bg-zinc-800 px-5 py-2 rounded-lg duration-200">
          Pricing
        </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          <a className="text-sm font-bold leading-6 text-white flex gap-3 items-center">
          <Toggle />
            {
              props.session 
              ? <> 
                {/* <Create /> */}
                <Profile session={props.session} />
                </>
              : <> 
                <TryForFree title={'use for free'}/>
                </>
            }
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="bg-white dark:bg-zinc-950 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between -m-2">
          <Link href="/" className="-m-1.5 p-1.5 outline-none font-medium italic">
          </Link>
            <button
              type="button"
              className="-m-2.5 rounded-xl p-2.5 text-black dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.2}}>
                <Link href="/astralics" className="drop-shadow-sm text-md font-bold leading-6 text-black dark:text-gray-100 flex justify-center items-center hover:bg-gray-200 dark:hover:bg-zinc-800 px-5 py-2 rounded-lg duration-200">
                  Demo
                </Link>
                </motion.div>
                <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.3}}>
                <Link href="/pricing" className="drop-shadow-sm text-md font-bold leading-6 text-black dark:text-gray-100 flex justify-center items-center hover:bg-gray-200 dark:hover:bg-zinc-800 px-5 py-2 rounded-lg duration-200">
                  Pricing
                </Link>
                </motion.div>
              </div>
              <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: 0.4}}>
              <div className="py-6 -mt-6 ">
               {
              props.session 
              ? <> 
              <Link href='/app' className='text-black px-6 py-2 bg-white hover:bg-gray-200 duration-300 rounded-md font-bold flex justify-center gap-2'>
              Dashboard
                </Link></>
              : <>
              <Link onClick={signUserIn} href='/' className='text-white px-6 py-2 bg-zinc-950 dark:bg-white dark:text-black hover:bg-gray-200 rounded-lg font-bold flex justify-center gap-2 duration-200'>
                use for free
                </Link></>
              }
              </div>
              </motion.div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

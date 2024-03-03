import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthModal from '../Auth/AuthModal'
import { motion } from 'framer-motion'
import Dashboard from '../navbar/Dashboard'
import { Profile } from '../navbar/Avatar'
import { TryForFree } from '../navbar/TryForFree'
import { Toggle } from '../navbar/Toggle'
import Create from "../app/Create"
import { Debug } from './Debug'

export default function BoardNav(props) {
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
          <TryForFree title={'Sign In'}/>
          </>
        }
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
        <a className="text-sm font-bold leading-6 text-white flex gap-3 items-center">
        <Toggle />
          {
            props.session 
            ? <> 
              <Profile session={props.session} />
              </>
            : <> 
              <TryForFree title={'Sign In'}/>
              </>
          }
        </a>
      </div>
    </nav>
  </header>
)
}

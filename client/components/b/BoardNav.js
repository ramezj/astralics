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
    <header className="bg-transparent">
      <nav className="mx-auto max-w-full flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        </div>
        <div className="flex lg:hidden gap-2">
        <Toggle />
            {
              props.session 
              ? <> 
                <Profile image={props.session.user.image}/>
                </>
              : <> 
                <TryForFree onClick={openModal} />
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
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-[1px]" />
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
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden align-middle transition-all">
                  <AuthModal />
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
          <a className="text-sm font-bold leading-6 text-white flex gap-2">
            <Toggle />
            {
              props.session 
              ? <> 
                {/* <Dashboard /> */}
                <Profile image={props.session.user.image}/>
                </>
              : <> 
                <TryForFree onClick={openModal} />
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
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-[1px]" />
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
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden align-middle transition-all">
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
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

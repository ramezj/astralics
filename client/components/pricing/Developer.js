import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Laptop, CheckIcon, XIcon } from "lucide-react"
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import AuthModal from "../Auth/AuthModal"

export function Developer(props) {
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
    const params  = new URLSearchParams()
    params.set('checkout[custom][user_id]', `${props.session?.user.id}`)
  return (
    <>
    <Card className="w-[350px] border-none bg-gray-200 dark:bg-zinc-950">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'> <Laptop/>Developer</CardTitle>
        <CardDescription>Monthly fee</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
        <h2 className="flex text-2xl font-semibold -mt-3">
                    $15
        </h2>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    5 Boards
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Unlimited Monthly feedback
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Upvote feedback
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Authentication Check
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    No Astralics Branding
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      {
          props.session
          ? 
          <>
            <Button asChild className='w-full bg-astralicsblue dark:bg-astralicsblue hover:bg-astralicsblue font-bold dark:text-white dark:hover:bg-astralicsblue'>
                <Link href={`https://astralics.lemonsqueezy.com/checkout/buy/90fbb10d-ad89-4525-b259-009c2ae274f0?` + params.toString()}>
                Choose Developer
                </Link>
                </Button>
                
          </>
          : 
          <>
             <Button onClick={openModal} className='w-full bg-astralicsblue dark:bg-astralicsblue font-bold dark:text-white hover:bg-astralicsblue dark:hover:bg-astralicsblue'>
              Choose Developer
              </Button>
          </>
        }
      </CardFooter>
    </Card>
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
  )
}

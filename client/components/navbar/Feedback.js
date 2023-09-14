import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Widget from "../widget"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Feedback() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
    return (
        <>
        <a onClick={openModal} className="cursor-pointer text-base font-bold leading-6 text-white flex justify-center items-center gap-2 hover:bg-white hover:text-black px-6 py-2 rounded-md duration-500 outline-none">
        <ChatBubbleBottomCenterTextIcon width='20' className='flex'/>
            Feedback
        </a>
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
            <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                <Dialog.Panel className="w-[22.5rem]  max-w-md transform overflow-hidden rounded-2xl bg-transparent  text-left align-middle transition-all">
                    <Widget />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
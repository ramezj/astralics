import { HandThumbUpIcon} from "@heroicons/react/24/solid"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function CreateFeedback() {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
        <button onClick={openModal} className='px-4 py-2.5 backgroundColor rounded-xl flex font-medium outline-none'>
                Create Feedback
                {/* <HandThumbUpIcon className='mt-[0.15rem] ml-2 h-5 w-5 text-white hover:text-gray-100'/> */}
                {/* <PlusCircleIcon className='mt-[0.15rem] ml-2 h-5 w-5 text-white hover:text-gray-100'/> */}
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl backgroundColor p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-white"
                  >
                    Create Feedback
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="mt-3">
                      <label className="text-white font-medium">Title</label>
                      <br />
                      <input className='input-sm h-10 bg-black/70 rounded-lg outline-none w-full'/>
                      <br />
                    </div>
                    <div className="mt-3">
                      <label className="text-white font-medium">Description</label>
                      <br />
                      <textarea className="textarea bg-black/70 rounded-lg outline-none py-1 w-full" rows={3} />
                      <br />
                    </div>
                    
                    {/* <div className="mt-3">
                      <span className="px-2 py-2 bg-red-500">
                            Bug
                      </span>
                    </div> */}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
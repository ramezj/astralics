import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SelectCategory() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center bg-zinc-950 border border-white/10 px-4 py-2.5 rounded-lg font-medium text-white focus:outline-none hover:border-white/20 duration-300 outline-none">
            Category
            <ChevronDownIcon
              className="mt-[0.20rem] ml-2 h-5 w-5 text-gray-200 hover:text-gray-200"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="border border-white/10 absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-zinc-950 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-700 text-gray-100' : 'text-white'
                    } group flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium`}
                  >
                    🐛 Bug Report
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-700 text-gray-100' : 'text-white'
                    } group flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium`}
                  >
                    💡 Feature Request
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-700 text-gray-100' : 'text-white'
                    } group flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium`}
                  >
                    📝 Feedback
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Create() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }

    function openModal() {
      setIsOpen(true)
    }
    const [ text, setText ] = useState("Create Project");
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ error, setError ] = useState();
    const [ url, setUrl ] = useState();
    const [ response, setResponse ] = useState();
    const createProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/project/new', {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: name,
                url: url
              })
        });
        const resp = await res.json();
        if(resp.ok == true) {
            setLoading(false);
            setText("Created Successfully");
            setResponse(resp);
            console.log(resp);
            router.push(`/project/${resp.response.id}`)
        } else if (resp.ok == false) {
            setLoading(false);
            setError(resp.response);
        }
    }
    return (
        <>
        <button className='btn bg-black bg-opacity-60 hover:bg-opacity-90 text-white border-none normal-case font-medium px-10' onClick={openModal}>
          <PlusIcon width={21}/>
          Create Project</button>
<dialog id="my_modal_1" className="modal bg-transparent shadow-2xl">
  <form method="dialog" className="modal-box bg-gray-950">
    <center>
    <h3 className="font-bold text-lg">Project Information</h3>
    </center>
    <br /><br />
    <center>
    <input autoFocus={false} type="text" placeholder="Project's Name" onChange={(e) => {setName(e.target.value)}} className="input w-full max-w-xs bg-gray-900 font-bold border-none focus:outline-none" />
    <br /><br />
    <input autoFocus={false} type="text" placeholder="Project's URL" onChange={(e) => {setUrl(e.target.value)}} className="input w-full max-w-xs bg-gray-900 font-bold border-none focus:outline-none" />
    <br /><br />
    <button className="btn widgetShadow backgroundColor font-extrabold text-md w-3/6 text-white border-none hover:bg-indigo-800 normal-case" onClick={createProject}>
      { 
      loading 
      ? <><><span className="loading loading-spinner loading-xs"></span></></>
      : <>{text}</>
      }
      </button>
      </center>
    <br /><br />
    {JSON.stringify(response)}
    <p className='text-red-500 font-medium'>
    {error}
    </p>
    <div className="modal-action">
      <button className="btn bg-gray-900 border-none hover:bg-gray-900 normal-case -mt-7 text-white">Close</button>
    </div>
  </form>
</dialog>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
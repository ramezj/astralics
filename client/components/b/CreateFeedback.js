import { HandThumbUpIcon} from "@heroicons/react/24/solid"
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import SelectCategory from "./SelectCategory"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export default function CreateFeedback(props) {
    const router = useRouter()
    const { id } = router.query;
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    const [ step, setStep ] = useState(1);
    const [ title, setTitle ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ type, setType ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ text, setText ] = useState();
    const [ response, setResponse ] = useState(null);
    const createFeedback = async (e) => {
      e.preventDefault();
      setLoading(true);
      const res = await fetch(`/api/feedback/new/${id}`, {
          method:'POST',
          headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title,
              description,
              type:type,
            })
      });
      const resp = await res.json();
      if(resp.ok == true) {
          setLoading(false);
          setText("Created Successfully");
      } else if (resp.ok == false) {
          setLoading(false);
          setText(resp.response);
          setResponse(resp.response);
      }
  }
    return (
        <>
        <button onClick={openModal} className='px-4 py-2.5 bg-blue-700 duration-300 hover:bg-blue-800 rounded-lg flex font-medium outline-none'>
                Leave Feedback ✨
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
            <div className="fixed inset-0 bg-black/70"/>
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
                <Dialog.Panel className="h-[23rem] w-full max-w-md transform overflow-hidden rounded-lg bg-black border border-white/10 p-6 text-left align-middle shadow-xl transition-all">
                  {
                    step == 1 && (
                      <>
                      <center>
                      <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-white">
                          Choose Category
                      </Dialog.Title>
                      <button onClick={(() => {setStep(2)})} className="font-medium w-full border border-white/10 rounded-md mt-8 py-6 bg-zinc-950 duration-300 hover:border-white/20">
                      🐛 Bug Report
                      </button>
                      <button className="font-medium w-full border border-white/10 rounded-md mt-4 py-6 bg-zinc-950 duration-300 hover:border-white/20">
                      💡 Feature Request
                      </button>
                      <button className="font-medium w-full border border-white/10 rounded-md mt-4 py-6 bg-zinc-950 duration-300 hover:border-white/20">
                      📝 Feedback
                      </button>
                      </center>
                      </>
                    )
                  }
                  { step == 2 && (
                    <>
                    <button onClick={(() => setStep(1))} className="flex self-start">
                        <ChevronLeftIcon strokeWidth={2} className="text-white w-6 h-6"/>
                    </button>
                    <center>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-white justify-center items-center self-center -mt-6"
                  >
                    Create Feedback
                  </Dialog.Title>
                  </center>
                  <form onSubmit={createFeedback}>
                  <div className="mt-6">
                    <div className="mt-3">
                      <label className="text-white font-medium">Title</label>
                      <br />
                      <input placeholder='Title of your feedback' required value={title} onChange={((e) => {setTitle(e.target.value)})} 
                      className='input-md h-10 bg-zinc-950 rounded-xl outline-none w-full shadow-xl mt-1.5'/>
                      <br />
                    </div>
                    <div className="mt-3">
                      <label className="text-white font-medium">Description</label>
                      <br />
                      <textarea placeholder='Description of your feedback' required value={description} onChange={((e) => {setDescription(e.target.value)})} 
                      className="textarea-md bg-zinc-950 rounded-xl outline-none py-1 w-full shadow-xl mt-1.5" rows={3} />
                      <br />
                    </div>
                    {/* <div className="mt-1">
                    <label className="text-white font-medium">Category</label>
                    <select className="mt-1.5 select focus:outline-none active:outline-none outline-none w-full bg-black rounded-xl" onChange={((e) => {setType(e.target.value)})}>
                      <option disabled selected>Category</option>
                      <option className="text-md font-medium">🐛 Bug Report</option>
                      <option className="text-md font-medium">💡 Feature Request</option>
                      <option className="text-md font-medium">📝 Feedback</option>
                    </select>
                    </div> */}
                  </div>
                  <center>
                  <div className="mt-6">
                  <button type="submit" className='text-middle w-full py-2.5 bg-blue-700 rounded-xl font-medium outline-none'>
                    {
                      loading 
                      ? "Creating Feedback.."
                      : "Create Feedback"
                    }
                  </button>
                  </div>
                  </center>
                  </form>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
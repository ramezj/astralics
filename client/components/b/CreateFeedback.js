import { HandThumbUpIcon} from "@heroicons/react/24/solid"
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

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
    const [ title, setTitle ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ type, setType ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ text, setText ] = useState();
    const [ response, setResponse ] = useState(null);
    const people = [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]    
    const [selected, setSelected] = useState(people[0])
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
        <button onClick={openModal} className='px-4 py-2.5 bg-gradient-to-t from-blue-800 to-blue-700 rounded-xl flex font-medium outline-none'>
                Leave Feedback ✨
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-t from-zinc-950 to-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-white"
                  >
                    Create Feedback
                  </Dialog.Title>
                  <form onSubmit={createFeedback}>
                  <div className="mt-6">
                    <div className="mt-3">
                      <label className="text-white font-medium">Title</label>
                      <br />
                      <input placeholder='Title of your feedback' required value={title} onChange={((e) => {setTitle(e.target.value)})} className='input-md h-10 bg-black rounded-xl outline-none w-full shadow-xl mt-1.5'/>
                      <br />
                    </div>
                    <div className="mt-3">
                      <label className="text-white font-medium">Description</label>
                      <br />
                      <textarea placeholder='Description of your feedback' required value={description} onChange={((e) => {setDescription(e.target.value)})} className="textarea-md bg-black rounded-xl outline-none py-1 w-full shadow-xl mt-1.5" rows={3} />
                      <br />
                    </div>
                    <div className="mt-3">
                    <label className="text-white font-medium">Category</label>
                    <select className="mt-1.5 select focus:outline-none active:outline-none outline-none w-full bg-black rounded-xl" onChange={((e) => {setType(e.target.value)})}>
                      <option disabled selected>Category</option>
                      <option className="text-md font-medium">🐛 Bug Report</option>
                      <option className="text-md font-medium">💡 Feature Request</option>
                      <option className="text-md font-medium">📝 Feedback</option>
                    </select>
                    </div>
                  </div>
                  <div className="mt-4">
                  <button type="submit" className='px-4 py-2.5 bg-blue-700 rounded-xl flex font-medium outline-none'>
                    {
                      loading 
                      ? "Creating Feedback.."
                      : "Create Feedback"
                    }
                  </button>
                  </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
import { HandThumbUpIcon} from "@heroicons/react/24/solid"
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';
import AuthModal from "../Auth/AuthModal"
import { X } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { Loader2 } from "lucide-react"
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
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CreateFeedback(props) {
    const router = useRouter()
    const { id } = router.query;
    let [isOpen, setIsOpen] = useState(false)
    let [ authIsOpen, setAuthIsOpen ] = useState(false);
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    function openAuthModal() {
      setAuthIsOpen(true);
    }
    function closeAuthModal() {
      setAuthIsOpen(false);
    }
    const [ title, setTitle ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ type, setType ] = useState("feedback");
    const [ loading, setLoading ] = useState(false);
    const [ text, setText ] = useState("Create Post");
    const [ response, setResponse ] = useState(null);
    if(type === "🐛 Bug Report") {
      setType("bug_report");
    }
    if(type === "💡 Feature Request") {
      setType("feature_request");
    }
    if(type === "📝 Feedback") {
      setType("feedback")
    }
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
          router.reload();
      } else if (resp.ok == false) {
          setLoading(false);
          setText(resp.response);
          setResponse(resp.response);
          toast.error(resp.response);
      }
  }
    return (
        <>
        {
          props.session 
          ? 
          <>
          <button onClick={openModal} className='px-4 py-2.5 bg-astralicsblue text-white duration-300 hover:bg-astralicsblue rounded-lg flex font-medium outline-none'>
                Leave Feedback
            </button>
          </>
          : 
          <>
          <button onClick={openAuthModal} className='px-4 py-2.5 bg-astralicsblue text-white duration-300 hover:bg-astralicsblue rounded-lg flex font-medium outline-none'>
                Leave Feedback
            </button>
          </>
        }
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
            <div className="fixed inset-0 bg-black/70 "/>
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
                <Dialog.Panel className="w-11/12 w- max-w-md transform overflow-hidden bg-transparent text-left align-middle transition-all">
                <Card className="w-full border-black/10 dark:border-white/10">
      <CardHeader>
        <CardTitle>Create Feedback</CardTitle>
        <CardDescription>Create your feedback post in seconds.</CardDescription>
      </CardHeader>
      <form onSubmit={createFeedback}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input required id="name" placeholder="Title of your feedback" onChange={(e) => {setTitle(e.target.value)}} className='dark:bg-zinc-900 bg-gray-200'/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Content</Label>
              <Textarea required rows={5} placeholder="Describe your feedback" value={description} onChange={((e) => {setDescription(e.target.value)})}
              className='resize-none outline-none bg-gray-200 dark:bg-zinc-900'
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Category</Label>
              <Select defaultValue="feedback" className='w-full' onValueChange={((e) => {setType(e)})}>
              <SelectTrigger
                id="security-level"
                className="line-clamp-1 truncate w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-white border dark:border-white/10 mt-1.5"
              >
                <SelectValue placeholder="Select level"/>
              </SelectTrigger>
              <SelectContent className='dark:bg-zinc-900 border dark:border-white/10'>
                <SelectItem value="feedback" className='hover:!bg-gray-200 focus:!bg-gray-200 dark:hover:!bg-zinc-800 dark:focus:!bg-zinc-800'>📝 Feedback</SelectItem>
                <SelectItem value="bug_report" className='hover:!bg-gray-200 focus:!bg-gray-200 dark:hover:!bg-zinc-800 dark:focus:!bg-zinc-800'>🐛 Bug Report</SelectItem>
                <SelectItem value="feature_request" className='hover:!bg-gray-200 focus:!bg-gray-200 dark:hover:!bg-zinc-800 dark:focus:!bg-zinc-800'>💡 Feature Request</SelectItem>
              </SelectContent>
            </Select>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-x-2">
        <Button type='button' onClick={closeModal} variant="outline" className='w-full bg-gray-200 text-black dark:bg-zinc-950 dark:text-white dark:border-white/10 dark:hover:!bg-zinc-900 hover:!bg-gray-300 duration-200 border-black/10'>Cancel</Button>
        {
            loading ? (
                <>
                <Button disabled className='w-full bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Create post
                </Button>
                </>
            )
            : (
                <>
                <Button type='submit' className='w-full bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>{text}</Button>
                </>
            )
        }
      </CardFooter>
      </form>
    </Card>
                </Dialog.Panel >
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={authIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeAuthModal}>
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
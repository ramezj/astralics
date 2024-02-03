import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '../ui/button';
import toast, { Toaster } from 'react-hot-toast';
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

export default function Create() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }

    function openModal() {
      setIsOpen(true)
    }
    const [ text, setText ] = useState("Deploy");
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ error, setError ] = useState();
    const [ url, setUrl ] = useState();
    const [ slug, setSlug ] = useState();
    const [ response, setResponse ] = useState();
    const createProject = async (e) => {
      e.preventDefault();
      setLoading(true);
      const res = await fetch('/api/board/new', {
          method:'POST',
          headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              url: url,
              handle:slug
            })
      });
      const resp = await res.json();
      if(resp.ok == true) {
          setLoading(false);
          setText("Created Successfully");
          setResponse(resp);
          console.log(resp);
          router.push(`/b/${resp.response.handle}`)
      } else if (resp.ok == false) {
          setLoading(false);
          toast.success("Created Successfully!", {
            style: {
            borderRadius: '10px',
            },})
          setText(resp.response);
          setResponse(resp.response);
      }
  }
    return (
        <>
        <Button className='px-5 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 text-black rounded-lg flex justify-center items-center gap-2 duration-200' onClick={openModal}>
              Create board
        </Button>
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
            <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                <Dialog.Panel className="max-w-md transform overflow-hidden bg-transparent text-left align-middle transition-all">
                <Card className="w-[25rem] border-black/10 dark:border-white/10">
      <CardHeader>
        <CardTitle>Create board</CardTitle>
        <CardDescription>Deploy your new feedback board in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={createProject}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input required id="name" placeholder="Name of your board" onChange={(e) => {setName(e.target.value)}} className='bg-gray-200 dark:bg-zinc-900'/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Slug</Label>
              <Input required id="slug" placeholder="trylunar.xyz/b/slug" onChange={(e) => {setSlug(e.target.value)}} className='bg-gray-200 dark:bg-zinc-900'/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Website</Label>
              <Input required id="website" placeholder="Website of your board" onChange={(e) => {setUrl(e.target.value)}} className='bg-gray-200 dark:bg-zinc-900'/>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type='button' onClick={closeModal} variant="outline" className='bg-gray-200 text-black dark:bg-zinc-950 dark:text-white dark:border-white/10 dark:hover:!bg-zinc-900 hover:!bg-gray-300 duration-200 border-black/10'>Cancel</Button>
        {
            loading ? (
                <>
                <Button disabled className='bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deploying
                </Button>
                </>
            )
            : (
                <>
                <Button type='submit' className='bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>{text}</Button>
                </>
            )
        }
      </CardFooter>
      </form>
    </Card>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
import Link from 'next/link'
import { AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Copy, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Card(props) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }
    return (
    <div className='duration-300'>
    <div className="card border border-black/10 dark:border-white/10 w-96 bg-white hover:border-black/10 hover:bg-gray-200 dark:bg-zinc-950 hover:dark:bg-zinc-900 cursor-pointer duration-200 outline-none rounded-lg">
    <div className="card-body items-center">
    <h2 className="card-title font-extrabold text-black dark:text-white">{props.title}</h2>
    <h1 className="font-medium  duration-150 text-black dark:text-white">{props.website}</h1>
    <div className="card-actions justify-end flex gap-6 mb-6 mt-4">
      <div className='flex flex-wrap gap-4 -mb-6'>
        <Link href={`${props.settings}`}>
          <Button className='bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0'>
          Settings
          </Button>
        </Link>
        <Dialog>
      <DialogTrigger asChild>
        <Button>Share</Button>
      </DialogTrigger>
      <Link href={props.href}>
        <Button>
          <ExternalLink className='w-4 h-4'/>
        </Button>
      </Link>
      <DialogContent className="sm:max-w-md border border-black/10 dark:border-white/10">
        <DialogHeader>
          <DialogTitle className='text-black dark:text-white'>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
            className='outline-none ring-offset-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white'
              id="link"
              defaultValue={`https://trylunar.xyz${props.href}`}
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3 bg-gray-200 hover:bg-gray-300 text-black dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
      </div>
    {/* <span className='-mt-8 -mr-2 w-12 h-10 rounded-lg justify-center items-center float-right flex bg-white dark:bg-zinc-800 duration-200 shadow-sm'>
    <Link href={`${props.settings}`} className='drop-shadow-lg float-right flex justify-center'>
    <AdjustmentsHorizontalIcon className='text-black dark:text-white' width={22} height={23} strokeWidth={'2'}/>
    </Link>
    </span> */}
    </div>
    
  </div>
</div>
        </div>
    )
}
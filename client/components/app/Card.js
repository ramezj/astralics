import Link from 'next/link'
import { AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Copy, ExternalLink, Check } from "lucide-react"
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
    const [ copied, setisCopied ] = useState(false);
    const copyLink = () => {
      setisCopied(true);
    }
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
        <Button onClick={copyLink} type="submit" className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0">
            {
              copied
              ? (
                <>
                    <Check className='h-4 w-4' />
                </>
              )
              : (
                <>
                    <Copy className="h-4 w-4" />
                </>
              )
            }
        </Button>
      <Link href={props.href} target="_blank">
        <Button className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0">
          <ExternalLink className='w-4 h-4'/>
        </Button>
      </Link>
      </div>
    </div>
    
  </div>
</div>
        </div>
    )
}
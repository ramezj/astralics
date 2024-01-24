import { useTheme } from 'next-themes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"
import NoSSR from '@/utils/NoSSR'

export const BoardNavToggle = () => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    if(theme == 'dark') {
      setTheme('light');
    } else if (theme == 'light') {
      setTheme('dark')
    }
  }
  return (
    <NoSSR >
    <div suppressHydrationWarning={true}>
    {
      theme == 'dark' &&
      <>
      <Button onClick={(() => setTheme('light'))} className='border border-black/20 dark:border-white/10 hover:border-black/0 dark:hover:border-white/0 duration-200 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800'>
        <MoonIcon className='w-5'/>
      </Button>
      </>
    }
    {
      theme == 'light' &&
      <>
      <Button onClick={(() => setTheme('dark'))} className='border border-black/20 dark:border-white/10 hover:border-black/0 dark:hover:border-white/0 duration-200 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800'>
        <SunIcon className='w-5'/>
      </Button>
      </>
    }
    </div>
    </NoSSR >
  )
}
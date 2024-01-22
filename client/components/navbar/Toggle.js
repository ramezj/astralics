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

export const Toggle = () => {
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
      <Button onClick={(() => setTheme('light'))} className='duration-200 rounded-lg bg-white dark:bg-slate-950 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-900'>
        <MoonIcon className='w-5'/>
      </Button>
      </>
    }
    {
      theme == 'light' &&
      <>
      <Button onClick={(() => setTheme('dark'))} className='duration-200 rounded-lg bg-white dark:bg-slate-950 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-900'>
        <SunIcon className='w-5'/>
      </Button>
      </>
    }
    </div>
    </NoSSR >
  )
}
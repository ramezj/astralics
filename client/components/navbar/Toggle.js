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
export const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const { themeName, setThemeName } = useState('Dark')
  // if(theme === 'dark') {
  //   setThemeName('Dark');
  // } else if (theme === 'light') {
  //   setThemeName('Light')
  // } else if (theme === 'system') {
  //   setThemeName('System')
  // }
  return (
    <>
    {
      theme == 'dark' &&
      <>
      <Button onClick={(() => setTheme('light'))} className='rounded-lg bg-white dark:bg-slate-950 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-900'>
        <MoonIcon className='w-5'/>
      </Button>
      </>
    }
    {
      theme == 'light' &&
      <>
      <Button onClick={(() => setTheme('dark'))} className='rounded-lg bg-white dark:bg-slate-950 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-900'>
        <SunIcon className='w-5'/>
      </Button>
      </>
    }
  {/* <Select onValueChange={e => setTheme(e)} className=''>
  <SelectTrigger className="w-[100px] text-black dark:text-white">
    <SelectValue value={theme} placeholder={theme} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select> */}
    </>
  )
}
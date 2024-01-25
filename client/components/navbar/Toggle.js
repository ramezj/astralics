"use client"

import * as React from "react"
import { MoonStarIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Toggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className='w-[3.5rem] py-2 
        outline-none
        bg-white
        dark:bg-zinc-900
        dark:hover:bg-zinc-800
        dark:text-white
        border
        border-black/20
        hover:border-black/0
        dark:border-white/10
        dark:hover:border-white/0
        text-black hover:bg-gray-200 rounded-lg flex justify-center items-center gap-2
        duration-200'>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStarIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className='dark:bg-zinc-900 border dark:border-white/10'>
        <DropdownMenuItem onClick={() => setTheme("light")} className='hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200'>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className='hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200'>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className='hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200'>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

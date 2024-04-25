'use client'
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  BriefcaseBusiness,
  Settings,
  CreditCard,
  MessageCircle,
  Lightbulb,
  BanIcon,
  Radio
} from "lucide-react"
import { usePathname } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Metadata } from "next"
import { useState } from "react"
import { Combobox } from "@/components/Combobox"

export const dynamic = 'force-static'

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
      <div className="hidden border-r md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-16 items-center border-b px-4 lg:h-16 lg:px-6 justify-center">
           <Combobox />
          </div>
          <div className="flex-1 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
              <Link href="/overview" className={`${pathname == '/overview' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
                <Home className="h-4 w-4" />
                Overview
              </Link>
              <Link href="/feedback" className={`${pathname == '/feedback' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
                <MessageCircle className="h-4 w-4" />
                Feedback
              </Link>
              <Link href="/ideas" className={`${pathname == '/ideas' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
              <Lightbulb className="h-4 w-4" />
                Ideas
              </Link>
              <Link href="/issues" className={`${pathname == '/issues' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
              <BanIcon className="h-4 w-4" />
                Issues
              </Link>
              <Link href="/settings" className={`${pathname == '/settings' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
              <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b px-3 lg:h-16 lg:px-3 sticky top-0 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-3 text-lg font-medium">
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  astralics
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/overview" className={`${pathname == '/overview' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <Home className="h-5 w-5" />
                  Overview
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/jobs" className={`${pathname == '/jobs' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                <MessageCircle className="h-4 w-4" />
                Feedback
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/applicants" className={`${pathname == '/applicants' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                <Lightbulb className="h-4 w-4" />
                Ideas
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/billing" className={`${pathname == '/billing' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                <BanIcon className="h-4 w-4" />
                Issues
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/settings" className={`${pathname == '/settings' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
                </SheetClose>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
          {/* <Toggle />
          <AvatarDropdown /> */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
        </main>
      </div>
    </div>
  )
}
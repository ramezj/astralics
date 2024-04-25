'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export function Navbar(props:any) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-3 lg:px-6 ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold md:text-base">
            astralics
          </Link>
          <Link href="/" className="text-foreground transition-colors hover:text-foreground font-semibold">
            features
          </Link>
          <Link href="/" className="text-foreground transition-colors hover:text-foreground font-semibold">
            demo
          </Link>
          <Link href="/" className="text-foreground transition-colors hover:text-foreground font-semibold">
            pricing
          </Link>
        </nav>
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
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-bold"
              >
                astralics
              </Link>
              <Link href="#" className="hover:text-foreground">
                Features
              </Link>
              <Link href="#" className="hover:text-foreground">
                Demo
              </Link>
              <Link href="#" className="hover:text-foreground">
                Pricing
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ">
          <div className="ml-auto flex-1 sm:flex-initial">
          </div>
          {
            props.session 
            ? 
            <>
                <Button asChild>
                  <Link href='/choose-page'>
                  Dashboard
                  </Link>
                  </Button>
            </>
            
            :
            <>
                <Button asChild>
                  <Link href='/login'>
                  Get Started
                  </Link>
                  </Button>
            </>
          }
        </div>
      </header>
    </div>
  )
}
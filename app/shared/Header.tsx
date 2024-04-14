import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export function Header() {
  return (
    <>
    <header className="bg-transparent sticky top-0 z-10">
        <nav className="h-14 mx-auto max-w-full flex items-center justify-between p-6 lg:px-3 border-b border-border/70 bg-white dark:bg-black  backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link href='/' className="font-bold text-lg">wearehiring</Link>
            </div>
            <div className="flex gap-4 items-center">
            <Button asChild>
                    <Link href='/me'>
                        Dashboard
                    </Link>
                    </Button>
            </div>
        </nav>
    </header>
    </>
)
}
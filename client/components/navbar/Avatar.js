import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export const Profile = (props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={props.session.user.image}
              />
              <AvatarFallback>{props.session.user.name}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mt-2 w-48 bg-white dark:bg-zinc-900 border border-black/20 dark:border-white/10">
          <DropdownMenuLabel className="font-normal mb-1">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {props.session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {props.session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <Separator/>
          <DropdownMenuGroup className='mt-1 mb-1'>
          <Link href='/app' className=''>
          <DropdownMenuItem className='cursor-pointer hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200'>
              Dashboard
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href='/billing' className=''>
            <DropdownMenuItem className='cursor-pointer hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200'>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            </Link>
            <Link href='/settings' className=''>
            <DropdownMenuItem className='cursor-pointer hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200'>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <Separator/>
          <DropdownMenuItem onClick={() => signOut()} className='cursor-pointer hover:!bg-gray-200 dark:hover:!bg-zinc-800 duration-200 mt-1'>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

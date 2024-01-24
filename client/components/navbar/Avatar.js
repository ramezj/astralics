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
        <Button variant='link'>
        <Avatar>
          <AvatarImage src={props.image} alt="@shadcn" />
            <AvatarFallback></AvatarFallback>
        </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white dark:bg-zinc-900 border border-black/20 dark:border-white/10">
        <DropdownMenuLabel className='mb-1'>My Account</DropdownMenuLabel>
        <Separator/>
        <DropdownMenuGroup className='mt-1 mb-1'>
        <Link href='/app' className=''>
          <DropdownMenuItem className='cursor-pointer'>
            <User className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          </Link>
          <Link href='/billing' className=''>
          <DropdownMenuItem className='cursor-pointer'>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          </Link>
          <Link href='/settings'>
          <DropdownMenuItem className='cursor-pointer'>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <Separator />
        <button onClick={(() => signOut())} className="w-full">
        <DropdownMenuItem className='cursor-pointer mt-1'>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

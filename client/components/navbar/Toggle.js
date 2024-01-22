import { useTheme } from 'next-themes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export const Toggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
  <Select onValueChange={e => setTheme(e)} className=''>
  <SelectTrigger className="w-[100px] text-black dark:text-white">
    <SelectValue value={theme} placeholder={"System"} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
    </>
  )
}
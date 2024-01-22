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
   <Select onValueChange={e => setTheme(e)} className='focus-visible:ring-transparent'>
  <SelectTrigger className="w-[100px]">
    <SelectValue value={theme} placeholder={theme} />
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
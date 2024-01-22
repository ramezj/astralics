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
   <Select onValueChange={e => setTheme(e)}>
  <SelectTrigger className="w-[100px]">
    <SelectValue value={theme} placeholder={theme} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
    <select value={theme} onChange={e => setTheme(e.target.value)}
    className='rounded-lg dark:bg-slate-950 bg-white outline-none text-black dark:text-white'
    >
      <option value="dark">
        test 
      </option>
      <option value="light">
      </option>
    </select>
    </>
  )
}
import { Button } from "@/components/ui/button"
import { MoonIcon } from "lucide-react"

export const Debug = () => {
    return (
        <>
        <Button className='border border-black/20 dark:border-white/10 hover:border-black/0 dark:hover:border-white/0 duration-200 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800'>
        <MoonIcon className='w-5'/>
        </Button>
        </>
    )
}
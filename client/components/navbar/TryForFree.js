import { Button } from "../ui/button"
export const TryForFree = (props) => {
    return (
        <>
        <Button className='w-[7rem] 
        text-sm
        bg-gray-200
        dark:bg-zinc-900
        dark:hover:bg-zinc-800
        dark:text-white
        border
        border-none
        hover:border-black/0
        dark:border-white/10
        dark:hover:border-white/0
        text-black hover:bg-gray-200 rounded-lg items-center
        duration-200
        ' 
        onClick={props.onClick}>
        Try for free
        </Button>
        </>
    )
}
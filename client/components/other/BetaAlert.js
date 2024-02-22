import { ArrowRight } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
export default function BetaAlert(props) {
    return (
        <>
        <Button 
        className='
        rounded-2xl
        px-8
        bg-astralicsblue dark:bg-astralicsblue
        hover:bg-astralicsblue dark:hover:!bg-astralicsblue
        duration-300
        text-white dark:text-white
        '>
            🎉 astralics just launched on producthunt 
            <ChevronRight className="ml-2 h-4 w-4" /> 
        </Button>
        </>
    )
}
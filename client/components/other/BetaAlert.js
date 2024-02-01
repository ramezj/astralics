import { ArrowRight } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
export default function BetaAlert(props) {
    return (
        <>
        <Button className='rounded-xl 
        mt-6 
        2xl:mt-4 
        '>
            Lunar just launched
            <ChevronRight className="ml-2 h-4 w-4" /> 
        </Button>
        </>
    )
}
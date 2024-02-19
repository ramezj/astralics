import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Feature(props) {
    return (
        <>
        <Card className='w-[23rem] cursor-pointer bg-gray-200 text-black dark:bg-zinc-950 dark:text-white dark:border-white/10 dark:hover:!bg-zinc-900 hover:!bg-gray-300 duration-200 border-black/10'>
            <CardHeader>
                <CardTitle>
                    {props.title}
                </CardTitle>
            </CardHeader>
            <CardContent className='justify-center items-center'>
                <h2>{props.Description}</h2>
            </CardContent>
        </Card>
        </>
    )
}
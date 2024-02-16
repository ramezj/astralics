import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Feature() {
    return (
        <>
        <Card className='w-[23rem] cursor-pointer bg-gray-200 text-black dark:bg-zinc-950 dark:text-white dark:border-white/10 dark:hover:!bg-zinc-900 hover:!bg-gray-300 duration-200 border-black/10'>
            <CardHeader>
                <CardTitle>
                    Dark Mode
                </CardTitle>
            </CardHeader>
            <CardContent className='justify-center items-center'>
                <h2>Design beautiful feedback pages in light or dark mode.</h2>
            </CardContent>
        </Card>
        </>
    )
}
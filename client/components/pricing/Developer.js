import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Laptop, CheckIcon } from "lucide-react"
import Link from 'next/link'

export function Developer(props) {
  return (
    <Card className="w-[350px] border-none bg-gray-200 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'> <Laptop/>Developer</CardTitle>
        <CardDescription>Monthly fee</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
        <h2 className="flex text-2xl font-semibold -mt-3">
                    $15
        </h2>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    5 Boards
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Unlimited Monthly feedback
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Authentication Check
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      {
          props.session
          ? 
          <>
            <Button asChild className='w-full bg-black hover:bg-zinc-900 font-bold'>
                <Link href={`https://astralics.lemonsqueezy.com/checkout/buy/0ec6b5db-d173-4a02-8d6f-2c63517cb77a?media=0&discount=0&user_id=${props.session.user.id}`}>
                Get Started
                </Link>
                </Button>
                
          </>
          : 
          <>
             <Button className='w-full bg-black hover:bg-zinc-900 font-bold'>Get Started</Button>
          </>
        }
      </CardFooter>
    </Card>
  )
}

import { useSession } from "next-auth/react"
import AppLayout from "@/components/app/AppLayout"
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { useState } from "react";

export default function NewPage () {
    const router = useRouter();
    const { data: session } = useSession({
      required:true,
      onUnauthenticated() {
          router.push('/');
      }
    })
    const [ text, setText ] = useState("Deploy Board");
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ error, setError ] = useState();
    const [ url, setUrl ] = useState();
    const [ slug, setSlug ] = useState();
    const [ response, setResponse ] = useState();
    const createProject = async (e) => {
      e.preventDefault();
      setLoading(true);
      const res = await fetch('/api/board/new', {
          method:'POST',
          headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              url: url,
              handle:slug
            })
      });
      const resp = await res.json();
      if(resp.ok == true) {
          setLoading(false);
          setText("Deployed!");
          setResponse(resp);
          console.log(resp);
          router.push(`/b/${resp.response.handle}`)
      } else if (resp.ok == false) {
          setLoading(false);
          toast.success("Created Successfully!", {
            style: {
            borderRadius: '10px',
            },})
          setText(resp.response);
          setResponse(resp.response);
      }
  }
    return (
        <>
        <AppLayout>
        <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Create Board</h2>
          <p className="text-muted-foreground">
            Create a new board and share it with your users to start collecting feedback.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="2xl:w-2/5 w-full">
        <form onSubmit={createProject}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input required id="name" placeholder="Name of your board" onChange={(e) => {setName(e.target.value)}} className=''/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Slug</Label>
              <Input required id="slug" placeholder="astralics.com/b/slug" onChange={(e) => {setSlug(e.target.value)}} className=''/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Website</Label>
              <Input required id="website" placeholder="Website of your board" onChange={(e) => {setUrl(e.target.value)}} className=''/>
            </div>
          </div>
          <div className='mt-6'>
        {
            loading ? (
                <>
                <Button disabled className='bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deploy Board
                </Button>
                </>
            )
            : (
                <>
                <Button type='submit' className='bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>{text}</Button>
                </>
            )
        }
        </div>
      </form>
      </div>
    {/* <Card className="w-[25rem] border-black/10 dark:border-white/10">
      <form onSubmit={createProject}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input required id="name" placeholder="Name of your board" onChange={(e) => {setName(e.target.value)}} className='bg-gray-200 dark:bg-zinc-900'/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Slug</Label>
              <Input required id="slug" placeholder="astralics.com/b/slug" onChange={(e) => {setSlug(e.target.value)}} className='bg-gray-200 dark:bg-zinc-900'/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Website</Label>
              <Input required id="website" placeholder="Website of your board" onChange={(e) => {setUrl(e.target.value)}} className='bg-gray-200 dark:bg-zinc-900'/>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-x-2">
        {
            loading ? (
                <>
                <Button disabled className='w-full bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deploy
                </Button>
                </>
            )
            : (
                <>
                <Button type='submit' className='w-full bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>{text}</Button>
                </>
            )
        }
      </CardFooter>
      </form>
    </Card> */}
    </div>
        </AppLayout>
        </>
    )
}
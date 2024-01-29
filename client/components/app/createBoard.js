import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
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

export default function CreateBoard(props) {
    const router = useRouter();
    const [ text, setText ] = useState("Create board");
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ handle, setHandle ] = useState();
    const [ error, setError ] = useState();
    const [ url, setUrl ] = useState();
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
                handle:name
              })
        });
        const resp = await res.json();
        if(resp.ok == true) {
            setLoading(false);
            setText("Created Successfully");
            setResponse(resp);
            console.log(resp);
            router.push(`/board/${resp.response.id}`)
        } else if (resp.ok == false) {
            setLoading(false);
            setText(resp.response);
            setResponse(resp.response);
        }
    }
    return (
        <>
        <Card className="w-[25rem] border-black/10 dark:border-white/10">
      <CardHeader>
        <CardTitle>Create board</CardTitle>
        <CardDescription>Deploy your new feedback board in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={createProject}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your board" onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Website</Label>
              <Input id="website" placeholder="Website of your board" onChange={(e) => {setUrl(e.target.value)}} />
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type='button' onClick={props.closeModal} variant="outline" className='bg-gray-200 text-black dark:bg-zinc-950 dark:text-white dark:border-white/10 dark:hover:!bg-zinc-900 hover:!bg-gray-300 duration-200 border-black/10'>Cancel</Button>
        {
            loading ? (
                <>
                <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deploying
                </Button>
                </>
            )
            : (
                <>
                <Button type='submit' className='bg-zinc-950 hover:bg-zinc-800 dark:hover:!bg-gray-300 duration-200'>Deploy</Button>
                </>
            )
        }
      </CardFooter>
      </form>
    </Card>
        {/* <div className="card w-[22.5rem] bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 duration-300 rounded-lg">
        <div className="card-body">
        <h2 className="card-title text-xl text-black dark:text-white font-bold justify-center -mt-2 mb-2 drop-shadow">Board Information</h2>
        <form onSubmit={createProject}>
        <Input required autoFocus={false} type="text" placeholder="Board name" onChange={(e) => {setName(e.target.value)}} className="input-md w-full mt-2 focus:outline-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold text-sm rounded-md" />
        <Input required autoFocus={false} type="url" placeholder="Board Website" onChange={(e) => {setUrl(e.target.value)}} className="input-md w-full mt-2 focus:outline-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold text-sm mt-4 rounded-md" />
        <Input required autoFocus={false} type="text" placeholder="Board Handle" onChange={(e) => {setHandle(e.target.value)}} className="input-md w-full mt-2 focus:outline-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold text-sm mt-4 rounded-md" />
        <center>
        <button 
        className="-mb-1 mt-6 w-full py-2 rounded-lg text-base text-white normal-case bg-blue-700 hover:bg-blue-800 duration-300 outline-none border-none font-medium" type='submit'>
        { 
        loading 
        ? <><><span className="loading loading-spinner loading-xs"></span></></>
        : <>{text}</>
        }
        </button>
        </center>
        </form>
        </div>
        </div> */}
        </>
    )
}
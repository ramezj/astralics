import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CreateBoard() {
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
                handle:handle
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
        <div className="card w-[22.5rem] bg-white dark:bg-zinc-950 duration-300 rounded-lg">
        <div className="card-body">
        <h2 className="card-title text-xl text-black dark:text-white font-bold justify-center -mt-2 mb-2 drop-shadow">Board Information</h2>
        <form onSubmit={createProject}>
        <input required autoFocus={false} type="text" placeholder="Board name" onChange={(e) => {setName(e.target.value)}} className="input-md w-full mt-2 focus:outline-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold text-sm rounded-md" />
        <input required autoFocus={false} type="url" placeholder="Board Website" onChange={(e) => {setUrl(e.target.value)}} className="input-md w-full mt-2 focus:outline-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold text-sm mt-4 rounded-md" />
        <input required autoFocus={false} type="text" placeholder="Board Handle" onChange={(e) => {setHandle(e.target.value)}} className="input-md w-full mt-2 focus:outline-none bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold text-sm mt-4 rounded-md" />
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
        </div>
        </>
    )
}
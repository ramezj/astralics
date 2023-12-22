import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CreateBoard() {
    const router = useRouter();
    const [ text, setText ] = useState("New Board");
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
        <div className="card w-[22.5rem] bg-zinc-950 border border-white/10 duration-300">
        <div className="card-body">
        <h2 className="card-title text-xl text-white font-bold justify-center -mt-2 mb-2 drop-shadow">Board Information</h2>
        <form onSubmit={createProject}>
        <input required autoFocus={false} type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} className="shadow-md input w-full mt-2 focus:outline-none bg-white text-black font-bold text-sm rounded-xl" />
        <input required autoFocus={false} type="url" placeholder="Link" onChange={(e) => {setUrl(e.target.value)}} className="shadow-md input w-full mt-2 focus:outline-none bg-white text-black font-bold text-sm mt-4 rounded-xl" />
        <input required autoFocus={false} type="text" placeholder="Handle" onChange={(e) => {setHandle(e.target.value)}} className="shadow-md input w-full mt-2 focus:outline-none bg-white text-black font-bold text-sm mt-4 rounded-xl" />
        <center>
        <button className="mt-6 shadow-xl w-full py-2 rounded-xl text-base text-black normal-case bg-white hover:bg-white outline-none border-none font-bold " type='submit'>
        { 
        loading 
        ? <><><span className="loading loading-spinner loading-xs align-middle"></span></></>
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
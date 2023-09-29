import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CreateBoard() {
    const router = useRouter();
    const [ text, setText ] = useState("Create Board");
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
        <div className="card w-[22.5rem] bg-black duration-300">
        <div className="card-body">
        <h2 className="card-title text-xl text-white font-bold justify-center -mt-2 mb-2">Board Information</h2>
        <form onSubmit={createProject}>
        <input required autoFocus={false} type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} className="bg-opacity-60 shadow-xl input w-full mt-2 focus:outline-none bg-neutral-800 text-white font-bold text-sm" />
        <input required autoFocus={false} type="url" placeholder="Website" onChange={(e) => {setUrl(e.target.value)}} className="bg-opacity-60 shadow-xl input w-full mt-2 focus:outline-none bg-neutral-800 text-white font-bold text-sm mt-4" />
        <input required autoFocus={false} type="text" placeholder="/handle" onChange={(e) => {setHandle(e.target.value)}} className="bg-opacity-60 shadow-xl input w-full mt-2 focus:outline-none bg-neutral-800 text-white font-bold text-sm mt-4" />
        <center>
        <button className="mt-6 shadow-xl w-full py-2 rounded-md text-base text-[#05050a] normal-case bg-white hover:bg-white outline-none border-none font-bold " type='submit'>
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
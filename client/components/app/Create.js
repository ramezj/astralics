import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Create() {
    const router = useRouter();
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ error, setError ] = useState();
    const [ url, setUrl ] = useState();
    const [ response, setResponse ] = useState();
    const createProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/project/new', {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: name,
                url: url
              })
        });
        const resp = await res.json();
        if(resp.ok == true) {
            setLoading(false);
            setResponse(resp);
            console.log(resp);
            router.push(`/project/${resp.response.id}`)
        } else if (resp.ok == false) {
            setLoading(false);
            setError(resp.response);
        }
    }
    return (
        <>
        <button className='btn bg-gray-900 text-white border-none normal-case font-medium hover:bg-gray-900' onClick={()=>window.my_modal_1.showModal()}>Create Project</button>
<dialog id="my_modal_1" className="modal bg-transparent shadow-2xl">
  <form method="dialog" className="modal-box bg-gray-950">
    <h3 className="font-bold text-lg">Project Information</h3>
    <br /><br />
    <input autoFocus={false} type="text" placeholder="Project's Name" onChange={(e) => {setName(e.target.value)}} className="input w-full max-w-xs bg-gray-900 font-bold border-none focus:outline-none" />
    <br /><br />
    <input autoFocus={false} type="text" placeholder="Project's URL" onChange={(e) => {setUrl(e.target.value)}} className="input w-full max-w-xs bg-gray-900 font-bold border-none focus:outline-none" />
    <br /><br />
    <button className="btn backgroundColor font-extrabold text-md w-3/6 text-white border-none hover:bg-indigo-800 normal-case" onClick={createProject}>Create Project</button>
    <br /><br />
    {JSON.stringify(response)}
    <p className='text-red-500 font-medium'>
    {error}
    </p>
    <div className="modal-action">
      <button className="btn bg-gray-900 border-none hover:bg-gray-900 normal-case -mt-7 text-white">Close</button>
    </div>
  </form>
</dialog>
        </>
    )
}
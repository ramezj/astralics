import SaveChanges from "./SaveChanges"
import React, { useState }from 'react';

export default function MainCard(props) {
    const [ name, setName ] = useState(props.profileName);
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState();
    const fetchSettings = async () => {
        setLoading(true);
        const response = await fetch(`/api/settings`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                name:name
            })
        });
        const res = await response.json();
            setLoading(false);
            setResponse(res.response);
    }
    return (
        <>
        <div className="card w-96 bg-white shadow-xl duration-300 outline-none rounded-md">
        <div className="card-body">
        <h1 className="card-title text-2xl font-bold justify-center text-black">Account Information</h1>
        <label className="float-left flex ml-1">Name</label>
        <input type="text" className="input w-full bg-zinc-950 font-medium outline-none border-none" value={name} onChange={((e) => {setName(e.target.value)})} />
        <label className="float-left flex ml-1">Email</label>
        <input type="text" disabled className="input w-full bg-gray-950 font-medium" value={props.profileEmail}/>
        <label className="float-left flex ml-1">Avatar URL</label>
        <input type="text" disabled className="input w-full bg-gray-950 font-medium" value={props.profileAvatar}/>
        <button className='bg-green-400 text-white border-none normal-case font-bold hover:bg-green-700 px-12 py-2 rounded-lg mt-4 duration-300'
        onClick={fetchSettings}
        >
            {
                loading 
                ? <><span className="loading loading-spinner loading-xs"></span></>
                : <>Save Changes</>
            }
            </button>
        </div>
        </div>
        </>
    )
}
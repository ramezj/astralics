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
        <div className="card shadow-none w-96 bg-gray-200 dark:bg-zinc-900 border border-white/0 dark:border-white/10 duration-300 outline-none rounded-lg">
        <div className="card-body">
        <h1 className="card-title text-2xl font-bold justify-center text-black dark:text-white">Account Information</h1>
        <label className="float-left flex ml-1 text-black dark:text-white">Name</label>
        <input type="text" className="input w-full bg-white dark:bg-zinc-950 font-medium outline-none border-none text-black dark:text-white" value={name} onChange={((e) => {setName(e.target.value)})} />
        <label className="float-left flex ml-1 text-black dark:text-white">Email</label>
        <input type="text" className="input w-full bg-white dark:bg-gray-950 text-black dark:text-white font-medium" value={props.profileEmail}/>
        <label className="float-left flex ml-1 text-black dark:text-white">Avatar URL</label>
        <input type="text" className="input w-full bg-white dark:bg-gray-950 text-black dark:text-white font-medium" value={props.profileAvatar}/>
        <button className='bg-green-400 text-white border-none normal-case font-bold hover:bg-green-700 px-12 py-2 rounded-lg mt-4 duration-300 -mb-1'
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
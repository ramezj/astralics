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
        <div className="card w-96 bg-black bg-opacity-60 shadow-xl cursor-pointer duration-300 outline-none">
        <div className="card-body">
        <center>
        <img class="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
        </center>
        <h1 className="card-title text-2xl font-bold text-white justify-center">Account Information</h1>
        <label className="float-left flex ml-1">Name</label>
        <input type="text" className="input w-full bg-gray-900 font-medium text-center outline-none border-none" value={name} onChange={((e) => {setName(e.target.value)})} />
        <label className="float-left flex ml-1">Email</label>
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.profileEmail}/>
        <label className="float-left flex ml-1">Avatar URL</label>
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.profileAvatar}/>
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
import React, { useState, useEffect } from 'react';

export default function Widget(props) {
    const [ loading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState();
    const [ rating, setRating ] = useState(2);
    const [ email, setEmail ] = useState();
    const [ text, setText ] = useState("Submit");
    const submitFeedback = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`/api/feedback/new/${props.projectId}`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                body:feedback,
                rating:rating,
                email:email
            })
        });
        const res = await response.json();
        if(res.ok == true) {
            setLoading(false);
            setText('Feedback Received 🥳')
            
        } else if (res.ok == false) {
            setLoading(false);
            setText(res.response)
        }
        console.log(res);
    }
    return (
        <>
        <div className="card w-[22.5rem] bg-black  duration-300">
  <div className="card-body">
    <h2 className="card-title text-2xl text-white font-bold justify-center -mt-2">Send Feedback</h2>
    {/* <div className='flex flex-wrap gap-6 justify-center w-full'>
    <span className='shadow-lg bg-white bg-opacity-75 cursor-pointer w-14 h-12 rounded-lg justify-center items-center flex hover:bg-opacity-50 duration-200'>
    <p className='text-2xl flex justify-center'>💡</p>
    </span>
    </div> */}
    <form onSubmit={submitFeedback}>
    <input required value={email} onChange={((e) => {setEmail(e.target.value)})}type="text" placeholder="john@doe.com" className="bg-opacity-60 shadow-xl input w-full mt-2 focus:outline-none bg-neutral-800 text-white font-extrabold text-sm -mt-1"/>
    <textarea required value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className=" bg-opacity-60 shadow-xl textarea w-full mt-3 focus:outline-none bg-neutral-800 text-white font-extrabold" placeholder="Leave your feedback here"></textarea>
    <br /><br />
    <button type='submit' className='-mt-3 shadow-xl w-full py-2 rounded-md text-base text-[#05050a] normal-case bg-white hover:bg-white outline-none border-none font-bold -mb-2'>
                {
                    loading 
                    ? <><span className="loading loading-spinner loading-xs"></span></>
                    : <>{text}</> 
                }    
            </button>
    </form>
  </div>
</div>
        </>
    )
}
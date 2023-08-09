import React, { useState, useEffect } from 'react';

export default function Widget(props) {
    const [ loading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState();
    const [ rating, setRating ] = useState(2);
    const [ email, setEmail ] = useState();
    const [ text, setText ] = useState("Submit Feedback");
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
        <div className="card w-96 backgroundColor shadow-xl duration-300">
  <div className="card-body">
    <h2 className="card-title text-2xl text-white font-black justify-center">Send Feedback</h2>
    <form>
    <textarea value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className="shadow-xl textarea w-full mt-2 focus:outline-none bg-white text-zinc-950 font-extrabold" placeholder="Leave your feedback here"></textarea>
    <input value={email} onChange={((e) => {setEmail(e.target.value)})}type="text" placeholder="john@doe.com" className="shadow-xl input w-full mt-2 focus:outline-none bg-white text-zinc-950 font-extrabold text-sm -mt-1"/>
    <br /><br />
    <button onClick={submitFeedback} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold'>
        {
            loading 
            ? <><span className="loading loading-spinner loading-xs"></span></>
            : <>{text}</> 
        }    
    </button>
    </form>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </>
    )
}
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
            setText('Feedback Received! 🚀')
            
        } else if (res.ok == false) {
            setLoading(false);
            setText(res.response)
        }
        console.log(res);
    }
    return (
        <>
        <div className="card w-96 bg-gray-950 shadow-xl duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">Local Widget</h2>
    <br />
    <div className='flex flex-wrap gap-4 justify-center w-full'>
    <div className='hover:scale-110 transition duration-150 ease-in-out w-12 h-10 bg-red-500 flex items-center justify-center rounded-md cursor-pointer' onClick={() => {setRating(1)}}>
        <p className='font-extrabold'>1</p>
    </div>
    <div className='hover:scale-110 transition duration-150 ease-in-out w-12 h-10 bg-orange-300 flex items-center justify-center rounded-md cursor-pointer' onClick={() => {setRating(2)}}>
        <p className='font-extrabold'>2</p>
    </div>
    <div className='hover:scale-110 transition duration-150 ease-in-out w-12 h-10 bg-yellow-300 flex items-center justify-center rounded-md cursor-pointer' onClick={() => {setRating(3)}}>
        <p className='font-extrabold'>3</p>
    </div >
    <div className='hover:scale-110 transition duration-150 ease-in-out w-12 h-10 bg-green-300 flex items-center justify-center rounded-md cursor-pointer' onClick={() => {setRating(4)}}>
        <p className='font-extrabold'>4</p>
    </div >
    <div className='hover:scale-110 transition duration-150 ease-in-out w-12 h-10 bg-green-600 flex items-center justify-center rounded-md cursor-pointer' onClick={() => {setRating(5)}}>
        <p className='font-extrabold'>5</p>
    </div>
    <form>
    <textarea value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className="textarea w-full mt-2 focus:outline-none bg-gray-900 font-bold" placeholder="Leave your feedback here"></textarea>
    <input value={email} onChange={((e) => {setEmail(e.target.value)})}type="text" placeholder="john@doe.com" className="input w-full mt-2 focus:outline-none bg-gray-900 font-bold text-sm -mt-1"/>
    <br /><br />
    <button onClick={submitFeedback} className='btn w-full text-white normal-case bg-[#4c44e4] outline-none border-none hover:bg-[#2d2888] font-bold'>
        {
            loading 
            ? <><span className="loading loading-spinner loading-xs"></span>Loading</>
            : <>{text}</> 
        }    
    </button>
    </form>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </>
    )
}
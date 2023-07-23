import React, { useState, useEffect } from 'react';

export default function Widget(props) {
    const [ feedback, setFeedback ] = useState();
    const [ rating, setRating ] = useState(2);
    const [ email, setEmail ] = useState();
    const submitFeedback = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/feedback/new/${props.projectId}`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                body:feedback,
                rating:5,
                email:email
            })
        });
        const res = await response.json();
        console.log(res);
    }
    return (
        <>
        <div className="card w-96 bg-gray-900 shadow-xl cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">Rate your overall experience</h2>
    <br />
    <div className='flex flex-wrap gap-4 justify-center w-full'>
    <div className='w-12 h-10 bg-red-500 flex items-center justify-center rounded-md'>
        <p className='font-bold'>1</p>
    </div>
    <div className='w-12 h-10 bg-orange-300 flex items-center justify-center rounded-md'>
        <p className='font-bold'>2</p>
    </div>
    <div className='w-12 h-10 bg-yellow-300 flex items-center justify-center rounded-md'>
        <p className='font-bold'>3</p>
    </div>
    <div className='w-12 h-10 bg-green-300 flex items-center justify-center rounded-md'>
        <p className='font-bold'>4</p>
    </div>
    <div className='w-12 h-10 bg-green-600 flex items-center justify-center rounded-md'>
        <p className='font-bold'>5</p>
    </div>
    <textarea value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className="textarea w-full mt-2 focus:outline-none bg-gray-950 font-bold" placeholder="Leave your feedback here"></textarea>
    <input value={email} onChange={((e) => {setEmail(e.target.value)})}type="text" placeholder="john@doe.com" className="input w-full mt-2 focus:outline-none bg-gray-950 font-bold text-sm -mt-1"/>
    <button onClick={submitFeedback} className='btn w-full text-white normal-case bg-gray-950 outline-none border-none hover:bg-gray-950 font-bold'>Submit Feedback</button>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </>
    )
}
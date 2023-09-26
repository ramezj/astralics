import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Widget(props) {
    const [ step, setStep ] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState();
    const [ rating, setRating ] = useState(2);
    const [ email, setEmail ] = useState();
    const [ text, setText ] = useState(`Submit`);
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
            setStep(2);
            setText('Feedback Received 🥳')
            
        } else if (res.ok == false) {
            setLoading(false);
            setText(res.response)
        }
        console.log(res);
    }
    return (
        <>
        <div className="card w-[22.5rem] h-[20rem] bg-black duration-300">
  <div className="card-body">
    { step === 1 && 
    <>
    <h2 className="card-title text-2xl text-white font-bold justify-center -mt-2">{props.title || "Send Feedback"}</h2>
    <form onSubmit={submitFeedback}>
    <input required value={email} onChange={((e) => {setEmail(e.target.value)})} type="email" placeholder="hello@trylunar.co" className="rounded-xl bg-opacity-50 shadow-xl input w-full mt-2 focus:outline-none bg-neutral-800 text-white font-bold text-sm -mt-1"/>
    <textarea rows='3' required value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className="resize-none rounded-xl bg-opacity-50 shadow-xl textarea w-full mt-3 focus:outline-none bg-neutral-800 text-white font-bold" placeholder="leave your feedback here"></textarea>
    <br /><br />
    <button type='submit' className='bg-blue-500 hover:bg-blue-600 duration-300 items-center justify-center -mt-3 w-full py-2 rounded-xl text-base text-white normal-caseoutline-none border-none font-bold -mb-3'>
                {
                    loading 
                    ? <><span className="loading loading-spinner loading-xs align-middle"></span></>
                    : <>{text}</> 
                }    
            </button>
    </form>
    </>
    }
    { step === 2 && 
    <>
    <motion.h1 
    initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{duration: 0.5}}
    className='text-2xl font-bold flex justify-center mt-[5rem]'>
        Feedback Received Successfully 🎉
    </motion.h1>
    <motion.button className='font-medium text-white mt-14' onClick={(() => setStep(1))}>back</motion.button>
    </>
    }
  </div>
</div>
        </>
    )
}
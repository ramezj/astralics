import * as React from 'react';
import { useState } from 'react';
import './tailwind.css'
import { motion } from 'framer-motion';

export function BlitzFeedback(props:{projectId:any}) {
    const [ loading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ text, setText ] = useState("Submit");
    const submitFeedback = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`/api/feedback/new/${props.projectId}`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                body:feedback,
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
        <div className="fixed inset-0 flex items-center justify-center">
      </div>
        <div className="card w-[22.5rem] backgroundColor widgetShadow duration-300">
  <div className="card-body">
    <motion.h1
    initial={{
      opacity: 0,
      y:-10
    }}
    animate={{
      opacity: 1,
      y:0
    }}
    transition={{duration: 0.8}}
    className="card-title text-2xl text-white font-bold justify-center -mt-2">Send Feedback</motion.h1>
    <form>
    <motion.input 
    initial={{
      opacity: 0,
      y:-10
    }}
    animate={{
      opacity: 1,
      y:0
    }}
    transition={{duration: 1.5}}
    value={email} onChange={((e) => {setEmail(e.target.value)})}type="text" placeholder="john@doe.com" className="bg-opacity-60 shadow-xl input w-full mt-2 focus:outline-none bg-[#05050a] text-white font-extrabold text-sm -mt-1"/>
    <textarea value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className="bg-opacity-60 shadow-xl textarea w-full mt-3 focus:outline-none bg-[#05050a] text-white font-extrabold" placeholder="Leave your feedback here"></textarea>
    <br /><br />
    <button onClick={submitFeedback} className='-mt-3 shadow-xl btn w-full text-white normal-case bg-[#05050a] hover:bg-[#05050a] outline-none border-none font-bold -mb-2'>
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
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MultiStepWidget(props) {
    const [ step, setStep ] = useState(0);
    const [ email, setEmail ] = useState('');
    const [ feedback, setFeedback ] = useState('')
    const [ loading, setLoading ] = useState();
    const [ text, setText ] = useState(`Submit`);
    const submitFeedback = async () => {
        console.log('request!')
    }
    return (
        <>
        <div className="card w-[22.5rem] bg-neutral-950 shadow-lg duration-300">
        <div className="card-body">
            {step === 0 && 
            <>
        <h1 className='text-2xl font-bold -mt-3'>Let's Talk</h1>
        <br />
        <div className='flex flex-wrap gap-6 justify-center w-full items-center mt-3'>
        <span onClick={(() => setStep(1))} className='shadow-lg bg-black bg-opacity-80 cursor-pointer w-[5rem] h-16 rounded-lg justify-center items-center flex hover:bg-opacity-90 duration-200'>
        <p className='text-2xl flex justify-center'>💡</p>
        </span>
        <span className='shadow-lg bg-black bg-opacity-80 cursor-pointer w-[5rem] h-16 rounded-lg justify-center items-center flex hover:bg-opacity-90 duration-200'>
        <p className='text-2xl flex justify-center'>💡</p>
        </span>
        <span className='shadow-lg bg-black bg-opacity-80 cursor-pointer w-[5rem] h-16 rounded-lg justify-center items-center flex hover:bg-opacity-90 duration-200'>
        <p className='text-2xl flex justify-center'>💡</p>
        </span>
    </div>
            </>
            }
            {step === 1 && 
            <>
            <form onSubmit={submitFeedback}>
    <input required value={email} onChange={((e) => {setEmail(e.target.value)})} type="email" placeholder="john@doe.com" className="rounded-xl bg-opacity-50 shadow-xl input w-full mt-2 focus:outline-none bg-neutral-800 text-white font-bold text-sm -mt-1"/>
    <textarea required value={feedback} onChange={((e) => {setFeedback(e.target.value)})} className="rounded-xl bg-opacity-50 shadow-xl textarea w-full mt-3 focus:outline-none bg-neutral-800 text-white font-bold" placeholder="Leave your feedback here"></textarea>
    <br /><br />
    <button type='submit' className='items-center justify-center -mt-3 w-full py-2 rounded-xl text-base text-[#05050a] normal-case bg-white hover:bg-white outline-none border-none font-bold -mb-3'>
                {
                    loading 
                    ? <><span className="loading loading-spinner loading-xs align-middle"></span></>
                    : <>{text}</> 
                }    
            </button>
    </form>
            </>
            }
        </div>
        </div>
        </>
    )
}
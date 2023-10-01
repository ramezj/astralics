import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Mvp(props) {
    const [ step, setStep ] = useState(1);
    const [ title, setTitle ] = useState('');
    const [ placeholder, setPlaceholder ] = useState('');
    const featureRequestClick = (e) => {
        e.preventDefault();
        setTitle('Feature Request');
        setPlaceholder('I think you should implement...')
        setStep(step+1);
    }
    const bugReportClick = (e) => {
        e.preventDefault();
        setTitle('Bug Report');
        setPlaceholder('This is not working on my device...')
        setStep(step+1);
    }
    return (
        <>
        <div className="card w-[22rem] bg-black">
            <div className="card-body gap-y-5">
                { step === 1 &&
                 <>
                 <center>
                    <h1 className="font-bold text-white text-xl -mt-2 mb-1">How can we help?</h1>
                </center>
                <span onClick={featureRequestClick} className="rounded-lg bg-white hover:bg-gray-300 duration-200 py-3.5 cursor-pointer">
                    <h1 className="font-bold text-black">Feature Request</h1>
                </span>
                <span onClick={bugReportClick} className="rounded-lg bg-white hover:bg-gray-300 duration-200 py-3.5 cursor-pointer">
                    <h1 className="font-bold text-black">Bug Report</h1>
                </span>
                <a href='https://blitz-feedback.vercel.app' className='text-gray-300 text-xs -mb-5 -mt-2 hover:text-white duration-200'>powered by lunar</a>
                 </>
                }
                {
                step === 2 &&
                <>
                <center>
                    <div>
                    <ArrowLeftIcon onClick={(() => {setStep(step-1)})} className='text-gray-200 float-left flex cursor-pointer hover:text-white' width={17} height={17} strokeWidth={'2'}/>
                    </div>
                    <div className='justify-center items-center justify-items-center'>
                        <center>
                        <h1 className="font-bold text-white text-xl -mt-2 mb-1 mr-[1.1rem]">{title}</h1>
                        </center>
                    </div>
                <textarea rows={3} className='bg-white text-black placeholder-gray-400 font-bold rounded-lg w-full mt-4 textarea focus:outline-none' placeholder={placeholder}></textarea>
                </center>
                <button className='py-1.5 bg-white text-black rounded-lg font-bold'>Submit</button>
                <a href='https://blitz-feedback.vercel.app' className='text-gray-300 text-xs -mb-5 -mt-2 hover:text-white duration-200'>powered by lunar</a>
                </>
                }
            </div>
        </div>
        </>
    )
}
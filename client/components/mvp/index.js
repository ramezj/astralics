import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Mvp(props) {
    const [ step, setStep ] = useState(1);
    const [ title, setTitle ] = useState('');
    const [ placeholder, setPlaceholder ] = useState('');
    const [ data, setData ] = useState("");
    const [ disabled, setDisabled ] = useState(true);
    const featureRequestClick = (e) => {
        e.preventDefault();
        setTitle('💡 Feature Request');
        setPlaceholder('i think you should implement..')
        setStep(step+1);
    }
    const bugReportClick = (e) => {
        e.preventDefault();
        setTitle('🐛 Bug Report');
        setPlaceholder('this is not working on my device..')
        setStep(step+1);
    }
    return (
        <>
        <div className="card w-[22rem] h-[15rem] bg-black">
            <div className="card-body gap-y-4">
                { step === 1 &&
                 <>
                 <center>
                    <h1 className="font-bold text-white text-xl -mt-1 mb-1">How can we improve?</h1>
                </center>
                <span onClick={featureRequestClick} className="rounded-lg bg-white hover:bg-gray-300 duration-300 py-4 cursor-pointer">
                    <h1 className="font-bold text-black">Feature Request</h1>
                </span>
                <span onClick={bugReportClick} className="rounded-lg bg-white hover:bg-gray-300 duration-300 py-4 cursor-pointer">
                    <h1 className="font-bold text-black">Bug Report</h1>
                </span>
                <a href='https://blitz-feedback.vercel.app' className='text-gray-300 text-xs hover:text-white duration-200 -mt-1.5'>powered by lunar</a>
                 </>
                }
                {
                step === 2 &&
                <>
                <center>
                    <div>
                    {/* <ArrowLeftIcon onClick={(() => {setStep(step-1)})} className='text-gray-400 duration-200 float-left flex cursor-pointer hover:text-white' width={17} height={17} strokeWidth={'3'}/> */}
                    </div>
                    <div className='justify-center items-center justify-items-center flex'>
                        <center>
                        <h1 className="font-bold text-white text-xl -mt-4 mb-4 flex float-left">{title}</h1>
                        </center>
                    </div>
                <textarea value={data} onChange={((e) => {setData(e.target.value)})} rows={3} className='resize-none bg-white text-black placeholder-gray-400 font-bold rounded-lg w-full textarea focus:outline-none' placeholder={placeholder}></textarea>
                </center>
                <div className='mt-1'>
                <button onClick={(() => {setStep(step-1)})} 
                className='float-left px-6 py-2 -mt-2 duration-300 bg-white hover:bg-gray-200 text-black rounded-lg font-bold text-sm'>
                back
                </button>
                <button 
                disabled={!data}
                onClick={(() => {setStep(step+1)})} 
                className='float-right px-8 py-2 -mt-2 duration-300 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-sm'>
                Send Feedback
                </button>
                </div>
                    </>
                }
                {
                step === 3 && 
                <>
                </>
                }
            </div>
        </div>
        </>
    )
}
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
        <div className="card w-[22rem] h-[13.7rem] bg-black">
            <div className="card-body gap-y-4">
                { step === 1 &&
                 <>
                 <center>
                    <h1 className="font-bold text-white text-xl -mt-2 mb-1">How can we improve?</h1>
                </center>
                <span onClick={featureRequestClick} className="rounded-lg bg-white hover:bg-gray-300 duration-300 py-3.5 cursor-pointer">
                    <h1 className="font-bold text-black">Feature Request</h1>
                </span>
                <span onClick={bugReportClick} className="rounded-lg bg-white hover:bg-gray-300 duration-300 py-3.5 cursor-pointer">
                    <h1 className="font-bold text-black">Bug Report</h1>
                </span>
                {/* <a href='https://blitz-feedback.vercel.app' className='text-gray-300 text-xs  hover:text-white duration-200'>powered by lunar</a> */}
                 </>
                }
                {
                step === 2 &&
                <>
                <center>
                    <div>
                    <ArrowLeftIcon onClick={(() => {setStep(step-1)})} className='text-gray-400 duration-200 float-left flex cursor-pointer hover:text-white' width={17} height={17} strokeWidth={'3'}/>
                    </div>
                    <div className='justify-center items-center justify-items-center '>
                        <center>
                        <h1 className="font-bold text-white text-xl -mt-2 mb-1 mr-[1.1rem]">{title}</h1>
                        </center>
                    </div>
                <textarea value={data} onChange={((e) => {setData(e.target.value)})} rows={2} className='resize-none bg-white text-black placeholder-gray-400 font-bold rounded-lg w-full mt-4 textarea focus:outline-none' placeholder={placeholder}></textarea>
                </center>
                {/* {
                    disabled === true && 
                    <>
                    <button 
                className='py-1.5 -mt-2 duration-300 bg-gray-400 cursor-default text-gray-600 rounded-lg font-bold'>
                Submit
                </button>
                    </>
                } */}
                {/* {
                    disabled === false && 
                    <> */}
                    <button 
                    disabled={!data}
                onClick={(() => {setStep(step+1)})} 
                className='py-1.5 -mt-2 duration-300 bg-white hover:bg-gray-200 text-black rounded-lg font-bold text-sm'>
                Send Feedback
                </button>
                    </>
                }
                {/* <a href='https://blitz-feedback.vercel.app' className='text-gray-300 text-xs  hover:text-white duration-200'>powered by lunar</a> */}
                {/* </>
                } */}
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
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
                    <h1 className="font-medium text-white text-2xl -mt-2 mb-1">How can we help?</h1>
                </center>
                <span onClick={featureRequestClick} className="rounded-lg bg-indigo-600 hover:bg-indigo-800 duration-200 py-3.5 cursor-pointer">
                    <h1 className="font-bold">Feature Request</h1>
                </span>
                <span onClick={bugReportClick} className="rounded-lg bg-indigo-600 hover:bg-indigo-800 duration-200 py-3.5 cursor-pointer">
                    <h1 className="font-bold">Bug Report</h1>
                </span>
                 </>
                }
                {
                step === 2 &&
                <>
                <center>
                <div className='flex gap-x-10'>
                    <ArrowLeftIcon onClick={(() => {setStep(step-1)})} className='text-gray-200 float-left flex cursor-pointer hover:text-white' width={17} height={17} strokeWidth={'2'}/>
               <h1 className="font-medium text-white text-2xl -mt-2 mb-1">{title}</h1>
                </div>
                <textarea rows={3} className='bg-gray-900 rounded-lg w-full mt-4 textarea focus:outline-none' placeholder={placeholder}></textarea>
                </center>
                <button className='py-1 bg-indigo-600 text-white rounded-lg font-medium'>Submit</button>
                </>
                }
            </div>
        </div>
        </>
    )
}
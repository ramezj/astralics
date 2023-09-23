import React, { useState } from 'react';

export default function MultiStepWidget(props) {
    const [ step, setStep ] = useState(0);
    return (
        <>
        <div className="card w-[22.5rem] bg-black  duration-300">
        <div className="card-body">
            {step === 0 && 
            <>
            <h1 className='duration-300'>First step, choose what category the feedback is</h1>
            </>
            }
            <button onClick={(() => setStep(step+1))}>Next Step</button>
            {step === 1 && 
            <>
            <h1 className='duration-300'>Second step, type in your email</h1>
            </>
            }
        </div>
        </div>
        </>
    )
}
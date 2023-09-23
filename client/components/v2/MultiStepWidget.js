import React, { useState } from 'react';

export default function MultiStepWidget(props) {
    const [ step, setStep ] = useState(0);
    return (
        <>
        <div className="card w-[22.5rem] bg-black  duration-300">
        <div className="card-body">
        <h1 className='card-title'>Email</h1>
        <input></input>
        </div>
        </div>
        </>
    )
}
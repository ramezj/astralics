import React, { useState, useEffect } from 'react';
export default function Feedback(props) {
    const [ color, setColor ] = useState();
    useEffect(() => {
        switch(props.rating) {
            case 1 : setColor('bg-red-500'); break;
            case 2 : setColor('bg-orange-300'); break;
            case 3 : setColor('bg-yellow-600'); break;
            case 4 : setColor('bg-green-300'); break;
            case 5 : setColor('bg-green-600'); break;
        }
    }, [])
    return (
        <>
        <div className="card w-96 bg-gray-900 shadow-xl hover:bg-gray-800 cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold">{props.title}</h2>
    {/* <h2 className='flex float-left mt-2'>{props.body}</h2> */}
    {/* <h2 className='flex float-left '> {props.email}</h2> */}
    <br />
    <div className="card-actions justify-end">
        <div className={`${color} w-12 h-8 font-bold flex items-center justify-center`}>
            {props.rating}
        </div>
    </div>
  </div>
</div>
        </>
    )
}
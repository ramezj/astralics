import React, { useState, useEffect } from 'react';
export default function Feedback(props) {
    const [ color, setColor ] = useState();
    useEffect(() => {
        switch(props.rating) {
            case 1 : setColor('bg-red-500'); break;
            case 2 : setColor('bg-orange-300'); break;
            case 3 : setColor('bg-yellow-300'); break;
            case 4 : setColor('bg-green-300'); break;
            case 5 : setColor('bg-green-600'); break;
        }
    }, [])
    return (
        <>
        <div className="card w-96 backgroundColor shadow-xl hover:bg-gray-900 cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">{props.email}</h2>
    <h2 className='float-left flex -mb-2 font-medium justify-center mt-4'>{props.body}</h2>
    <div className="card-actions justify-end">
    <div className={`${color} -mb-2 rounded-md w-12 h-8 font-bold flex items-center justify-center`}>
            {props.rating}
        </div>
    </div>
  </div>
</div>
        </>
    )
}
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
        <div className="hover:scale-105 card w-96 backgroundColor widgetShadow shadow-xl cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">{props.email}</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>{props.body}</h2>
  </div>
</div>
        </>
    )
}
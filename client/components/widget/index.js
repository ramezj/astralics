import React, { useState, useEffect } from 'react';

export default function Widget(props) {
    return (
        <>
        <div className="card w-96 bg-gray-900 shadow-xl cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">Rate your overall experience</h2>
    <br />
    <div className='flex flex-wrap gap-4 justify-center w-full'>
    <div className='w-12 h-10 bg-red-500 flex items-center justify-center rounded-md'>
        <p className='font-bold'>1</p>
    </div>
    <div className='w-12 h-10 bg-orange-300 flex items-center justify-center rounded-md'>
        <p className='font-bold'>2</p>
    </div>
    <div className='w-12 h-10 bg-yellow-300 flex items-center justify-center rounded-md'>
        <p className='font-bold'>3</p>
    </div>
    <div className='w-12 h-10 bg-green-300 flex items-center justify-center rounded-md'>
        <p className='font-bold'>4</p>
    </div>
    <div className='w-12 h-10 bg-green-600 flex items-center justify-center rounded-md'>
        <p className='font-bold'>5</p>
    </div>
    <textarea className="textarea w-full mt-2 focus:outline-none bg-gray-950 font-medium" placeholder="Leave your feedback here"></textarea>
    <input type="text" placeholder="john@doe.com" className="input w-full mt-2 focus:outline-none bg-gray-950 font-medium text-sm -mt-1"/>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </>
    )
}
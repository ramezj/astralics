import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
export default function Feedback(props) {
    return (
        <>
        <div className="hover:scale-105 card w-96 bg-black bg-opacity-70 shadow-xl cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">{props.email}</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>{props.body}</h2>
    <br />
    <a href={`mailto:${props.email}?subject=${props.body}`} className='px-8 py-2 bg-black bg-opacity-70 text-white rounded-lg font-bold flex justify-center items-center gap-2'>
    <EnvelopeIcon width='18' className='flex content-center'/>
        Reply
    </a>
  </div>
</div>
        </>
    )
}
import React, { useState } from 'react';
import { PaddleLoader } from '../PaddleLoader';

export default function Premium(props) {
    return (
        <>
        <PaddleLoader />
        {
      props.premium 
      ? <><span className="bg-green-600 text-white text-md font-bold px-10 py-1.5 rounded-full dark:bg-green-500 dark:text-white">Premium Plan</span></>
      : <> <span className="bg-red-800 text-red-100 text-md font-bold px-10 py-1.5 rounded-full dark:bg-red-800 dark:text-red-100">
        Free Plan
        <a onClick={(() => {
            Paddle.Checkout.open({
              product:63325,
              success:'/success'
            })
        })} className='bg-red-950 rounded-full px-6 cursor-pointer'>Upgrade Plan</a>
        </span> <>
      </></>
    }
        </>
    )
}
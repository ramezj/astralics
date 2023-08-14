import React, { useState } from 'react';
import { PaddleLoader } from '../PaddleLoader';

export default function Premium(props) {
    return (
        <>
        <PaddleLoader />
        {
      props.premium 
      ? <><span className="flex w-48 items-center premiumShadow align-middle bg-green-600 text-white text-md font-bold px-10 py-2 rounded-full dark:bg-green-500 dark:text-white">Premium Plan</span></>
      : <> <span className="flex w-48 items-center alertShadow align-middle cursor-pointer bg-red-600 text-white text-md font-bold px-10 py-2 rounded-full dark:bg-red-600 dark:text-white">
        <a onClick={(() => {
            Paddle.Checkout.open({
              product:63325,
              success:'/success'
            })
        })} className=''>Upgrade Plan</a>
        </span> <>
      </></>
    }
        </>
    )
}
import React, { useState } from 'react';

export default function Premium(props) {
    return (
        <>
        {
      props.premium 
      ? <><span className="bg-green-600 text-white text-md font-bold px-10 py-1.5 rounded-full dark:bg-green-500 dark:text-white">Premium Plan</span></>
      : <> <span className="bg-red-800 text-red-100 text-md font-bold px-10 py-1.5 rounded-full dark:bg-red-800 dark:text-red-100">Free Plan</span> <>
      </></>
    }
        </>
    )
}
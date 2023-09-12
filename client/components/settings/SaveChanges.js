import React, { useState } from 'react';

export default function SaveChanges(props) {
    return (
        <>
         <button className='btn bg-[#4c44e4] text-white border-none normal-case font-medium hover:bg-[#2d2888]'>
            {
                props.loading 
                ? <><span className="loading loading-spinner loading-xs"></span></>
                : <>Save Changes</>
            }
            </button>
        </>
    )
}
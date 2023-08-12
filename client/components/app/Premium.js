import React, { useState } from 'react';

export default function Premium(props) {
    return (
        <>
        {
      props.premium 
      ? <>Premium User</>
      : <>Not Premium</>
    }
        </>
    )
}
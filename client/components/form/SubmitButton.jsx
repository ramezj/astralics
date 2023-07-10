import React, { useState } from 'react';

export default function SubmitButton(props) {
    return (
      <>
      <button 
      type="button" 
      class="
      text-white 
      bg-blue-700 
      hover:bg-blue-800 
      font-medium 
      rounded-lg 
      text-sm 
      px-5 py-2.5 
      mr-2 mb-2 
      dark:bg-blue-600 
      dark:hover:bg-blue-700
      outline-none
      border-none
      "
      onClick={props.onClick}
      >
        {props.title}
        </button>
      </>
    )
  }
  
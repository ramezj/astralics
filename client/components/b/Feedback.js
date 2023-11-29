import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Feedback(props) {
    const [ upvotes, setUpvotes ] = useState(props.upvotes)
    const upvoteFeedback = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/feedback/upvote/${props.id}`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
        });
        const resp = await res.json();
        console.log(resp);
        if(resp.ok == true) {
            toast.success("Upvoted Successfully", {
                style: {
                borderRadius: '10px',
                background: '#09090b',
                color: '#fff',
                },
            })
            setUpvotes(upvotes+ 1);
        }
    }
    return (
        <>
<Toaster
  position="bottom-right"
  reverseOrder={true}
/>
        <div key={props.id} className=" w-full flex bg-zinc-950 rounded-2xl items-center cursor-pointer duration-300">
        <div className="m-8 flex flex-col items-start text-left">
        <p className='text-lg font-bold text-left'>{props.title}</p>
        <p className='text-xs text-left text-gray-200'>{props.description}</p>
        {
            props.type == "🐛 Bug Report"
            ? 
            <>
            <span class="border border-white/10 mt-2 -mb-1 bg-indigo-900 text-indigo-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-indigo-900 dark:text-indigo-300">{props.type}</span>
            </>
            : <></>
        }
        {
            props.type == "💡 Feature Request"
            ? 
            <>
            <span class="border border-white/10 mt-2 -mb-1 bg-yellow-900 text-yellow-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-indigo-900 dark:text-indigo-300">{props.type}</span>
            </>
            : <></>
        }
        {
            props.type == "📝 Feedback"
            ? 
            <>
            <span class="border border-white/10 mt-2 -mb-1 bg-green-900 text-green-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-indigo-900 dark:text-indigo-300">{props.type}</span>
            </>
            : <></>
        }
        </div>
        <div className="m-8 ml-auto">
        <button onClick={upvoteFeedback} className="hover:bg-zinc-800 duration-100 border border-white/10 w-[4.5rem] h-12 shadow-xl bg-zinc-900 rounded-xl items-center flex justify-center">
        <h1 className="m-1 font-medium">{upvotes}</h1>
        <ChevronUpIcon className="w-7 h-7 text-white"/>
        </button>
        </div>
        </div>
        </>
    )
}
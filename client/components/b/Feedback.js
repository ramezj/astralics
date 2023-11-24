import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function Feedback(props) {
    return (
        <>
        <div className="w-full flex bg-zinc-950 h-24 rounded-2xl items-center">
        <div className="m-8">
        <img class="2xl:w-10 2xl:h-10 md:w-9 md:h-9 w-7 h-7 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/1684753206264430592/iumsH271_400x400.jpg" alt="Rounded avatar"></img>
        </div>
        <div className='font-bold 2xl:text-lg text-sm flex items-center'>
            <h1 className=''>Submit new feedback</h1>
        </div>
        <div className="m-8 ml-auto">
        <button className="w-14 h-12 shadow-xl bg-zinc-900 rounded-xl items-center flex justify-center">
        <h1 className="m-1 font-medium">9</h1>
        <ChevronUpIcon className="w-7 h-7 text-white"/>
        </button>
        </div>
        </div>
        </>
    )
}
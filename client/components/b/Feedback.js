import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function Feedback(props) {
    return (
        <>
        <div className="w-full flex justify-between bg-zinc-950 h-24 rounded-2xl items-center">
        <div className="m-8">
        <img class="w-10 h-10 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/1684753206264430592/iumsH271_400x400.jpg" alt="Rounded avatar"></img>
        </div>
        <div className='font-medium text-2xl'>
            <h1>title</h1>
        </div>
        <div className="m-8">
        <button className="w-14 h-12 shadow-xl bg-zinc-900 rounded-xl items-center flex justify-center">
        <h1 className="m-1 font-medium">0</h1>
        <ChevronUpIcon className="w-7 h-7 text-white"/>
        </button>
        </div>
        </div>
        </>
    )
}
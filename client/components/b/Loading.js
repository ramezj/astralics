import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function Loading(props) {
    return (
        <>
        <div className="w-full flex bg-zinc-950 rounded-2xl items-center">
        <div className="m-8 flex flex-col items-start text-left">
        <p className='text-lg font-bold text-left'>{props.title}</p>
        <p className='text-xs text-left text-gray-200'>{props.description}</p>
        {/* <img class="2xl:w-10 2xl:h-10 md:w-9 md:h-9 w-7 h-7 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/1684753206264430592/iumsH271_400x400.jpg" alt="Rounded avatar"></img> */}
        </div>
        <div className="m-8 ml-auto">
        <button className="hover:bg-zinc-800 duration-100 border border-white/10 w-[4.5rem] h-12 shadow-xl bg-zinc-900 rounded-xl items-center flex justify-center">
        <ChevronUpIcon className="w-7 h-7 text-white"/>
        </button>
        </div>
        </div>
        </>
    )
}
import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function BoardFeedbackDiv(props) {
    return (
        <>
        <div className='w-3/5 h-16 bg-white align-middle flex justify-center items-center rounded-xl shadow-md gap-x-8'>
            <h1 className='text-black font-bold'>{props.feedback}</h1>
            <button className="btn bg-white hover:bg-gray-200 text-white normal-case flex border-2 border-indigo-500">
                <p className="text-black font-bold text-lg">{props.upvotes}</p>
                <ChevronUpIcon className='text-indigo-500 flex' width={22} height={24} strokeWidth={'3'}/>
            </button>
        </div>
        </>
    )
}
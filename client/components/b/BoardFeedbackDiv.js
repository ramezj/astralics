import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function BoardFeedbackDiv(props) {
    return (
        <>
        <div className='w-3/5 h-16 bg-black align-middle flex justify-center items-center rounded-xl shadow-md gap-x-8'>
            <h1>{props.feedback}</h1>
            <button className="btn bg-white hover:bg-gray-200 text-white normal-case">
                <p className="text-black font-bold text-lg">{props.upvotes}</p>
                <ChevronUpIcon className='text-black flex' width={22} height={24} strokeWidth={'3'}/>
            </button>
        </div>
        </>
    )
}
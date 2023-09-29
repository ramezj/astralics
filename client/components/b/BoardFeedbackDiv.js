import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function BoardFeedbackDiv(props) {
    return (
        <>
        <div className='w-3/5 h-16 bg-slate-900 align-middle flex justify-center items-center rounded-xl shadow-md gap-x-8'>
            <h1>{props.feedback}</h1>
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white normal-case ">
                <ChevronUpIcon className='text-white flex' width={22} height={24} strokeWidth={'2.3'}/>
            </button>
        </div>
        </>
    )
}
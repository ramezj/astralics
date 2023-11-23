import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function BoardFeedbackDiv(props) {
    return (
        <>
       <div className="card backgroundColor w-[20rem]">
        <div className="card-title">
        <h1 className="text-lg font-bold text-white justify-center ml-4 mt-4">{props.title}</h1>
        </div>
        <div className="card-body">
            <div className="bg-white w-full flex flex-wrap gap-8">
            </div>
        </div>
       </div>
        </>
    )
}
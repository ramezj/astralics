import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function Feedback(props) {
    return (
        <>
        <div className="w-full flex justify-between bg-gray-950 h-24 rounded-2xl items-center">
        <div className="m-8">
        <h1>Left</h1>
        </div>
        <div className="m-8">
        <div className="w-14 h-12 bg-gray-900 rounded-xl items-center flex justify-center">
        <h1 className="m-1 font-bold">0</h1>
        <ChevronUpIcon className="w-7 h-7 text-white"/>
        </div>
        </div>
        </div>
        </>
    )
}
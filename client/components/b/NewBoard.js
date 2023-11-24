import Dropdown from "./Dropdown"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { HandThumbUpIcon} from "@heroicons/react/24/solid"
export default function NewBoard(props) {
    return (
        <>
        <div className='h-100 2xl:w-3/6 w-full h-full min-h-screen '>
            <div className="w-5/6 flex justify-between">
            <div className='gap-4 flex float-left'>
            <Dropdown />
            </div>
            <div className='gap-4 flex'>
            <button className='px-4 py-2.5 bg-indigo-500 rounded-xl flex font-medium'>
                Submit Feedback
                <HandThumbUpIcon className='mt-[0.15rem] ml-2 h-5 w-5 text-white hover:text-gray-100'/>
                {/* <PlusCircleIcon className='mt-[0.15rem] ml-2 h-5 w-5 text-white hover:text-gray-100'/> */}
            </button>
            </div>
            </div>
            <br />
            <div className='w-5/6'>
                {props.children}
            </div>
        </div>
        </>
    )
}
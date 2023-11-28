import Dropdown from "./Dropdown"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import CreateFeedback from "./CreateFeedback"
import SortBy from "./SortBy"

export default function NewBoard(props) {
    return (
        <>
        <div className='h-100 2xl:w-3/6 lg:w-3/5 w-full h-full'>
            <div className="w-5/6 flex justify-between">
            <div className='gap-4 flex'>
            <Dropdown />
            <SortBy />
            
            </div>
            <div className='gap-4 flex'>
            <CreateFeedback />
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
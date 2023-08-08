import Delete from "./Delete"
import SaveChanges from "./SaveChanges"

export default function Card(props) {
    return (
        <>
        <div className="card w-96 backgroundColor shadow-xl cursor-pointer duration-300 outline-none">
  <div className="card-body">
    <div className="flex flex-wrap gap-3 justify-center">
        
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.projectName} />
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.projectWebsite} />
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.projectId}/>
        <br />
        <div className='flex gap-4 mt-6'>
            <Delete projectId={props.projectId}/>
        </div>
    </div>
    <br />
    </div>
    </div>
        </>
    )
}
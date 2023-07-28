import Delete from "./Delete"

export default function Card(props) {
    return (
        <>
        <div className="card w-96 bg-gray-900 shadow-xl cursor-pointer duration-300 outline-none">
  <div className="card-body">
    <div className="flex flex-wrap gap-3 justify-center">
        
        <input type="text" className="input w-full bg-gray-950 font-medium text-center" value={props.projectName} />
        <input type="text" className="input w-full bg-gray-950 font-medium text-center" value={props.projectId}/>
        <br />
        <Delete projectId={props.projectId}/>
    </div>
    <br />
    <div className="card-actions justify-end">
    </div>
    </div>
    </div>
        </>
    )
}
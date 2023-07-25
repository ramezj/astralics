export default function Card(props) {
    return (
        <>
        <div className="card sm:w-4/5 lg:w-2/4 bg-gray-900 shadow-xl cursor-pointer duration-300 outline-none">
  <div className="card-body">
    <div className="flex flex-wrap gap-3 justify-center">
        
        <input type="text" className="input w-4/5 bg-gray-950 font-medium" value={props.projectName} />
        <input type="text" className="input w-4/5 bg-gray-950 font-medium" value={props.projectId}/>
    </div>
    <br />
    <div className="card-actions justify-end">
    </div>
    </div>
    </div>
        </>
    )
}
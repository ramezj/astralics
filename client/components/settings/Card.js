export default function Card(props) {
    return (
        <>
        <div className="card w-96 bg-gray-900 shadow-xl hover:bg-gray-800 cursor-pointer duration-300 outline-none">
  <div className="card-body">
    <div>
        <input type="text" placeholder="Type here" className="input w-full max-w-xs" value={props.projectName} />
        <br /><br />
        <input type="text" placeholder="Type here" className="input w-full max-w-xs" value={props.projectId}/>
    </div>
    <br />
    <div className="card-actions justify-end">
    </div>
    </div>
    </div>
        </>
    )
}
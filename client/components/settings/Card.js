import Delete from "./Delete"
import SaveChanges from "./SaveChanges"

export default function Card(props) {
    return (
        <>
        <div className="card w-96 bg-white shadow-xl duration-300 outline-none">
        <div className="card-body">
        <div className="flex flex-wrap gap-3 justify-center">
        <h1 className="card-title text-2xl font-bold text-black justify-center mb-4">Board Information</h1>
        <input type="text" className="input w-full bg-black font-medium text-center cursor-not-allowed" value={props.projectName} />
        <input type="text" className="input w-full bg-black font-medium text-center cursor-not-allowed" value={props.projectWebsite} />
        <input type="text" className="input w-full bg-black font-medium text-center cursor-not-allowed" value={props.projectId}/>
        <br />
        <div className='flex gap-4 justify-center content-center'>
        <Delete projectId={props.projectId}/>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}
import Delete from "./Delete"
import SaveChanges from "./SaveChanges"

export default function Card(props) {
    return (
        <>
        <div className="card w-96 bg-gray-200 dark:bg-zinc-900 shadow-xl duration-300 outline-none rounded-lg border border-white/0 dark:border-white/10">
        <div className="card-body">
        <div className="flex flex-wrap gap-3 justify-center">
        <h1 className="card-title text-2xl font-bold text-black dark:text-white justify-center mb-4">Board Information</h1>
        <br />
        <input type="text" className="input w-full -mt-1 focus:outline-none bg-white dark:bg-zinc-950 dark:text-white text-zinc-950 font-bold text-sm rounded-md" value={props.projectName} />
        <input type="text" className="input w-full mt-2 focus:outline-none bg-white dark:bg-zinc-950 dark:text-white text-zinc-950 font-bold text-sm rounded-md" value={props.projectWebsite} />
        <input type="text" className="input w-full mt-2 focus:outline-none bg-white dark:bg-zinc-950 dark:text-white text-zinc-950 font-bold text-sm rounded-md" value={props.projectId}/>
        <br />
        <div className='w-full -mt-6'>
        <Delete projectId={props.projectId}/>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}
export default function NewBoard(props) {
    return (
        <>
        <div className='h-100 2xl:w-3/6 w-full h-full min-h-screen '>
            <div className="w-5/6 flex justify-between">
            <div className='gap-4 flex float-left'>
            <button className='px-4 py-2 bg-zinc-950 rounded-xl flex'>
                Filter
            </button>
            </div>
            <div className='gap-4 flex'>
            <button className='px-4 py-2 bg-indigo-500 rounded-xl flex'>
                Create a new post
            </button>
            </div>
            </div>
            <br /><br />
            <div className='w-5/6'>
                {props.children}
            </div>
        </div>
        </>
    )
}
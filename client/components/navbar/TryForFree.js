export const TryForFree = (props) => {
    return (
        <>
        <button className='w-[9rem] py-2 
        bg-white
        dark:bg-slate-950
        dark:text-white
        text-black hover:bg-gray-200 rounded-lg flex justify-center items-center gap-2
        duration-200
        ' 
        onClick={props.onClick}>
        Try for free
        </button>
        </>
    )
}
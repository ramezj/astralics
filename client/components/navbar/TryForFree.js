export const TryForFree = (props) => {
    return (
        <>
        <button className='w-[9rem] py-2 
        bg-white
        dark:bg-zinc-900
        dark:hover:bg-zinc-800
        dark:text-white
        border
        border-black/20
        hover:border-black/0
        dark:border-white/10
        dark:hover:border-white/0
        text-black hover:bg-gray-200 rounded-lg flex justify-center items-center gap-2
        duration-200
        ' 
        onClick={props.onClick}>
        Try for free
        </button>
        </>
    )
}
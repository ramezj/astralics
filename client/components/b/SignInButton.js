export const SignInButton = (props) => {
    return (
        <>
        <button className='w-[9rem] py-2 
        bg-white
        border 
        border-black/20 
        dark:border-white/10
        dark:bg-zinc-900
        dark:hover:bg-zinc-800
        dark:text-white
        text-black hover:bg-gray-200 rounded-lg flex justify-center items-center gap-2
        duration-200
        ' 
        onClick={props.onClick}>
        Sign In
        </button>
        </>
    )
}
export default function Info(props) {
    return (
        <>
        <h2 className='float-left flex -mb-2 font-medium justify-center mt-4 gap-x-2 text-black dark:text-white'>{props.children}</h2>
        </>
    )
}
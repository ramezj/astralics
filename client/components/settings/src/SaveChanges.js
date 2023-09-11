export default function SaveChanges(props) {
    return (
        <>
        <button className='bg-green-400 bg-opacity-80 border-none outline-none text-white px-12 py-2 rounded-lg duration-200 hover:bg-green-600 mt-4'
        onClick={props.onClick}
        >
            Save Changes
        </button>
        </>
    )
}
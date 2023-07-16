export default function DarkButton(props) {
    return (
        <>
        <button 
        onClick={props.onClick}
        className="
        cursor-pointer 
        text-white 
        bg-gray-800 
        hover:bg-gray-900 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 py-2.5 
        mr-2 mb-2 
        dark:bg-gray-800 
        dark:hover:bg-gray-700 
        dark:focus:ring-gray-700 
        dark:border-gray-700">
        {props.children}
        </button>
        </>
    )
}
import Link from "next/link"

export default function DocumentationCard(props) {
    return (
        <div className='gradientBorder p-2 rounded-lg duration-300'>
        <div className="card w-96 gradient duration-300 rounded-lg shadow-xl cursor-pointer bg-[#05050a]">
        <div className="card-body">
        <h2 className="card-title font-extrabold justify-center align-middle">{props.name}</h2>
        </div>
        </div>
        </div>
    )
}
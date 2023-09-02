import Link from "next/link"

export default function DocumentationCard(props) {
    return (
        <Link className='gradientBorder p-2 rounded-lg duration-300 widgetShadow' href={props.redirect}>
        <div className="card w-72 gradient rounded-lg shadow-xl cursor-pointer bg-[#05050a]">
        <div className="card-body">
        <h2 className="card-title font-extrabold justify-center align-middle">{props.name}</h2>
        </div>
        </div>
        </Link>
    )
}
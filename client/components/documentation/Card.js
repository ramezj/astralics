import Link from "next/link"

export default function DocumentationCard(props) {
    return (
        // <Link className='gradientBorder p-2 rounded-xl duration-300 widgetShadow' href={props.redirect}>
        <Link href={props.redirect} className="card w-72 rounded-xl shadow-xl cursor-pointer bg-[#0c0c17]">
        <div className="card-body">
        <h2 className="card-title font-extrabold justify-center align-middle">{props.name}</h2>
        </div>
        </Link>
        // </Link>
    )
}
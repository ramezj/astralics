import Link from 'next/link'

export default function Card(props) {
    return (
        <>
    <Link className="card w-96 bg-gray-900 shadow-xl hover:bg-gray-800 cursor-pointer" href={props.href}>
  <div className="card-body">
    <h2 className="card-title font-bold">{props.title}</h2>
    <br />
    <Link href='/' className="font-medium -mb-3 duration-150">{props.website}</Link>
    <div className="card-actions justify-end">
    </div>
  </div>
</Link>
        </>
    )
}
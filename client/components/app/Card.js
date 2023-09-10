import Link from 'next/link'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function Card(props) {
    return (
        <div className='hover:scale-105 duration-300'>
    <Link className="card w-96 widgetShadow bg-black bg-opacity-60 shadow-xl cursor-pointer duration-300 outline-none rounded-xl drop-shadow-2xl" href={props.href}>
  <div className="card-body">
    <h2 className="card-title font-extrabold drop-shadow-lg">{props.title}</h2>
    <br />
    <Link href='/' className="font-medium -mb-3 duration-150 drop-shadow-lg">{props.website}</Link>
    <div className="card-actions justify-end">
    <span className='-mt-6 -mr-2 w-10 h-8 rounded-md justify-center items-center float-right flex backgroundColor'>
    <Link href={`${props.settings}`} className='drop-shadow-lg float-right shadow-lg flex justify-center'>
    <AdjustmentsHorizontalIcon className='text-white' width={24} height={24}/>
    </Link>
    </span>
    </div>
  </div>
</Link>
        </div>
    )
}
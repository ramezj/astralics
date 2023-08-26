import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CursorArrowRaysIcon } from '@heroicons/react/20/solid'
import Widget from '../widget'

const features = [
  {
    name: 'Feedback Widget',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Secure Data',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
]

export default function Features(props) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="-mt-12 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
        Feedback is power, collect it with our platform.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          Easily collect & analyze bug reports, feature requests, ideas & feedback from multiple websites, all in one dashboard.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-100">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
export default function SortBy() {
    return (
        <>
        <button className="inline-flex justify-center bg-white w-12 py-2.5 rounded-xl font-medium text-black focus:outline-none">
            <Bars3BottomRightIcon
              strokeWidth={2}
              className="mt-[0.20rem] h-5 w-6 text-gray-800 hover:text-gray-950"
              aria-hidden="true"
            />
          </button>
        </>
    )
}
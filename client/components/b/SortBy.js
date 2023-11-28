import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
export default function SortBy() {
    return (
        <>
        <button className="inline-flex w-full justify-center bg-zinc-900 px-4 py-2.5 rounded-xl font-medium text-white focus:outline-none">
            Sort
            <Bars3BottomRightIcon
              className="mt-[0.20rem] ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </button>
        </>
    )
}
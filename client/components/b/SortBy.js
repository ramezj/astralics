import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
export default function SortBy() {
    return (
        <>
        <button className="inline-flex justify-center bg-zinc-950 w-12 py-2.5 rounded-xl font-medium text-white focus:outline-none">
            <Bars3BottomRightIcon
              className="mt-[0.20rem] h-5 w-6 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </button>
        </>
    )
}
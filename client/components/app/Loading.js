export default function Loading() {
    return (
        <div className="card w-96 bg-gray-900 shadow-xl hover:bg-gray-800 cursor-pointer">
<div role="status" class="max-w-sm animate-pulse">
<div className="card-body">
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-2.5 card-title"></div>
    <br />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[220px] mb-2.5"></div>
    <span class="sr-only">Loading...</span>
    </div>
</div>
        </div>
    )
}
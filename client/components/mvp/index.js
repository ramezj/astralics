export default function Mvp(props) {
    return (
        <>
        <div className="card w-[22rem] bg-black">
            <div className="card-body gap-y-4">
                <center>
                    <h1 className="font-bold text-white text-2xl -mt-2 mb-1">How can we help?</h1>
                </center>
                <span className="rounded-lg bg-blue-600 hover:bg-blue-800 duration-200 py-4 cursor-pointer">
                    <h1 className="font-bold">Feature Request</h1>
                </span>
                <span className="rounded-lg bg-blue-600 hover:bg-blue-800 duration-200 py-4 cursor-pointer">
                    <h1 className="font-bold">Bug Report</h1>
                </span>
                <span className="rounded-lg bg-blue-600 hover:bg-blue-800 duration-200 py-4 cursor-pointer">
                    <h1 className="font-bold">Bug Report</h1>
                </span>
            </div>
        </div>
        </>
    )
}
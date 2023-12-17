export default function Header(props) {
    return (
        <>
        <div className="2xl:w-3/6 py-4 bg-black/80 rounded-xl">
        <p className="text-xl font-bold">{props.name}</p>
        </div>
        </>
    )
}
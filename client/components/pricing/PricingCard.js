import Info from "./Info"

export default function PricingCard(props) {
    return (
        <>
  <div className={`card shadow-none rounded-lg w-[22rem] bg-gray-200 dark:bg-zinc-900 ${props.background} cursor-pointer duration-300`}>
  <div className="card-body text-left">
  <h2 className="card-title font-bold justify-center text-3xl text-black dark:text-white">{props.title}</h2>
    <h2 className="card-title font-bold justify-center text-3xl text-black dark:text-white mt-3">{props.price}</h2>
    {props.children}
  </div>
</div>
        </>
    )
}
import Info from "./Info"

export default function PricingCard(props) {
    return (
        <>
        <div className={`card rounded-lg w-[22rem] ${props.background} ${props.shadow} shadow-xl cursor-pointer duration-300 hover:scale-105`}>
  <div className="card-body">
  <h2 className="card-title font-bold justify-center text-3xl text-black">{props.title}</h2>
    <h2 className="card-title font-bold justify-center text-3xl text-black mt-3">{props.price}</h2>
    {props.children}
  </div>
</div>
        </>
    )
}
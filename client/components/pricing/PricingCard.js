import Info from "./Info"

export default function PricingCard(props) {
    return (
        <>
        <div className={`card w-[22rem] ${props.background} ${props.shadow} shadow-xl cursor-pointer duration-300 hover:scale-105`}>
  <div className="card-body">
  <h2 className="card-title font-extrabold justify-center text-3xl">{props.title}</h2>
  <br />
    <h2 className="card-title font-extrabold justify-center text-3xl">{props.price}</h2>
    {props.children}
  </div>
</div>
        </>
    )
}
export default function PricingCard(props) {
    return (
        <>
        <div className="card w-96 backgroundColor widgetShadow shadow-xl cursor-pointer duration-300 hover:scale-110">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center text-3xl">{props.title}</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>aaaa</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>aaaa</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>aaaa</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>aaaa</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>aaaa</h2>
    <h2 className='float-left flex -mb-2 font-bold justify-center mt-4'>aaaa</h2>
    <br />
    <button className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>{props.button}</button>
  </div>
</div>
        </>
    )
}
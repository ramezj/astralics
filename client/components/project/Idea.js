export default function Idea(props) {
    return (
        <>
        <div>
      <div className="card w-96 bg-gray-900 shadow-xl hover:bg-gray-800 cursor-pointer duration-300">
  <div className="card-body">
    <h2 className="card-title font-extrabold justify-center">💡 Idea </h2>
    <br />
    {props.children}
    <div className="card-actions justify-end">
    </div>
  </div>
  </div>
      </div>
        </>
    )
}
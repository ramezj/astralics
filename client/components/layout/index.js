import Navbar from "../navbar";

export default function Layout(props) {
    return (
        <div className='bg-gray-950 h-full min-h-screen bg-bottom bg-no-repeat w-full'>
        <Navbar/>
        {props.children}
        </div>
    )
}
import Navbar from "../navbar";

export default function Layout(props) {
    return (
        <div className='h-full min-h-screen bg-gray-950'>
        <Navbar/>
        {props.children}
        </div>
    )
}
import Navbar from "../navbar";

export default function Layout(props) {
    return (
        <div className='h-full min-h-screen bg-gradient-to-br from-gray-950 to-[#0d041e]'>
        <Navbar/>
        {props.children}
        </div>
    )
}
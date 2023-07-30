import Navbar from "../navbar";

export default function Layout(props) {
    return (
        <div className='h-full min-h-screen backgroundColor'>
        <Navbar/>
        {props.children}
        </div>
    )
}
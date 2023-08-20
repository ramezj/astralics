import Navbar from "../navbar";

export default function Layout(props) {
    return (
        <div className='bg-[url("/wallpaper.jpg")] h-full min-h-screen bg-bottom bg-no-repeat w-full'>
        <Navbar/>
        {props.children}
        </div>
    )
}
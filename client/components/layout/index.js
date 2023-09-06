import Navbar from "../navbar";

export default function Layout(props) {
    return (
        <div className='backgroundColor h-full min-h-screen bg-bottom bg-no-repeat w-full'>
            {/* bg-[#05050a] */}
        <Navbar/>
        {props.children}
        </div>
    )
}
import SaveChanges from "./SaveChanges"

export default function MainCard(props) {
    return (
        <>
        <div className="card w-96 bg-black bg-opacity-60 shadow-xl cursor-pointer duration-300 outline-none">
        <div className="card-body">
        <img class="w-10 h-10 rounded-full justify-center" src={props.profileAvatar} alt="Rounded avatar" />
        <br />
        <h1 className="card-title text-2xl font-bold text-white justify-center">Account Information</h1>
        <br />
        <label className="float-left flex ml-1">Name</label>
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.profileName}/>
        <label className="float-left flex ml-1">Email</label>
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.profileEmail}/>
        <label className="float-left flex ml-1">Avatar URL</label>
        <input type="text" disabled className="input w-full bg-gray-900 font-medium text-center" value={props.profileAvatar}/>
        <SaveChanges />
        </div>
        </div>
        </>
    )
}
import ProfileEdit from "./ProfileEdit";
import './Sidebar.css'

const Sidebar = () => {
	return(
		<div>
			<h2>Sidebar</h2>
			<h4>Edit your Profile</h4>
			<ProfileEdit></ProfileEdit>
			<button onClick={() =>{
				alert("YAY!");
			}}>Submit</button>
		</div>
	)
};

export default Sidebar
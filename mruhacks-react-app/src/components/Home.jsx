import Sidebar from './Sidebar'
import SessionInput from './SessionInput'
import './Home.css'

const Home = () => {
	return(
		<div>
			<h2>Home</h2>
			<Sidebar></Sidebar>
			<SessionInput></SessionInput>
		</div>
	)
};

export default Home
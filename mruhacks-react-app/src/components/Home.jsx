import Sidebar from './Sidebar';
import SessionInput from './SessionInput';
import './Home.css';
import { useState } from 'react';
import SelectMatch from './SelectMatch';

const Home = () => {
	let [Match,setMatch] = useState(0);
	if (Match == 0){
		return(
			<div id='mainContainer'>
				<Sidebar></Sidebar>
				<SessionInput viewMatches={setMatch}></SessionInput>
			</div>
		)
	}
	else{
		return(
			<div id='mainContainer'>
				<Sidebar></Sidebar>
				<SelectMatch/>
			</div>
		)
	}
};

export default Home
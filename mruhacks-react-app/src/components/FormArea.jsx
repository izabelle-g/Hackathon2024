import SessionInput from "./SessionInput";
import SelectMatch from "./SelectMatch";
import { useState } from "react";

const FormArea = () => {
    //const handleClick = (e) => ();
    const [view, setView] = useState();

	return(
		<div>
			<h2>Create Session</h2>

            /**TODO: put this button into the session input */  
            <button type="button" name="toMatch" onClick= { handleClick }>Choose a Partner</button>

		</div>
	)
};

function changeView(view){
    if(view == "toMatch") return <SelectMatch />;
    else return <SessionInput />;
}

export default FormArea
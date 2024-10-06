import './SessionInput.css'
const SessionInput = ({viewMatches}) => {
	return(
		<div className='largeContainer'>
			<h2>SessionInput</h2>

            <div id="persona">

				<label htmlFor="persona">Select Persona</label>
				<div>
					<input type="radio" name="persona" id="yellow"/>
					<label htmlFor="yellow">Yellow Cat</label>
				</div>
				<div>
					<input type="radio" name="persona" id="green"/>
					<label htmlFor="green">Green King</label>
				</div>
				<div>
					<input type="radio" name="persona" id="red"/>
					<label htmlFor="red">Red Joker</label>
				</div>
				<div>
					<input type="radio" name="persona" id="blue"/>
					<label htmlFor="blue">Blue Fish</label>
				</div>
			</div>

            <label htmlFor="task">Task Description</label>
            <textarea name="task" id="task" placeholder="Describe your task"  required></textarea>
			<label htmlFor='task'> Please also add some details as to criteria of success</label>

			<div>
				<button onClick={()=>{
					viewMatches();
				}}> Find Partners</button>
			</div>
		</div>
	)
};

export default SessionInput
const SessionInput = () => {
	return(
		<div>
			<h2>SessionInput</h2>

            <label htmlFor="persona">Select Persona</label>

            <label htmlFor="task">Task Description</label>
            <textarea name="task" id="task" placeholder="Describe your task" cols="50" rows="7" required></textarea>

            <label htmlFor="subtasks">Criteria</label>
		</div>
	)
};

export default SessionInput
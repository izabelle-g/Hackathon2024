const SessionInput = () => {
	return(
		<div>
			<h2>SessionInput</h2>

            <label for="persona">Select Persona</label>
            /**TODO:Options arrow keys or something*/

            <label for="task">Task Description</label>
            <textarea name="task" id="task" placeholder="Describe your task" cols="50" rows="7" required></textarea>

            <label for="criteria">Criteria</label>
            /**TODO:more checkboxes, option to add checkbox?? */
		</div>
	)
};

export default SessionInput
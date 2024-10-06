const SelectMatch = () => {
	return(
		<div>
			<h2>SelectMatch</h2>
			<div id="persona">

				<label htmlFor="persona">Select Session</label>
				<div>
					<input type="radio" name="persona" id="jeran"/>
					<label htmlFor="jeran">Jeran 4:30 - 5:00</label>
				</div>
				<div>
					<input type="radio" name="persona" id="steve"/>
					<label htmlFor="steve">Steve 3:00 - 4:00</label>
				</div>
				<div>
					<input type="radio" name="persona" id="red"/>
					<label htmlFor="Anon">Anonymous 1:00 - 1:30</label>
				</div>
			</div>

			<div>
				<button onClick={()=>{
					alert("Confirmed!");
				}}> Find Partners</button>
			</div>
		</div>
	)
};

export default SelectMatch
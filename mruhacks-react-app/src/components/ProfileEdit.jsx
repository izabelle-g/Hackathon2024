const ProfileEdit = (displaySubmit) => {
    return(
        <div>
            <h3>Language</h3>
            {/* /**TODO:dropdown maybe*/ }

            <h3>Friendliness</h3>
            <div id="rangeDisplay">
                <label for="partner-friend">No</label>
                <input type="range" id="partner-friend" name="partner-friend" min="0" max="10" required></input>
                <label for="partner-friend">New Friend!</label>
            </div>

            <h3>Talkativity</h3>
            <div id="rangeDisplay">
                <label for="partner-talk">None</label>
                <input type="range" id="partner-talk" name="partner-talk" min="0" max="10" required></input>
                <label for="partner-talk">Please</label>
            </div>

            <h3>Formality</h3>
            <div id="rangeDisplay">
                <label for="partner-formal">Casual</label>
                <input type="range" id="partner-formal" name="partner-formal" min="0" max="10" required></input>
                <label for="partner-formal">Unhinged</label>
            </div>

            <h3>Others</h3>
            <div>
                <label for="others"></label>
                <textarea id="others" name="others" rows="4" cols="50" placeholder="Any notes for us?"></textarea>
            </div>

            {/* <h3>Availability</h3> */}
            {/* <div>
                <label for="availability"></label>
                /**TODO: Add checkboxes for days*/
                /**TODO: Add time options
            </div> */}
            {/* {{if (displaySubmit) {
                return (<button onClick={console.log("heheehe")}></button>)
            }}} */}
        </div>
    )
};

export default ProfileEdit
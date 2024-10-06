const ProfileEdit = () => {
    return(
        <div>
            <h3>Language</h3>

            <h3>Friendliness</h3>
            <div id="rangeDisplay">
                <label htmlFor="partner-friend">No</label>
                <input type="range" id="partner-friend" name="partner-friend" min="0" max="10" required></input>
                <label htmlFor="partner-friend">New Friend!</label>
            </div>

            <h3>Talkativity</h3>
            <div id="rangeDisplay">
                <label htmlFor="partner-talk">None</label>
                <input type="range" id="partner-talk" name="partner-talk" min="0" max="10" required></input>
                <label htmlFor="partner-talk">Please</label>
            </div>

            <h3>Formality</h3>
            <div id="rangeDisplay">
                <label htmlFor="partner-formal">Casual</label>
                <input type="range" id="partner-formal" name="partner-formal" min="0" max="10" required></input>
                <label htmlFor="partner-talk">Unhinged</label>
            </div>

            <h3>Others</h3>
            <div>
                <label htmlFor="others"></label>
                <textarea id="others" name="others" rows="4" cols="50" placeholder="Any notes htmlFor us?"></textarea>
            </div>

            <h3>Availability</h3>
            <div>
                <label htmlFor="availability"></label>
            </div>

            <input type="submit"></input>
        </div>
    )
};

export default ProfileEdit
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <form action="" method="post">

        <p>
          <label htmlFor="name">Name</label><br />
          <input type="text" name="name" id="name" placeholder="Enter your name" size="30" required />
        </p>

        <p>
          <label htmlFor="task">Task Description</label><br />
          <textarea name="task" id="task" placeholder="Describe your task" cols="50" rows="7" required></textarea>
        </p>

        <p>
          <label htmlFor="criteria">Criteria</label><br />
          <textarea name="criteria" id="criteria" placeholder="List the criteria for your task" cols="50" rows="7" required></textarea>
        </p>

        <p>
          <label htmlFor="lang">Language</label><br />
          <textarea name="lang" id="lang" placeholder="State your language" cols="30" rows="2" required></textarea>
        </p>

        <p>
          <label htmlFor="email">Email</label><br />
          <input type="email" name="email" id="email" placeholder="Enter your email" size="30" required />
        </p>

        <h3>Talkativity</h3>
        <div className="range-container range-display">
          <label className="range-label" htmlFor="partner-talk">None</label>
          <input type="range" id="partner-talk" name="partner-talk" min="0" max="10" required />
          <label className="range-label" htmlFor="partner-talk">Please</label>
        </div>

        <h3>Formality</h3>
        <div className="range-container range-display">
          <label className="range-label" htmlFor="partner-formal">Casual</label>
          <input type="range" id="partner-formal" name="partner-formal" min="0" max="10" required />
          <label className="range-label" htmlFor="partner-formal">Unhinged</label>
        </div>

        <h3>Friendliness</h3>
        <div className="range-container range-display">
          <label className="range-label" htmlFor="partner-friend">No</label>
          <input type="range" id="partner-friend" name="partner-friend" min="0" max="10" required />
          <label className="range-label" htmlFor="partner-friend">New Friend!</label>
        </div>

        <h3>Extroversion</h3>
        <div className="range-container range-display">
          <label className="range-label" htmlFor="partner-extro">Introvert</label>
          <input type="range" id="partner-extro" name="partner-extro" min="0" max="10" required />
          <label className="range-label" htmlFor="partner-extro">EXTROVERT</label>
        </div>

        <h3>Others</h3>
        <div>
          <label htmlFor="others"></label>
          <textarea id="others" name="others" rows="4" cols="50" placeholder="Any notes for us?"></textarea><br />
        </div>

        <div className="schedule">
          <label htmlFor="schedule">Meeting Schedule:</label><br />
          <input type="date" id="meeting-date" name="meeting-date" required /><br />
          <input type="time" id="meeting-time" name="meeting-time" required /><br />
        </div>

        <br /><input type="submit" />
      </form>
      <div className="card"></div>
    </>
  );
}

export default App

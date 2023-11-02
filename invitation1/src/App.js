import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>

        <form className="app-Form">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>React Form</h1>

          <label>Name</label>
          <input type='text'></input>

          <label>Surname</label>
          <input type='text'></input>

          <label>Email address</label>
          <input type='email'></input>

          <label>Date of birth</label>
          <input type='date'></input>

          <label>Number</label>
          <input type='number'></input>
          <br />
          <button>submit</button>
        </form>
      </div>

    </div>
  );
}
export default App;
  
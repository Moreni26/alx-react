import holberton_logo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <labe htmlFor="password">password:</labe>
        <input id="password" type="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
App.js [unix] (23:01 12/05/2024)                                         1,1 Top
"App.js" [noeol][unix

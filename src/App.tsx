/* @jsx freact */
/* eslint-disable */
import * as P from 'maasglobal-prelude-ts';
import freact from './bob';
import logo from './logo.svg';
import './App.css';
import Omg from './omg';
import * as ruins from 'ruins-ts'

function Kuva(): freact.JSX.Element {

  return (
  <div>
    ennen
    <img src={logo} className="App-logo" alt="logo" />
    jalkeen
  </div>
    
    )

}

function App() {
  const io = (
    <div className="App">
      <header className="App-header">
        <Kuva />
        <p>start</p>
        <Omg />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  return ruins.fromIO(io)
  return ruins.fromIO(<div>{() => 'lol'}</div>)
}

export default App;

//import logo from './logo.svg';
import About from './components/About';
import New from './components/New';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
      <About></About>
      <New></New>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default App;

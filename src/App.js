import logo from './logo.svg';
import './App.css';
import ComponentA from '../src/components/ComponentA/ComponentA'
import ComponentB from '../src/components/ComponentB/ComponentB'
import ComponentC from '../src/components/ComponentC/ComponentC'
import ComponentD from '../src/components/ComponentD/ComponentD'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live React Component
        </a>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
      </header>
    </div>
  );
}

export default App;

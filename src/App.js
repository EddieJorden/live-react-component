import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent/ParentComponent';
// import ComponentA from '../src/components/ComponentA/ComponentA'
// import ComponentB from '../src/components/ComponentB/ComponentB'
// import ComponentC from '../src/components/ComponentC/ComponentC'
// import ComponentD from '../src/components/ComponentD/ComponentD'

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
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;

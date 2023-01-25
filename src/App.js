import './App.css';
import { exportTest } from './datarepo/data';
import Test from './datarepo/testComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {exportTest}
          <Test label="Hello World!"/>
        </p>
      </header>
    </div>
  );
}

export default App;

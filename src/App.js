import './App.css';
import BTCChart from './components/charts/BTCChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Crypto Status
        </p>
        <BTCChart></BTCChart>
      </header>
    </div>
  );
}

export default App;

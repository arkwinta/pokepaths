import './App.css';
import Board from './containers/Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          What are the dimensions of your map?
        </p>
        <Board height={3} width={4} />
      </header>
    </div>
  );
}

export default App;

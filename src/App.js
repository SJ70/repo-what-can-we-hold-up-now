import './App.css';
import 'material-symbols'
import Players from './components/Players';
import Monsters from './components/Monsters';

function App() {
  return (
    <div className="App">
      <header className="header">
      </header>
      <Players/>
      <Monsters/>
    </div>
  );
}

export default App;

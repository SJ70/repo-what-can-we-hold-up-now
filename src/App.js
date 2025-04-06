import './App.css';
import 'material-symbols'
import Players from './components/Players';
import Monsters from './components/Monsters';

function App() {
  return (
    <div className="App">
      <header className="header">
      </header>
      <div className='contents'>
        <Players/>
        <Monsters/>
      </div>
    </div>
  );
}

export default App;

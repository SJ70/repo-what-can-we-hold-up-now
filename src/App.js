import './App.css';
import 'material-symbols'
import Players from './components/Players';
import Monsters from './components/Monsters';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='contents'>
        <Players/>
        <Monsters/>
      </div>
    </div>
  );
}

export default App;

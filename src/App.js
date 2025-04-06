import './App.css';
import 'material-symbols'
import Players from './components/Players';
import Monsters from './components/Monsters';
import Header from './components/Header';
import { usePlayerStore } from './stores/playerStore';
import { useEffect } from 'react';

function App() {

  const players = usePlayerStore((state) => state.players);
  const savePlayers = usePlayerStore((state) => state.savePlayers);
  const loadPlayers = usePlayerStore((state) => state.loadPlayers);

  useEffect(() => {
    loadPlayers();
  }, [])

  useEffect(() => {
    savePlayers();
  }, [players])

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

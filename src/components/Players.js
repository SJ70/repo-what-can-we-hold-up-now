import './Players.css';
import 'material-symbols'
import { usePlayerStore } from '../stores/playerStore';
import Player from './Player';

function Players() {

  const players = usePlayerStore((state) => state.players);
  const addPlayer = usePlayerStore((state) => state.addPlayer);

  return (
    <div>
      <div>
        <label>
          플레이어 수 : {players.length}
        </label>
        <button onClick={addPlayer}>
          <span className="material-symbols-outlined"> add_box </span>
        </button>
      </div>

      <div>
        {players.map((player, idx) => (
          <Player key={idx} player={player} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export default Players;
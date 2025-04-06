import './Player.css';
import 'material-symbols'
import { usePlayerStore } from '../stores/playerStore';
import PlayerImage from './PlayerImage';
import PlayerColorPalette from './PlayerColorPalette';
import { useState } from 'react';

function Player({ player, idx }) {

  const removePlayer = usePlayerStore((state) => state.removePlayer);
  const setPlayerName = usePlayerStore((state) => state.setPlayerName);
  const plusPlayerPower = usePlayerStore((state) => state.plusPlayerPower);
  const minusPlayerPower = usePlayerStore((state) => state.minusPlayerPower);
  const switchPlayerAlive = usePlayerStore((state) => state.switchPlayerAlive);

  const [openColorPalette, setOpenColorPalette] = useState(false);

  return (
    <div className={`player ${player.alive ? 'alive-player' : 'dead-player'}`} >
      <div className="overlay"></div>

      <button onClick={() => switchPlayerAlive(idx)}>
        <PlayerImage player={player} width={55} height={55} />
      </button>

      <div className='player-info'>
        <div>
          <input className='player-name' placeholder='플레이어 이름' value={player.name} onChange={(e) => setPlayerName(idx, e.target.value)}/>
          <button onClick={() => setOpenColorPalette(true)}>
            <span className="material-symbols-outlined"> palette </span>
          </button>
        </div>

        <div>
          <label> 힘 : </label>
          <span> {player.power} </span>
          <button onClick={() => minusPlayerPower(idx)}>
            <span className="material-symbols-outlined"> indeterminate_check_box </span>
          </button>
          <button onClick={() => plusPlayerPower(idx)}>
            <span className="material-symbols-outlined"> add_box </span>
          </button>
        </div>
      </div>

      <button className='player-remove' onClick={() => removePlayer(idx)}>
        <span className="material-symbols-outlined"> delete </span>
      </button>
      {openColorPalette && (<PlayerColorPalette player={player} idx={idx} onClose={() => setOpenColorPalette(false)} />)}
    </div>
  )

}

export default Player;
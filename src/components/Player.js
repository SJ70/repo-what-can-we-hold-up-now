import './Player.css';
import 'material-symbols'
import { usePlayerStore } from '../stores/playerStore';
import { RgbColorPicker } from "react-colorful";
import PlayerImage from './PlayerImage';

function Player({ player, idx }) {

  const removePlayer = usePlayerStore((state) => state.removePlayer);
  const setPlayerName = usePlayerStore((state) => state.setPlayerName);
  const setPlayerColor = usePlayerStore((state) => state.setPlayerColor);
  const plusPlayerPower = usePlayerStore((state) => state.plusPlayerPower);
  const minusPlayerPower = usePlayerStore((state) => state.minusPlayerPower);
  const switchPlayerAlive = usePlayerStore((state) => state.switchPlayerAlive);

  return (
    <div className={`player ${player.alive ? 'alive-player' : 'dead-player'}`} >
      <div className="overlay"></div>
      <div className='player-image'>
        <button onClick={() => switchPlayerAlive(idx)}>
          <PlayerImage player={player} width={55} height={55} />
        </button>
        <RgbColorPicker className='player-image-color-picker' color={player.color} onChange={(color) => setPlayerColor(idx, color)} />
      </div>
      <div className='player-info'>
        <input className='player-name' placeholder='플레이어 이름' value={player.name} onChange={(e) => setPlayerName(idx, e.target.value)}/>
        <div className='player-power'>
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
    </div>
  )

}

export default Player;
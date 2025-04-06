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
    <div>
      <input placeholder='플레이어 이름' value={player.name} onChange={(e) => setPlayerName(idx, e.target.value)}/>

      <div style={{ backgroundColor: `rgb(${player.color.r}, ${player.color.g}, ${player.color.b})`}}> color </div>
      <RgbColorPicker color={player.color} onChange={(color) => setPlayerColor(idx, color)} />

      <PlayerImage player={player} width={100} height={100} />
      <button onClick={() => switchPlayerAlive(idx)}>
        <label> {player.alive ? '생존' : '사망'} </label>
      </button>

      <div>
        <label> 힘 : {player.power} </label>
        <div>
        <button onClick={() => plusPlayerPower(idx)}>
          <span className="material-symbols-outlined"> stat_1 </span>
        </button>
        <button onClick={() => minusPlayerPower(idx)}>
          <span className="material-symbols-outlined"> stat_minus_1 </span>
          </button>
        </div>
      </div>
      <button onClick={() => removePlayer(idx)}>
        <span className="material-symbols-outlined"> delete </span>
      </button>
    </div>
  )

}

export default Player;
import './PlayerColorPalette.css';
import { RgbColorPicker } from "react-colorful";
import { usePlayerStore } from '../stores/playerStore';
import 'material-symbols'

function PlayerColorPalette({ player, idx, onClose }) {

  const setPlayerColor = usePlayerStore((state) => state.setPlayerColor);

  return (
    <div className="backdrop" onClick={onClose}>
      <div className='palette' onClick={(e) => e.stopPropagation()}>
        <RgbColorPicker className='color-picker' color={player.color} onChange={(color) => setPlayerColor(idx, color)} />
      </div>
    </div>
  )
}

export default PlayerColorPalette;
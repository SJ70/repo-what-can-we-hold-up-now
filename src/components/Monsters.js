import './Monsters.css';
import { usePlayerStore } from '../stores/playerStore';
import MONSTERS from '../const/monsters';
import { useEffect, useState } from 'react';

function Monsters() {

  const players = usePlayerStore((state) => state.players);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const alivePlayers = players.filter(player => player.alive);
    const basePower = alivePlayers.length * 5
    const totalPower = alivePlayers.reduce((sum, player) => sum + player.power, basePower);
    const result = MONSTERS.filter(monster => monster.weight + 5 <= totalPower);
    setMonsters(result);
  }, [players]);

  return (
    <div className='monsters'>
      <div className='monsters-count'>
        <label> 들 수 있는 몬스터 수 : </label>
        <span> {monsters.length} </span>
      </div>
      <div className='monsters-list scroll'>
        {monsters.map((monster, idx) => (
          <div className='monster' key={idx}>
            <img src={process.env.PUBLIC_URL + monster.img} alt={monster.name} width={64} height={64} />
            <div className='monster-info'>
            <label className='monster-name-ko'> {monster.kor_name} </label>
              <label className='monster-name-en'> {monster.name} </label>
              <label className='monster-weight'> 무게: {monster.weight} </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Monsters;
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
    <div>
      {monsters.map((monster, idx) => (
        <div key={idx}>
          <label> {monster.name} </label>
          <label> {monster.kor_name} </label>
          <img src={monster.img} alt={monster.name} width={80} height={80} />
          <label> {monster.weight} </label>
        </div>
      ))}
    </div>
  )
}

export default Monsters;
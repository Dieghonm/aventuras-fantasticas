import React, { useState } from "react";
import Ficha from "../ficha/Ficha";
import Combate from "./components/Combate";

import enemy from "./enemy/enemy";

function CombatRPG() {
  const [status, setStatus] = useState({
    Habilidade: 0,
    Energia: 0,
    Sorte:0})
  const [modal, setmodal] = useState('none')

  const arrSort = () => {
    const arr = Object.keys(enemy)
    const enemyQ = arr.length - 1

    for (let i = enemyQ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const play = (stats) => {
    setStatus(stats)
    setmodal('block')
  }
  return (
    <div>
      <div>
        {/* <button onClick={()=> setmodal('block')}>iniciar</button> */}
        <Ficha play={play} />
        <div style={{display : modal}}>
        </div>
          <div style={{display : modal}}>
            <Combate status={status} setmodal={setmodal} enemys={ arrSort() }/>
          </div>
      </div>
    </div>
  )
}

export default CombatRPG

import React, { useState } from "react";
import PropTypes from 'prop-types';

import Enemies from "../books/Enemies";
import Combate from "./components/Combate";

function CombatRPG(props) {
  const { enemy } = props
  const [modal, setmodal] = useState('none')

  const arrSort = () => {
    const arr = Object.keys(Enemies)
    const enemyQ = arr.length - 1

    for (let i = enemyQ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return (
    <div>
      <div>
        <button onClick={()=> setmodal('block')}>Ir para o combate</button>
        <div style={{display : modal}}>
        </div>
          <div style={{display : modal}}>
            <Combate setmodal={setmodal} enemys={ enemy ? enemy : arrSort() }/>
          </div>
      </div>
    </div>
  )
}

CombatRPG.propTypes = {
  enemy: PropTypes.array,
};

export default CombatRPG;

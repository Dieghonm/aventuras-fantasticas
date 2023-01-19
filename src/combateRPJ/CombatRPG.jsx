import React, { useState } from "react";
import PropTypes from 'prop-types';

import Enemies from "../books/Enemies";
import Combate from "./components/Combate";

import * as S from './components/style/CombatRPG'

function CombatRPG(props) {
  const { enemy, enemiesCont, text = 'Ir para o combate', goTo } = props
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
        <S.CombatButton onClick={()=> setmodal('block')}>{text}</S.CombatButton>
        <S.CombatBlockDiv style={{display : modal}}>
        </S.CombatBlockDiv>
          <div style={{display : modal}}>
            <Combate enemiesCont={enemiesCont} setmodal={setmodal} goTo={goTo} enemys={ enemy ? enemy : arrSort() }/>
          </div>
      </div>
    </div>
  )
}

CombatRPG.propTypes = {
  enemy: PropTypes.array,
  enemiesCont:PropTypes.func,
  text: PropTypes.string,
  goTo: PropTypes.number
};

export default CombatRPG;

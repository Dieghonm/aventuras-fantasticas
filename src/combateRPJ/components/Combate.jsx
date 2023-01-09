import React, { useEffect, useState } from "react";
import Dice from '../../dice/Dice'
import Status from "./Status";

import enemy from "../enemy/enemy";

import * as S from './style/Combate'

function Combate(props) {
  const { status, enemys, changeAtt, setmodal } = props
  const [turnRoll, setTurnRoll] = useState({
    p1: 0,
    p2: 0,
    i1: 0,
    i2: 0,
  })
  const [enemyNum, setEnemyNum] = useState(0)
  const [enemyDamage, setEnemyDamage] = useState(0)
  const { Energia, Habilidade} = enemy[enemys[enemyNum]]
  const [winner, setWinner] = useState(['white', 'white'])
  const [damage, setDamage] = useState('')
  const [useLuck, setuseLuck] = useState(false)
  const [nextEnemyButton, setNexteEnemyButton] = useState(false)

  const {p1, p2, i1, i2} = turnRoll

  useEffect(() => {
    console.log(enemyNum, enemys.length - 1);
    if (damage === 'enemy' && enemyDamage > Energia - 3) {
      setNexteEnemyButton(true)
    }
    if (damage === 'player') {
      console.log('player dmg');
    }
  }, [damage])

  useEffect(() => {
    const playerAtack = p1 + p2 + status.Habilidade
    const enemyAttack = i1 + i2 + Habilidade
    const color = {winner: 'green', loser: 'red', tied: 'grey', new:'white'}
    if (i1 && i2 && p1 && p2) {
      if (playerAtack < enemyAttack) {
        setWinner([color.loser, color.winner])
        setDamage('player')
      } else if (playerAtack > enemyAttack) {
        setWinner([color.winner, color.loser])
        setDamage('enemy')
      } else {
        setWinner([color.tied, color.tied])
      }
    } else {
      setWinner([color.new, color.new])
    }
  },[turnRoll])

  const roll = (value, status) => {
    setTurnRoll({...turnRoll, [status]: value})
  }

  const randon = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  const rollAll = () => {
    setTurnRoll({
      p1: randon(),
      p2: randon(),
      i1: randon(),
      i2: randon(),
    })
  }

  const luckFunc = () => {
    setuseLuck(true)
    changeAtt('Sorte', 1)
  }

  const nextTurn = () => {
    if (damage === 'player') {
      changeAtt('Energia', useLuck === true ? 0 : 2)
    }
    if (damage === 'enemy') {
      setEnemyDamage( useLuck === true ? enemyDamage + 4 : enemyDamage + 2)
    }
    setTurnRoll({p1: 0, p2: 0, i1: 0, i2: 0 }); 
    setDamage('')
    setuseLuck(false)
  }

  const nextEnemy = () => {
    setEnemyNum(enemyNum + 1)
    setEnemyDamage(0)
    setNexteEnemyButton(false)
    setTurnRoll({p1: 0, p2: 0, i1: 0, i2: 0 }); 
    setDamage('')
    setuseLuck(false)
  }



  return (
    <S.CombatDiv>
        <div>
          <Status
            status={status}
            name={'Player'}
            damage={damage === 'player'}
            damageValue={0}
            luck={useLuck}
          />
          <span>
            <Dice roll={roll} status={'p1'} value={p1}/>
            <h1> + </h1>
            <Dice roll={roll} status={'p2'} value={p2}/>
            <h1> + </h1>
            <h2>{status.Habilidade}</h2>
            <h1> = </h1>
            <div style={{background: winner[0]}}>
              <h3>Total ataque</h3>
              <h2>{p1 && p2 ? p1 + p2 + status.Habilidade : 'roll'}</h2>
            </div>
          </span>
        </div>
        <div>
          <Status
            status={enemy[enemys[enemyNum]]}
            name={enemys[enemyNum]}
            damage={damage === 'enemy'}
            damageValue={enemyDamage}
            luck={useLuck}
          />
          <span>
            <Dice roll={roll} status={'i1'} value={i1}/>
            <h1> + </h1>
            <Dice roll={roll} status={'i2'} value={i2}/>
            <h1> + </h1>
            <h2>{Habilidade}</h2>
            <h1> = </h1>
            <div style={{background: winner[1]}}>
              <h3>Total ataque</h3>
              <h2 >{i1 && i2 ? i1 + i2 + Habilidade : 'roll'}</h2>
            </div>
          </span>
        </div>
  {
    i1 && i2 && p1 && p2 ? 
    <div>
      <p>{p1 + p2 + status.Habilidade > i1 + i2 + Habilidade ? 
        'O seu ataque foi maior, seu inimigo':'O ataque do inimigo foi maior, voce' }
        perde 2 pontos de ENERGIA
      </p>
      {nextEnemyButton?
      <button onClick={() => nextEnemy()}>Proximo Inimigo</button>
      :
      <button onClick={() => nextTurn()}>Nova rodada</button>
    }
      {p1 + p2 + status.Habilidade !== i1 + i2 + Habilidade ? <button disabled={useLuck} onClick={luckFunc}>Usar a Sorte</button>:null}
    </div>
    :
    <div>
      <p>Click em cada dado para jogar seu ataque ou no botão para jogar todos de uma só vez </p>
      <button onClick={rollAll}>Rolar todos</button>
      {/* <button>Fugir</button> */}
    </div>
  }
  <button onClick={() => setmodal('none') }>Sair</button>
    </S.CombatDiv>
  )
}

export default Combate

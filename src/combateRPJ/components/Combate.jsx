import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { actionAttributes } from "../../redux/actions";

import Status from "./Status";
import Dice from "../../dice/Dice";
import Enemies from "../../books/Enemies";

import * as S from './style/Combate'
import { Link } from "react-router-dom";

function Combate(props) {
  const { enemys, setmodal, goTo } = props
  const globalState = useSelector((state) => state)
  const {game, user} = globalState
  const dispatch = useDispatch()

  const [turnRoll, setTurnRoll] = useState({
    p1: 0,
    p2: 0,
    i1: 0,
    i2: 0,
  })
  const [enemyNum, setEnemyNum] = useState(0)
  const [enemyDamage, setEnemyDamage] = useState(0)
  const { Energia, Habilidade} = Enemies[enemys[enemyNum]]
  const [winner, setWinner] = useState(['white', 'white'])
  const [damage, setDamage] = useState('')
  const [useLuck, setuseLuck] = useState(false)
  const [nextEnemyButton, setNexteEnemyButton] = useState(false)

  const {p1, p2, i1, i2} = turnRoll

  useEffect(() => {
    if (damage === 'enemy' && enemyDamage > Energia - 3) {
      setNexteEnemyButton(true)
    }
  }, [damage])

  useEffect(() => {
    const playerAtack = p1 + p2 + game.Habilidade
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
    dispatch(actionAttributes(['Sorte', game.Sorte - 1]))
  }

  const nextTurn = () => {
    if (damage === 'player') {
      const dmg = useLuck === true ? 0 : 2
      dispatch(actionAttributes(['Energia', game.Energia - dmg]))
    }
    if (damage === 'enemy') {
      setEnemyDamage( useLuck === true ? enemyDamage + 4 : enemyDamage + 2)
    }
    setTurnRoll({p1: 0, p2: 0, i1: 0, i2: 0 }); 
    setDamage('')
    setuseLuck(false)
  }

  const nextEnemy = () => {
    setEnemyDamage(0)
    setNexteEnemyButton(false)
    setTurnRoll({p1: 0, p2: 0, i1: 0, i2: 0 }); 
    setDamage('')
    setuseLuck(false)
    if (enemys.length > enemyNum + 1) {
      setEnemyNum(enemyNum + 1)
    } else {
      setEnemyNum(0)
      setmodal('none')
    }
  }

  return (
    <S.CombatDiv>
        <S.BlockDiv>
          <Status
            status={game}
            name={user.user}
            damage={damage === 'player'}
            damageValue={0}
            luck={useLuck}
          />
          <span>
            <Dice roll={roll} status={'p1'} value={p1}/>
            <h1> + </h1>
            <Dice roll={roll} status={'p2'} value={p2}/>
            <h1> + </h1>
            <h2>{game.Habilidade}</h2>
            <h1> = </h1>
            <div style={{background: winner[0]}}>
              <h3>Total ataque</h3>
              <h2>{p1 && p2 ? p1 + p2 + game.Habilidade : 'roll'}</h2>
            </div>
          </span>
        </S.BlockDiv>
        <S.BlockDiv>
          <Status
            status={Enemies[enemys[enemyNum]]}
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
        </S.BlockDiv>
  { game.Energia === 0 ? (
    <Link to={`/aventuras-fantasticas/Play/${600}`}>
      <button>Voce perdeu</button>
    </Link>
  ) : 
    i1 && i2 && p1 && p2 ? 
    <div>
      <p>{p1 + p2 + game.Habilidade > i1 + i2 + Habilidade ? 
        'O seu ataque foi maior, seu inimigo':'O ataque do inimigo foi maior, voce' }
        perde 2 pontos de ENERGIA
      </p>
      {nextEnemyButton?
        enemys.length > enemyNum + 1 ? 
          <button onClick={() => nextEnemy()}>Proximo Inimigo</button>
          :
          <Link to={`/aventuras-fantasticas/Play/${goTo}`}>
            <button onClick={() => nextEnemy()}>Sair do combate</button>
          </Link>
      :
      <button onClick={() => nextTurn()}>Nova rodada</button>
    }
      {p1 + p2 + game.Habilidade !== i1 + i2 + Habilidade ? <button disabled={useLuck} onClick={luckFunc}>Usar a Sorte</button>:null}
    </div>
    :
    <div>
      <p>Click em cada dado para jogar seu ataque ou no botão para jogar todos de uma só vez </p>
      <button onClick={rollAll}>Rolar todos</button>
    </div>
  }
    </S.CombatDiv>
  )
}

Combate.propTypes = {
  status: PropTypes.object,
  enemys: PropTypes.array,
  changeAtt: PropTypes.func,
  setmodal: PropTypes.func,
  enemiesCont: PropTypes.func,
  goTo: PropTypes.number,
};

export default Combate

import React, { Component } from "react";
import PropTypes from 'prop-types';
import roll from './img/DADO.png'
import UNO from './img/UNO.png'
import DUO from './img/DUO.png'
import TRE from './img/TRE.png'
import QUATTRO from './img/QUATTRO.png'
import CINQUE from './img/CINQUE.png'
import SEI from './img/SEI.png'

import * as S from './styles/dice'

class Dice extends Component {
  state ={
    0: roll,
    1: UNO,
    2: DUO,
    3: TRE,
    4: QUATTRO,
    5: CINQUE,
    6: SEI,
  }

  rolling = () => {
    const { roll, status } = this.props
    const value = Math.ceil (Math.random() * 6)
    roll(value, status)
  }
  
  render() {
    const { value = 0 } = this.props
    return (
      <S.DiceButton disabled={value !== 0} onClick={this.rolling}>
        <img src={this.state[value]} alt="roll" />
      </S.DiceButton>
    )
  }
}

Dice.propTypes = {
  roll: PropTypes.func,
  status: PropTypes.string || PropTypes.number,
  value: PropTypes.number,
};

export default Dice
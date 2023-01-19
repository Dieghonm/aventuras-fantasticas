import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionAttributes, actionEquipADD } from "../redux/actions";
import Dice from "../dice/Dice";
import { ItensInitialAdd } from "../helpers/LocalStorage";

import * as S from '../styles/components/Attributes'

class Attributes extends Component {
  state={
    0:0,
    1:0,
    diceNum:0,
  }

  roll = (number, status) => {
    const { diceNum } = this.state
    this.setState({
      [status]: number,
      diceNum: diceNum + number
    })
  }

  nextButton = () => {
    const { indexFunc, changeAtribute, atribute, equipAdd, globalState:{user,book} } = this.props
    const { diceNum } = this.state
    if (atribute[0] === 'Equipamento') {
      equipAdd(atribute[1].equipAdd)
      ItensInitialAdd(atribute[1].equipAdd, user.user, book.book )
    }
    indexFunc()
    this.setState({ 0:0, 1:0, diceNum:0})
    changeAtribute([atribute[0], diceNum + atribute[1].sum])
  }

  render() {
    const { atribute } = this.props
    const dicesNum = atribute[1].roll
    return (
      <S.AttributesDiv>
        <div>

          <h3>{atribute[0]}</h3>
          {atribute[1].text.map((text, i) => <p key={atribute + i}>{text}</p>)}
        </div>
        {Array.from({ length: dicesNum }).map((_, i) => {
        return <Dice roll={this.roll} value={this.state[i]} status={i} key={atribute[0]+i}/>
        })}
        <S.AttributesButton disabled={ this.state[dicesNum - 1] === 0 } onClick={this.nextButton}>Proximo</S.AttributesButton>
      </S.AttributesDiv>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeAtribute: (data) => dispatch(actionAttributes(data)),
  equipAdd: (data) => dispatch(actionEquipADD(data)),
});

const mapStateToProps = (state) => ({
  globalState: state,
});

Attributes.propTypes = {
  atribute: PropTypes.array,
  indexFunc: PropTypes.func,
  changeAtribute: PropTypes.func,
  equipAdd: PropTypes.func,
  globalState: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
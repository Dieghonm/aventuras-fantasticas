import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionAttributes, actionEquipADD } from "../redux/actions";
import Dice from "../dice/Dice";

class  Attributes extends Component {
  state={
    rolled:0,
    diceNum:0,

  }

  roll = (number) => {
    const { rolled, diceNum } = this.state
    this.setState({
      rolled: rolled + 1,
      diceNum: diceNum + number
    })
  }

  nextButton = () => {
    const { indexFunc, changeAtribute, atribute, equipAdd } = this.props
    const { diceNum } = this.state
    if (atribute[0] === 'Equipamento') {
      equipAdd(atribute[1].equipAdd)
    }
    indexFunc()
    this.setState({ rolled:0, diceNum:0})
    changeAtribute([atribute[0], diceNum + atribute[1].sum])
  }

  render() {
    const { atribute } = this.props
    const { rolled } = this.state
    const dicesNum = atribute[1].roll
    return (
      <div>
        <h3>{atribute[0]}</h3>
        {atribute[1].text.map((text, i) => <h5 key={atribute + i}>{text}</h5>)}
        {Array.from({ length: dicesNum }).map((_, i) => <Dice roll={this.roll} value={rolled > i ? 1 : 0} key={atribute[0]+i}/>)}
        <button disabled={ rolled !== dicesNum } onClick={this.nextButton}>Proximo</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeAtribute: (data) => dispatch(actionAttributes(data)),
  equipAdd: (data) => dispatch(actionEquipADD(data)),
  
});

Attributes.propTypes = {
  atribute: PropTypes.array,
  book: PropTypes.string,
  indexFunc: PropTypes.func,
  changeAtribute: PropTypes.func,
  equipAdd: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Attributes);
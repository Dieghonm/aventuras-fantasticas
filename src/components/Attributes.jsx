import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionAttributes, actionEquipADD } from "../redux/actions";
import Dice from "../dice/Dice";
import { ItensInitialAdd } from "../helpers/LocalStorage";

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
    const { indexFunc, changeAtribute, atribute, equipAdd, globalState:{user,book} } = this.props
    const { diceNum } = this.state
    if (atribute[0] === 'Equipamento') {
      equipAdd(atribute[1].equipAdd)
      ItensInitialAdd(atribute[1].equipAdd, user.user, book.book )
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
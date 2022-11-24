import React, { Component } from "react";
import PropTypes from 'prop-types';
import Dice from "./Dice";

class  Attributes extends Component {
  state={
    rolled:0,
    diceNum:0,
  }

  buttonDisabled = () => {
    console.log();
  }

  roll = (number) => {
    const { rolled, diceNum } = this.state
    this.setState({
      rolled: rolled + 1,
      diceNum: diceNum + number
    })
  }

  render() {
    const { atribute, indexFunc } = this.props
    const { rolled } = this.state
    const dicesNum = atribute[1].roll
    return (
      <div>
        <h3>{atribute[0]}</h3>
        {atribute[1].text.map((text, i) => <h5 key={atribute + i}>{text}</h5>)}
        {Array.from({ length: dicesNum }).map((_, i) => <Dice roll={this.roll}  key={atribute[0]+i}/>)}
        <button disabled={ rolled !== dicesNum } onClick={()=>{indexFunc(),this.setState({ rolled:0, number:0})}}>Proximo</button>
      </div>
    )
  }
}

Attributes.propTypes = {
  atribute: PropTypes.array,
  book: PropTypes.string,
  indexFunc: PropTypes.func,
};

export default  Attributes
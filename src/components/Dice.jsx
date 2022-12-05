import React, { Component } from "react";
import PropTypes from 'prop-types';

class  Dice extends Component {
  state ={
    value: 'Roll'
  }

  roll = () => {
    const { roll, stats } = this.props
    const value = Math.ceil (Math.random() * 6)
    this.setState({value})
    roll(value, stats)
  }
  
  render() {
    const { value } = this.state
    return (
      <button disabled={value !== 'Roll'} onClick={this.roll}>{value}</button>
    )
  }
}

Dice.propTypes = {
  roll: PropTypes.func,
  stats: PropTypes.string,
};

export default  Dice
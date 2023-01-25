import React, { Component } from "react";
import PropTypes from 'prop-types';

import * as S from '../styles/components/Charms'

class Equipaments extends Component {
  state = {
    isHiden: true
  }

  showEquips = () => {
    const { isHiden } = this.state
    const { equips } = this.props
    return(
      <S.CharmsDiv hidden={isHiden}>
        {equips.map((equip) => <p key={equip}>{equip}</p> )}
      </S.CharmsDiv>
    )
  }

  render() {
    return (
      <div>
        <S.CharmButton onClick={() => this.setState({isHiden: !this.state.isHiden})}>Equipamentos</S.CharmButton>
        {this.showEquips()}
      </div>
    )
  }
}

Equipaments.propTypes = {
  equips: PropTypes.array
};

export default Equipaments
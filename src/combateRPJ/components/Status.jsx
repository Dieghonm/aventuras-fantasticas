import React from "react";
import PropTypes from 'prop-types';

import * as S from "./style/Status";

function Status(props) {
  const { status, name, damage, damageValue, luck } = props

  const showValue = (stat) => {
    if (stat === 'Energia') {
      if (damage) {
        if (luck) {
          if (name === 'Player') {
            return status[stat] - damageValue + ' - 0'
          }
          return status[stat] - damageValue + ' - 4'
        }
        return status[stat] - damageValue + ' - 2'
      }
      return status[stat] - damageValue
    }
    return status[stat]
  }

  return (
    <S.StatusDiv>
      <S.Name>{name}</S.Name>
      {Object.keys(status).map((stat) => (
      <div key={stat}>
        <h5>{stat}</h5>
        <h4>{showValue(stat)}</h4>
      </div>
      ))}
    </S.StatusDiv>
  )
}

Status.propTypes = {
  status: PropTypes.object,
  name: PropTypes.string,
  damage: PropTypes.bool,
  damageValue: PropTypes.number,
  luck: PropTypes.bool,
};

export default Status
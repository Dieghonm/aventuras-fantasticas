import React from "react";
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
      <h5>{name}</h5>
      {Object.keys(status).map((stat) => (
      <div key={stat}>
        <h5>{stat}</h5>
        <h4>{showValue(stat)}</h4>
      </div>
      ))}
    </S.StatusDiv>
  )
}

export default Status
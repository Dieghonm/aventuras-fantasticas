import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import * as S from '../styles/components/Charms'

import Livros from '../books/Livros'
import Dice from "../dice/Dice";
import { actionAttributes, actionCharms } from "../redux/actions";

class Charms extends Component {
  state = {
    isHiden: true
  }

  roll = (num, charm) => {
    const { globalState, attibutesRedux, charmsToRedux} = this.props
    const { book, game, attInitial } = globalState
    const data = Livros[book.book].character.Encantamentos
    console.log(attInitial, [data[charm][0], game[data[charm][0]] + num], charm);
    console.log(attInitial[data[charm][0]], game[data[charm][0]]);
    attibutesRedux([data[charm][0], game[data[charm][0]] + num])
    charmsToRedux(charm)
  }

  recoverAttRoll = (charm, game, attInitial) => {
    switch (charm) {
      case 'sorte':
        return game.Sorte < attInitial.Sorte ? <Dice roll={ this.roll } status={charm}/> : null

      case 'habilidade':
        return game.Habilidade < attInitial.Habilidade ? <Dice roll={ this.roll } status={charm}/> : null

      case 'energia':
        return game.Energia < attInitial.Energia ? <Dice roll={ this.roll } status={charm}/> : null
      
      default:
        break;
    }
  }

  showCharm = () => {
    const { charms, book, game, attInitial } = this.props.globalState
    const { isHiden } = this.state
    const list = Object.keys(charms)
    const data = Livros[book.book].character.Encantamentos
    const roll = ['sorte', 'habilidade', 'energia']
    return(
      <S.CharmsDiv hidden={isHiden}>
        {list.map((charm) => {
          return charms[charm] > 0 ? (
          <S.DiceDiv key={charm}>
            <p>{data[charm][0]} - {charms[charm]}</p>
            {this.recoverAttRoll(charm, game, attInitial)}
            {roll.includes(charm)? <Dice roll={ this.roll } status={charm}/>: null}
          </S.DiceDiv>
        ): null
        })}
      </S.CharmsDiv>
    )
  }

  render() {
    return (
      <div>
        <S.CharmButton onClick={() => this.setState({isHiden: !this.state.isHiden})}>Feitiços</S.CharmButton>
        {this.showCharm()}
      </div>
    )
  }
}

Charms.propTypes = {
  globalState: PropTypes.object,
  attibutesRedux: PropTypes.func,
  charmsToRedux: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  attibutesRedux: (data) => dispatch(actionAttributes (data)),
  charmsToRedux: (data) => dispatch(actionCharms(data)),
});

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Charms);
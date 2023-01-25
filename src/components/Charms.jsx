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
    const { book, game } = globalState
    const data = Livros[book.book].character.Encantamentos
    attibutesRedux([data[charm][0], game[data[charm][0]] + num])
    charmsToRedux(charm)
  }

  showCharm = () => {
    const { charms, book } = this.props.globalState
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
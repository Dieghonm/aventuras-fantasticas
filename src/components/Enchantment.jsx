import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from '../styles/components/Enchantment'

import Livros from '../books/Livros'
import { actionCharms, actionKillMagic } from "../redux/actions";
import { StorageCharmList } from "../helpers/LocalStorage";

class Enchantment extends Component {
  state = {}

  cheiceEnchant = (code, num) => {
    this.setState({
      [code]: this.state[code] + num,
      charms: this.state.charms - num
    })
  }

  componentDidMount() {
    const { globalState } = this.props
    const { book, game }= globalState
    this.setState({charms: game.Magia})
    const data = Livros[book.book].character.Encantamentos;
    const list = Object.keys(data)
      list.forEach((enchant) => {
        this.setState({[enchant]: 0})
      }
    )
  }

  enchantmentCard = (code, [name, description]) => {
    return (
      <S.EnchantmentCardDiv key={code}>
        <h3>{name}</h3>
        <p>{description}</p>
        <S.CardButtonsDiv>
          <button disabled={this.state.charms === 0} onClick={ () => this.cheiceEnchant(code, 1)}>+</button>
          <button disabled={this.state[code] < 1} onClick={ () => this.cheiceEnchant(code, -1)}>-</button>
          <h3>{this.state[code] || 0} Feitiços</h3>
        </S.CardButtonsDiv>
      </S.EnchantmentCardDiv>
    )
  }

  buttonNext = () => {
    const { indexFunc, globalState, charmsToRedux, killMagic } = this.props
    const { user, book } = globalState
    const data = Object.keys(this.state).filter((att) =>this.state[att] !== 0 )
    const obj = {}
    data.forEach((att) => obj[att]= this.state[att] )
    charmsToRedux(obj);
    StorageCharmList(obj, user.user, book.book)
    killMagic()
    indexFunc()
  }
 
  render() {
    const { book }= this.props.globalState
    const data = Livros[book.book].character.Encantamentos;
    const list = Object.keys(data)
    return (
      <div>
        <h4>Vocé pode escolher {this.state.charms} encantamentos para levar na sua jornada</h4>
        <S.EnchantmentsDiv>
          {list.map((encantment) => this.enchantmentCard(encantment, data[encantment]))}
        </S.EnchantmentsDiv>
        <button disabled={this.state.charms !== 0 } onClick={this.buttonNext} >próxima</button>
      </div>
    )
  }
}

Enchantment.propTypes = {
  indexFunc: PropTypes.func,
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
  killMagic: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  charmsToRedux: (data) => dispatch(actionCharms(data)),
  killMagic: (data) => dispatch(actionKillMagic (data)),
});

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Enchantment);

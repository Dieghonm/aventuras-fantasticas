import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from '../styles/components/Enchantment'

import Livros from '../books/Livros'
import { actionCharms, actionKillMagic } from "../redux/actions";
import { StorageCharmList } from "../helpers/LocalStorage";

class Enchantment extends Component {
  state = {
    name:'Clique no encantamento para ver a descrição',
    description:'Clique nos botoes de + ou - para escolher os encantamentos para levar em sua jornada.'
  }

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

  showDescription = (name, description) => {
    this.setState({name,description})
  }

  enchantmentCard = (code, [name, description]) => {
    return (
      <div onClick={() =>this.showDescription(name, description)}>
        <S.EnchantmentCardDiv key={code}>
          <button disabled={this.state[code] < 1} onClick={ () => this.cheiceEnchant(code, -1)}>-</button>
          <h3>{this.state[code] || 0}</h3>
          <button disabled={this.state.charms === 0} onClick={ () => this.cheiceEnchant(code, 1)}>+</button>
          <h3>{name}</h3>
        </S.EnchantmentCardDiv>
      </div>
    )
  }

  buttonNext = () => {
    const { indexFunc, globalState, charmsToRedux, killMagic } = this.props
    const { user, book } = globalState
    let data = Object.keys(this.state).filter((att) =>this.state[att] !== 0 && typeof this.state[att] === 'number')
    const obj = {}
    data.forEach((att) => obj[att]= this.state[att] )
    console.log(obj);
    charmsToRedux(obj);
    StorageCharmList(obj, user.user, book.book)
    killMagic()
    indexFunc()
  }
 
  render() {
    const { book }= this.props.globalState
    const data = Livros[book.book].character.Encantamentos;
    const { name, description} = this.state
    const list = Object.keys(data)
    return (
      <S.EnchantmentsDiv>
        <h4>Vocé pode escolher {this.state.charms} encantamentos para levar na sua jornada</h4>
        <S.EnchantmentsMainnDiv>
          <S.EnchantmentsCardsDiv>
            {list.map((encantment) => this.enchantmentCard(encantment, data[encantment]))}
          </S.EnchantmentsCardsDiv>
          <S.EnchantmentsTextP>{`${name} - ${description}`}</S.EnchantmentsTextP>
        </S.EnchantmentsMainnDiv>
        <S.NextButton disabled={this.state.charms !== 0 } onClick={this.buttonNext}>próxima</S.NextButton>
      </S.EnchantmentsDiv>
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

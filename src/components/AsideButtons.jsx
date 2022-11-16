import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from '../styles/components/AsideButtons'

class AsideButtons extends Component {
  render() {
    // const { user }= this.props
    // console.log(user);
    return(
      <>
        <S.AsideButtons>Novo Jogo</S.AsideButtons>
        <S.AsideButtons>Jogos Salvos</S.AsideButtons>
        <S.AsideButtons>Como Jogar</S.AsideButtons>
        <S.AsideButtons>Sobre Nós</S.AsideButtons>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state,
});

AsideButtons.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(AsideButtons);

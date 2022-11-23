import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from '../styles/components/AsideButtons'
import { Link } from "react-router-dom";


class AsideButtons extends Component {
  render() {
    const { changeLogin }= this.props
    return(
      <>
        <Link to="/aventuras-fantasticas/novo-jogo">
          <S.AsideButtons>Novo Jogo</S.AsideButtons>
        </Link>
        <Link to="/aventuras-fantasticas/jogos-salvos">
          <S.AsideButtons>Jogos Salvos</S.AsideButtons>
        </Link>
        <Link to="/aventuras-fantasticas/como-jogar">
          <S.AsideButtons>Como Jogar</S.AsideButtons>
        </Link>
        <Link to="/aventuras-fantasticas/sobre-nos">
          <S.AsideButtons>Sobre Nós</S.AsideButtons>
        </Link>
        <Link to="/aventuras-fantasticas">
          <S.AsideButtons onClick={() => changeLogin(false)}>Sair</S.AsideButtons>
        </Link>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state,
});

AsideButtons.propTypes = {
  changeLogin: PropTypes.object,
};

export default connect(mapStateToProps)(AsideButtons);

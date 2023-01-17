import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import { GetGravatar } from "../helpers/Gravatar"

import Livros from '../books/Livros'
import CASTELO from '../imgs/CASTELO.png'

import * as S from '../styles/components/Status'
import { AtributeChange } from "../helpers/LocalStorage";
import Charms from "./Charms";

class Status extends Component {
  criateAttribute = (att, value) => {
    return(
    <div key={att}>
      <h4>{att}</h4>
      <h3>{value}</h3>
    </div>
    )
  }

  componentDidUpdate(){
    const { user, book, game } = this.props.globalState
    AtributeChange(user.user, book.book, game);
  }

  charmsButton = (charms) => {
    const keys = Object.keys(charms).length
    if (keys > 0) {
      return (
        <Charms />
      )
    }
  }

  render() {
    const { user, book, game, charms } = this.props.globalState
    if (!user.user) {
      return(
        <Navigate to="/aventuras-fantasticas" />
      )
    }
    if (!book.book) {
      return (
        <Navigate to="/aventuras-fantasticas/NewGame" />
      )
    }
    return(
      <S.StatusDiv>
        <S.CastleButtonImg src={CASTELO} alt="aba de status" />
        <h4>{Livros[book.book].name}</h4>
        {Object.keys(game).map((att) => this.criateAttribute(att, game[att]))}
        {this.charmsButton(charms)}
        <S.PlayerDiv>
          <img src={GetGravatar(user.email)} alt={user.user} />
          <h6>{user.user}</h6>
        </S.PlayerDiv>
      </S.StatusDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

Status.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(Status);

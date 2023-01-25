import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import { GetGravatar } from "../helpers/Gravatar"

import Charms from "./Charms";
import Equipaments from "./Equipaments";
import { AtributeChange } from "../helpers/LocalStorage";
import { oppenStatusPage } from "../redux/actions";

import Livros from '../books/Livros'
import CASTELO from '../imgs/CASTELO.png'

import * as S from '../styles/components/Status'

class Status extends Component {
  state = {
    modal: 'none'
  }
  criateAttribute = (att, value) => {
    if (att !== 'Magia') {
      return(
      <S.AttDiv key={att}>
        <h5>{att}</h5>
        <h4>{value}</h4>
      </S.AttDiv>
      )
    }
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

  equipamentsButton = (equips) => {
    if (equips.length) {
      return (
        <Equipaments equips={equips} />
      )
    }
  }

  render() {
    const { oppenStatusDispatch, globalState } = this.props
    const { user, book, game, charms, status, equip } = globalState

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
      <div>
        <S.CastleButtonImg onClick={ () => oppenStatusDispatch() } src={CASTELO} alt="aba de status" />
        <div style={{display : status}}>
          <S.StatusDiv >
            <S.StatusBlock>
              <img src={GetGravatar(user.email)} alt={user.user} />
              <S.PlayerDiv>
                <h4>{Livros[book.book].name}</h4>
                <h5>{user.user}</h5>
              </S.PlayerDiv>
            </S.StatusBlock>
            <S.StatusBlock>
              {Object.keys(game).map((att) => this.criateAttribute(att, game[att]))}
            </S.StatusBlock>
            <S.StatusBlock>
              {this.charmsButton(charms)}
              {this.equipamentsButton(equip)}
            </S.StatusBlock>
          </S.StatusDiv>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  oppenStatusDispatch: (data) => dispatch(oppenStatusPage(data)),
})



Status.propTypes = {
  globalState: PropTypes.object,
  oppenStatusDispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);

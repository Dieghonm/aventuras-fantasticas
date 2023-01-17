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
      <div>
        <S.CastleButtonImg onClick={()=>this.setState({modal:this.state.modal === 'block'?'none':'block'})} src={CASTELO} alt="aba de status" />

        <div style={{display : this.state.modal}}>
          <S.StatusDiv >
            <S.StatusBlock>
              <h4>{Livros[book.book].name}</h4>
              <S.PlayerDiv>
                <img src={GetGravatar(user.email)} alt={user.user} />
                <h6>{user.user}</h6>
              </S.PlayerDiv>
            </S.StatusBlock>
            <S.StatusBlock>
              {Object.keys(game).map((att) => this.criateAttribute(att, game[att]))}
            </S.StatusBlock>
            <S.StatusBlock>
              {this.charmsButton(charms)}
              <button>equipamento</button>
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

Status.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(Status);

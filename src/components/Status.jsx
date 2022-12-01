import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import { GetGravatar } from "../helpers/Gravatar"

import Livros from '../books/Livros'

import * as S from '../styles/components/Status'

class Status extends Component {
  criateAttribute = (att, value) => {
    return(
    <div key={att}>
      <h4>{att}</h4>
      <h3>{value}</h3>
    </div>
    )
  }

  render() {
    const { user, book, game } = this.props.globalState
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
        <h4>{Livros[book.book].name}</h4>
        {Object.keys(game).map((att) => this.criateAttribute(att, game[att]))}
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

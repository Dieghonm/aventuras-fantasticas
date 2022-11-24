import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import { GetGravatar } from "../helpers/Gravatar"

import Livros from '../books/Livros'

import * as S from '../styles/components/Header'

class Header extends Component {
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
    console.log(user, book, game);
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
      <S.HeaderDiv>
        <h4>{Livros[book.book].name}</h4>
        {Object.keys(game).map((att) => this.criateAttribute(att, game[att]))}
        <img src={GetGravatar(user.email)} alt={user.user} />
        <h6>{user.user}</h6>
      </S.HeaderDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

Header.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(Header);

import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from '../styles/pages/SavedGame'

import { GetLocalStorage } from "../helpers/LocalStorage"

import Livros from '../books/Livros'

class SaveGame extends Component {

  saveCards = (book) => {
    if (book === 'Email'){
      return (
        <h3 key={book}>Jogos salvos</h3>
      )
    }
    return (
      <S.BookDiv key={book}>
        <img src={Livros[book].img} alt={Livros[book].name} />
        <h4>{Livros[book].name}</h4>
        <p>livro</p>
      </S.BookDiv>
    )
  }
  render() {
    const { user, game } = this.props.globalState
    const savedBooks = GetLocalStorage()[user.user]
    console.log(user, game);
    return(
      <div>
        <p>SaveGame</p>
        {Object.keys(savedBooks).map((book) => this.saveCards(book))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

SaveGame.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(SaveGame);

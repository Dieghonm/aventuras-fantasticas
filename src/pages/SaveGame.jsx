import React, { Component } from "react"
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

import SavedButton from "../components/SavedButton";
import { GetLocalStorage } from "../helpers/LocalStorage"
import Livros from '../books/Livros'

import * as S from '../styles/pages/SavedGame'

class SaveGame extends Component {
  saveCards = (book, save) => {
    const { Energia, Habilidade, Ouro, Sorte } = save
    if (book === 'Email'){
      return (
        <h3 key={book}>Jogos salvos</h3>
      )
    }
    
    return (
      <S.BookDiv key={book}>
        <img src={Livros[book].img} alt={Livros[book].name} />
        <h4>{Livros[book].name}</h4>
        <span>
          <div>
            <p>Energia - {Energia}</p>
            <p>Habilidade - {Habilidade}</p>
            <p>Sorte - {Sorte}</p>
            <p>Ouro - {Ouro}</p>
          </div>
        </span>
        <SavedButton book={book} />
      </S.BookDiv>
    )
  }

  render() {
    const { user } = this.props.globalState
    if (!user.user) {
      return <Navigate to="/aventuras-fantasticas" />
    }
    const savedBooks = GetLocalStorage()[user.user]
    return(
      <div>
        <p>SaveGame</p>
        {Object.keys(savedBooks).map((book) => this.saveCards(book, savedBooks[book]))}
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

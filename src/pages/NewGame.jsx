import React, { Component } from "react"
import Livros from '../books/Livros'
import { Link } from "react-router-dom";

import * as S from '../styles/pages/NewGame'

class NewGame extends Component {

  cardsCriator = (book) => {
    return (
      <S.BookDiv 
        key={ Livros[book].name }
      >
        <Link to={`/aventuras-fantasticas/sinopse/${book}`}>
          <img src={Livros[book].img} alt={Livros[book].name} />
          <h4>{Livros[book].name}</h4>
        </Link>

      </S.BookDiv>
    )
  }

  render() {
    return(
      <S.NewGameDiv>
        <p>Escolha um jogo para iniciar</p>
        <S.BooksCards>
          {Object.keys(Livros).map((book) => this.cardsCriator(book))}
        </S.BooksCards>
      </S.NewGameDiv>
    )
  }
}

export default NewGame
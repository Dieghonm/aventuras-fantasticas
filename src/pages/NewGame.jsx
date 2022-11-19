import React, { Component } from "react"
import Livros from '../books/Livros'
import { Link } from "react-router-dom";

import * as S from '../styles/pages/NewGame'

class NewGame extends Component {

  cardsCriator = (livro) => {
    return (
      <S.BookDiv 
        key={ Livros[livro].name }
      >
        <Link to={`/aventuras-fantasticas/sinopse/${livro}`}>
          <img src={Livros[livro].img} alt={Livros[livro].name} />
          <h4>{Livros[livro].name}</h4>
        </Link>

      </S.BookDiv>
    )
  }

  render() {
    return(
      <S.NewGameDiv>
        <p>Escolha um jogo para iniciar</p>
        <S.BooksCards>
          {Object.keys(Livros).map((livro) => this.cardsCriator(livro))}
        </S.BooksCards>
      </S.NewGameDiv>
    )
  }
}

export default NewGame
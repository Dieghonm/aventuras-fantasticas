import React, { Component } from "react"
import Livros from '../books/Livros'

import * as S from '../styles/pages/NovoJogo'

class NovoJogo extends Component {

  cardsCriator = (livro) => {
    console.log(Livros[livro].name);
    return (
      <S.BookDiv key={ Livros[livro].name }>
        <img src={Livros[livro].img} alt={Livros[livro].name} />
        <h4>{Livros[livro].name}</h4>
      </S.BookDiv>
    )
  }

  render() {
    console.log(Livros);
    return(
      <div>
        <p>Escolha um jogo para iniciar</p>
        <S.NewGame>
          {Object.keys(Livros).map((livro) => this.cardsCriator(livro))}
        </S.NewGame>
      </div>
    )
  }
}

export default NovoJogo
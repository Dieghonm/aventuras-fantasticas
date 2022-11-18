import React, { Component } from "react"
// import fundo from '../imgs/fundo1.jpg'

import * as S from '../styles/pages/Project'

class Project extends Component {
  render() {
    return(
      <S.mainDiv>
        {/* <S.fundoImg src={fundo} alt="" /> */}
        <S.projectText>
          Na década de 1990 foi publicado pela editora MARQUES SARAIVA a coleção de livos jogos aventuras fantásticas,
          estes livros continham pequenas historias interativas no estilo RPG, onde o leitor podia escolher como a história iria prosseguir
          tendo a possibilidade de enfrentar monstros e desvendar enigmas, tudo com a ajuda de um lápis e simples dado.
          <br />  <br />
          Este projeto e uma tentativa de trazer estes livros de uma forma dinâmica para a nossa atualidade.
          <br /> <br />
          Juntamos aqui um programador e um designer para desenvolver este app, de forma a praticar nossos 
          conhecimentos e enriquecer nossos portfólios

        </S.projectText>
      </S.mainDiv>
    )
  }
}

export default Project
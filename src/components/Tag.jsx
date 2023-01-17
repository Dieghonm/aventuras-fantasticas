import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import STAR from '../imgs/STAR.png'
import Livros from '../books/Livros'

import * as S from '../styles/components/Tag'

function Tag() {
  
  const text = () => {
    let location = useLocation().pathname;
    const globalState = useSelector((state) => state).book
    switch (location) {
      case "/aventuras-fantasticas":
        return <p>Login</p>

      case "/aventuras-fantasticas/NewGame":
        return <p>Novo Jogo</p>

      case "/aventuras-fantasticas/SaveGame":
        return <p>Jogos Salvos</p>

      case "/aventuras-fantasticas/HowToPlay":
      return <p>Como Jogar</p>

      case "/aventuras-fantasticas/AboutUs":
        return <p>Sobre Nós</p>

      case "/aventuras-fantasticas/CreateCharacter":
        return <p>Personagem</p>

        default:
          if (globalState.book) {
            return <p>{Livros[globalState.book].name}</p>
          }else return <p>Sinopse</p>
    }
  }

    return (
      <S.TagDiv>
        {text()}
        <img src={STAR} alt="star icon" />
      </S.TagDiv>
    )
}

export default Tag

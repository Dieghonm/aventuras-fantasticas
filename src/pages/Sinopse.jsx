import React from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Livros from '../books/Livros'

import * as S from '../styles/pages/Sinopse' 

function Sinopse() {
    const { book } = useParams();
    return(
      <S.SinopseDiv>
        <h4>Sinopse</h4>
        <h5>{Livros[book].name}</h5>
        <img src={ Livros[book].img } alt={Livros[book].name} />
        <p>{Livros[book].sinopse}</p>
        <Link to="/aventuras-fantasticas/CreateCharacter">
          <button>Jogar</button>
        </Link>
      </S.SinopseDiv>
    )
}

Sinopse.propTypes = {
  match: PropTypes.string,
};

export default Sinopse
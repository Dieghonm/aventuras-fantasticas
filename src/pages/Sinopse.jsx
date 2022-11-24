import React from "react"
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Livros from '../books/Livros'

import * as S from '../styles/pages/Sinopse' 
import { actionAttributes, actionbookChoice } from "../redux/actions";


function Sinopse(props) {
  const { book } = useParams();
  const gameSelect = () => {
    const { bookName, changeAtribute } = props;
    bookName(book)
    changeAtribute('clean')
  }
  return(
    <S.SinopseDiv>
      <h4>Sinopse</h4>
      <h5>{Livros[book].name}</h5>
      <img src={ Livros[book].img } alt={Livros[book].name} />
      <p>{Livros[book].sinopse}</p>
      <Link to="/aventuras-fantasticas/CreateCharacter">
        <button onClick={gameSelect}>Jogar</button>
      </Link>
    </S.SinopseDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  bookName: (data) => dispatch(actionbookChoice(data)),
  changeAtribute: (data) => dispatch(actionAttributes(data)),
});

Sinopse.propTypes = {
  match: PropTypes.string,
  bookName: PropTypes.func,
  changeAtribute: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Sinopse);

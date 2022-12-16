import React from "react"
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Livros from '../books/Livros'

import * as S from '../styles/pages/Sinopse' 
import { actionAttributes, actionbookChoice, actionCharms } from "../redux/actions";
import { GetLocalStorage, SetNewBook } from "../helpers/LocalStorage";
import SavedButton from "../components/SavedButton";


function Sinopse(props) {
  const { book } = useParams();
  const { user } = props.globalState

  const gameSelect = () => {
    const { bookName, changeAtribute, charmsToRedux } = props;
    bookName(book)
    SetNewBook(book, user.user)
    changeAtribute('clean')
    charmsToRedux('clean')
  }

  const savedEsxist = () => {
    const storager = Object.keys(GetLocalStorage()[user.user])
    return storager.includes(book);
  }

  const concluzao = () => {
    const goTo = Livros[book].Pagina
    let cont = 0
    for (const key in goTo) {
      console.log()
      if (goTo[key].options[0].goTo === 0) {
        cont++
      }
    }
    return <p>{cont}/400 ou {cont/4}%</p>
  }

  return(
    <S.SinopseDiv>
      <h4>Sinopse</h4>
      <h5>{Livros[book].name}</h5>
      <img src={ Livros[book].img } alt={Livros[book].name} />
      <p>{Livros[book].sinopse}</p>
      <Link to="/aventuras-fantasticas/CreateCharacter">
        <button onClick={gameSelect}>Novo Jogo</button>
      </Link>
      { savedEsxist()? <SavedButton book={book}/> : null }
      {concluzao()}
    </S.SinopseDiv>
  )
}

const mapStateToProps = (state) => ({
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  bookName: (data) => dispatch(actionbookChoice(data)),
  changeAtribute: (data) => dispatch(actionAttributes(data)),
  charmsToRedux: (data) => dispatch(actionCharms (data)),
});

Sinopse.propTypes = {
  match: PropTypes.string,
  bookName: PropTypes.func,
  changeAtribute: PropTypes.func,
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sinopse);

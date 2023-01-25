import React from "react"
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Livros from '../books/Livros'

import * as S from '../styles/pages/Sinopse' 
import { actionAttributes, actionbookChoice, actionCharms, actionEquipADD } from "../redux/actions";
import { GetLocalStorage, SetNewBook } from "../helpers/LocalStorage";
import SavedButton from "../components/SavedButton";


function Sinopse(props) {
  const { book } = useParams();
  const { user } = props.globalState

  const gameSelect = () => {
    const { bookName, changeAtribute, charmsToRedux, clearReduxEquip } = props;
    bookName(book)
    SetNewBook(book, user.user)
    changeAtribute('clean')
    charmsToRedux('clean')
    clearReduxEquip('clean')
  }

  const savedEsxist = () => {
    const storager = Object.keys(GetLocalStorage()[user.user])
    return storager.includes(book);
  }

  const concluzao = () => {
    const goTo = Livros[book].Pagina
    let cont = 0
    for (const key in goTo) {
      if (goTo[key].options[0].goTo === 0) {
        cont++
      }
    }
    return <p>{cont}/400 ou {cont/4}%</p>
  }

  return(
    <S.SinopseDiv>
      <div>
        <img src={ Livros[book].img } alt={Livros[book].name} />
        <Link to="/aventuras-fantasticas/CreateCharacter">
          <button disabled={Livros[book].sinopse === ''} onClick={gameSelect}>Novo Jogo</button>
        </Link>
        { savedEsxist()? <SavedButton book={book}/> : null }
        <Link to={"/aventuras-fantasticas/NewGame"} >
          <button>Voltar</button>
        </Link>
        {concluzao()}
      </div>
      <p>{Livros[book].sinopse}</p>
    </S.SinopseDiv>
  )
}

const mapStateToProps = (state) => ({
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  bookName: (data) => dispatch(actionbookChoice(data)),
  changeAtribute: (data) => dispatch(actionAttributes(data)),
  charmsToRedux: (data) => dispatch(actionCharms(data)),
  clearReduxEquip: (data) => dispatch(actionEquipADD(data)),
  
});

Sinopse.propTypes = {
  match: PropTypes.string,
  bookName: PropTypes.func,
  changeAtribute: PropTypes.func,
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
  clearReduxEquip: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sinopse);

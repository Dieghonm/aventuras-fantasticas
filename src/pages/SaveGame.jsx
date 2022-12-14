import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import * as S from '../styles/pages/SavedGame'

import { GetLocalStorage } from "../helpers/LocalStorage"

import Livros from '../books/Livros'
import { actionAttributes, actionbookChoice, actionCharms, actionEquipADD, actionGold, actionGoTo } from "../redux/actions";
import { Navigate } from "react-router-dom";

class SaveGame extends Component {
  selected = (save, book) => {
    const { 
      Energia,
      Equip,
      Habilidade,
      Ouro,
      Sorte,
      charmList,
      goTo,
    } = save
    const {
      bookToRedux,
      attibutesRedux,
      goToToRedux,
      charmsToRedux,
      equipAddRedux,
      goldRedux,
    } = this.props

    console.log(save, book);
    bookToRedux(book)
    goldRedux(Ouro)
    goToToRedux(goTo)
    equipAddRedux(Equip)
    charmsToRedux(charmList)
    attibutesRedux(['Energia', Energia])
    attibutesRedux(['Habilidade', Habilidade])
    attibutesRedux(['Sorte', Sorte])
  }

  saveCards = (book, save) => {
    const { Energia, Habilidade, Ouro, Sorte } = save
    console.log(save);
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
        <Link to={`/aventuras-fantasticas/Play/${save.goTo}`}>
          <button onClick={()=> this.selected(save, book)}>Jogar</button>
        </Link>
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

const mapDispatchToProps = (dispatch) => ({
  bookToRedux: (data) => dispatch(actionbookChoice (data)),
  attibutesRedux: (data) => dispatch(actionAttributes (data)),
  goToToRedux: (data) => dispatch(actionGoTo(data)),
  charmsToRedux: (data) => dispatch(actionCharms(data)),
  equipAddRedux: (data) => dispatch(actionEquipADD (data)),
  goldRedux: (data) => dispatch(actionGold(data)),
});

const mapStateToProps = (state) => ({
  globalState: state,
});

SaveGame.propTypes = {
  globalState: PropTypes.object,
  bookToRedux: PropTypes.func,
  attibutesRedux: PropTypes.func,
  goToToRedux: PropTypes.func,
  charmsToRedux: PropTypes.func,
  equipAddRedux: PropTypes.func,
  goldRedux: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveGame);

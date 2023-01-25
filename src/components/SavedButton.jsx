import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { GetLocalStorage } from "../helpers/LocalStorage"

import { actionAttributes, actionbookChoice, actionCharms, actionEquipADD, actionGold, actionGoTo } from "../redux/actions";

class SavedButton extends Component {
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
    bookToRedux(book)
    goldRedux(Ouro)
    goToToRedux(goTo)
    equipAddRedux(Equip)
    charmsToRedux(charmList)
    attibutesRedux(['Energia', Energia])
    attibutesRedux(['Habilidade', Habilidade])
    attibutesRedux(['Sorte', Sorte])
  }

  render() {
    const { book } = this.props
    const { user } = this.props.globalState
    const savedBooks = GetLocalStorage()[user.user]
    return(
      <Link key={book} to={`/aventuras-fantasticas/Play/${savedBooks[book].goTo}`}>
        <button onClick={()=> this.selected(savedBooks[book], book)}>Jogo salvo</button>
      </Link>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  bookToRedux: (data) => dispatch(actionbookChoice(data)),
  attibutesRedux: (data) => dispatch(actionAttributes(data)),
  goToToRedux: (data) => dispatch(actionGoTo(data)),
  charmsToRedux: (data) => dispatch(actionCharms(data)),
  equipAddRedux: (data) => dispatch(actionEquipADD(data)),
  goldRedux: (data) => dispatch(actionGold(data)),
});

const mapStateToProps = (state) => ({
  globalState: state,
});

SavedButton.propTypes = {
  globalState: PropTypes.object,
  bookToRedux: PropTypes.func,
  attibutesRedux: PropTypes.func,
  goToToRedux: PropTypes.func,
  charmsToRedux: PropTypes.func,
  equipAddRedux: PropTypes.func,
  goldRedux: PropTypes.func,
  book: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedButton);

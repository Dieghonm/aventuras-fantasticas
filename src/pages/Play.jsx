import React from "react"
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import Status from "../components/Status"

import Livros from '../books/Livros'
import { actionCharms, actionGoTo } from "../redux/actions";
import { GetLocalStorage, SetLocalStorage } from '../helpers/LocalStorage'

function Play(props) {
  const { charmsToRedux, globalState, goToToRedux } = props
  const { book, charms } = globalState
  const { goTo } = useParams ();

  const reduxToStorage = (goTo, ex) => {
    let storage = GetLocalStorage()
    const user = globalState.user.user
    const book = globalState.book.book
    storage[user][book].goTo = goTo

    if (ex) {
      if (ex.includes('charms')){
        storage[user][book].charmList[ex[1]] = storage[user][book].charmList[ex[1]] - 1
      }
      if (ex.includes('item')){
        // disabledBitton = !(charms[ex[1]] > 0); 
      }
      if (ex.includes('combate')){
        // disabledBitton = !(charms[ex[1]] > 0); 
      }
    }
    console.log(storage);
    SetLocalStorage(storage)
  }

  const options = ({goTo, text, ex  }) => {
    let disabledBitton = false
    if (ex) {
      if (ex.includes('charms')){
        disabledBitton = !(charms[ex[1]] > 0); 
      }
      if (ex.includes('item')){
        // disabledBitton = !(charms[ex[1]] > 0); 
      }
      if (ex.includes('combate')){
        // disabledBitton = !(charms[ex[1]] > 0); 
      }
    }

    const Selected = (goTo) => {
      goToToRedux(goTo)
      if (ex) {
        if (ex.includes('charms')){
          charmsToRedux(ex[1]);
        }
        if (ex.includes('item')){
          // disabledBitton = !(charms[ex[1]] > 0); 
        }
        if (ex.includes('combate')){
          // disabledBitton = !(charms[ex[1]] > 0); 
        }
      }
      reduxToStorage(goTo, ex)
    }

    return(
      <Link key={text} to={`/aventuras-fantasticas/Play/${goTo}`}>
        <button onClick={()=>Selected(goTo)} disabled={disabledBitton}>{text}</button>
      </Link>
    )
  }

  return(
    <div>
      <Status />
      <p>{Livros[book.book].Pagina[goTo].text}</p>
      {Livros[book.book].Pagina[goTo].options.map((option) => options(option))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  charmsToRedux: (data) => dispatch(actionCharms(data)),
  goToToRedux: (data) => dispatch(actionGoTo(data)),
});

Play.propTypes = {
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
  goToToRedux: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);

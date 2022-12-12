import React from "react"
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import Status from "../components/Status"

import Livros from '../books/Livros'
import { actionCharms } from "../redux/actions";

function Play(props) {
  const { charmsToRedux, globalState } = props
  const { book, charms } = globalState
  const { goTo } = useParams ();

  const options = ({goTo, text, ex  }) => {
    let disabledBitton = false

    if (ex) {
      console.log(ex[1]);
      if (ex.includes('encanto')){
        disabledBitton = !(charms[ex[1]] > 0); 
      }
    }

    const removeFunc = () => {
      if (ex) {charmsToRedux(ex[1])}
    }

    return(
      <Link key={text} to={`/aventuras-fantasticas/Play/${goTo}`}>
        <button onClick={removeFunc} disabled={disabledBitton}>{text}</button>
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
});

Play.propTypes = {
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);

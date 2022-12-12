import React from "react"
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import Status from "../components/Status"

import Livros from '../books/Livros'

function Play(props) {
  const options = (option) => {
    return(
      <Link key={option.text} to={`/aventuras-fantasticas/Play/${option.goTo}`}>
        <button>{option.text}</button>
      </Link>
    )
  }
  const { book } = props.globalState
  const { goTo } = useParams ();
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

Play.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(Play);

import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Status from "../components/Status"

import Livros from '../books/Livros'

class Play extends Component {
  render() {
    const { user, game, book } = this.props.globalState
    console.log(user, game);
    console.log(Livros[book.book].Pagina);
    return(
      <div>
        <Status />
        <p>Play</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

Play.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(Play);

import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Status from "../components/Status";
import Attributes from "../components/Attributes";
import {Navigate} from 'react-router-dom';

import Livros from '../books/Livros'
import Enchantment from "../components/Enchantment";

class CreateCharacter extends Component {
  state={
    index:0,
  }

  nextAtribute = () => {
    const { index } = this.state
    this.setState({
      index: index + 1
    })
  }

  callAtribute = () => {
    const { book } = this.props.globalState
    const { index } = this.state
    if (!book.book) {
      return <Navigate to="/aventuras-fantasticas/NewGame" />
    }

    const total = Object.keys(Livros[book.book].character).length;
    if (index === total) {
      return <Navigate to="/aventuras-fantasticas/Play/0" />
    }

    const atributes = Livros[book.book].character
    const list = Object.keys(atributes)
    if (list[index] === "Encantamentos"){
      return <Enchantment indexFunc={this.nextAtribute}/>
    }
    return <Attributes atribute={[list[index], atributes[list[index]]]} indexFunc={this.nextAtribute} />
  }

  render() {
    return(
      <div>
        <Status />
        {this.callAtribute()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

CreateCharacter.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(CreateCharacter);
import React, { Component } from "react";
import PropTypes from 'prop-types';

// import Livros from '../books/Livros'

class  Attributes extends Component {
  render() {
    const { atribute, indexFunc } = this.props
    console.log(atribute[1].text);
    return (
      <div>
        <h3>{atribute[0]}</h3>
        {atribute[1].text.map((text, i) => <h5 key={atribute + i}>{text}</h5>)}
        <button onClick={indexFunc}>seilah</button>
      </div>
        
    )
  }
}

Attributes.propTypes = {
  atribute: PropTypes.array,
  book: PropTypes.string,
  indexFunc: PropTypes.func,
};

export default  Attributes
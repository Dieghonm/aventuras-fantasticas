import React, { Component } from "react"
import Livros from '../books/Livros'


class NovoJogo extends Component {

  cardsCriator = (livro) => {
    console.log(Livros[livro].name);

    return (
      <div>
        <img src={Livros[livro].img} alt={Livros[livro].name} />
        <h3>{Livros[livro].name}</h3>
      </div>
    )
  }

  render() {
    console.log(Livros);
    return(
      <div>
        <p>NovoJogo</p>
        {Object.keys(Livros).map((livro) => this.cardsCriator(livro))}
      </div>
    )
  }
}

export default NovoJogo
import React, { Component } from "react";
import '../css/conteudo.css'

class Conteudo extends Component {
  render() {
    return (
      <div>
        <h1>-------'TESTES'---------</h1>
        <iframe 
          width="300" 
          src="https://www.youtube.com/embed/jexFI1-6leM" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <iframe 
          width="300" 
          src="https://www.youtube.com/embed/Ps1rLaGgGf4" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <iframe 
          width="300" 
          src="https://www.youtube.com/embed/KSdhcbDXcx4" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <h1 className='conteudo'>conteudo</h1>
      </div>
    )
  }
}

export default Conteudo
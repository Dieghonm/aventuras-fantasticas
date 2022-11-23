import React, { Component } from "react"
import AsideButtons from "../components/AsideButtons";
import AsideLogin from "../components/AsideLogin"
import PropTypes from 'prop-types';

import Logo from '../imgs/logo.png'
import * as S from '../styles/pages/Aside'

class Aside extends Component {
  
  state = {
    showButtons: false
  }

  changeLogin = (param) => {
    this.setState({
      showButtons: param
    })
  }

  render() {
 
    const { showButtons } = this.state
    return(
      <S.AsideDiv>
        <S.Logo src={Logo} alt="Logo" />
        {showButtons ?
          <AsideButtons changeLogin={this.changeLogin} /> :
          <AsideLogin changeLogin={this.changeLogin} />
        }
      </S.AsideDiv>
    )
  }
}

Aside.propTypes = {
  history: PropTypes.object,
  push: PropTypes.string,
};

export default Aside
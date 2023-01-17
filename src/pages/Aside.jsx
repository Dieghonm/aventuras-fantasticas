import React, { Component } from "react"
import PropTypes from 'prop-types';

import AsideButtons from "../components/AsideButtons";
import AsideLogin from "../components/AsideLogin"
import Logo from '../imgs/logo.png'
import Tag from "../components/Tag";

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
        <Tag />
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
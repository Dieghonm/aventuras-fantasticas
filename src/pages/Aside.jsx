import React, { Component } from "react"
import AsideButtons from "../components/AsideButtons";
import AsideLogin from "../components/AsideLogin"

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
          <AsideButtons /> :
          <AsideLogin changeLogin={this.changeLogin} />
        }
      </S.AsideDiv>
    )
  }
}

export default Aside
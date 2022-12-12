import React, { Component } from "react"
import FOTOFELIPE from '../imgs/us/FOTO-FELIPE.png'
import FOTODIEGHO from '../imgs/us/FOTO-DIEGHO.png'
import LOGOS from '../imgs/us/LOGOS.png'
import VSCODE from '../imgs/us/VSCODE.png'

import * as S from '../styles/pages/AbourUs'

class AboutUs extends Component {
  render() {
    return(
      <S.MainDiv>
        <p>SobreNos</p>
        <S.USDiv>
          <S.USSpan>
            <S.USFoto src={FOTOFELIPE} alt="FOTOFELIPE" />
            <p>asdasdasdasdasda</p>
            <S.USTech src={LOGOS} alt="LOGOS" />
          </S.USSpan>
          <S.USSpan>  
            <S.USFoto src={FOTODIEGHO} alt="FOTODIEGHO" />
            <p>asdasdasdasdasda</p>
            <S.USTech src={VSCODE} alt="VSCODE" />
          </S.USSpan>
        </S.USDiv>
      </S.MainDiv>
    )
  }
}

export default AboutUs
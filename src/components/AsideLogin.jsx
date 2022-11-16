import React, { Component } from "react"
import { GetLocalStorage, SetLocalStorage } from "../helpers/LocalStorage"
import md5 from 'crypto-js/md5';

import LogoApp from '../imgs/logo.png'
import * as S from '../styles/components/AsideLogin'

class AsideLogin extends Component {
  state = {
    Name:'',
    Email:'',
    disabledButton:true,
    data:{},
    bills:[]
  }

  checkLogin = (event) => {
    const { name, value } = event.target;
    const { Name, Email } = this.state;
    const regex = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    this.setState({
      [name]:value
    }, () => {
      console.log(regex.test(Email));
      if (Name && regex.test(Email)) {
        console.log('entrei');
        this.setState({
          disabledButton: false
        }, console.log(this.state))
      }
    })
  }

  enterButton = async() => {
    const { Name, Email } = this.state;
    SetLocalStorage({ [Name]: {Email}  })
    // logica pos clicar no botão, trocar de tela
  }
  
  componentDidMount(){
    const local = GetLocalStorage()
    if (local) {
      this.setState({
        data:local,
        bills: Object.keys(local)
      })
    }
  }

  iconMaker = (bill) => {
    const { data } = this.state
    const emailGravatar = md5(data[bill].Email).toString();
    const avatar = `https://www.gravatar.com/avatar/${emailGravatar}`;
    return (
      <div key={bill}>
        <img
          height="45"
          src={ avatar }
          alt="Avatar"
        />
        <h5>{bill}</h5>
      </div>
    )
  }

  render() {
    const { disabledButton, Name, Email, bills } = this.state
    return(
      <S.LoginDiv>
        <S.Logo src={LogoApp} alt="Logo" />
        <S.CriarPerfilDiv>
          <h4>Criar novo perfil</h4>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={Name}
            onChange={this.checkLogin}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={this.checkLogin}
          />
          <button
            disabled={disabledButton}
            onClick={this.enterButton}
          >
            conectar
          </button>
          <a href="https://br.gravatar.com/">
            Cadastre-se aqui para ter um avatar
          </a>
        </S.CriarPerfilDiv>
        <S.EscolherPerfilDiv>
          <h4>
            Escolher perfil
          </h4>
          {bills.map((bill) => this.iconMaker(bill))}
        </S.EscolherPerfilDiv>
      </S.LoginDiv>
    )
  }
}

export default AsideLogin

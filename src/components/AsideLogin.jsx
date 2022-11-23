import React, { Component } from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/actions/index';
import { GetGravatar } from "../helpers/Gravatar"
import { GetLocalStorage, SetLocalStorage } from "../helpers/LocalStorage"

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
      if (Name && regex.test(Email)) {
        this.setState({
          disabledButton: false
        })
      }
    })
  }

  enterButton = async() => {
    const { Name, Email } = this.state;
    SetLocalStorage({ [Name]: {Email}  })
    this.iniciar(Name, Email)
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

  iniciar = (user, email) => {
    const { changeLogin, login } = this.props
    login({ user, email });
    changeLogin(true)
  }

  iconMaker = (bill) => {
    const { data } = this.state
    return (
      <div
        key={bill}
        onClick={ () => this.iniciar(bill, data[bill].Email) }
      >
        <img
          src={ GetGravatar(data[bill].Email) }
          alt="Avatar"
        />
        <p>{bill}</p>
      </div>
    )
  }

  render() {
    const { disabledButton, Name, Email, bills } = this.state
    return(
      <>
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
          <S.ProfileIconDiv>
            {bills.map((bill) => this.iconMaker(bill))}
          </S.ProfileIconDiv>
        </S.EscolherPerfilDiv>
      </>
    )
  }
}

AsideLogin.propTypes = {
  changeLogin: PropTypes.func,
  login: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(actionLogin(data)),
});

export default connect(null, mapDispatchToProps)(AsideLogin);

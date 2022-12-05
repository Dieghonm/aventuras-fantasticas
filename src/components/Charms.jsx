import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import * as S from '../styles/components/Charms'

import Livros from '../books/Livros'
import Dice from "./Dice";

class  Charms extends Component {
  state = {
    isHiden: true
  }

  roll = (num, charm) => {
    console.log('rolar', num, charm);
  }

  showCharm = () => {
    const { charms, book } = this.props.globalState
    const { isHiden } = this.state
    const list = Object.keys(charms)
    const data = Livros[book.book].character.Encantamentos
    const roll = ['sorte', 'habilidade', 'energia']
    return(
      <S.CharmsDiv hidden={isHiden}>
        {list.map((charm) => (
          <div key={charm}>
            <p>{data[charm][0]} - {charms[charm]}</p> 
            {roll.includes(charm)? <Dice roll={ this.roll } stats={charm}/>: null}
          </div>
        ))}
      </S.CharmsDiv>
    )
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({isHiden: !this.state.isHiden})}>Feitiços</button>
        {this.showCharm()}
      </div>
    )
  }
}

Charms.propTypes = {
  indexFunc: PropTypes.func,
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
  killMagic: PropTypes.func,
};

// const mapDispatchToProps = (dispatch) => ({
  // charmsToRedux: (data) => dispatch(actionCharms(data)),
  // killMagic: (data) => dispatch(actionKillMagic (data)),
// });

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps, 
  // mapDispatchToProps
  )(Charms);
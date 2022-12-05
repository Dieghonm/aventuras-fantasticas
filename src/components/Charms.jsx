import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Livros from '../books/Livros'

class  Charms extends Component {
  state = {
    isHiden: true
  }


  showCharm = () => {
    const { charms, book } = this.props.globalState
    const { isHiden } = this.state
    const list = Object.keys(charms)
    const data = Livros[book.book].character.Encantamentos
    return(
      <div hidden={isHiden}>
        {list.map((charm) => (
          <div key={charm}>
            {console.log(data[charm])}
            <p>{data[charm][0]} - {charms[charm]}</p> 
          </div>
        ))}
      </div>
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
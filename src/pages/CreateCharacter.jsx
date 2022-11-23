import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../components/Header";

class CreateCharacter extends Component {
  render() {
    return(
      <div>
        <Header />
        <p>CriacaoPersonagem</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

CreateCharacter.propTypes = {
  globalState: PropTypes.object,
};

export default connect(mapStateToProps)(CreateCharacter);
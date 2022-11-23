import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import { GetGravatar } from "../helpers/Gravatar"

class Header extends Component {
  render() {
    const { globalState } = this.props
    const { user, book } = globalState
    console.log(user, book);
    if (!user.user) {
      return(
        <Navigate to="/aventuras-fantasticas" />
      )
    }
    if (!book.book) {
      return (
        <Navigate to="/aventuras-fantasticas/NewGame" />
      )
    }
    return(
      <div>
        <p>Header</p>
        <img src={GetGravatar(user.email)} alt={user.user} />
        <h6>{user.user}</h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

Header.propTypes = {
  globalState: PropTypes.func,
};

export default connect(mapStateToProps)(Header);

import React, { Component } from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AsideButtons extends Component {
  render() {
    const { user }= this.props
    console.log(user);
    return(
      <div>
        <p>AsideButtons</p>
        <h1>user</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state,
});

AsideButtons.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(AsideButtons);

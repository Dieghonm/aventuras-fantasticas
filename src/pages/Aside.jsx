import React, { Component } from "react"
import AsideButtons from "../components/AsideButtons";
import AsideLogin from "../components/AsideLogin"

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
      <div>
        {showButtons ?
          <AsideButtons /> :
          <AsideLogin changeLogin={this.changeLogin} />
        }
      </div>
    )
  }
}

export default Aside
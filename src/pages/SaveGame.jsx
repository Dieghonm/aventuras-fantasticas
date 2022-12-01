import React, { Component } from "react"
import { GetLocalStorage } from "../helpers/LocalStorage"

class SaveGame extends Component {
  render() {
    const local = GetLocalStorage()
    console.log(local);
    return(
      <div>
        <p>SaveGame</p>
      </div>
    )
  }
}

export default SaveGame
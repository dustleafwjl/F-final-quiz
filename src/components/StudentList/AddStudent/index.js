import React, { Component } from 'react'

export default class AddStudent extends Component {
  state = {
    show: false
  }
  render() {
    return (
      <div>
        {
          this.state.show ? <div>+添加学院</div> : <input></input>
        }
      </div>
    )
  }
}

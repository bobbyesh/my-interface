import React, { Component } from 'react'

class UsernameInputGroup extends Component {
  render() {
    return (
      <div className="input-group" style={this.props.style}>
        <label htmlFor="username" >Username <span>*</span></label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Username"
          onChange={this.props.handleOnChange}
        />
      </div>
    )
  }
}

export default UsernameInputGroup

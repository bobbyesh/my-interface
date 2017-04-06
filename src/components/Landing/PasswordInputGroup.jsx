import React, { Component } from 'react'

class PasswordInputGroup extends Component {
  render() {
    return (
      <div className="input-group" style={this.props.style}>
        <label htmlFor="password" >Password <span>*</span></label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          onChange={this.props.handleOnChange}
        />
      </div>
    )
  }
}

export default PasswordInputGroup

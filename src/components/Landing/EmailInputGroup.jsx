import React, { Component } from 'react'

class EmailInputGroup extends Component {
  render() {
    return (
      <div className="input-group" style={this.props.style}>
        <label htmlFor="email" >Email <span>*</span></label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="myemail@email.com"
          onChange={this.props.handleOnChange}
        />
      </div>
    )
  }
}

export default EmailInputGroup

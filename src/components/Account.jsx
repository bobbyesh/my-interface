import React, { Component } from 'react'

class Account extends Component {
  render() {
    return(
      <div>
        <ul>
          <li>User Name: John Doe</li>
          <li>Email:   aasdf@gmail.com</li>
          <li><a href="#">Delete Account</a></li>
        </ul>
      </div>
    )
  }
}

export default Account

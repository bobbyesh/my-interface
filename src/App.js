import React, { Component } from 'react'
import { connect } from 'react-redux'
import Landing from './components/Landing/Landing'
import ReadableApp from './components/ReadableApp/ReadableApp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {entryPoint: false}
    this.handleRegistrationSuccessful = this.handleRegistrationSuccessful.bind(this)
  }

  handleRegistrationSuccessful() {
    this.setState({...this.state, loggedIn: true})
  }

  render() {
    if (this.props.token !== null) {
      return (
        <ReadableApp />
      )
    } else {
      return (
        <Landing
          handleRegistrationSuccessful={this.handleRegistrationSuccessful}
          handleLoginSuccessful={this.handleLoginSuccessful}
        />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps, null)(App);

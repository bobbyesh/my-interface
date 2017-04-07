import React, { Component } from 'react'
import { connect } from 'react-redux'
import Landing from './components/Landing/Landing'
import ReadableApp from './components/ReadableApp/ReadableApp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: false, entryPoint: null}
    this.handleRegistrationSuccessful = this.handleRegistrationSuccessful.bind(this)
    this.handleLoginSuccessful = this.handleLoginSuccessful.bind(this)
  }

  handleRegistrationSuccessful() {
    this.setState({...this.state, entryPoint: ReadableApp.REGISTRATION_ENTRY})
  }

  handleLoginSuccessful() {
    this.setState({...this.state, entryPoint: ReadableApp.LOGIN_ENTRY})
  }


  render() {
    if (this.state.entryPoint !== null) {
      return (
        <ReadableApp entryPoint={this.state.entryPoint}/>
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
    loggedIn: state.user.username !== null && state.user.token !== null,
  }
}

export default connect(mapStateToProps, null)(App);

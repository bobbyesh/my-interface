import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Header from './Header'
import Intro from './Intro'
import Footer from './Footer'
import About from './About'
import MiniHeader from './MiniHeader'
import Contact from './Contact'
import Signin from './Signin'
import Registration from './Registration'
import RegistrationSuccessful from './RegistrationSuccessful'

class Landing extends Component {
  static ABOUT = 'ABOUT'
  static HOME = 'HOME'
  static CONTACT = 'CONTACT'
  static SIGNIN = 'SIGNIN'
  static REGISTRATION = 'REGISTRATION'
  static REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL'

  constructor(props) {
    super(props)
    this.state = {displayed: Landing.HOME}
    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
    this.handleContactClick = this.handleContactClick.bind(this)
    this.handleSigninClick = this.handleSigninClick.bind(this)
    this.handleRegistrationClick = this.handleRegistrationClick.bind(this)
    this.switchToRegistrationSuccessfulScreen = this.switchToRegistrationSuccessfulScreen.bind(this)
  }

  handleAboutClick() {
    this.setState({displayed: Landing.ABOUT})
  }

  handleHomeClick() {
    this.setState({displayed: Landing.HOME})
  }

  handleContactClick() {
    this.setState({displayed: Landing.CONTACT})
  }

  handleSigninClick(e) {
    this.setState({displayed: Landing.SIGNIN})
  }

  handleRegistrationClick(e) {
    e.preventDefault()
    this.setState({displayed: Landing.REGISTRATION})
  }

  switchToRegistrationSuccessfulScreen() {
    this.setState({displayed: Landing.REGISTRATION_SUCCESSFUL})
  }

  render() {
    let navbar = <Navbar2
      handleAboutClick={this.handleAboutClick}
      handleHomeClick={this.handleHomeClick}
      handleContactClick={this.handleContactClick}
      handleSigninClick={this.handleSigninClick}
      displayed={this.state.displayed}
    />

    if (this.state.displayed === Landing.HOME) {
      return (
        <div>
          {navbar}
          <Header />
          <Intro />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === Landing.ABOUT) {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <About />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === Landing.CONTACT) {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <Contact />
          <Footer />
        </div>
      )
    }  else if (this.state.displayed === Landing.SIGNIN) {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <Signin handleRegistrationClick={this.handleRegistrationClick} />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === Landing.REGISTRATION) {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <Registration
            handleSigninClick={this.handleSigninClick}
            switchToRegistrationSuccessfulScreen={this.switchToRegistrationSuccessfulScreen}
          />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === Landing.REGISTRATION_SUCCESSFUL) {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <RegistrationSuccessful />
          <Footer />
        </div>
      )
    }
  }
}

export default Landing

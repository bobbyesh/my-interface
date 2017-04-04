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

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {displayed: 'home'}
    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
    this.handleContactClick = this.handleContactClick.bind(this)
    this.handleSigninClick = this.handleSigninClick.bind(this)
    this.handleRegistrationClick = this.handleRegistrationClick.bind(this)
  }

  handleAboutClick() {
    this.setState({displayed: 'about'})
  }

  handleHomeClick() {
    this.setState({displayed: 'home'})
  }

  handleContactClick() {
    this.setState({displayed: 'contact'})
  }

  handleSigninClick(e) {
    this.setState({displayed: 'signin'})
  }

  handleRegistrationClick(e) {
    e.preventDefault()
    this.setState({displayed: 'registration'})
  }

  render() {
    let wrap = (displayed) => (<div><Navbar2 />{displayed}</div>)
    let navbar = <Navbar2
      handleAboutClick={this.handleAboutClick}
      handleHomeClick={this.handleHomeClick}
      handleContactClick={this.handleContactClick}
      handleSigninClick={this.handleSigninClick}
      displayed={this.state.displayed}
    />

    if (this.state.displayed === 'home') {
      return (
        <div>
          {navbar}
          <Header />
          <Intro />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === 'about') {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <About />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === 'contact') {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <Contact />
          <Footer />
        </div>
      )
    }  else if (this.state.displayed === 'signin') {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <Signin handleRegistrationClick={this.handleRegistrationClick} />
          <Footer />
        </div>
      )
    } else if (this.state.displayed === 'registration') {
      return (
        <div>
          <MiniHeader />
          {navbar}
          <Registration handleSigninClick={this.handleSigninClick}/>
          <Footer />
        </div>
      )
    }
  }
}

export default Landing

import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Header from './Header'
import Intro from './Intro'
import Footer from './Footer'

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <Header />
        <Intro />
        <Footer />
      </div>
    )
  }
}

export default Landing

import React, { Component } from 'react'
import Header from './Header'
import Intro from './Intro'
import Footer from './Footer'
import Navbar2 from './Navbar2'

class Home extends Component {
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

export default Home

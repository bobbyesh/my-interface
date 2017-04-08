import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Signin from './Signin'
import Registration from './Registration'
import RegistrationSuccessful from './RegistrationSuccessful'

class Landing extends Component {
  render() {
    return (
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route path="/signin/" component={Signin} />
            <Route path="/register/" component={Registration} />
            <Route path="/register/success/" component={RegistrationSuccessful} />
          </div>
    )
  }
}

export default Landing

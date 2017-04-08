import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import ReadableApp from './components/ReadableApp/ReadableApp'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/app' component={ReadableApp} />
          <Route path ='' component={Landing} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'

class ReadableApp extends Component {
  render() {
    return (
      <Navbar />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayed: state.articles.displayed,
  }
}

export default connect(mapStateToProps, null)(ReadableApp);

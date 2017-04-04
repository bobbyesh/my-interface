import React, { Component } from 'react'
import bg_header from './bg_header.jpg'

var styles = {
  header: {
    background: "#181015 url(" + bg_header + ") no-repeat",
    backgroundSize: "cover",
    minHeight: 100,
  },
}

class MiniHeader extends Component {
  render() {
    return (
      <header style={styles.header}></header>
    )
  }
}

export default MiniHeader

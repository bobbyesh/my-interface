import React, { Component } from 'react'
import bg_header from './bg_header.jpg'

var styles = {
  header: {
    background: "#181015 url(" + bg_header + ") no-repeat",
    backgroundSize: "cover",
    minHeight: "520px",
    textAlign: "center",
    paddingTop: "240px",
    color: "white",
    fontFamily: "Open sans",
    fontWeight: 300,
  },

  lead: {
    fontSize: 44,
    marginBottom: 6,
    color: 'white',
    lineHeight: '1.5em',
    fontFamily: '"Open sans", Helvetica, Arial',
  },

  tagline: {
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: 25,
  }
}


class Header extends Component {
  render() {
    return (
        <header style={styles.header}>
          <div className="container">
            <div className="row">
              <h1 className="lead" style={styles.lead}>
                An Easy Way to Learn a New Language
              </h1>
              <p style={styles.tagline}>Readable: An assisted reader so you can learn a language with content you're actually interested in.</p>
            </div>
          </div>
        </header>
    )
  }
}

export default Header

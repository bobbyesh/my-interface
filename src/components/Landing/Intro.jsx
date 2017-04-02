import React, { Component } from 'react'

var styles = {
  header: {
    fontWeight: 100,
    marginTop: 30,
    fontFamily: '"Open sans", Helvetica, Arial',
    fontSize: '25px',
    marginBottom: 10,
  }
}

class Intro extends Component {
  render() {

    return (
      <div className="container">
        <br/><br/>
        <h2 className="text-center" style={styles.header}>
          Readable is a fast and easy way to to learn a language.
        </h2>
        <p className="text-muted text-center">
          Readable takes you beyond the intermediate stage and into native-level content.
    		</p>
      </div>
    )
  }
}

export default Intro

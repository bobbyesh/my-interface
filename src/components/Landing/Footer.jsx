import React, { Component } from 'react'

var styles = {
  footer: {
    marginTop: 60,
    background: "#232323",
    padding: "30px 0 0 0",
    fontSize: "12px",
    color: "#999",
  },

  color1: {
    background: "#232323",
  },

  color2: {
    background: "#191919",
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ccc',
    margin: '0 0 20px',
    lineHeight: '1.1',
  },

  email: {
    color: '#ccc',
  },

  links: {
    color: '#ccc',
  },

  footer2: {
    paddingTop: 10,
  }

}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={styles.footer}>
        <div className="container">
          <div className="row">
            <h3 style={styles.title}>Contact</h3>
            <div>
              <p>
                <a href="mailto:bobbyeshleman@gmail.com" style={styles.email}>bobbyeshleman@gmail.com</a>
                <br/>
                <br/>

								Portland, OR

              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.color2}>
        <div className="container">
          <div className="row" style={styles.footer2}>
            <p>
							<a  style={styles.links} href="/">Home</a>{"   |   "}
								<a  style={styles.links} href="/about/">About</a>{"   |   "}
								<a  style={styles.links} href="/contact/">Contact</a>{"   |   "}
								<b><a  style={styles.links} href="/signup/">Sign up</a></b>
						</p>
            <p className="text-right">
								Copyright © 2017, Robert Eshleman.
							</p>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}

export default Footer

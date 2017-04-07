import React, { Component } from 'react'
import { connect } from 'react-redux'

class Account extends Component {
  render() {

    var styles = {
      column: {
        fontSize: '1.2em',
        marginTop: 20,
      },

      header: {
        fontSize: '1.5em',
        fontWeight: 'bold',
      },

      div: {
        marginTop: 0,
      },
    }

    return(
      <div>
      <div className="row">
        <div className="col-md-12" style={styles.header}>
          <span>Account</span>
        </div>
      </div>
        <div className="row">
          <div className="col-md-5" style={styles.column}>
                User Name
          </div>
          <div className="col-md-4 text-left" style={styles.column}>
                {this.props.username}
          </div>
          <div className="col-md-3 text-left" style={styles.column}>
            <a href="#">Change Username</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" style={styles.column}>
                Email
          </div>
          <div className="col-md-4 text-left" style={styles.column}>
                {this.props.email}
          </div>
          <div className="col-md-3 text-left" style={styles.column}>
            <a href="#">Change Email</a>
          </div>
          </div>
          <div className="row">
            <div className="col-md-9" style={styles.column}>

            </div>
            <div className="col-md-3 text-left" style={styles.column}>
              <a href="#">Change Password</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9" style={styles.column}>

            </div>
            <div className="col-md-3 text-left" style={styles.column}>
              <a href="#">Delete Account</a>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {username: state.user.username, email: state.user.email}
}

export default connect(mapStateToProps, null)(Account)

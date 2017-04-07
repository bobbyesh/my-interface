import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UsernameInputGroup from './UsernameInputGroup'
import PasswordInputGroup from './PasswordInputGroup'
import MiniHeader from './MiniHeader'
import Navbar2 from './Navbar2'
import Footer from './Footer'

var styles = {
  inputGroup: {
    width: '100%',
  },

  submitButton: {
    backgroundImage: "linear-gradient(to bottom, #FF9B22 0%, #FF8C00 100%)",
    color: '#FFEFD7',
    backgroundRepeat: 'repeat-x',
    border: '0 none',
    padding: '10px 40px',
    borderRadius: '3px',
    marginTop: '6px',
    fontWeight:  'bold',
    textShadow: '0 2px 1px rgba(0, 0, 0, .2)',
  }
}

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {username: '', password: ''}
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

  handleSubmitButton(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <MiniHeader />
        <Navbar2 />
        <div className="container">
          <ol className="breadcrumb">
        			<li><a href="/">Home</a></li>
        			<li className="active">User access</li>
      		</ol>
          <div className="row">
      			<article className="col-xs-12">
      				<header>
      					<h1>Login</h1>
      				</header>
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      					<div className="panel panel-default">
      						<div className="panel-body">
      							<h3 className="text-center">Login to your account</h3>
      							<p className="text-center text-muted">If you don't have an account, please
                      {" "}<Link to="/register/" >Register</Link>.
                    </p>
      							<hr />
                    <form>
                      <UsernameInputGroup
                        style={styles.inputGroup}
                        handleOnChange={e => this.setState({...this.state, username: e.target.value})}
                      />
                      <PasswordInputGroup
                        style={styles.inputGroup}
                        handleOnChange={e => this.setState({...this.state, password1: e.target.value})}
                      />
                      <div className="form-actions">
                        <input
                          style={styles.submitButton}
                          type="submit"
                          name="submit"
                          value="Login"
                          className="btn btn-primary"
                          id="submit"
                          onClick={this.handleSubmitButton}
                        />
                      </div>
                    </form>
                  </div>
          			</div>
        			</div>
            </article>
      		</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Signin

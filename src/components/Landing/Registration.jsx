import React, { Component } from 'react'
import { URL } from '../../Client'
import axios from '../../Client'

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

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      passwordsMatch: true,
    }
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

  handleSubmitButton(e) {
    e.preventDefault()
    var passwordsMatch = this.state.password1 === this.state.password2
    this.setState({...this.state, passwordsMatch: passwordsMatch})
    if (passwordsMatch && this.state.username !== '' && this.state.email !== '') {
      axios.get(URL).then(response => console.log(response))
      console.log(URL)
    }
  }

  render() {
    var isBordered = this.state.password2 !== '' && (this.state.password1 !== this.state.password2)
    var confirmationStyle = null
    if (isBordered){
      confirmationStyle = {
        ...styles.inputGroup,
        border: isBordered ? '1px solid red' : 'none',
        opacity: 0.8,
        borderRadius: 25,
      }
    }

    var didNotMatchElem = null
    if (!this.state.passwordsMatch) {
      didNotMatchElem = <span style={{color: 'red'}}>Passwords did not match</span>
    }

    return (
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
    							<h3 className="text-center">Register a new account</h3>
    							<p className="text-center text-muted">If you already have an account, please
                    {" "}<a href="#" onClick={this.props.handleSigninClick}>login</a>.
                  </p>
    							<hr />
                  <form>
                    <div className="input-group" style={styles.inputGroup}>
                      <label htmlFor="username" >Username <span>*</span></label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        onChange={e => this.setState({...this.state, username: e.target.value})}
                      />
                    </div>
                    <small>Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.</small>
                    <div className="input-group" style={styles.inputGroup}>
                      <label htmlFor="email" >Email <span>*</span></label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="myemail@email.com"
                        onChange={e => this.setState({...this.state, email: e.target.value})}
                      />
                    </div>
                    <div className="input-group" style={styles.inputGroup}>
                      <label htmlFor="password" >Password <span>*</span></label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={e => this.setState({...this.state, password1: e.target.value})}
                      />
                    </div>
                    <div className="input-group" style={styles.inputGroup}>
                      <label htmlFor="password" >Confirm Password <span>*</span></label>
                      <input
                        style={confirmationStyle}
                        type="password"
                        id="password-confirm"
                        className="form-control"
                        placeholder="Password confirmation"
                        onChange={e => this.setState({...this.state, password2: e.target.value})}
                      />
                    </div>
                    {didNotMatchElem}
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
    )
  }
}

export default Registration

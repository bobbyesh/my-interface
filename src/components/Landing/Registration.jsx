import React, { Component } from 'react'
import { URL } from '../../Client'
import axios from '../../Client'
import validator from 'validator'
import UsernameInputGroup from './UsernameInputGroup'
import EmailInputGroup from './EmailInputGroup'
import PasswordInputGroup from './PasswordInputGroup'

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

var isValidUsername = function(username) {
  var specialChars = '@.+-_'
  for (var i=0; i< username.length; i++) {
    var ch = username[i]
    var isSpecial = specialChars.indexOf(username.substr(i, 1)) !== -1
    if (!(isSpecial || validator.isAlpha(ch))) {
      return false
    }
  }

  return true
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
      emailIsValid: true,
      usernameIsValid: true,
      usernameErrorMsg: '',
    }
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

  handleSubmitButton(e) {
    e.preventDefault()
    var passwordsMatch = this.state.password1 === this.state.password2
    var emailIsValid = validator.isEmail(this.state.email)
    var usernameIsValid = isValidUsername(this.state.username)
    this.setState({
      ...this.state,
      passwordsMatch: passwordsMatch,
      emailIsValid: emailIsValid,
      usernameIsValid: usernameIsValid,
    })
    if (passwordsMatch && emailIsValid && usernameIsValid) {
      var data = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password1,
      }
      axios.post(URL + '/api/auth/register/', {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password1,
        }).then(response => {
          console.log(response)
          console.log(response.data)
        }).catch(error => {
          if ('username' in error.response.data){
            this.setState({...this.state, 'usernameErrorMsg': error.response.data.username[0]})
          }
        })
    }
  }

  render() {
    console.log(this.state)

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
      didNotMatchElem = <span style={{color: 'red'}}>Passwords do not match</span>
    }

    var warning = (text) => <div style={{color: 'red'}}>Please enter a valid {text}</div>
    var usernameWarning = this.state.usernameIsValid ? null : warning('username')
    var usernameErrorMsg = this.state.usernameErrorMsg === '' ? null : <div style={{color: 'red'}}>Username already taken.</div>
    var emailWarning = this.state.emailIsValid ? null : warning('email')

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
                    <UsernameInputGroup
                      style={styles.inputGroup}
                      handleOnChange={e => this.setState({...this.state, username: e.target.value, usernameErrorMsg: ''})}
                    />
                    {usernameWarning}
                    {usernameErrorMsg}
                    <small>Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.</small>
                    <EmailInputGroup
                      style={styles.inputGroup}
                      handleOnChange={e => this.setState({...this.state, email: e.target.value})}
                    />
                    {emailWarning}
                    <PasswordInputGroup
                      style={styles.inputGroup}
                      handleOnChange={e => this.setState({...this.state, password1: e.target.value})}
                    />
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

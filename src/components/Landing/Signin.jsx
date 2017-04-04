import React, { Component } from 'react'

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
                    {" "}<a href="#" onClick={this.props.handleRegistrationClick}>Register</a>.
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
                        onChange={e => this.setState({username: e.target.value})}
                      />
                    </div>
                    <div className="input-group" style={styles.inputGroup}>
                      <label htmlFor="password" >Password <span>*</span></label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={e => this.setState({password: e.target.value})}
                      />
                    </div>
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

export default Signin

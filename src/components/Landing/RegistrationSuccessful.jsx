import React, { Component } from 'react'

class RegistrationSuccessful extends Component {
  render() {
      return (
        <div className="container">
          <ol className="breadcrumb">
        			<li><a href="/">Home</a></li>
        			<li className="active">User access</li>
      		</ol>
          <div className="row">
      			<article className="col-xs-12">
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      					<div className="panel panel-default">
      						<div className="panel-body">
      							<h3 className="text-center">Registration successful!</h3>
      							<p className="text-center text-muted">You're being redirected to the app...</p>
                  </div>
          			</div>
        			</div>
            </article>
      		</div>
        </div>
      )
    
  }
}

export default RegistrationSuccessful

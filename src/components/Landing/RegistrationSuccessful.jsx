import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import MiniHeader from './MiniHeader'
import Navbar2 from './Navbar2'
import Footer from './Footer'


class RegistrationSuccessful extends Component {
  render() {
      if (this.props.token !== null) {
        return <Redirect to='/app' />
      }

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
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            					<div className="panel panel-default">
            						<div className="panel-body">
            							<h3 className="text-center">Registration successful!</h3>
            							<p className="text-center text-muted">
                              You are being redirected to the app...
                          </p>
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


const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps, null)(RegistrationSuccessful);

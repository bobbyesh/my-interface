import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="container">
      		<ol className="breadcrumb">
      			<li><a href="/">Home</a></li>
      			<li className="active">Contact</li>
      		</ol>

      		<div className="row">
      			<div className="col-sm-9 col-md-9">
      				<header className="page-header">
      					<h1 className="page-title">Contacts</h1>
      				</header>

      				<p>
      					Readable is a application developed by me, Bobby Eshleman.  It is developed completely independently
      					and is at a very early alpha stage.
      				</p>
      				<br />
      			</div>
      			<div className="col-sm-3 col-md-3">
      				<div className="widget">
      					<h4>Email:</h4>
      					<a href="mailto:bobbyeshleman@gmail.com">bobbyeshleman@gmail.com</a><br />
      					<h4>Github</h4>
      					<a href="https://github.com/bobbyesh">https://github.com/bobbyesh</a><br />
      				</div>
      			</div>
      		</div>
    	</div>
      )
  }
}

export default Contact

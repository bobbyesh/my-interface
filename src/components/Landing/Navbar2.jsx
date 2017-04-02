import React, { Component } from 'react'

var styles = {
	navbar: {
		minHeight: '100px',
		paddingTop: 25,
		background: 'rgba(0, 0, 0, 0.8)',
		border: '1px solid transparent',
	},

	brand: {
		fontSize: '24px',
		color: 'white',
		padding: '0 0 0 15px',
		margin: '12px 0 0 0',
	},

	active: {
		background: 'none',
	},
}

class Navbar2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			windowWidth: window.innerWidth,
			mobileNavButtonVisible: false,
			mobileNavLinksVisible: false,
		}
		this.handleResize = this.handleResize.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.componentWillUnmount = this.componentWillUnmount.bind(this)
		this.renderNavLinks = this.renderNavLinks.bind(this)
		this.renderMobileDropDown = this.renderMobileDropDown.bind(this)
		this.handleMobileNavClick = this.handleMobileNavClick.bind(this)
		this.renderMobileButton = this.renderMobileButton.bind(this)
	}

	handleResize() {
		this.setState({
			...this.state,
			windowWidth: window.innerWidth,
			mobileNavButtonVisible: window.innerWidth <= 480,
		});
		console.log(this.state)
	}

	componentDidMount() {
	  window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize.bind(this));
	}

	handleMobileNavClick(e) {
		this.setState({...this.state, mobileNavLinksVisible: !this.state.mobileNavLinksVisible})
	}

	renderMobileButton() {
		console.log('renderMobileButton!', this.state.mobileNavButtonVisible)
		if (this.state.mobileNavButtonVisible) {
			return (
				<button type="button" className="navbar-toggle" onClick={this.handleMobileNavClick}>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
			)
		} else {
				return null
			}
	}


	renderNavLinks() {
		var links = null
		var button = this.renderMobileButton()
		var mobileDropDown = this.renderMobileDropDown()
		if (this.state.windowWidth > 480) {
			return (
				<ul className="nav navbar-nav pull-right">
					<li key={0} className="active"><a href="#" style={styles.active}>Home</a></li>,
					<li key={1}><a href="#">About</a></li>,
					<li key={2}><a href="#">Contact</a></li>,
					<li key={3}><a className="btn" href="#">SIGN IN / SIGN UP</a></li>,
				</ul>
			)
		} else {
			return (
				<div>
				  {this.renderMobileButton()}
					{this.renderMobileDropDown()}
				</div>
			)
		}
	}

	renderMobileDropDown() {
		if (this.state.mobileNavLinksVisible) {
			return (
				<ul className="nav navbar-nav pull-left">
					<li key={0} className="active"><a href="#" style={styles.active}>Home</a></li>,
					<li key={1}><a href="#">About</a></li>,
					<li key={2}><a href="#">Contact</a></li>,
					<li key={3}><a className="btn" href="#">SIGN IN / SIGN UP</a></li>,
				</ul>
			)
		} else {
			return null
		}
	}

	render() {
		var navLinks = this.renderNavLinks()
		return (
			<div className="navbar navbar-inverse navbar-fixed-top" style={styles.navbar}>
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#" style={styles.brand}>Readable</a>
					</div>
					<div>
							{navLinks}
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar2

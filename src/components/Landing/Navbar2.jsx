import React, { Component } from 'react'
import Radium from 'radium'

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
		color: 'white',
	},

	signin: {
		':hover': {
			border: '1px solid rgba(255,255,255,.6)',
			color: 'white',
		},
		marginLeft: 5,
		border: '1px solid rgba(255, 255, 255, .2)',
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

	render() {
		return (
			<div className="navbar navbar-inverse navbar-fixed-top" style={styles.navbar}>
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#" style={styles.brand}>Readable</a>
					</div>
					<div>
							{this.renderNavLinks()}
					</div>
				</div>
			</div>
		)
	}

	renderNavLinks() {
		return (
				<div>
				  {this.renderMobileButton()}
					{this.renderMobileDropDown()}
				</div>
			)

	}

	renderMobileButton() {
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

	renderMobileDropDown() {
		console.log(this.props)
		var pullDirection = this.state.windowWidth > 480 ? 'pull-right' : 'pull-left'
		var homeStyle = this.props.displayed === 'home' ? styles.active : {}
		var aboutStyle = this.props.displayed === 'about' ? styles.active : {}
		var contactStyle = this.props.displayed === 'contact' ? styles.active : {}
		var signinStyle = this.props.displayed === 'signin' ? Object.assign({}, styles.signin, styles.active) : styles.signin

		if (this.state.mobileNavLinksVisible || !this.state.mobileNavButtonVisible) {
			return (
				<ul className={"nav navbar-nav " + pullDirection}>
					<li key={0} className='nav-item'>
						<a
							href="#"
							style={homeStyle}
							onClick={this.props.handleHomeClick}>
								Home
						</a>
					</li>
					<li key={1} className='nav-item'>
						<a
							style={aboutStyle}
							onClick={this.props.handleAboutClick}
							href="#">
								About
						</a>
					</li>
					<li key={2} className='nav-item'>
						<a
							href="#"
							onClick={this.props.handleContactClick}
							style={contactStyle}
							>
								Contact
						</a>
					</li>
					<li key={3} className='nav-item'>
						<a
							className="btn"
							href="#"
							style={signinStyle}
							onClick={this.props.handleSigninClick}
							>
								SIGN IN / SIGN UP
						</a>
					</li>
				</ul>
				)
		} else {
			return null
		}
	}
}

export default Radium(Navbar2)

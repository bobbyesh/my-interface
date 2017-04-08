import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ImportForm from './ImportForm'
import { showImportModal, hideImportModal, displayAccount } from '../../actions/articles'
import Container from './Container'
import Welcome from './Welcome'
import Article from './Article'
import Account from './Account'
var Radium = require('radium');

const navFont = 'Raleway sans-serif'

var styles = {
      navbarStyle: {
        padding: "23px 1px",
        backgroundColor: "#FFFFFF",
        borderWidth: '0px 0px 1px 0px',

      },

      navbarBrandStyle: {
        fontFamily: navFont,
        fontSize: 38,
      },

      ulStyle: {
        paddingTop: "18px",
      },

      liStyle: {
        marginLeft: 3,
        marginRight: 9,
        fontSize: 14,
        color: "#95a5a6",
        backgroundColor: "#FFFFFF",
        ':hover': {
          color: "#2c3e50",
        },
      },

      textStyle: {
        fontFamily: navFont,
      }
}

class Navbar extends Component {
    constructor(props) {
      super(props)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.componentWillUnmount = this.componentWillUnmount.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
      this.state = {visible: true}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
      if (window.scrollY > 50) {
        this.setState({...this.state, visible: false})
      } else {
        this.setState({...this.state, visible: true})
      }
    }

  render() {

    var navbarStyle = {
      ...styles.navbarStyle,
      opacity: this.state.visible ? 1 : 0,
      transition: 'opacity 0.5s',
    }

    return (
      <div className="MyApp" style={styles.div}>
        <Container>
          <Router>
            <div className="container">
              <div className="row">
                <nav className="navbar navbar-default navbar-static-top" style={navbarStyle}>
                  <div className="container">
                  <div className="row">
                    <div className="navbar-header">
                      <Link className="navbar-brand" to="/app" style={styles.navbarBrandStyle}>Modua</Link>
                    </div>
                      <div className="nav navbar-nav navbar-right">
                        <ul
                          className="list-inline"
                          style={styles.ulStyle}
                        >
                          <li
                            key={0}
                            className="fa fa-user navbar-link"
                            style={styles.liStyle}
                            onClick={this.props.dispatchDisplayAccount}
                          >
                            <Link to="/app/account" key={2} style={styles.liStyle}> Account</Link>
                          </li>

                          <li
                            key={1}
                            className="fa fa-circle-o navbar-link"
                            onClick={this.props.dispatchShowImportModal}
                            style={styles.liStyle}
                          >
                            <Link to="/app/article" key={3} style={styles.liStyle}> Import Text</Link>
                          </li>
                        </ul>
                        </div>
                          <Modal
                            show={this.props.showImportModal}
                            onHide={this.props.dispatchHideImportModal}
                            dialogClassName="custom-modal"
                          >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-lg">Import</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <ImportForm />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={this.props.dispatchHideImportModal}>Close</Button>
                        </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                </nav>
              </div>
              <div className="row">
              </div>
              <Route exact path='/app' component={Welcome} />
              <Route path='/app/article' component={Article} />
              <Route path='/app/account' component={Account} />
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showImportModal: state.articles.showImportModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchShowImportModal: () => dispatch(showImportModal()),
    dispatchHideImportModal: () => dispatch(hideImportModal()),
    dispatchDisplayAccount: () => dispatch(displayAccount()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Navbar));

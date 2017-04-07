import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal} from 'react-bootstrap'
import ImportForm from './ImportForm'
import { showImportModal, hideImportModal, displayAccount } from '../../actions/articles'

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
      console.log('scrolling')
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

    console.log(navbarStyle)

    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default navbar-static-top" style={navbarStyle}>
            <div className="container">
            <div className="row">
              <div className="navbar-header">
                <a href="#" className="navbar-brand" style={styles.navbarBrandStyle}>Modua</a>
              </div>
                <div className="nav navbar-nav navbar-right">
                  <ul
                    className="list-inline"
                    style={styles.ulStyle}
                    onClick={this.props.dispatchDisplayAccount}
                  >
                    <li
                      key={0}
                      className="fa fa-user navbar-link"
                      style={styles.liStyle}
                    >
                      <span key={2} style={styles.liStyle}> Account</span>
                    </li>

                    <li
                      key={1}
                      className="fa fa-circle-o navbar-link"
                      onClick={this.props.dispatchShowImportModal}
                      style={styles.liStyle}
                    >
                      <span key={3} style={styles.liStyle}> Import Text</span>
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

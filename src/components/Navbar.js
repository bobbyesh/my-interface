import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal} from 'react-bootstrap'
import ImportForm from './ImportForm'
import { showImportModal, hideImportModal } from '../actions/articles'

var Radium = require('radium');

const navFont = 'Raleway sans-serif'

var styles = {
      navbarStyle: {
        padding: "23px 1px",
        backgroundColor: "#FFFFFF",
        borderWidth: '1px',
      },

      navbarBrandStyle: {
        fontFamily: navFont,
        fontSize: 38,
      },

      circleStyle: {
        padding: "15px 30px 10px 10px",
        fontSize: 14,
        color: "#95a5a6",
        ':hover': {
          color: "#2c3e50",
        },

        backgroundColor: "#FFFFFF",
        fontFamily: navFont,
      },
}

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default navbar-fixed-top" style={styles.navbarStyle}>
            <div className="container">
              <div className="navbar-header">
                <a href="#" className="navbar-brand" style={styles.navbarBrandStyle}>Modua</a>
              </div>
              <div className="collapse navbar-collapse">
                <div className="nav navbar-nav navbar-right">
                  <ul className="list-inline"
                      style={styles.circleStyle}
                      onClick={this.props.dispatchShowImportModal}>
                      <li className="fa fa-circle-o"> </li>
                      <li>Import Text</li>
                  </ul>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Navbar));

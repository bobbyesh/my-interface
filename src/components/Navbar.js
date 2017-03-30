import React, { Component } from 'react'
import { Button, Modal} from 'react-bootstrap'
import ImportForm from './ImportForm'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {show: false}
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal() {
    this.setState({show: true})
  }

  hideModal() {
    this.setState({show: false})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">Modua</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-trash"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-cog"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-home"></span></a></li>
                  <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                  >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Import</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ImportForm />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.hideModal}>Close</Button>
                  </Modal.Footer>
                  </Modal>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.showModal} style={{marginTop: 13, marginLeft: 10}}>
            Import Article
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;

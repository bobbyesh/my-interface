import React, { Component } from 'react'
import { FormGroup, HelpBlock, FormControl, Button, ControlLabel  } from 'react-bootstrap'
import { connect } from 'react-redux'
import { loadTitle, loadParagraphs } from '../actions/articles'

var axios = require('axios')
var Cookies = require('js-cookie')

var csrftoken = Cookies.get('csrftoken')
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

class ImportForm extends Component {
  constructor(props) {
    super(props)
    // Text and Title are set to non-zero length so that their Forms
    // don't start off in an error state
    this.state = { text: null, title: null }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleImportClick = this.handleImportClick.bind(this)
  }

  handleTextChange(e) {
    this.setState({ ...this.state, text: e.target.value })
  }

  handleTitleChange(e) {
    this.setState({ ...this.state, title: e.target.value})
  }

  handleImportClick() {
    if (!this.isValid()) {
          return;
    }

    var url = 'http://127.0.0.1:8000/api/article/'
    axios.post(url, {
            title: this.state.title,
            text: this.state.text,
          })
          .then(response => {
              this.props.dispatchParagraphs(response.data.paragraphs)
              this.props.dispatchTitle(response.data.title)
          })
  }

  isValid() {
    return (
      this.getTitleValidationState() !== 'error' &&
      this.getTextValidationState() !== 'error' &&
      this.state.title !== null &&
      this.state.text !== null
    )
  }

  getTitleValidationState() {
    if (this.state.title === null) {
      return null
    } else if (this.state.title.trim().length === 0)
      return 'error'
  }


  getTextValidationState() {
    if (this.state.text === null) {
      return null
    } else if (this.state.text.length === 0) {
      return 'error'
    }
  }

  render() {
    return (
      <form>
        <FormGroup
        controlId="formControlsTitlearea"
        validationState={this.getTitleValidationState()}
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Type in a title"
            onChange={this.handleTitleChange}
          />
        </FormGroup>

        <FormGroup
        controlId="formControlsTextarea"
        validationState={this.getTextValidationState()}
        >

        <ControlLabel>Text</ControlLabel>
        <FormControl
          onChange={this.handleTextChange}
          componentClass="textarea"
          placeholder="Copy and paste here..."
        />
        <HelpBlock>Title and text must not be empty</HelpBlock>

        <Button bsStyle="primary" onClick={this.handleImportClick}>Import</Button>

        </FormGroup>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchParagraphs: (paragraphs) => dispatch(loadParagraphs(paragraphs)),
    dispatchTitle: (title) => dispatch(loadTitle(title)),
  }
}

export default connect(null, mapDispatchToProps)(ImportForm)

import React, { Component } from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel  } from 'react-bootstrap'

class ImportForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.getValidationState = this.getValidationState.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Import Text</ControlLabel>
          <FormControl
            value={this.state.value}
            componentClass="textarea"
            placeholder="Copy and paste here..."
          />
        </FormGroup>
      </form>

    )
  }
}

export default ImportForm

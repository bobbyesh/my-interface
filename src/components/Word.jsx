import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectWord } from '../actions/words'

const mapDispatchToProps = (dispatch) => {
  return {
    onWordClick: (id, ev) => {
      dispatch(selectWord(id, ev))
    }
  }
}

class Word extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onWordClick(this.props.id, e);
  }

  render() {
    return (
      <span onClick={this.handleClick}>
          {this.props.children}
      </span>
    )
  }
}

export default connect(null, mapDispatchToProps)(Word);

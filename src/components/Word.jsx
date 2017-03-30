import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectWord } from '../actions/words'

class Word extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onWordClick(this.props.word, e.clientX, e.clientY);
  }

  render() {

    return (
      <span onClick={this.handleClick}>
          {this.props.word.word}
      </span>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWordClick: (word, x, y) => {
      dispatch(selectWord(word, x, y))
    }
  }
}

export default connect(null, mapDispatchToProps)(Word);

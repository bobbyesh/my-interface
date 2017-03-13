import React, { Component } from 'react';
import './Word.css';

class Word extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail_style: {x: 0, y: 0, visibility: 'hidden'}
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let x = e.clientX + 15;
    let y = e.clientY;
    this.setState((previousState) => ({
      detail_style: {
        x: x,
        y: y,
        visibility: previousState.detail_style.visibility === 'visible' ? 'hidden': 'visible',
      }
    }));
  }

  render() {
    return (
            <span onClick={this.handleClick}>{this.props.children}</span>
    );
  }
}

export default Word;

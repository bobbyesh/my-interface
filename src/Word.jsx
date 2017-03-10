import React, { Component } from 'react';
import './Word.css';

class Word extends Component {
  render() {
    return (
            <span>{this.props.children}</span>
    );
  }
}

export default Word;

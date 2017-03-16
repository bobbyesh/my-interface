import React, { Component } from 'react';
import './WordDetail.css';

class WordDetail extends Component {
  render() {

    var style = {
      left: this.props.x + 10,
      top: this.props.y + 100,
    };

    return (
      <span style={style} className="word-detail">
          {this.props.children}   here!!
      </span>
    )
  }
}

export default WordDetail;

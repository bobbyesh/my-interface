import React, { Component } from 'react';
import Word from './Word';

class Paragraph extends Component {
  render() {
    var words = this.props.words.map((elem, i) => <Word key={i}>{elem}</Word>);
    return (<div className="text-left paragraph">{words}</div>)
  }
}

export default Paragraph;

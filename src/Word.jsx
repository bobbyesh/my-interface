import React, { Component } from 'react';
import WordDetail from './WordDetail';
import './Word.css';
import './WordDetail.css';

class Word extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      x: 0,
      y: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let x = e.clientX + 15;
    let y = e.clientY;
    this.setState({x: x, y: y, detail: !this.state.detail});
    console.log(this.state);
  }

  render() {
   if (this.state.detail) {
    return (
      <span onClick={this.handleClick}>
          {this.props.children}
          <WordDetail x={this.state.x} y={this.state.y} word={this.props.children} onClick={this.handleClick} />
      </span>
    )
   }

   return (
            <span onClick={this.handleClick}>{this.props.children}</span>
    );
  }
}

export default Word;

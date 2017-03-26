import React, { Component } from 'react';
import WordDetail from './WordDetail';


class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      x: 0,
      y: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log("x " + x + " y " + y)
    this.setState({x: x, y: y, clicked: !this.state.clicked});
  }

  render() {
   if (this.state.clicked) {
     let definitions = ["This is one", "this is another", "niceeeeeee"];
    return (
      <span onClick={this.handleClick}>
          {this.props.children}
          <WordDetail x={this.state.x} y={this.state.y} pinyin={"ai4guo2"}keyword={this.props.children} onClick={this.handleClick} definitions={definitions}/>
      </span>
    )
   }

   return (
            <span onClick={this.handleClick}>{this.props.children}</span>
    );
  }
}

export default Word;

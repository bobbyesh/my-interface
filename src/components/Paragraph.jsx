import React, { Component } from 'react';

const style = {
  lineHeight: "200%",
  fontSize: "1.4em",
}

class Paragraph extends Component {
  render() {
    return <div style={style} className="text-left paragraph">{this.props.children}</div>
  }
}

export default Paragraph;

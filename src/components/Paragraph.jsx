import React, { Component } from 'react';

class Paragraph extends Component {
  render() {
    return <div className="text-left paragraph">{this.props.children}</div>
  }
}

export default Paragraph;

import React, { Component } from 'react';

class Definitions extends Component {
  render() {
    let listItemStyle = {
        padding: "2px 0 2px 0",
    };

    let definitionsStyle = {
      padding: "5px 0 0 0",
    };

    let definitions = this.props.definitions.map((elem, i) => <li style={listItemStyle} key={i}>{elem}</li>);
    return (
      <div style={definitionsStyle} className="definitions">
        <ul>
          {definitions}
        </ul>
      </div>
    )
  }
}

export default Definitions;

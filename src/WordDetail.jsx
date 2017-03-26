import React, { Component } from 'react';
import Definitions from './Definitions';

class WordDetail extends Component {
  render() {

    var leftOffset;
    var topOffset;
    let widthDiff = window.innerWidth - this.props.x;
    let heightDiff = window.innerHeight - this.props.y;
    
    if (widthDiff < 300) {
      leftOffset = 500;
    } else {
      leftOffset = 150;
    }

    if (heightDiff < 300) {
      topOffset = 325;
    } else {
      topOffset = 50;
    }

    let wordDetailStyle = {
      left: this.props.x - leftOffset,
      top: this.props.y - topOffset,
      position: "absolute",
      display: "inline",
      backgroundColor: "white",
      padding: "10px 25px 15px 10px",
      borderRadius: "15px",
      borderWidth: "3px",
      borderStyle: "solid",
      boxShadow: "2px 2px 1px #888888",
    };

    let alignCenter = {
      textAlign: "center",
    };

    let ranksStyle = {
      paddingLeft: "20px",

    }

    let rankButtonStyle = {
      marginLeft: "2px",
      marginRight: "2px",
    }


    return (
      <div style={wordDetailStyle} id="selected" className="word-detail rounded">
          <h3 style={alignCenter}>{this.props.keyword}</h3>
          <p style={alignCenter} className="pinyin"><small className="text-muted">{this.props.pinyin}</small></p>
          <Definitions definitions={this.props.definitions}/>
          <div style={ranksStyle} className="rank-buttons text-center">
            <button style={rankButtonStyle} type="button" className="btn btn-sm btn-outline-primary">New</button>
            <button style={rankButtonStyle} type="button" className="btn btn-sm btn-outline-danger">Hard</button>
            <button style={rankButtonStyle} type="button" className="btn btn-sm btn-outline-info">Easy</button>
            <button style={rankButtonStyle} type="button" className="btn btn-sm btn-outline-secondary">Known</button>
          </div>
      </div>
    )
  }
}

export default WordDetail;

import React, { Component } from 'react'
import Definitions from './Definitions'
import { connect } from 'react-redux'
import { selectWord } from '../actions/words'

class WordDetail extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onWordDetailClick(e.clientX, e.clientY);
  }

  render() {
    if (!this.props.word) {
      return <div></div>
    }
    var left = this.props.x + 20;
    var top = this.props.y + 20;

    if(left > window.innerWidth - 200) {
      left = window.innerWidth - 300
    }

    if(top > window.innerHeight - 200) {
      top = window.innerHeight - 300
    }


    let wordDetailStyle = {
      left: left,
      top: top,
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

    const pinyin = this.props.word.pinyin.map((elem, i) => <span key={i}>{elem}</span>)

    return (
      <div style={wordDetailStyle} id="selected" className="word-detail rounded" onClick={this.handleClick}>
          <h3 style={alignCenter}>{this.props.word.word}</h3>
          <p style={alignCenter} className="pinyin"><small className="text-muted">{pinyin}</small></p>
          <Definitions definitions={this.props.word.definitions}/>
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


const mapDispatchToProps = (dispatch) => {
  return {
    onWordDetailClick: (x, y) => dispatch(selectWord(null, x, y))
  }
}


const mapStateToProps = (state) => {
  return {
    word: state.words.word,
    x: state.words.x,
    y: state.words.y,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WordDetail)

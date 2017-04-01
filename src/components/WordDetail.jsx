import React, { Component } from 'react'
import Definitions from './Definitions'
import { connect } from 'react-redux'
import { selectWord } from '../actions/words'

class WordDetail extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleClick(e) {
    this.props.onWordDetailClick(e.clientX, e.clientY);
  }

  componentDidMount() {
    this.setState({opacity: 1}, () => {
      if(!this.timeout)
          clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.setState({opacity:0}),4000);
    });
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
      transition: "opacity 0.5s",
    };

    let alignCenter = {
      textAlign: "center",
    };

    const pinyin = this.props.word.pinyin.map((elem, i) => <span key={i}>{elem}</span>)

    return (
      <div style={wordDetailStyle} id="selected" className="word-detail rounded">
        <div className="container" style={{maxWidth: 400}}>
          <div className="row">
          <div className="col col-md-4">
          </div>
            <div className="col col-md-4">
                <h3 style={alignCenter}>{this.props.word.word}</h3>
                <p style={alignCenter} className="pinyin"><small className="text-muted">{pinyin}</small></p>
            </div>
            <div className="col col-md-4 text-right" style={{marginTop: 15}}>
                <button className="glyphicon glyphicon-remove float-right"  onClick={this.handleClick}></button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Definitions definitions={this.props.word.definitions}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.words.word,
    x: state.words.x,
    y: state.words.y,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWordDetailClick: (x, y) => dispatch(selectWord(null, x, y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordDetail)

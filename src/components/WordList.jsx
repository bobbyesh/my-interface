import React, { Component } from 'react'
import WordDetail from './WordDetail'
import { connect } from 'react-redux';


class WordList extends Component {
  render() {
    if (this.props.selected_id === -1) {
      return <div></div>
    }

    let word = this.props.words.find((elem) => elem.id === this.props.selected_id);
    return (
      <div>
        <WordDetail x={this.props.x} y={this.props.y} id={word.id} definitions={word.definitions} word={word.word} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {selected_id: state.id, x: state.x, y: state.y}
}

export default connect(mapStateToProps, null)(WordList)

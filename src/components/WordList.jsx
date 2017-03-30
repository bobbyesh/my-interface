import React, { Component } from 'react'
import WordDetail from './WordDetail'
import { connect } from 'react-redux';


class WordList extends Component {
  render() {
    if (this.props.selected_id === -1) {
      return <div></div>
    }

    return (
      <div>
        <WordDetail x={this.props.x} y={this.props.y} id={word.id} definitions={word.definitions} word={word.word} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {selected_id: state.words.id, x: state.words.x, y: state.words.y}
}

export default connect(mapStateToProps, null)(WordList)

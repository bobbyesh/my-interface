import React, { Component } from 'react'
import { connect } from 'react-redux'
import Word from './Word'
import Paragraph from './Paragraph'

class Article extends Component {
  render() {
    let paragraphComponents = this.props.paragraphs.map((paragraph, pid) => {
        let words = paragraph.map((word, wid) => <Word word={word} key={wid} />)
        return <Paragraph key={pid}>{words}</Paragraph>
      })
    let title = this.props.title.map((word, id) => <Word key={id} word={word}/>)

    return (
          <article>
            <header>
              <h3>{title}</h3>
            </header>
            {paragraphComponents}
          </article>
    )
  }
}

const mapStateToProps = (state) => {
  return {paragraphs: state.articles.paragraphs, title: state.articles.title}
}

export default connect(mapStateToProps, null)(Article);

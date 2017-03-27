import React, { Component } from 'react'
import Word from './Word'
import Paragraph from './Paragraph'
import ArticleFooter from './ArticleFooter'


class Article extends Component {
  render() {
    let paragraphComponents = this.props.paragraphs.map((paragraph, pid) => {
        let words = paragraph.map((word, wid) => <Word key={wid} id={word.id}>{word.word}</Word>);
        return <Paragraph key={pid}>{words}</Paragraph>
      })

    return (
          <article>
            <header>
              <h3>{this.props.title}</h3>
            </header>
            {paragraphComponents}
            <ArticleFooter link={"http://phtv.ifeng.com/listpage/677/1/list.shtml"} />
          </article>
    );
  }
}

export default Article;

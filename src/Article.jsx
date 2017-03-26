import React, { Component } from 'react';
import Word from './Word';
import Paragraph from './Paragraph';
import MyData from './segments.json';

class Article extends Component {
  render() {

    let paragraphs = [[]];
    let pIndex = 0;
    for(var i=0; i<MyData.length; i++) {
      if (MyData[i] === '\n') {
        pIndex++;
        paragraphs.push([]);
      } else {
        paragraphs[pIndex].push(MyData[i]);
      }
    }

    let toRender = [];

    for(i=0; i<paragraphs.length; i++) {
      let paragraph = paragraphs[i];
      toRender.push(paragraph.map((word, word_idx) => <Word key={word_idx} id={word_idx}>{word}</Word>));
    }

    // let paragraphComponents = toRender.map((elem, i) => <Paragraph key={i}>{elem}</Paragraph>);
    let paragraphComponents = paragraphs.map((elem, idx) => <Paragraph key={idx} words={elem}></Paragraph>)

    return (
          <article>
            <header>
              <h3>Article Title</h3>
            </header>
              {paragraphComponents}
            <footer>
              <p className="text-left">
                <small className="text-muted">Link  |  <a href="http://phtv.ifeng.com/listpage/677/1/list.shtml">http://phtv.ifeng.com/listpage/677/1/list.shtml</a></small>
              </p>
            </footer>
          </article>
    );
  }
}

export default Article;

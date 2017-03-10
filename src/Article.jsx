import React, { Component } from 'react';
import Word from './Word';
import './Article.css';

class Article extends Component {
  render() {
    let words = ['Here', 'are', 'the', 'words', '.'];
    let wordClasses = words.map((elem, idx) => <Word key={idx}>{elem}</Word>);
    console.log(wordClasses);
    return (
      <div className="container">
        <div className="article">
          <h3>Article Title </h3>
          <div className="article-content">
            <p>
              {wordClasses}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

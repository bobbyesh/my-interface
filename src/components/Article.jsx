import React, { Component } from 'react'
import Word from './Word'
import Paragraph from './Paragraph'
import ArticleFooter from './ArticleFooter'
import MyData from './segments.json'
import { connect } from 'react-redux'
import { selectWord } from '../actions/words'


function getData() {
    let paragraphs = [[]];
    let pIndex = 0;
    for(var i=0; i<MyData.length; i++) {
      if (MyData[i] === '\n') {
        pIndex++;
        paragraphs.push([]);
      } else {
        paragraphs[pIndex].push({word: MyData[i], id: i});
      }
    }

    return {
      paragraphs: paragraphs,
    }
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(selectWord(id))
    }
  }
}
*/

const mapStateToProps = (state) => {
  return {selected_word: state.id}
}

class Article extends Component {
  render() {
    let data = getData();

    let paragraphComponents = data.paragraphs.map((paragraph, pid) => {
        let words = paragraph.map((word, wid) => <Word key={wid} id={word.id}>{word.word}</Word>);
        return <Paragraph key={pid}>{words}</Paragraph>
      })

    return (
          <article>
            <header>
              <h3>Article Title</h3>
            </header>
            {paragraphComponents}
            <ArticleFooter link={"http://phtv.ifeng.com/listpage/677/1/list.shtml"} />
          </article>
    );
  }
}


const ConnectedArticle = connect(
  mapStateToProps,
  null,
)(Article)


export default Article;

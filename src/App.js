import React, { Component } from 'react'
import { selectWord } from './reducers/words'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Navbar from './components/Navbar'
import Article from './components/Article'
import Container from './components/Container'
import MyData from './segments.json'
import WordList from './components/WordList'



function getData() {
    let paragraphs = [[]];
    let pIndex = 0;
    for(var i=0; i<MyData.length; i++) {
      if (MyData[i] === '\n') {
        pIndex++;
        paragraphs.push([]);
      } else {
        paragraphs[pIndex].push(
          {
            word: MyData[i],
            id: i,
            definitions: ["This is one", "That is another"],
            pinyin: 'ai4guo2',
          }
        );
      }
    }

    return {
      paragraphs: paragraphs,
}
}


class App extends Component {
  render() {

    let data = getData();
    let words = [].concat.apply([], data.paragraphs);

    return (
      <Provider store={createStore(selectWord)}>
        <div className="MyApp">
          <Navbar />
          <Container>
            <Article paragraphs={data.paragraphs}/>
          </Container>
          <WordList words={words}/>
        </div>
      </Provider>
    );
  }
}

export default App;

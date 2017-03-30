import React, { Component } from 'react'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Navbar from './components/Navbar'
import Article from './components/Article'
import Container from './components/Container'
import WordDetail from './components/WordDetail'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <div className="MyApp">
          <Navbar />
          <Container>
            <Article />
          </Container>
          <WordDetail />
        </div>
      </Provider>
    );
  }
}

export default App;

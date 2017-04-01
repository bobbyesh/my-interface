import React, { Component } from 'react'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Navbar from './components/Navbar'
import Article from './components/Article'
import Container from './components/Container'
import WordDetail from './components/WordDetail'


var styles = {
    div: {
      fontFamily: 'Raleway sans-serif',
    },
}

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <div className="MyApp" style={styles.div}>
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

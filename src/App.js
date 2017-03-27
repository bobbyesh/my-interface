import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Article from './components/Article'
import Container from './components/Container'

class App extends Component {
  render() {

    return (
      <div className="MyApp">
        <Navbar />
        <Container>
          <Article />
        </Container>
      </div>
    );
  }
}

export default App;

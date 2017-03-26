import React, { Component } from 'react';
import Navbar from './Navbar';
import Article from './Article';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Article />
        </Container>

      </div>
    );
  }
}

export default App;

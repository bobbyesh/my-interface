import React, { Component } from 'react';
import Navbar from './Navbar';
import Article from './Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Article />
      </div>
    );
  }
}

export default App;

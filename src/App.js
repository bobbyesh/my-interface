import React, { Component } from 'react'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Article from './components/Article'
import Container from './components/Container'
import WordDetail from './components/WordDetail'
import Account from './components/Account'

var styles = {
    div: {
      fontFamily: 'Raleway sans-serif',
    },
}

class App extends Component {
  render() {
    var displayed = null
    if (this.props.displayed === 'article') {
      displayed =  <Article />
    } else if (this.props.displayed === 'account'){
      displayed = <Account />
    } else {
      displayed = null
    }

    console.log(displayed)

    return (
        <div className="MyApp" style={styles.div}>
          <Navbar />
          <Container>
            {displayed}
          </Container>
          <WordDetail />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayed: state.articles.displayed,
  }
}

export default connect(mapStateToProps, null)(App);

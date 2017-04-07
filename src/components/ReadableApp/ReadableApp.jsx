import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Article from './Article'
import Container from './Container'
import WordDetail from './WordDetail'
import Account from './Account'

var styles = {
    div: {
      fontFamily: 'Raleway sans-serif',
    },
}

class ReadableApp extends Component {
  render() {
    var displayed = null
    if (this.props.displayed === 'article') {
      displayed =  <Article />
    } else if (this.props.displayed === 'account'){
      displayed = <Account />
    } else {
      displayed = null
    }

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

export default connect(mapStateToProps, null)(ReadableApp);

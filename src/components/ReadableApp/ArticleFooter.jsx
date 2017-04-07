import React, { Component } from 'react'

class ArticleFooter extends Component {
  render() {
    return (
      <footer>
        <p className="text-left">
          <small className="text-muted">Link  |  <a href={this.props.link}>{this.props.link}</a></small>
        </p>
      </footer>
    )
  }
}

export default ArticleFooter;

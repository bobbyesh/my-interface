import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="container">
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li className="active">About</li>
        </ol>

        <div className="row">
          <article className="col-sm-12 col-md-12">
            <header className="page-header">
              <h1 className="page-title">About</h1>
            </header>
            <h3>The Purpose Of Readable</h3>
            <p>	After studying Mandarin Chinese for 5 years, I came to favor some tools over others, and to have strong
              opinions on the way I learn languages.  The problem with the tools, though, is that they do not fully support
              a natural, exposure-based approach to learning.  Or if they do, they are missing features that I found to be
              crucial.
            </p>
            <p>Readable is meant to be my remedy for that.</p>
          </article>
        </div>
      </div>
    )
  }
}

export default About

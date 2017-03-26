import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
            <div className="col-md-10 float-left">
              {this.props.children}
            </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

export default Container;

import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">Modua</a>
              </div>

              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-trash"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-cog"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-bookmark"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-home"></span></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;

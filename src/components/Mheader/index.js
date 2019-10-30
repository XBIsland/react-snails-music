import React, { Component } from "react";
import "./style.styl";

class Mheader extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <h1 className="text">Snails Music</h1>
        <div className="search">
          <i className="iconfont">&#xe69d;</i>
        </div>
      </div>
    )
  }
}

export default Mheader;

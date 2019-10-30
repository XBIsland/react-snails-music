import React, { Component } from "react";
import "./style.styl";

class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state={
      imageUrl: ''
    }
  }
  

  render() {
    return (
      <div className="recommend">
        <div className="music-list">
          <div className="back">
            <i className="iconfont">&#xe61e;</i>
          </div>
          <h1 className="title">每日推荐</h1>
          <div className="bg-image"></div>
        </div>
      </div>
    );
  }
}

export default Recommend;

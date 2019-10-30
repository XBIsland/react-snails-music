import React, { Component, Fragment } from "react";
import { WingBlank, Icon } from "antd-mobile";

// class Recommend extends Component {
//   render
// }

class Recommend extends Component {
  loadingIcon () {
    const { beforePullDown, isPullingDown } = this.props
    if (beforePullDown) {
      return <span className="iconfont down">&#xe6aa;</span>;
    }
    return (
      <Fragment>
        <Icon
          type="loading"
          className={isPullingDown ? "loading active" : "loading"}
        />
        <Icon
          type="check"
          className={isPullingDown ? "check" : "check active"}
        />
      </Fragment>
    );
  }

  initCount (num) {
    let numStr = num.toString()
    if (numStr.length < 5) return numStr
    if (numStr.length <= 8) {
      return `${numStr.slice(0, (numStr.length - 4))}万`
    }
    if (numStr.length > 8) {
      let decimal = numStr.substring(numStr.length - 8, numStr.length - 7)
      return `${numStr.slice(0, (numStr.length - 7))}.${decimal}亿`
    }
  }

  render () {
    const { CONTENT_TITLE, CONTENT_BTN, songList } = this.props;
    return (
      <WingBlank className="content">
        <div className="pulling-down-wrapper">{this.loadingIcon()}</div>
        <div className="content-item">
          <div className="content-header">
            <h1 className="title">{CONTENT_TITLE}</h1>
            <div className="link-btn">{CONTENT_BTN}</div>
          </div>
          <div className="content-list">
            {songList.map(item => (
              <div className="song-list" key={item.id}>
                <div className="img-wrapper">
                  <div className="top">
                    <i
                      className="iconfont"
                      dangerouslySetInnerHTML={{ __html: '&#xe631;' }} />
                    {this.initCount(item.playCount)}
                  </div>
                  <img width="100%" src={item.picUrl} alt="" />
                </div>
                <span className="text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </WingBlank>
    );
  }
}

export default Recommend;

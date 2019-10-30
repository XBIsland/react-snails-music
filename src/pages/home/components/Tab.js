import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Tab extends Component {
  render() {
    return (
      <div className="tab">
        {this.props.tab.map(item => (
          <div className="tab-item" key={item.icon}>
            <Link to={item.path}>
              <span className="icon">
                <i
                  className="iconfont"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              </span>
            </Link>
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Tab);

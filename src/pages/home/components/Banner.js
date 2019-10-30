import React, { Component } from "react";
import { WingBlank, Carousel } from "antd-mobile";

class Banner extends Component {
  render() {
    // console.log("1");
    return (
      <WingBlank>
        <Carousel
          className="aadd"
          infinite
          autoplay={true}
          style={{ touchAction: "none",height: 0, paddingBottom: 134 }}
        >
          {this.props.banners.map((item, index) => {
            return (
              <div
                className="banner"
                key={item.bannerId + index}
                style={{ height: this.props.imgHeight }}
              >
                <img
                  className="banner-img"
                  src={item.pic}
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    window.dispatchEvent(new Event("resize"));
                    this.props.changeHeight("auto");
                  }}
                  alt=""
                />
                <span className={`tag ${item.titleColor}`}>
                  {item.typeTitle}
                </span>
              </div>
            );
          })}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner;

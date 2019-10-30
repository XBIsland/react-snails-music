import React, { Component } from "react";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import Recommend from "./components/Recommend";
// import { Link } from "react-router-dom";
// import { WingBlank, Icon } from "antd-mobile";
import "./style.styl";
import BScroll from "better-scroll";
import { shuffle } from "../../until/until";
import { getBanner, getSongList } from "../../request/api/home";

const CONTENT_TITLE = "推荐歌单";
const CONTENT_BTN = "歌单广场";

class Home extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.wrapperBs = null;
    this.state = {
      loadind: false,
      beforePullDown: true,
      isPullingDown: false,
      banners: [],
      imgHeight: 134,
      tab: [
        {
          text: "每日推荐",
          icon: "&#xe61c;",
          path: "/recommend"
        },
        {
          text: "歌单",
          icon: "&#xe61b;",
          path: "/songlist"
        },
        {
          text: "歌手",
          icon: "&#xe617;",
          path: "/singer"
        },
        {
          text: "排行榜",
          icon: "&#xe61d;",
          path: "/rank"
        }
      ],
      songList: []
    };
    this.changeHeight = this.changeHeight.bind(this);
    this.pullingDownHandler = this.pullingDownHandler.bind(this);
    this.finishPullDown = this.finishPullDown.bind(this);
  }

  async componentDidMount () {
    getBanner().then(res => {
      if (res.data.code === 200) {
        let list = res.data.banners;
        this.setState(() => ({
          banners: list
        }));
      }
    });
    let result = await getSongList({ limit: 9 });
    if (result.length === 0) return;
    this.setState(() => ({
      songList: shuffle(result).slice(0, 9)
    }));
    setTimeout(() => {
      this._initScroll();
    }, 20);
  }
  // 初始化BS,绑定，监听相关事件
  _initScroll () {
    if (!this.wrapper.current) {
      return;
    }
    this.wrapperBs = new BScroll(this.wrapper.current, {
      click: true,
      probeType: 1,
      pulldown: true,
      pullDownRefresh: {
        threshold: 30
      }
    });
    this.wrapperBs.on("pullingDown", this.pullingDownHandler);
  }

  changeHeight (value) {
    this.setState(() => ({
      imgHeight: value
    }));
  }

  async pullingDownHandler () {
    this.setState(() => ({
      beforePullDown: false,
      isPullingDown: true
    }));

    let result = await getSongList({ limit: 9 });
    if (result.length === 0) return;
    this.setState(() => ({
      songList: shuffle(result).slice(0, 9)
    }));
    setTimeout(() => {
      this.setState(() => ({
        isPullingDown: false
      }));
      this.finishPullDown();
    }, 500);
  }
  // BS标识一次下拉动作结束
  finishPullDown () {
    setTimeout(() => {
      this.wrapperBs.finishPullDown();
      setTimeout(() => {
        this.setState(() => ({
          beforePullDown: true
        }));
      }, 600);
    }, 300);
  }

  render () {
    const { beforePullDown, isPullingDown, songList } = this.state;
    return (
      <div className="home">
        <Banner
          banners={this.state.banners}
          imgHeight={this.state.imgHeight}
          changeHeight={this.changeHeight}
        />
        <Tab tab={this.state.tab} />
        <div className="wrapper" ref={this.wrapper}>
          <Recommend
            CONTENT_TITLE={CONTENT_TITLE}
            CONTENT_BTN={CONTENT_BTN}
            beforePullDown={beforePullDown}
            isPullingDown={isPullingDown}
            songList={songList}
          />
        </div>
      </div>
    );
  }
}

export default Home;

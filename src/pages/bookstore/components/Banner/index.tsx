import Taro, { PureComponent } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';

import './index.less';

interface Props {
  banners: any[];
  check: boolean;
}

class Banner extends PureComponent<Props> {
  static defaultProps = {
    banners: [],
    check: false
  };

  config = {
    navigationBarTitleText: ''
  };

  state = {
    current: 0
  };

  componentWillMount() {}
  componentDidMount() {}

  handleSwiperChange = e => {
    this.setState({
      current: e.detail.current
    });
  };

  handleClick = ({ target }) => {
    const id = target.dataset.id;
    const title = target.dataset.title;
    if (!id) return;
    Taro.navigateTo({
      url: this.props.check
        ? '/pages/book_detail/index'
        : `/pages/rich_content/index?title=${title}&url=${`https://classics.oss-cn-beijing.aliyuncs.com/articles/contents/${id}.html`}`
    });
  };

  render() {
    const { current } = this.state;
    const { banners } = this.props;

    return (
      <Swiper
        className="banner"
        previousMargin="40rpx"
        nextMargin="40rpx"
        duration={450}
        interval={10000}
        circular
        autoplay
        onChange={this.handleSwiperChange}
        onClick={this.handleClick}
      >
        {banners.map((item, index) => (
          <SwiperItem className="banner__item" key={item._id}>
            <Image
              className={`${index === current ? 'banner__item-active' : undefined} item__content`}
              mode="aspectFill"
              src={item.bannerImg}
              data-title={item.title}
              data-id={item._id}
            ></Image>
          </SwiperItem>
        ))}
      </Swiper>
    );
  }
}
export default Banner;

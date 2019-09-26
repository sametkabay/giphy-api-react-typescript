import React from 'react';
import TrendingStore from '../../Stores/trending';
import { Row, Col } from 'antd';
import TrendingModel from '../../Models/trendingModel';

export interface TrendingProps {}

export interface TrendingState {
  trendingValue: TrendingModel[];
  offset: number;
}

const queryCapacity: number = 20;
class Trending extends React.Component<TrendingProps, TrendingState> {
  constructor(props: TrendingProps) {
    super(props);
    this.state = { trendingValue: [], offset: 0 };
  }

  async componentDidMount() {
    var result: TrendingModel[] = await TrendingStore.getTrendingValue(0, queryCapacity);
    const { trendingValue } = this.state;
    Object.assign(trendingValue, result);
    this.setState({ trendingValue });

    //Scroll add event lister
    window.addEventListener('scroll', event => {
      var maxScrollValue = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrollValue = document.documentElement.scrollTop;

      maxScrollValue === scrollValue && this.getValue(this.state.offset + queryCapacity);
    });
  }
  async getValue(offset: number) {
    var result: TrendingModel[] = await TrendingStore.getTrendingValue(offset, queryCapacity);
    const { trendingValue } = this.state;
    result.forEach(value => trendingValue.push(value));
    this.setState({ trendingValue, offset });
  }

  render() {
    return (
      <Row className="search-gif-container">
        {this.state.trendingValue.map((value, index) => {
          return (
            <Col className="single-gif-container" span={12}>
              <div
                style={{ backgroundImage: 'url(' + value.safeUrl + ')' }}
                key={index}
                className="gif"
                onClick={() => (window.location.href = value.url)}
              ></div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Trending;

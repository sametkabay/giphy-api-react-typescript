import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import './index.scss';
import SearchStore from '../../Stores/search';
import SearchModel from '../../Models/searchModel';

export interface SearchProps {}

export interface SearchState {
  q: string;
  offset: number;
  searchValue: SearchModel[];
  moreButtonDisabled: boolean;
}

const queryCapacity: number = 20;
class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { q: '', searchValue: [], offset: 0, moreButtonDisabled: false };
  }

  async onSearch(q: string) {
    this.setState({ searchValue: [], offset: 0, moreButtonDisabled: false });
    let searchValue: SearchModel[] = [];
    var result = await SearchStore.getSearchValue(q, 0, queryCapacity);
    result.length < queryCapacity && this.setState({ moreButtonDisabled: true });
    Object.assign(searchValue, result);
    this.setState({ searchValue, q });
  }

  async loadMore(offset: number) {
    let { searchValue } = this.state;
    var result = await SearchStore.getSearchValue(this.state.q, offset, queryCapacity);
    result.length < queryCapacity && this.setState({ moreButtonDisabled: true });
    result.forEach(value => searchValue.push(value));
    this.setState({ searchValue, offset: this.state.offset + queryCapacity });
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="search-input" span={24}>
            <Input.Search
              size={'large'}
              placeholder="search gif..."
              onSearch={value => this.onSearch(value)}
              enterButton
            />
          </Col>

          <Row className="search-gif-container">
            {this.state.searchValue.map((value, index) => {
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
          {this.state.searchValue.length > 0 && (
            <Row>
              <Col className={'load-more-button-container'} span={24}>
                <Button
                  disabled={this.state.moreButtonDisabled}
                  onClick={() => this.loadMore(this.state.offset + this.state.searchValue.length)}
                >
                  Load More
                </Button>
              </Col>
            </Row>
          )}
        </Row>
      </div>
    );
  }
}

export default Search;

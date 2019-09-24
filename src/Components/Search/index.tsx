import React from 'react';
import { Row, Col, Input } from 'antd';
import './index.scss';

export interface SearchProps {}

export interface SearchState {}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { q: '' };
  }
  render() {
    return (
      <div>
        <Row>
          <Col className="search-input" span={24}>
            <Input.Search
              size={'large'}
              placeholder="search gif..."
              onSearch={value => console.log(value)}
              enterButton
            />
          </Col>

          <Row className="search-gif-container">
            <Col className="gif" span={12}>
              <img
                alt="gif"
                src="https://media1.giphy.com/media/vbf8Tx7TChZEA/200.webp?cid=790b7611306c2709d81850fbc27de7eee22f50804448e7d7&rid=200.webp"
              ></img>
            </Col>
            <Col className="gif" span={12}>
              <img
                alt="gif"
                src="https://media1.giphy.com/media/vbf8Tx7TChZEA/200.webp?cid=790b7611306c2709d81850fbc27de7eee22f50804448e7d7&rid=200.webp"
              ></img>
            </Col>
            <Col className="gif" span={12}>
              <img
                alt="gif"
                src="https://media1.giphy.com/media/vbf8Tx7TChZEA/200.webp?cid=790b7611306c2709d81850fbc27de7eee22f50804448e7d7&rid=200.webp"
              ></img>
            </Col>
            <Col className="gif" span={12}>
              <img
                alt="gif"
                src="https://media1.giphy.com/media/vbf8Tx7TChZEA/200.webp?cid=790b7611306c2709d81850fbc27de7eee22f50804448e7d7&rid=200.webp"
              ></img>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default Search;

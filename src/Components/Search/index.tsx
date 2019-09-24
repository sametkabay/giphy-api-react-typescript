import React from "react";

export interface SearchProps {}

export interface SearchState {}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { q: "" };
  }
  render() {
    return <>Search</>;
  }
}

export default Search;

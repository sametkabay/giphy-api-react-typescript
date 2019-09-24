import React from 'react';

export interface DefaultLayoutProps {}

export interface DefaultLayoutState {}

class DefaultLayout extends React.Component<DefaultLayoutProps, DefaultLayoutState> {
  constructor(props: DefaultLayoutProps) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Header</header>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;

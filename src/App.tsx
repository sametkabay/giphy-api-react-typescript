import React from 'react';
import './App.scss';
import Trending from './Components/Trending';
import Search from './Components/Search';
import { Radio } from 'antd';

enum SelectedComponent {
  Search = 'search',
  Trending = 'trending',
}

interface AppProps {}
interface AppState {
  selectedComponent: SelectedComponent;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      selectedComponent: SelectedComponent.Search,
    };
  }

  getSelectedComponent = (component: SelectedComponent) => {
    switch (component) {
      case SelectedComponent.Search:
        return <Search />;
      case SelectedComponent.Trending:
        return <Trending />;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="component-selector-container">
          <Radio.Group
            onChange={e => this.setState({ selectedComponent: e.target.value })}
            defaultValue={this.state.selectedComponent}
            buttonStyle="solid"
          >
            <Radio.Button value={SelectedComponent.Search}>Search</Radio.Button>
            <Radio.Button value={SelectedComponent.Trending}>Trending</Radio.Button>
          </Radio.Group>
        </div>
        {this.getSelectedComponent(this.state.selectedComponent)}
      </div>
    );
  }
}

export default App;

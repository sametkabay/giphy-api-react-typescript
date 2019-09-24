import React from 'react';
import logo from './logo.svg';
import './App.css';
import Trending from './Components/Trending';
import Search from './Components/Search';

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
      selectedComponent: SelectedComponent.Trending,
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
    return <div className="App">{this.getSelectedComponent(this.state.selectedComponent)}</div>;
  }
}

export default App;

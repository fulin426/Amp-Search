import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'

import Categories from "./components/Category";
import SearchBar from "./components/SearchBar";
import ShowResults from "./components/ShowResults";
class App extends React.Component {

  render() {
    
    return (
      <Provider store={store}> 
        <div className="App">
          <SearchBar />
          <Categories />
          <ShowResults />
        </div>
      </Provider>     
    );
  }
}

export default App;

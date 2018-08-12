import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Categories from "./components/Category";
import SearchBar from "./components/SearchBar";
import store from './store/store';
import './index.css'

class App extends React.Component {

  render() {
    
    return (
      <Provider store={store}> 
        <div className="App">
          <SearchBar onSubmit={this.onFormSubmit} />
          <Categories />
        </div>
      </Provider>     
    );
  }
}

export default App;
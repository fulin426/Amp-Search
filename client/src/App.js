import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Categories from "./components/Category";
import SearchBar from "./components/SearchBar";
import store from './store/store';

class App extends React.Component {

  render() {
    
    return (
      <Provider store={store}> 
        <div>
          <SearchBar onSubmit={this.onFormSubmit} />
          <Categories />
        </div>
      </Provider>     
    );
  }
}

export default App;
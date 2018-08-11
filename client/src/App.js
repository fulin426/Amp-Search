import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Client from "./Client";
import Categories from "./components/Category";
import SearchBar from "./components/SearchBar";
import store from './store/store';

class App extends React.Component {

  render() {
/*    const returned = this.state.returned;
    let Categories;

    if (returned === true) {
      Categories = this.state.items.map((category, index) =>
        <li key={index}>
          <Category {...category} />
        </li>
      );
    }*/

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
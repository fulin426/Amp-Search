/*import React, { Component } from "react";
import SelectedFoods from "./SelectedFoods";
import FoodSearch from "./FoodSearch";

class App extends Component {
  state = {
    selectedFoods: []
  };

  removeFoodItem = itemIndex => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedFoods: filteredFoods });
  };

  addFood = food => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  };

  render() {
    const { selectedFoods } = this.state;

    return (
      <div className="App">
        <div className="ui text container">
          <SelectedFoods
            foods={selectedFoods}
            onFoodClick={this.removeFoodItem}
          />
          <FoodSearch onFoodClick={this.addFood} />
        </div>
      </div>
    );
  }
}
*/
import React, { Component } from "react";
import Client from "./Client";
/*import Request from 'superagent';*/
/*import convert from 'xml-js';*/
/*import SearchBar from "./SearchBar";*/

class App extends Component {
  
  constructor() {
    super();
    this.state = {jobs: []};

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    /*const url = `http://careers.stackoverflow.com/jobs/feed?location=${query}`;*/
  
    Client.search(query, jobs => {
    this.setState({
      jobs: jobs
      });
    });
  };

  render() {
    return(
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input
              placeholder='Enter Zipcode'
              ref='zipcode'
            />
            <input 
              type="submit" 
              value="Search" 
            />
          </form>
        </div>
    );
  }
}

export default App;

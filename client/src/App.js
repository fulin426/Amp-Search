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
import React from "react";
import Client from "./Client";
import Category from "./Category";
/*import SearchBar from "./SearchBar";*/

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

/*  componentWillMount() {
    let query = 94112;
    Client.search(query, jobs => {
      this.setState({
        jobs: jobs,
        returned: true
        });
      });
  }*/

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    Client.search(query, jobs => {
      this.setState({
        jobs: jobs,
        returned: true
      });
    });
  };

  render() {
    const returned = this.state.returned;
    let Categories;

    if (returned === true) {
      Categories = this.state.jobs.rss.channel.item[0].category.map((category, index) =>
        <li key={index}>
          <Category {...category} />
        </li>
      );
    console.log(Categories);
    } else {
      let Categories = '';
    }

    return (
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
          <div>
            <ul>{Categories}</ul>
          </div>
        </div>
    );
  }
}

export default App;

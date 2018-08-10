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
    this.state = {  returned:false };
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillMount() {
    let query = 'San Jose';
    Client.search(query, jobs => {
      this.setState({
        jobs: jobs,
        returned: true
        });
      });
  }

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
    let skillsObj = {};
    let sortable = [];

    if (returned === true) {
      let Arry = [];
      this.state.jobs.rss.channel.item.forEach(item => 
        Arry = Arry.concat(item.category)
      );
    
    for (let i=0; i<Arry.length; i++) {
      if (skillsObj[Arry[i]._text]) {
        skillsObj[Arry[i]._text]++;
      } else {
        skillsObj[Arry[i]._text] = 1
      }
    }  

    let sortable = [];
      for (let skill in skillsObj) {
        sortable.push([skill, skillsObj[skill]]);
      }

    sortable.sort(function(a,b) {
      return b[1]-a[1];
    });

    console.log(sortable);

      /*this.state.jobs.rss.channel.item[0].category*/
      Categories = Arry.map((category, index) =>
        <li key={index}>
          <Category {...category} />
        </li>
      );
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

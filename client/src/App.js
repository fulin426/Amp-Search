import React, { Component } from "react";
import Request from "superagent";
import convert from 'xml-js';
/*import SearchBar from "./SearchBar";*/

class App extends Component {
  
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {

  }

  onFormSubmit = (e) => {
    let query = this.refs.zipcode.value;
    const url = `http://careers.stackoverflow.com/jobs/feed?location=${query}`;
    
    Request.get(url).then(response => {
      this.setState({
        results: response
      });
    });
    e.preventDefault();
  };





  render() {
    return(
        <div>
          <form onSubmit={this.onFormSubmit.bind(this)}>
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
